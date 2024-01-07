import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';

@Component({
  selector: 'app-fetch-person',
  templateUrl: './fetch-person.component.html',
  styleUrls: ['./fetch-person.component.scss'],
})
export class FetchPersonComponent implements OnInit {
  public persons: Person[] = [];

  constructor(private thesisManagementSystemService: ThesisManagementSystemService) {}

  ngOnInit(): void {
    this.getPersons();
  }
  
  getPersons(): void {
    this.thesisManagementSystemService
      .getPersonList()
      .subscribe((personData) => (this.persons = personData));
  }

  delete(id: number): void {
    const ans = confirm(
      'Do you want to delete the person with Id: ' + id
    );
    if (ans) {
      this.thesisManagementSystemService.deletePerson(id).subscribe(
        () => {
          this.getPersons();
        },
        (error) => console.error(error)
      );
    }
  }
}
