import { University } from "./university";

export interface Institute {
  instituteId: number;
  instituteName: string;
  universityId: number;
  university: University;
}
