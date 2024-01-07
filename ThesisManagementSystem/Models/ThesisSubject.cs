using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ThesisManagementSystem.Models
{
    public partial class ThesisSubject
    {
        [Key]
        public int SubjectId { get; set; }
        public string? Subject { get; set; }
        public int ThesisId { get; set; }

    }
}
