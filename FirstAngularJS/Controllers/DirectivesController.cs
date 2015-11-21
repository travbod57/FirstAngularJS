using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FirstAngularJS.Controllers
{
    public class DirectivesController : Controller
    {
        public ActionResult Custom()
        {
            return View();
        }

        public ActionResult BuiltIn()
        {
            return View();
        }

        public ActionResult CustomerTemplate()
        {
            return PartialView("~/Views/Directives/_CustomerTemplate.cshtml");
        }

        public ActionResult BootstrapModal()
        {
            return View();
        }
    }
}
