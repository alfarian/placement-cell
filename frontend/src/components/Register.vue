<template>
  <div class="vue-tempalte">
    <div>
      <b-navbar toggleable="lg" class="border">
        <b-navbar-brand href="#">Placement Cell</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav> -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form> -->

            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <!-- <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br /><br />
    <br /><br />

    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <b-card class="shadow sm">
            <b-tabs content-class="mt-3" justified>
              <b-tab title="Student" active>
                <div class="container">
                  <h3>Register User</h3>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      v-model="email"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      v-model="confirmpassword"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <b-button
                    :disabled="flagdisable"
                    variant="info"
                    type="submit"
                    @click="registerUserStudent"
                    class="btn btn-dark btn-lg btn-block"
                  >
                    Create Account
                  </b-button>
                  <div class="row">
                    <div class="col-6">
                      <p class="forgot-password text-left mt-2 mb-4">
                        <router-link to="/login">Sign in instead</router-link>
                      </p>
                    </div>
                    <div class="col-6">
                      <!-- <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password"
                          >Forgot password ?</router-link
                        >
                      </p> -->
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Admin">
                <div class="container">
                  <h3>Register User</h3>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      v-model="email"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <div class="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      v-model="confirmpassword"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <b-button
                    :disabled="flagdisable"
                    variant="info"
                    type="submit"
                    @click="registerUserAdmin"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Create Account
                  </b-button>
                  <div class="row">
                    <div class="col-6">
                      <p class="forgot-password text-left mt-2 mb-4">
                        <router-link to="/login">Sign in instead</router-link>
                      </p>
                    </div>
                    <div class="col-6">
                      <!-- <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password"
                          >Forgot password ?</router-link
                        >
                      </p> -->
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmpassword: "",
      flagdisable: true,
    };
  },
  methods: {
    pwdValidation() {
      if (
        this.confirmpassword != "" &&
        this.password != "" &&
        this.confirmpassword == this.password
      ) {
        this.flagdisable = false;
      } else {
        this.flagdisable = true;
      }
    },
    registerUserAdmin() {
      if (this.email == "admin" && this.password == "admin") {
        this.$store.state.storeUsers.personaType = "admin";
        alert("Admin User Added Successfuly");

        this.$router.push("dashboard");
      } else {
        alert("Invalid Admin User !!");
      }
    },
    registerUserStudent() {
      if (this.email == "student" && this.password == "student") {
        this.$store.state.storeUsers.personaType = "student";
        alert("Student User Added Successfuly");

        this.$router.push("dashboard");
      } else {
        alert("Invalid Student User !!");
      }
    },
  },
  watch: {
    confirmpassword: "pwdValidation",
  },
};
</script>

