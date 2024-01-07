using Microsoft.EntityFrameworkCore;
using ThesisManagementSystem.Interfaces;
using ThesisManagementSystem.Models;

namespace ThesisManagementSystem.DataAccess
{
    public class ThesisManagementSystemDataAccessLayer : IThesisManagementSystem
    {

        private readonly ThesisManagementContext db;

        public ThesisManagementSystemDataAccessLayer(ThesisManagementContext _db)
        {
            db = _db;
        }

        public List<Models.Thesis> GetThesisList()
        {
            try
            {
                return db.Theses.Include(p => p.AuthorPerson).ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.Thesis> GetThesisListWithKeyword(String keyword)
        {
            try
            {
                List<ThesisKeyword> thesisKeywords = db.ThesisKeywords.Where(p => p.Keyword == keyword).Include(p => p.Thesis).ToList();
                List<Thesis> theses = new List<Thesis>();
                foreach(ThesisKeyword thesisKeyword in thesisKeywords)
                {
                    theses.Add(thesisKeyword.Thesis);
                }
                return theses;
            }
            catch
            {
                throw;
            }
        }

        public Models.Thesis GetThesisData(int thesisId)
        {
            try
            {
                return db.Theses.Where(p => p.ThesisId == thesisId).First();
            }
            catch
            {
                throw;
            }
        }

        public void AddThesis(Models.Thesis Thesis)
        {
            try
            {
                db.Theses.Add(Thesis);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        public void UpdateThesis(Models.Thesis thesis)
        {
            try
            {
                db.Entry(thesis).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void DeleteThesis(int id)
        {
            try
            {
                List<Models.ThesisKeyword> keywords = db.ThesisKeywords.Where(p => p.ThesisId == id).ToList();

                db.ThesisKeywords.RemoveRange(keywords);

                List<Models.ThesisSubject> subjects = db.ThesisSubjects.Where(p => p.ThesisId == id).ToList();

                db.ThesisSubjects.RemoveRange(subjects);

                List<Models.Thesis> theses = db.Theses.Where(p => p.ThesisId == id).ToList();

                if (theses == null)
                    return;
                db.Theses.RemoveRange(theses);
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }

        public void AddUniversity(Models.University university)
        {
            try
            {
                db.Universities.Add(university);
                    db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.University> GetUniversityList()
        {
            try
            {
                return db.Universities.ToList();
            }
            catch
            {
                throw;
            }
        }

        public Models.University GetUniversityData(int universityID)
        {
            try
            {
                return db.Universities.Where(p => p.UniversityId == universityID).First();
            }
            catch
            {
                throw;
            }
        }

        public void UpdateUniversity(Models.University university)
        {
            try
            {
                db.Entry(university).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void DeleteUniversity(int id)
        {
            try
            {
                List<Models.Institute> institutes = db.Institutes.Where(p => p.UniversityId == id).ToList();

                db.Institutes.RemoveRange(institutes);

                Models.University university = db.Universities.Where(p => p.UniversityId == id).First();

                if (university == null)
                    return;
                db.Universities.Remove(university);
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }


        public void AddInstitute(Models.Institute institute)
        {
            try
            {
                db.Institutes.Add(institute);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.Institute> GetInstituteList()
        {
            try
            {
                return db.Institutes.Include(p => p.University).ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.Institute> GetInstituteListForUniversity(int universityId)
        {
            try
            {
                return db.Institutes.Where(p => p.UniversityId == universityId).ToList();
            }
            catch
            {
                throw;
            }
        }

        public Models.Institute GetInstituteData(int id)
        {
            try
            {
                return db.Institutes.Where(p => p.InstituteId == id).First();
            }
            catch
            {
                throw;
            }
        }

        public void UpdateInstitute(Models.Institute institute)
        {
            try
            {
                db.Entry(institute).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void DeleteInstitute(int id)
        {
            try
            {
                List<Models.Institute> institutes = db.Institutes.Where(p => p.InstituteId == id).ToList();

                if (institutes == null)
                    return;
                db.Institutes.RemoveRange(institutes);         
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }


        public void AddPerson(Models.Person person)
        {
            try
            {
                db.Persons.Add(person);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.Person> GetPersonList()
        {
            try
            {
                return db.Persons.ToList();
            }
            catch
            {
                throw;
            }
        }

        public Models.Person GetPersonData(int id)
        {
            try
            {
                return db.Persons.Where(p => p.PersonId == id).First();
            }
            catch
            {
                throw;
            }
        }

        public void UpdatePerson(Models.Person person)
        {
            try
            {
                db.Entry(person).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void DeletePerson(int id)
        {
            try
            {
                List<Models.Person> persons = db.Persons.Where(p => p.PersonId == id).ToList();

                if (persons == null)
                    return;
                db.Persons.RemoveRange(persons);
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }



        public void AddThesisKeyword(Models.ThesisKeyword thesisKeyword)
        {
            try
            {
                db.ThesisKeywords.Add(thesisKeyword);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.ThesisKeyword> GetThesisKeywordList()
        {
            try
            {
                return db.ThesisKeywords.ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.ThesisKeyword> GetThesisKeywordListForThesis(int thesisId)
        {
            try
            {
                return db.ThesisKeywords.Where(p => p.ThesisId == thesisId).ToList();
            }
            catch
            {
                throw;
            }
        }

        public Models.ThesisKeyword GetThesisKeywordData(int id)
        {
            try
            {
                return db.ThesisKeywords.Where(p => p.KeywordId == id).First();
            }
            catch
            {
                throw;
            }
        }

        public void UpdateThesisKeyword(Models.ThesisKeyword thesisKeyword)
        {
            try
            {
                db.Entry(thesisKeyword).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void DeleteThesisKeyword(int id)
        {
            try
            {
                List<Models.ThesisKeyword> thesisKeywords = db.ThesisKeywords.Where(p => p.KeywordId == id).ToList();

                if (thesisKeywords == null)
                    return;
                db.ThesisKeywords.RemoveRange(thesisKeywords);
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }


        public void AddThesisSubject(Models.ThesisSubject thesisSubject)
        {
            try
            {
                db.ThesisSubjects.Add(thesisSubject);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.ThesisSubject> GetThesisSubjectList()
        {
            try
            {
                return db.ThesisSubjects.ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<Models.ThesisSubject> GetThesisSubjectListForThesis(int thesisId)
        {
            try
            {
                return db.ThesisSubjects.Where(p => p.ThesisId == thesisId).ToList();
            }
            catch
            {
                throw;
            }
        }

        public Models.ThesisSubject GetThesisSubjectData(int id)
        {
            try
            {
                return db.ThesisSubjects.Where(p => p.SubjectId == id).First();
            }
            catch
            {
                throw;
            }
        }

        public void UpdateThesisSubject(Models.ThesisSubject thesisSubject)
        {
            try
            {
                db.Entry(thesisSubject).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        public void DeleteThesisSubject(int id)
        {
            try
            {
                List<Models.ThesisSubject> thesisSubjects = db.ThesisSubjects.Where(p => p.SubjectId == id).ToList();

                if (thesisSubjects == null)
                    return;
                db.ThesisSubjects.RemoveRange(thesisSubjects);
                db.SaveChanges();

            }
            catch
            {
                throw;
            }
        }
    }
}

