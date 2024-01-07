import { Component, OnInit } from '@angular/core';
import { Thesis } from '../models/thesis';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';

@Component({
  selector: 'app-fetch-thesis',
  templateUrl: './fetch-thesis.component.html',
  styleUrls: ['./fetch-thesis.component.scss'],
})
export class FetchThesisComponent implements OnInit {
  public theses: Thesis[] = [];
  keyword: string = '';

  constructor(private thesisManagementSystemService: ThesisManagementSystemService) {}

  ngOnInit(): void {
    this.getTheses();
  }
  
  getTheses(): void {
    this.thesisManagementSystemService
      .getThesisList()
      .subscribe((thesisData) => (this.theses = thesisData));
  }

  delete(id: number): void {
    const ans = confirm(
      'Do you want to delete the thesis with Id: ' + id
    );
    if (ans) {
      this.thesisManagementSystemService.deleteThesis(id).subscribe(
        () => {
          this.getTheses();
        },
        (error) => console.error(error)
      );
    }
  }
  shortenText(text: string): string {
    const maxLength = 60;

    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }

    return text;
  }
  searchThesis(keyword: string): void {
    if (keyword == '') {
      this.getTheses();
      return;
    }
    this.thesisManagementSystemService
      .getThesisListWithKeyword(keyword)
      .subscribe((thesisData) => (this.theses = thesisData));
  }
}
