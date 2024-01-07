using System;
using System.Collections.Generic;

namespace ThesisManagementSystem.Models
{
    public partial class Institute
    {
        public int InstituteId { get; set; }
        public string? InstituteName { get; set; }
        public int UniversityId { get; set; }
        public University? University { get; set; }
    }
}
