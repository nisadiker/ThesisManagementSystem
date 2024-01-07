import { Component, OnInit } from '@angular/core';
import { Institute } from '../models/institute';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';

@Component({
  selector: 'app-fetch-institute',
  templateUrl: './fetch-institute.component.html',
  styleUrls: ['./fetch-institute.component.scss'],
})
export class FetchInstituteComponent implements OnInit {
  public institutes: Institute[] = [];

  constructor(private thesisManagementSystemService: ThesisManagementSystemService) {}

  ngOnInit(): void {
    this.getInstitutes();
  }
  
  getInstitutes(): void {
    this.thesisManagementSystemService
      .getInstituteList()
      .subscribe((instituteData) => (this.institutes = instituteData));
  }

  delete(id: number): void {
    const ans = confirm(
      'Do you want to delete the institute with Id: ' + id
    );
    if (ans) {
      this.thesisManagementSystemService.deleteInstitute(id).subscribe(
        () => {
          this.getInstitutes();
        },
        (error) => console.error(error)
      );
    }
  }
}
