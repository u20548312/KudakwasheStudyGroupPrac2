using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace KudakwasheStudyGroupPrac2.Models
{
    public class StudyGroupModel
    {
        [Key]
        [Display(Name = "Student Number")]
        public int StudentNo { get; set; }

        [Display(Name = "Name")]
        public string Name { get; set; }

        [Display(Name = "Surname")]
        public string Surname { get; set; }

        [Display(Name = "Email Addresss")]
        public string EmailAddress { get; set; }

      

    }
}