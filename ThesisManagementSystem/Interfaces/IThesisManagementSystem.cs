using System;
using System.Security.Cryptography;

namespace ThesisManagementSystem.Interfaces
{
    public interface IThesisManagementSystem
    {
        List<Models.Thesis> GetThesisList();
        List<Models.Thesis> GetThesisListWithKeyword(String keyword);
        Models.Thesis GetThesisData(int ThesisId);
        void AddThesis(Models.Thesis Thesis);
        void UpdateThesis(Models.Thesis thesis);
        void DeleteThesis(int thesisId);

        void AddUniversity(Models.University university);
        List<Models.University> GetUniversityList();
        Models.University GetUniversityData(int universityId);
        void UpdateUniversity(Models.University university);
        void DeleteUniversity(int universityId);

        void AddInstitute(Models.Institute institute);
        List<Models.Institute> GetInstituteList();
        List<Models.Institute> GetInstituteListForUniversity(int universityId);
        Models.Institute GetInstituteData(int instituteId);
        void UpdateInstitute(Models.Institute institute);
        void DeleteInstitute(int instituteId);

        void AddPerson(Models.Person person);
        List<Models.Person> GetPersonList();
        Models.Person GetPersonData(int personId);
        void UpdatePerson(Models.Person person);
        void DeletePerson(int personId);

        void AddThesisKeyword(Models.ThesisKeyword thesisKeyword);
        List<Models.ThesisKeyword> GetThesisKeywordList();
        List<Models.ThesisKeyword> GetThesisKeywordListForThesis(int thesisId);
        Models.ThesisKeyword GetThesisKeywordData(int thesisKeywordId);
        void UpdateThesisKeyword(Models.ThesisKeyword thesisKeyword);
        void DeleteThesisKeyword(int thesisKeywordId);

        void AddThesisSubject(Models.ThesisSubject thesisSubject);
        List<Models.ThesisSubject> GetThesisSubjectList();
        List<Models.ThesisSubject> GetThesisSubjectListForThesis(int thesisId);
        Models.ThesisSubject GetThesisSubjectData(int thesisSubjectId);
        void UpdateThesisSubject(Models.ThesisSubject thesisSubject);
        void DeleteThesisSubject(int thesisSubjectId);
    }
}

