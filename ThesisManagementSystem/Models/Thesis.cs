using System;
using System.Collections.Generic;

namespace ThesisManagementSystem.Models
{
    public partial class Thesis
    {
        public int ThesisId { get; set; }
        public string? Title { get; set; }
        public int AuthorId { get; set; }
        public Person? AuthorPerson { get; set; }
        public string? Abstract { get; set; }
        public int? SupervisorId { get; set; }
        public int? CoSupervisorId { get; set; }
        public short ThesisYear { get; set; }
        public string? ThesisType { get; set; }
        public int UniversityId { get; set; }
        public int InstituteId { get; set; }
        public short NumberOfPages { get; set; }
        public string? ThesisLanguage { get; set; }
        public  DateTime SubmissionDate { get; set; }

}
}
