using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ThesisManagementSystem.Interfaces;
using ThesisManagementSystem.Models;

namespace ThesisManagementSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ThesisManagementSystemController : ControllerBase
    {
        private readonly IThesisManagementSystem _context;

        public ThesisManagementSystemController(IThesisManagementSystem context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetThesisList")]
        public IEnumerable<Models.Thesis> GetThesisList()
        {
            return _context.GetThesisList();
        }

        [HttpGet]
        [Route("GetThesisListWithKeyword/{keyword}")]
        public IEnumerable<Models.Thesis> GetThesisListWithKeyword(String keyword)
        {
            return _context.GetThesisListWithKeyword(keyword);
        }

        [HttpPut]
        [Route("UpdateThesis")]
        public IActionResult UpdateThesis(Models.Thesis thesis)
        {
            _context.UpdateThesis(thesis);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteThesis/{id}")]
        public IActionResult DeleteThesis(int id)
        {
            _context.DeleteThesis(id);
            return Ok();
        }

        [HttpPost]
        [Route("AddThesis")]
        public IActionResult AddThesis(Models.Thesis thesis)
        {
            _context.AddThesis(thesis);
            return Ok();
        }

        [HttpGet]
        [Route("GetThesis/{id}")]
        public Models.Thesis GetThesisData(int id)
        {
            return _context.GetThesisData(id);
        }

        [HttpPost]
        [Route("AddUniversity")]
        public IActionResult AddUniversity(Models.University university)
        {
            _context.AddUniversity(university);
            return Ok();
        }

        [HttpGet]
        [Route("GetUniversityList")]
        public IEnumerable<Models.University> GetUniversityList()
        {
            return _context.GetUniversityList();
        }

        [HttpGet]
        [Route("GetUniversity/{id}")]
        public Models.University GetUniversityData(int id)
        {
            return _context.GetUniversityData(id);
        }

        [HttpPut]
        [Route("UpdateUniversity")]
        public IActionResult UpdateUniversity(Models.University university)
        {
            _context.UpdateUniversity(university);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteUniversity/{id}")]
        public IActionResult DeleteUniversity(int id)
        {
            _context.DeleteUniversity(id);
            return Ok();
        }

        [HttpPost]
        [Route("AddInstitute")]
        public IActionResult AddInstitute(Models.Institute institute)
        {
            _context.AddInstitute(institute);
            return Ok();
        }

        [HttpGet]
        [Route("GetInstituteList")]
        public IEnumerable<Models.Institute> GetInstituteList()
        {
            return _context.GetInstituteList();
        }

        [HttpGet]
        [Route("GetInstituteListForUniversity/{universityId}")]
        public IEnumerable<Models.Institute> GetInstituteListForUniversity(int universityId)
        {
            return _context.GetInstituteListForUniversity(universityId);
        }

        [HttpGet]
        [Route("GetInstitute/{id}")]
        public Models.Institute GetInstituteData(int id)
        {
            return _context.GetInstituteData(id);
        }

        [HttpPut]
        [Route("UpdateInstitute")]
        public IActionResult UpdateInstitute(Models.Institute institute)
        {
            _context.UpdateInstitute(institute);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteInstitute/{id}")]
        public IActionResult DeleteInstitute(int id)
        {
            _context.DeleteInstitute(id);
            return Ok();
        }

        [HttpPost]
        [Route("AddPerson")]
        public IActionResult AddPerson(Models.Person person)
        {
            _context.AddPerson(person);
            return Ok();
        }

        [HttpGet]
        [Route("GetPersonList")]
        public IEnumerable<Models.Person> GetPersonList()
        {
            return _context.GetPersonList();
        }

        [HttpGet]
        [Route("GetPerson/{id}")]
        public Models.Person GetPersonData(int id)
        {
            return _context.GetPersonData(id);
        }

        [HttpPut]
        [Route("UpdatePerson")]
        public IActionResult UpdatePerson(Models.Person person)
        {
            _context.UpdatePerson(person);
            return Ok();
        }

        [HttpDelete]
        [Route("DeletePerson/{id}")]
        public IActionResult DeletePerson(int id)
        {
            _context.DeletePerson(id);
            return Ok();
        }

        [HttpPost]
        [Route("AddThesisKeyword")]
        public IActionResult AddThesisKeyword(Models.ThesisKeyword thesisKeyword)
        {
            _context.AddThesisKeyword(thesisKeyword);
            return Ok();
        }

        [HttpGet]
        [Route("GetThesisKeywordList")]
        public IEnumerable<Models.ThesisKeyword> GetThesisKeywordList()
        {
            return _context.GetThesisKeywordList();
        }

        [HttpGet]
        [Route("GetThesisKeywordListForThesis/{thesisId}")]
        public IEnumerable<Models.ThesisKeyword> GetThesisKeywordListForThesis(int thesisId)
        {
            return _context.GetThesisKeywordListForThesis(thesisId);
        }

        [HttpGet]
        [Route("GetThesisKeyword/{id}")]
        public Models.ThesisKeyword GetThesisKeywordData(int id)
        {
            return _context.GetThesisKeywordData(id);
        }

        [HttpPut]
        [Route("UpdateThesisKeyword")]
        public IActionResult UpdateThesisKeyword(Models.ThesisKeyword thesisKeyword)
        {
            _context.UpdateThesisKeyword(thesisKeyword);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteThesisKeyword/{id}")]
        public IActionResult DeleteThesisKeyword(int id)
        {
            _context.DeleteThesisKeyword(id);
            return Ok();
        }

        [HttpPost]
        [Route("AddThesisSubject")]
        public IActionResult AddThesisSubject(Models.ThesisSubject thesisSubject)
        {
            _context.AddThesisSubject(thesisSubject);
            return Ok();
        }

        [HttpGet]
        [Route("GetThesisSubjectList")]
        public IEnumerable<Models.ThesisSubject> GetThesisSubjectList()
        {
            return _context.GetThesisSubjectList();
        }

        [HttpGet]
        [Route("GetThesisSubjectListForThesis/{thesisId}")]
        public IEnumerable<Models.ThesisSubject> GetThesisSubjectListForThesis(int thesisId)
        {
            return _context.GetThesisSubjectListForThesis(thesisId);
        }

        [HttpGet]
        [Route("GetThesisSubject/{id}")]
        public Models.ThesisSubject GetThesisSubjectData(int id)
        {
            return _context.GetThesisSubjectData(id);
        }

        [HttpPut]
        [Route("UpdateThesisSubject")]
        public IActionResult UpdateThesisSubject(Models.ThesisSubject thesisSubject)
        {
            _context.UpdateThesisSubject(thesisSubject);
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteThesisSubject/{id}")]
        public IActionResult DeleteThesisSubject(int id)
        {
            _context.DeleteThesisSubject(id);
            return Ok();
        }
    }
}
