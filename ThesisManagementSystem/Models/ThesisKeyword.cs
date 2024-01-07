using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ThesisManagementSystem.Models
{
    public partial class ThesisKeyword
    {
        [Key]
        public int KeywordId { get; set; }
        public string? Keyword { get; set; }
        public int ThesisId { get; set; }
        public Thesis? Thesis { get; set; }
    }
}
