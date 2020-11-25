<template>
  <card class="card" title="Student Registration Form">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Full Name"
              :disabled="false"
              title="Full Name"
              placeholder="Name"
              v-model="user.name"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="number"
              label="Register Number"
              placeholder="Register No."
              v-model="user.register_no"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="radio-group-1">Email</label>

            <div class="form-group">
            
              <input
                v-model="user.email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': !validEmail(user.email) && emailBlured,
                }"
                v-on:blur="emailBlured = true"
              />
              <div class="invalid-feedback">A valid email is required</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <label for="radio-group-1">Gender</label>

            <b-form-group style="margin-top: 5px">
              <b-form-radio-group
                id="radio-group-1"
                v-model="user.gender"
                :options="optionsGender"
                name="radio-options"
              ></b-form-radio-group>
            </b-form-group>
          </div>
          <div class="col-md-3">
            <label for="example-input">DOB</label>
            <b-input-group class="mb-6">
              <b-form-input
                id="example-input"
                v-model="user.dob"
                type="date"
                autocomplete="off"
              ></b-form-input>
            </b-input-group>
          </div>
          <div class="col-md-3">
            <label for="radio-group-1">Department</label>

            <b-form-group>
              <b-form-select
                v-model="user.department_id"
                :options="optionsDepartment"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col-md-3">
            <label for="example-input">Year</label>
            <b-input-group class="mb-6">
              <b-form-select
                v-model="user.sem_year"
                :options="optionsYear"
              ></b-form-select>
            </b-input-group>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input
              type="text"
              label="Address"
              placeholder="Home Address"
              v-model="user.address"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label>Mobile Number</label>
            <b-form-input
              type="number"
              :state="nameState"
              label="Mobile"
              placeholder="Mobile No."
              v-model="user.mobile"
            >
            </b-form-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="number"
              label="Postal Code"
              placeholder="PIN"
              v-model="user.pincode"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="upload-photo">Photo</label>

            <b-form-file
              accept=".jpg, .png"
              v-model="photo"
              :state="Boolean(photo)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </div>
        </div>

        <div class="row" style="border-top: 1px solid whitesmoke" title="hi">
          <div class="col-md-12">
            <h5>Academic Details</h5>
            <div class="row">
              <div class="col-md-4">
                <fg-input
                  type="number"
                  label="10th %"
                  :disabled="false"
                  title="Full Name"
                  placeholder="eg: 0.75 for 75%"
                  v-model="user.mark10"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="number"
                  label="12th %"
                  placeholder="eg: 0.75 for 75%"
                  v-model="user.mark12"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="number"
                  label="Graduation"
                  placeholder="CGPA"
                  v-model="user.cgpa"
                >
                </fg-input>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Add User
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios";
import NotificationTemplate from "@/pages/Notifications/NotificationTemplate.vue";

export default {
  data() {
    return {
      email: "",
      emailBlured: false,
      valid: false,
      submitted: false,
      optionsYear: [
        { text: "2020", value: 1 },
        { text: "2019", value: 1 },
        { text: "2018", value: 1 },
      ],
      optionsDepartment: [
        { text: "ECE", value: 1 },
        { text: "CSE", value: 3 },
        { text: "EEE", value: 2 },
        { text: "IT", value: 4 },
        { text: "EIE", value: 5 },
        { text: "CE", value: 6 },
        { text: "MCA", value: 7 },
      ],
      optionsGender: [
        { text: "Male", value: 1 },
        { text: "Female", value: 0 },
      ],

      photo: null,
      user: {
        name: "",
        register_no: "",
        email: "",
        department_id: null,
        sem_year: null,
        gender: null,
        dob: "",
        address: "",
        mobile: "",
        mark10: null,
        mark12: null,
        pincode: null,
        cgpa: null,
      },
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
    };
  },
  computed: {
    nameState() {
      return this.user.mobile.length == 10 ? true : false;
    },
  },
  methods: {
    validate: function () {
      this.emailBlured = true;
      if (this.validEmail(this.user.email)) {
        this.valid = true;
      }
    },
    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      return re.test(email.toLowerCase());
    },
    notifyVue(verticalAlign, horizontalAlign) {
      // const color = Math.floor(Math.random() * 4 + 1);
      const color = 2;

      this.$notify({
        component: NotificationTemplate,
        icon: "ti-gift",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
    updateProfile() {
      //       {
      //     "name":"adarsh",
      //     "register_no":14004016,
      //     "gender": 1,
      //     "dob": "1997-02-10",
      //     "department_id": 1,
      //     "sem_year": 1,
      //     "mobile": 8113017506,
      //     "email":"adarsh97vtk@gmail.com",
      //     "address": "kanavu, nadakkuthazha, vadakara",
      //     "pincode": 673014,
      //     "mark10":97.5,
      //     "mark12": 93.5,
      //     "cgpa": 7.55
      // }
      // placement-cell-alfa.herokuapp.com
      var data = this.user;

      axios
        .post("https://placement-cell-alfa.herokuapp.com/student", data)
        .then((res) => {
          if (res.data.result == "Success") {
            this.notifyVue("top", "center");
          }
          console.log(res);
        });
    },
  },
};
</script>
<style>
</style>
