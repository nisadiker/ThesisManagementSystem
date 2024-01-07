import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Institute } from '../models/institute';
import { Thesis } from '../models/thesis';
import { University } from '../models/university';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';
import { Person } from '../models/person';


@Component({
  selector: 'app-add-thesis',
  templateUrl: './add-thesis.component.html',
  styleUrls: ['./add-thesis.component.scss'],
})
export class AddThesisComponent implements OnInit {
  public universities: University[] = [];
  public institutes: Institute[] = [];
  public persons: Person[] = [];
  thesisForm: FormGroup;
  title = 'Create';
  thesisId: number = 0;
  errorMessage: any;
  submitted = false;



  constructor(
    private fb: FormBuilder,
    private avRoute: ActivatedRoute,
    private thesisManagementSystemService: ThesisManagementSystemService,
    private router: Router,
    private datepipe: DatePipe
  ) {

    this.thesisForm = this.fb.group({
      thesisId: 0,
      title: ['', [Validators.required]],
      universityId: ['', [Validators.required]], 
      instituteId: ['', [Validators.required]], 
      abstract: ['', [Validators.required]],
      submissionDate: ['', [Validators.required]],
      thesisYear: ['', [Validators.required]],
      thesisType: ['', [Validators.required]],
      numberOfPages: ['', [Validators.required]],
      thesisLanguage: ['', [Validators.required]],
      authorId: ['', [Validators.required]],
      supervisorId: ['', [Validators.required]],
      cosupervisorId: '',
    });
  }



  ngOnInit(): void {
    this.getUniversities();
    this.getPersons();

    this.avRoute.paramMap.subscribe((params: Params) => {
      this.thesisId = params.get('id');
    });

    if (this.thesisId > 0) {
      this.title = 'Edit';

      this.thesisManagementSystemService.getThesisData(this.thesisId).subscribe(
        (response: Thesis) => {
          this.getInstitutes(response.universityId);
          this.thesisForm.setValue(
            {
              thesisId: response.thesisId,
              title: response.title,
              universityId: response.universityId,
              instituteId: response.instituteId,
              abstract: response.abstract,
              submissionDate: this.datepipe.transform(response.submissionDate, 'yyyy-MM-dd'),
              thesisYear: response.thesisYear,
              thesisType: response.thesisType,
              numberOfPages: response.numberOfPages,
              thesisLanguage: response.thesisLanguage,
              authorId: response.authorId,
              supervisorId: response.supervisorId,
              cosupervisorId: response.cosupervisorId == null ? '' : response.cosupervisorId
            });
        },
        (error) => console.error(error)
      );
      
    }
  }

  onUniversitySelectChange(event: any) {
    // You can access the selected value using event.target.value
    const selectedValue = event.target.value;

    // Call your method or perform actions based on the selected value
    this.getInstitutes(selectedValue);
  }

  getUniversities(): void {
    this.thesisManagementSystemService
      .getUniversityList()
      .subscribe((universityData) => (this.universities = universityData));
  }
  getPersons(): void {
    this.thesisManagementSystemService
      .getPersonList()
      .subscribe((data) => (this.persons = data));
  }

  getInstitutes(universityId: number): void {
    this.thesisManagementSystemService
      .getInstituteListForUniversity(universityId)
      .subscribe((instituteData) => (this.institutes = instituteData));
  }

  get registerFormControl() {
    return this.thesisForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.thesisForm.valid) {
      return;
    }

    if (this.thesisId > 0) {
      this.updateThesis();
    } else {
      this.addThesis();
    }
  }

  cancel(): void {
    this.navigateToFetchThesis();
  }

  private addThesis(): void {
    this.thesisForm.value.cosupervisorId = this.thesisForm.value.cosupervisorId == '' ? null : this.thesisForm.value.cosupervisorId;
    this.thesisManagementSystemService.saveThesis(this.thesisForm.value).subscribe(
      () => {
        this.navigateToFetchThesis();
      },
      (error) => console.error(error)
    );
    
  }

  private updateThesis(): void {
    this.thesisForm.value.cosupervisorId = this.thesisForm.value.cosupervisorId == '' ? null : this.thesisForm.value.cosupervisorId;
    this.thesisManagementSystemService.updateThesis(this.thesisForm.value).subscribe(
      () => {
        this.navigateToFetchThesis();
      },
      (error) => console.error(error)
    );
  }

  private navigateToFetchThesis() {
    this.router.navigate(['/fetch-thesis']);
  }
}
