import { Component, OnInit } from '@angular/core';
import { University } from '../models/university';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';

@Component({
  selector: 'app-fetch-university',
  templateUrl: './fetch-university.component.html',
  styleUrls: ['./fetch-university.component.scss'],
})
export class FetchUniversityComponent implements OnInit {
  public universities: University[] = [];

  constructor(private thesisManagementSystemService: ThesisManagementSystemService) {}

  ngOnInit(): void {
    this.getUniversities();
  }
  
  getUniversities(): void {
    this.thesisManagementSystemService
      .getUniversityList()
      .subscribe((universityData) => (this.universities = universityData));
  }

  delete(id: number): void {
    const ans = confirm(
      'Do you want to delete the university with Id: ' + id
    );
    if (ans) {
      this.thesisManagementSystemService.deleteUniversity(id).subscribe(
        () => {
          this.getUniversities();
        },
        (error) => console.error(error)
      );
    }
  }
}
