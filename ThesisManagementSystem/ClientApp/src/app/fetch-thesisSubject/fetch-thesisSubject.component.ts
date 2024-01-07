import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThesisSubject } from '../models/thesisSubject';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';

@Component({
  selector: 'app-fetch-thesisSubject',
  templateUrl: './fetch-thesisSubject.component.html',
  styleUrls: ['./fetch-thesisSubject.component.scss'],
})
export class FetchThesisSubjectComponent implements OnInit {
  thesisId: number = 0;
  public thesisSubjects: ThesisSubject[] = [];

  constructor(
    private thesisManagementSystemService: ThesisManagementSystemService,
    private avRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.avRoute.paramMap.subscribe((params: Params) => {
      this.thesisId = params.get('id');
    });
    this.getThesisSubjects();
  }
  
  getThesisSubjects(): void {
    this.thesisManagementSystemService
      .getThesisSubjectListForThesis(this.thesisId)
      .subscribe((thesisSubjectData) => (this.thesisSubjects = thesisSubjectData));
  }

  delete(id: number): void {
    const ans = confirm(
      'Do you want to delete the thesisSubject with Id: ' + id
    );
    if (ans) {
      this.thesisManagementSystemService.deleteThesisSubject(id).subscribe(
        () => {
          this.getThesisSubjects();
        },
        (error) => console.error(error)
      );
    }
  }
}
