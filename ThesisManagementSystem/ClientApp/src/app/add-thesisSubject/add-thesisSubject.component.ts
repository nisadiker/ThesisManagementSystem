import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ThesisSubject } from '../models/thesisSubject';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';


@Component({
  selector: 'app-add-thesisSubject',
  templateUrl: './add-thesisSubject.component.html',
  styleUrls: ['./add-thesisSubject.component.scss'],
})
export class AddThesisSubjectComponent implements OnInit {
  thesisSubjectForm: FormGroup;
  title = 'Create';
  subjectId: number = 0;
  thesisId: number = 0;
  errorMessage: any;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private avRoute: ActivatedRoute,
    private thesisManagementSystemService: ThesisManagementSystemService,
    private router: Router
  ) {

    this.avRoute.paramMap.subscribe((params: Params) => {
      this.subjectId = params.get('id');
      this.thesisId = params.get('thesisId');
    });

    this.thesisSubjectForm = this.fb.group({
      subjectId: 0,
      subject: ['', [Validators.required]],
      thesisId: this.thesisId
    });
  }

  ngOnInit(): void {


    if (this.subjectId > 0) {
      this.title = 'Edit';

      this.thesisManagementSystemService.getThesisSubjectData(this.subjectId).subscribe(
        (response: ThesisSubject) => {
          this.thesisSubjectForm.setValue(
            {
              subjectId: response.subjectId,
              subject: response.subject,
              thesisId: response.thesisId
            });
        },
        (error) => console.error(error)
      );
      
    }
  }

  get registerFormControl() {
    return this.thesisSubjectForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.thesisSubjectForm.valid) {
      return;
    }

    if (this.subjectId > 0) {
      this.updateThesisSubject();
    } else {
      this.addThesisSubject();
    }
  }

  cancel(): void {
    this.navigateToFetchThesisSubject();
  }

  private addThesisSubject(): void {
    
    this.thesisManagementSystemService.saveThesisSubject(this.thesisSubjectForm.value).subscribe(
      () => {
        this.navigateToFetchThesisSubject();
      },
      (error) => console.error(error)
    );
    
  }

  private updateThesisSubject(): void {
    this.thesisManagementSystemService.updateThesisSubject(this.thesisSubjectForm.value).subscribe(
      () => {
        this.navigateToFetchThesisSubject();
      },
      (error) => console.error(error)
    );
  }

  private navigateToFetchThesisSubject() {
    this.router.navigate(['/fetch-thesisSubject', this.thesisId]);
  }
}
