import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Person } from '../models/person';
import { ThesisManagementSystemService } from '../services/thesisManagementSystem.service';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  personForm: FormGroup;
  title = 'Create';
  personId: number = 0;
  errorMessage: any;
  submitted = false;


  constructor(
    private fb: FormBuilder,
    private avRoute: ActivatedRoute,
    private thesisManagementSystemService: ThesisManagementSystemService,
    private router: Router
  ) {

    this.personForm = this.fb.group({
      personId: 0,
      personName: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
    this.avRoute.paramMap.subscribe((params: Params) => {
      this.personId = params.get('id');
    });

    if (this.personId > 0) {
      this.title = 'Edit';

      this.thesisManagementSystemService.getPersonData(this.personId).subscribe(
        (response: Person) => {
          this.personForm.setValue(
            {
              personId: response.personId,
              personName: response.personName
            });
        },
        (error) => console.error(error)
      );
      
    }
  }

  get registerFormControl() {
    return this.personForm.controls;
  }

  save(): void {
    this.submitted = true;
    if (!this.personForm.valid) {
      return;
    }

    if (this.personId > 0) {
      this.updatePerson();
    } else {
      this.addPerson();
    }
  }

  cancel(): void {
    this.navigateToFetchPerson();
  }

  private addPerson(): void {
    
    this.thesisManagementSystemService.savePerson(this.personForm.value).subscribe(
      () => {
        this.navigateToFetchPerson();
      },
      (error) => console.error(error)
    );
    
  }

  private updatePerson(): void {
    this.thesisManagementSystemService.updatePerson(this.personForm.value).subscribe(
      () => {
        this.navigateToFetchPerson();
      },
      (error) => console.error(error)
    );
  }

  private navigateToFetchPerson() {
    this.router.navigate(['/fetch-person']);
  }
}
