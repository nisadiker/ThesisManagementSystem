using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ThesisManagementSystem.Models
{
    public partial class ThesisManagementContext : DbContext
    {
        public ThesisManagementContext()
        {
        }

        public ThesisManagementContext(DbContextOptions<ThesisManagementContext> options)
            : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public virtual DbSet<Thesis> Theses { get; set; } = null!;
        public virtual DbSet<University> Universities { get; set; } = null!;
        public virtual DbSet<Institute> Institutes { get; set; } = null!;
        public virtual DbSet<Person> Persons { get; set; } = null!;
        public virtual DbSet<ThesisSubject> ThesisSubjects { get; set; } = null!;
        public virtual DbSet<ThesisKeyword> ThesisKeywords { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<University>(entity =>
            {
                entity.ToTable("university");

                entity.Property(e => e.UniversityId).HasColumnName("universityid");

                entity.Property(e => e.UniversityName)
                    .HasColumnName("universityname")
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("person");

                entity.Property(e => e.PersonId).HasColumnName("personid");

                entity.Property(e => e.PersonName)
                    .HasColumnName("personname")
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ThesisSubject>(entity =>
            {
                entity.ToTable("thesissubject");

                entity.Property(e => e.SubjectId).HasColumnName("subjectid");

                entity.Property(e => e.Subject)
                    .HasColumnName("subjectname")
                    .HasMaxLength(500)
                    .IsUnicode(false);
                entity.Property(e => e.ThesisId).HasColumnName("thesisid");
            });
            modelBuilder.Entity<Institute>(entity =>
            {
                entity.ToTable("institute").HasOne(p => p.University)
                    .WithMany()
                    .HasForeignKey(p => p.UniversityId);

                entity.Property(e => e.InstituteId).HasColumnName("instituteid");

                entity.Property(e => e.InstituteName)
                    .HasColumnName("institutename")
                    .HasMaxLength(500)
                    .IsUnicode(false);
                entity.Property(e => e.UniversityId).HasColumnName("universityid");
            });
            modelBuilder.Entity<ThesisKeyword>(entity =>
            {
                entity.ToTable("thesiskeyword").HasOne(p => p.Thesis)
                    .WithMany()
                    .HasForeignKey(p => p.ThesisId);

                entity.Property(e => e.KeywordId).HasColumnName("keywordid");

                entity.Property(e => e.Keyword)
                    .HasColumnName("keyword")
                    .HasMaxLength(500)
                    .IsUnicode(false);
                entity.Property(e => e.ThesisId).HasColumnName("thesisid");
            });
            modelBuilder.Entity<Thesis>(entity =>
            {
                entity.ToTable("thesis").HasOne(p => p.AuthorPerson)
                    .WithMany()
                    .HasForeignKey(p => p.AuthorId);

                entity.Property(e => e.ThesisId).HasColumnName("thesisid");

                entity.Property(e => e.Title)
                    .HasColumnName("title")
                    .HasMaxLength(500)
                    .IsUnicode(false);
                entity.Property(e => e.AuthorId).HasColumnName("authorid");
                entity.Property(e => e.SupervisorId).HasColumnName("supervisorid");
                entity.Property(e => e.CoSupervisorId).HasColumnName("cosupervisorid");
                entity.Property(e => e.ThesisType)
                    .HasColumnName("thesistype")
                    .HasMaxLength(100)
                    .IsUnicode(false); ;
                entity.Property(e => e.InstituteId).HasColumnName("instituteid");
                entity.Property(e => e.UniversityId).HasColumnName("universityid");
                entity.Property(e => e.Abstract)
                    .HasColumnName("abstract")
                    .HasMaxLength(5000)
                    .IsUnicode(false);
                entity.Property(e => e.ThesisLanguage)
                    .HasColumnName("thesislanguage")
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.SubmissionDate)
                    .HasColumnName("submissiondate")
                    .HasColumnType("datetime");

                entity.Property(e => e.NumberOfPages).HasColumnName("numberofpages");

                entity.Property(e => e.ThesisYear).HasColumnName("thesisyear");



            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
