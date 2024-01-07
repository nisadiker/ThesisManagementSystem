import { Person } from "./person";

export interface Thesis {
  thesisId: number;
  title: string;
  abstract: string;
  thesisYear: string;
  thesisType: string;
  numberOfPages: string;
  thesisLanguage: string;
  submissionDate: string;
  authorId: number;
  authorPerson: Person;
  supervisorId: number;
  cosupervisorId: number;
  universityId: number;
  instituteId: number;
}
