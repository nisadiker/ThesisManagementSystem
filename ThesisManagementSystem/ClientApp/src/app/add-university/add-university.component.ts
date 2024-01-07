import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { University } from '../models/university';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';


@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.scss'],
})
export class AddUniversityComponent implements OnInit {
  universityForm: FormGroup;
  title = 'Create';
  universityId: number = 0;
  errorMessage: any;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private avRoute: ActivatedRoute,
    private thesisManagementSystemService: ThesisManagementSystemService,
    private router: Router
  ) {

    this.universityForm = this.fb.group({
      universityId: 0,
      universityName: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
    this.avRoute.paramMap.subscribe((params: Params) => {
      this.universityId = params.get('id');
    });

    if (this.universityId > 0) {
      this.title = 'Edit';

      this.thesisManagementSystemService.getUniversityData(this.universityId).subscribe(
        (response: University) => {
          this.universityForm.setValue(
            {
              universityId: response.universityId,
              universityName: response.universityName
            });
        },
        (error) => console.error(error)
      );
      
    }
  }

  get registerFormControl() {
    return this.universityForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.universityForm.valid) {
      return;
    }

    if (this.universityId > 0) {
      this.updateUniversity();
    } else {
      this.addUniversity();
    }
  }

  cancel(): void {
    this.navigateToFetchUniversity();
  }

  private addUniversity(): void {
    
    this.thesisManagementSystemService.saveUniversity(this.universityForm.value).subscribe(
      () => {
        this.navigateToFetchUniversity();
      },
      (error) => console.error(error)
    );
    
  }

  private updateUniversity(): void {
    this.thesisManagementSystemService.updateUniversity(this.universityForm.value).subscribe(
      () => {
        this.navigateToFetchUniversity();
      },
      (error) => console.error(error)
    );
  }

  private navigateToFetchUniversity() {
    this.router.navigate(['/fetch-university']);
  }
}
