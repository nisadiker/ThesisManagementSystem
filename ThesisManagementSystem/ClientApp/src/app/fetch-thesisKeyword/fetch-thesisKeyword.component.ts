import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ThesisKeyword } from '../models/thesisKeyword';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';

@Component({
  selector: 'app-fetch-thesisKeyword',
  templateUrl: './fetch-thesisKeyword.component.html',
  styleUrls: ['./fetch-thesisKeyword.component.scss'],
})
export class FetchThesisKeywordComponent implements OnInit {
  thesisId: number = 0;
  public thesisKeywords: ThesisKeyword[] = [];

  constructor(
    private thesisManagementSystemService: ThesisManagementSystemService,
    private avRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.avRoute.paramMap.subscribe((params: Params) => {
      this.thesisId = params.get('id');
    });
    this.getThesisKeywords();
  }
  
  getThesisKeywords(): void {
    this.thesisManagementSystemService
      .getThesisKeywordListForThesis(this.thesisId)
      .subscribe((thesisKeywordData) => (this.thesisKeywords = thesisKeywordData));
  }

  delete(id: number): void {
    const ans = confirm(
      'Do you want to delete the thesisKeyword with Id: ' + id
    );
    if (ans) {
      this.thesisManagementSystemService.deleteThesisKeyword(id).subscribe(
        () => {
          this.getThesisKeywords();
        },
        (error) => console.error(error)
      );
    }
  }
}
