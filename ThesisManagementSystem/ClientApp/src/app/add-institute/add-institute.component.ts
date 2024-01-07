import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Institute } from '../models/institute';
import { University } from '../models/university';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';


@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.scss'],
})
export class AddInstituteComponent implements OnInit {
  public universities: University[] = [];
  instituteForm: FormGroup;
  title = 'Create';
  instituteId: number = 0;
  errorMessage: any;
  submitted = false;



  constructor(
    private fb: FormBuilder,
    private avRoute: ActivatedRoute,
    private thesisManagementSystemService: ThesisManagementSystemService,
    private router: Router
  ) {

    this.instituteForm = this.fb.group({
      instituteId: 0,
      instituteName: ['', [Validators.required]],
      universityId: ['', [Validators.required]],
      
    });
  }



  ngOnInit(): void {
    this.getUniversities();

    this.avRoute.paramMap.subscribe((params: Params) => {
      this.instituteId = params.get('id');
    });

    if (this.instituteId > 0) {
      this.title = 'Edit';

      this.thesisManagementSystemService.getInstituteData(this.instituteId).subscribe(
        (response: Institute) => {
          this.instituteForm.setValue(
            {
              instituteId: response.instituteId,
              instituteName: response.instituteName,
              universityId: response.universityId
            });
        },
        (error) => console.error(error)
      );
      
    }
  }

  getUniversities(): void {
    this.thesisManagementSystemService
      .getUniversityList()
      .subscribe((universityData) => (this.universities = universityData));
  }

  get registerFormControl() {
    return this.instituteForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.instituteForm.valid) {
      return;
    }

    if (this.instituteId > 0) {
      this.updateInstitute();
    } else {
      this.addInstitute();
    }
  }

  cancel(): void {
    this.navigateToFetchInstitute();
  }

  private addInstitute(): void {
    
    this.thesisManagementSystemService.saveInstitute(this.instituteForm.value).subscribe(
      () => {
        this.navigateToFetchInstitute();
      },
      (error) => console.error(error)
    );
    
  }

  private updateInstitute(): void {
    this.thesisManagementSystemService.updateInstitute(this.instituteForm.value).subscribe(
      () => {
        this.navigateToFetchInstitute();
      },
      (error) => console.error(error)
    );
  }

  private navigateToFetchInstitute() {
    this.router.navigate(['/fetch-institute']);
  }
}
