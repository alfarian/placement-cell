import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import PostUpdates from "@/pages/PostUpdates.vue";
import Notifications from "@/pages/Notifications.vue";
import StuNotifications from "@/pages/StuNotifications.vue";
import TableList from "@/pages/TableList.vue";
// admin Pages
import AdProfile from "@/pages/Users/AdminPages/AdProfile.vue"
import AdTraining from "@/pages/Users/AdminPages/Training.vue"
import AdDrive from "@/pages/Users/AdminPages/UploadDrives.vue"
import AdViewStu from "@/pages/Users/AdminPages/ViewStudent.vue"

// Student Pages
import StMyProfile from "@/pages/Users/StudentPages/MyProfile.vue"
import StFeedback from "@/pages/Users/StudentPages/Feedback.vue"
import StPlacementOfficer from "@/pages/Users/StudentPages/PlacementOfficer.vue"
import StQuestionBank from "@/pages/Users/StudentPages/QuestionBank.vue"
import StViewDrives from "@/pages/Users/StudentPages/ViewDrives.vue"
import StViewWorkshop from "@/pages/Users/StudentPages/ViewWorkshop.vue"
import StRegister from "@/pages/Users/StudentPages/RegisterStudent.vue"
// Login
import Login from "../components/LoginPage.vue"
import Register from "../components/Register.vue"

const routes = [

  {
    path: "/register-user",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      // admin start
      {
        path: "/admin-drive",
        name: "Drive",
        component: AdDrive
      }, {
        path: "/admin-tandw",
        name: "Profile",
        component: AdTraining
      }, {
        path: "/admin-list",
        name: "List",
        component: AdViewStu
      },
      {
        path: "/admin-profile",
        name: "Profile",
        component: AdProfile
      },
      // admin end
      // student start
      {
        path: "/student-register",
        name: "Register",
        component: StRegister
      },
      {
        path: "/student-work",
        name: "Workshops",
        component: StViewWorkshop
      }, {
        path: "/student-drives",
        name: "Drive",
        component: StViewDrives
      }, {
        path: "/student-qb",
        name: "Question Bank",
        component: StQuestionBank
      }, {
        path: "/student-po",
        name: "Placement Officer",
        component: StPlacementOfficer
      },
      {
        path: "/student-feedback",
        name: "My Feedback",
        component: StFeedback
      },
      {
        path: "stunotifications",
        name: "stunotifications",
        component: StuNotifications
      },
      {
        path: "/student-profile",
        name: "My Profile",
        component: StMyProfile
      },
      // stu-end
      {
        path: "stats",
        name: "Register User",
        component: UserProfile
      },
      {
        path: "postupdates",
        name: "Updates",
        component: PostUpdates
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
     

      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },

  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
