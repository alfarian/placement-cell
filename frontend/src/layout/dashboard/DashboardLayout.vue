<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links" v-if="this.$store.state.storeUsers.personaType=='admin'">
        <sidebar-link to="/admin-home" name="Home" icon="ti-panel"/>
        <sidebar-link to="/admin-profile" name="My Profile" icon="ti-user"/>
        <sidebar-link to="/admin-drive" name="Upload Drives" icon="ti-upload"/>
        <sidebar-link to="/admin-tandw" name="Training&Workshop" icon="ti-direction-alt"/>
        <sidebar-link to="/postupdates" name="Post Updates" icon="ti-comments"/>
        <sidebar-link to="/admin-list" name="View Student Details" icon="ti-view-list-alt"/>
      </template>
       <template slot="links" v-if="this.$store.state.storeUsers.personaType=='student'">
        <sidebar-link to="/dashboard" name="Home" icon="ti-panel"/>
        <sidebar-link to="/student-register" name="Register" icon="ti-notepad"/>
        <sidebar-link to="/student-profile" name="My Profile" icon="ti-user"/>
        <sidebar-link to="/student-drives" name="View Placement Drives" icon="ti-view-list-alt"/>
        <sidebar-link to="/student-work" name="Training&Workshops" icon="ti-announcement"/>
        <sidebar-link to="/student-qb" name="Question Bank" icon="ti-server"/>
        <sidebar-link to="/stunotifications" name=" Notifications" icon="ti-bell"/>
        <sidebar-link to="/student-feedback" name=" Feedback" icon="ti-pencil"/>
        <sidebar-link to="/student-po" name="Placement Officer" icon="ti-info"/>
      </template>
      <template slot="links" v-if="this.$store.state.storeUsers.personaType=='comp'">
        <sidebar-link to="/dashboard" name="Overview" icon="ti-panel"/>
        <sidebar-link to="/stats" name="Post Job" icon="ti-notepad"/>
        <sidebar-link to="/table-list" name="Student Overview" icon="ti-view-list-alt"/>
        <sidebar-link to="/notifications" name="Contact Us" icon="ti-bell"/>
      </template>
      <mobile-menu>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-panel"></i>
            <p>Stats</p>
          </a>
        </li>
        <drop-down class="nav-item"
                   title="5 Notifications"
                   title-classes="nav-link"
                   icon="ti-bell">
          <a class="dropdown-item">Notification 1</a>
          <a class="dropdown-item">Notification 2</a>
          <a class="dropdown-item">Notification 3</a>
          <a class="dropdown-item">Notification 4</a>
          <a class="dropdown-item">Another notification</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-settings"></i>
            <p>Settings</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
