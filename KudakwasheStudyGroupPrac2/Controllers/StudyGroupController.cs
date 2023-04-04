using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KudakwasheStudyGroupPrac2.Models;

namespace KudakwasheStudyGroupPrac2.Controllers
{
    public class StudyGroupController : Controller
    {
        // GET: StudyGroup
        public ActionResult StudyGroup()
        {
            List<StudyGroupModel> students = new List<StudyGroupModel>();
            students.Add(new StudyGroupModel { StudentNo = 20548312,
                Name = "Kudakwashe", 
                Surname = "Mhuriro", 
                EmailAddress = "u20548312@tuks.co.za", 
                myLink = "~/HTML/Kudakwashe.html" 
            });
            students.Add(new StudyGroupModel { StudentNo = 18242937, 
                Name = "Hector", 
                Surname = "Nhlabathi", 
                EmailAddress = "u18242937@tuks.co.za", 
                myLink = "~/HTML/Hector.html" 
            });
            students.Add(new StudyGroupModel { StudentNo = 19227206, 
                Name = "Raphael", 
                Surname = "Alphonso", 
                EmailAddress = "u19227206@tuks.co.za", 
                myLink = "~/HTML/Raphael.html" 
            });
            students.Add(new StudyGroupModel { StudentNo = 20509482, 
                Name = "Claudius", 
                Surname = "Phalane", 
                EmailAddress = "u20509482@tuks.co.za", 
                myLink = "~/HTML/Claudius.html" 
            });
            students.Add(new StudyGroupModel { StudentNo = 20554232, 
                Name = "Kgaugelo", 
                Surname = "Mosetlha", 
                EmailAddress = "u20554232@tuks.co.za", 
                myLink = "~/HTML/Kgaugelo.html" 
            });
            return View(students);
        }
    }
}