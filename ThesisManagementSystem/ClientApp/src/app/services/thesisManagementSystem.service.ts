import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../models/university';
import { Institute } from '../models/institute';
import { Person } from '../models/person';
import { Thesis } from '../models/thesis';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ThesisKeyword } from '../models/thesisKeyword';
import { ThesisSubject } from '../models/thesisSubject';


let hostUrl = 'ThesisManagementSystem/';


@Injectable({
  providedIn: 'root'
})
export class ThesisManagementSystemService {

  constructor(private http: HttpClient) { }

  getUniversityList(): Observable<University[]> {
    return this.http.get<University[]>(hostUrl + 'GetUniversityList');
  }

  getUniversityData(id: number): Observable<University> {
    return this.http.get<University>(hostUrl + 'GetUniversity/' + id);
  }

  saveUniversity(university: University): Observable<any> {
    return this.http.post(hostUrl + 'AddUniversity', university);
  }

  updateUniversity(university: University): Observable<any> {
    return this.http.put(hostUrl + 'UpdateUniversity', university);
  }

  deleteUniversity(id: number): Observable<any> {
    return this.http.delete(hostUrl + 'DeleteUniversity/' + id);
  }

  getInstituteList(): Observable<Institute[]> {
    return this.http.get<Institute[]>(hostUrl + 'GetInstituteList');
  }

  getInstituteListForUniversity(universityId: number): Observable<Institute[]> {
    return this.http.get<Institute[]>(hostUrl + 'GetInstituteListForUniversity/' + universityId);
  }

  getInstituteData(id: number): Observable<Institute> {
    return this.http.get<Institute>(hostUrl + 'GetInstitute/' + id);
  }

  saveInstitute(comment: Institute): Observable<any> {
    return this.http.post(hostUrl + 'AddInstitute', comment);
  }

  updateInstitute(comment: Institute): Observable<any> {
    return this.http.put(hostUrl + 'UpdateInstitute', comment);
  }

  deleteInstitute(id: number): Observable<any> {
    return this.http.delete(hostUrl + 'DeleteInstitute/' + id);
  }

  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(hostUrl + 'GetPersonList');
  }

  getPersonData(id: number): Observable<Person> {
    return this.http.get<Person>(hostUrl + 'GetPerson/' + id);
  }

  savePerson(person: Person): Observable<any> {
    return this.http.post(hostUrl + 'AddPerson', person);
  }

  updatePerson(person: Person): Observable<any> {
    return this.http.put(hostUrl + 'UpdatePerson', person);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(hostUrl + 'DeletePerson/' + id);
  }

  getThesisList(): Observable<Thesis[]> {
    return this.http.get<Thesis[]>(hostUrl + 'GetThesisList');
  }

  getThesisData(id: number): Observable<Thesis> {
    return this.http.get<Thesis>(hostUrl + 'GetThesis/' + id);
  }

  getThesisListWithKeyword(keyword: string): Observable<Thesis[]> {
    return this.http.get<Thesis[]>(hostUrl + 'GetThesisListWithKeyword/' + keyword);
  }

  saveThesis(thesis: Thesis): Observable<any> {
    return this.http.post(hostUrl + 'AddThesis', thesis);
  }

  updateThesis(thesis: Thesis): Observable<any> {
    return this.http.put(hostUrl + 'UpdateThesis', thesis);
  }

  deleteThesis(id: number): Observable<any> {
    return this.http.delete(hostUrl + 'DeleteThesis/' + id);
  }

  getThesisKeywordList(): Observable<ThesisKeyword[]> {
    return this.http.get<ThesisKeyword[]>(hostUrl + 'GetThesisKeywordList');
  }

  getThesisKeywordListForThesis(thesisId: number): Observable<ThesisKeyword[]> {
    return this.http.get<ThesisKeyword[]>(hostUrl + 'GetThesisKeywordListForThesis/' + thesisId);
  }

  getThesisKeywordData(id: number): Observable<ThesisKeyword> {
    return this.http.get<ThesisKeyword>(hostUrl + 'GetThesisKeyword/' + id);
  }

  saveThesisKeyword(thesisKeyword: ThesisKeyword): Observable<any> {
    return this.http.post(hostUrl + 'AddThesisKeyword', thesisKeyword);
  }

  updateThesisKeyword(thesisKeyword: ThesisKeyword): Observable<any> {
    return this.http.put(hostUrl + 'UpdateThesisKeyword', thesisKeyword);
  }

  deleteThesisKeyword(id: number): Observable<any> {
    return this.http.delete(hostUrl + 'DeleteThesisKeyword/' + id);
  }

  getThesisSubjectList(): Observable<ThesisSubject[]> {
    return this.http.get<ThesisSubject[]>(hostUrl + 'GetThesisSubjectList');
  }

  getThesisSubjectListForThesis(thesisId: number): Observable<ThesisSubject[]> {
    return this.http.get<ThesisSubject[]>(hostUrl + 'GetThesisSubjectListForThesis/' + thesisId);
  }

  getThesisSubjectData(id: number): Observable<ThesisSubject> {
    return this.http.get<ThesisSubject>(hostUrl + 'GetThesisSubject/' + id);
  }

  saveThesisSubject(thesisSubject: ThesisSubject): Observable<any> {
    return this.http.post(hostUrl + 'AddThesisSubject', thesisSubject);
  }

  updateThesisSubject(thesisSubject: ThesisSubject): Observable<any> {
    return this.http.put(hostUrl + 'UpdateThesisSubject', thesisSubject);
  }

  deleteThesisSubject(id: number): Observable<any> {
    return this.http.delete(hostUrl + 'DeleteThesisSubject/' + id);
  }

}

