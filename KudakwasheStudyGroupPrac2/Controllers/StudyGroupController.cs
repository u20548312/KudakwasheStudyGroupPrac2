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
        List<StudyGroupModel> students = new List<StudyGroupModel>();
        // GET: StudyGroup
        public ActionResult StudyGroup()
        {
            students.Add(new StudyGroupModel { StudentNo = 20548312,
                Name = "Kudakwashe", 
                Surname = "Mhuriro", 
                EmailAddress = "u20548312@tuks.co.za"
            });
            students.Add(new StudyGroupModel { StudentNo = 18242937, 
                Name = "Hector", 
                Surname = "Nhlabathi", 
                EmailAddress = "u18242937@tuks.co.za", 
            });
            students.Add(new StudyGroupModel { StudentNo = 19227206, 
                Name = "Raphael", 
                Surname = "Alphonso", 
                EmailAddress = "u19227206@tuks.co.za", 
            });
            students.Add(new StudyGroupModel { StudentNo = 20509482, 
                Name = "Claudius", 
                Surname = "Phalane", 
                EmailAddress = "u20509482@tuks.co.za",
            });
            students.Add(new StudyGroupModel { StudentNo = 20554232, 
                Name = "Kgaugelo", 
                Surname = "Mosetlha", 
                EmailAddress = "u20554232@tuks.co.za", 
            });
            return View(students);
        }
        
       
        //GET: StudyGroup/Create
        public ActionResult Create()
        {
           
            return View();
        }

        //Post: StudyGroup
        [HttpPost]
        public ActionResult Create(StudyGroupModel studygroup)
        {
            if (ModelState.IsValid)
            {
                int newstudentno = students.Count + 1;
                studygroup.StudentNo = newstudentno;
                students.Add(studygroup);
                

                return RedirectToAction("Index", "StudyGroupModels");
            }
            
                return View(studygroup);
            
        }
    }
}