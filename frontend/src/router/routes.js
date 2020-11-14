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
// Login
import Login from "../components/LoginPage.vue"
const routes = [
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
        path: "stunotifications",
        name: "stunotifications",
        component: StuNotifications
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
