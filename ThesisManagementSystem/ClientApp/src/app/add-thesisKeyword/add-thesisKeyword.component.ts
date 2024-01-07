import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ThesisKeyword } from '../models/thesisKeyword';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';


@Component({
  selector: 'app-add-thesisKeyword',
  templateUrl: './add-thesisKeyword.component.html',
  styleUrls: ['./add-thesisKeyword.component.scss'],
})
export class AddThesisKeywordComponent implements OnInit {
  thesisKeywordForm: FormGroup;
  title = 'Create';
  keywordId: number = 0;
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
      this.keywordId = params.get('id');
      this.thesisId = params.get('thesisId');
    });

    this.thesisKeywordForm = this.fb.group({
      keywordId: 0,
      keyword: ['', [Validators.required]],
      thesisId: this.thesisId
    });
  }

  ngOnInit(): void {


    if (this.keywordId > 0) {
      this.title = 'Edit';

      this.thesisManagementSystemService.getThesisKeywordData(this.keywordId).subscribe(
        (response: ThesisKeyword) => {
          this.thesisKeywordForm.setValue(
            {
              keywordId: response.keywordId,
              keyword: response.keyword,
              thesisId: response.thesisId
            });
        },
        (error) => console.error(error)
      );
      
    }
  }

  get registerFormControl() {
    return this.thesisKeywordForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.thesisKeywordForm.valid) {
      return;
    }

    if (this.keywordId > 0) {
      this.updateThesisKeyword();
    } else {
      this.addThesisKeyword();
    }
  }

  cancel(): void {
    this.navigateToFetchThesisKeyword();
  }

  private addThesisKeyword(): void {
    
    this.thesisManagementSystemService.saveThesisKeyword(this.thesisKeywordForm.value).subscribe(
      () => {
        this.navigateToFetchThesisKeyword();
      },
      (error) => console.error(error)
    );
    
  }

  private updateThesisKeyword(): void {
    this.thesisManagementSystemService.updateThesisKeyword(this.thesisKeywordForm.value).subscribe(
      () => {
        this.navigateToFetchThesisKeyword();
      },
      (error) => console.error(error)
    );
  }

  private navigateToFetchThesisKeyword() {
    this.router.navigate(['/fetch-thesisKeyword', this.thesisId]);
  }
}
