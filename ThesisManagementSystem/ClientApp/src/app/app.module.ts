import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchUniversityComponent } from './fetch-university/fetch-university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { FetchInstituteComponent } from './fetch-institute/fetch-institute.component';
import { AddInstituteComponent } from './add-institute/add-institute.component';
import { FetchPersonComponent } from './fetch-person/fetch-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { FetchThesisComponent } from './fetch-thesis/fetch-thesis.component';
import { AddThesisComponent } from './add-thesis/add-thesis.component';
import { FetchThesisKeywordComponent } from './fetch-thesisKeyword/fetch-thesisKeyword.component';
import { AddThesisKeywordComponent } from './add-thesisKeyword/add-thesisKeyword.component';
import { FetchThesisSubjectComponent } from './fetch-thesisSubject/fetch-thesisSubject.component';
import { AddThesisSubjectComponent } from './add-thesisSubject/add-thesisSubject.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FetchUniversityComponent,
    AddUniversityComponent,
    FetchInstituteComponent,
    AddInstituteComponent,
    FetchPersonComponent,
    AddPersonComponent,
    FetchThesisComponent,
    AddThesisComponent,
    FetchThesisKeywordComponent,
    AddThesisKeywordComponent,
    FetchThesisSubjectComponent,
    AddThesisSubjectComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FetchThesisComponent, pathMatch: 'full' },
      { path: 'fetch-university', component: FetchUniversityComponent },
      { path: 'add-university', component: AddUniversityComponent },
      { path: 'university/edit/:id', component: AddUniversityComponent },
      { path: 'fetch-institute', component: FetchInstituteComponent },
      { path: 'add-institute', component: AddInstituteComponent },
      { path: 'institute/edit/:id', component: AddInstituteComponent },
      { path: 'fetch-person', component: FetchPersonComponent },
      { path: 'add-person', component: AddPersonComponent },
      { path: 'person/edit/:id', component: AddPersonComponent },
      { path: 'fetch-thesis', component: FetchThesisComponent },
      { path: 'add-thesis', component: AddThesisComponent },
      { path: 'thesis/edit/:id', component: AddThesisComponent },
      { path: 'add-thesisKeyword', component: AddThesisKeywordComponent },
      { path: 'thesisKeyword/edit/:id', component: AddThesisKeywordComponent },
      { path: 'fetch-thesisKeyword', component: FetchThesisKeywordComponent },
      { path: 'fetch-thesisKeyword/:id', component: FetchThesisKeywordComponent },
      { path: 'thesisSubject/edit/:id', component: AddThesisSubjectComponent },
      { path: 'fetch-thesisSubject', component: FetchThesisSubjectComponent },
      { path: 'fetch-thesisSubject/:id', component: FetchThesisSubjectComponent },
      { path: 'add-thesisSubject', component: AddThesisSubjectComponent },
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

