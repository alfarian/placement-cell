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
              v-model="user.fullname"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="number"
              label="Register Number"
              placeholder="Register No."
              v-model="user.regnum"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="email"
              label="Email"
              placeholder="Email"
              v-model="user.email"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <label for="radio-group-1">Gender</label>

            <b-form-group style="margin-top: 5px">
              <b-form-radio-group
                id="radio-group-1"
                v-model="user.genderSelected"
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
                v-model="user.selectedDepartment"
                :options="optionsDepartment"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col-md-3">
            <label for="example-input">Year</label>
            <b-input-group class="mb-6">
              <b-form-select
                v-model="user.selectedYear"
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
            <fg-input
              type="number"
              label="Mobile"
              placeholder="Mobile No."
              v-model="user.mobile"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="number"
              label="Postal Code"
              placeholder="PIN"
              v-model="user.postalCode"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="upload-photo">Photo</label>

            <b-form-file
              accept=".jpg, .png"
              v-model="user.photo"
              :state="Boolean(user.photo)"
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
                  v-model="user.tenper"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="number"
                  label="12th %"
                  placeholder="eg: 0.75 for 75%"
                  v-model="user.twelveper"
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

            <div class="form-group">
              <label>Add Description</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="user.aboutMe"
              >
              </textarea>
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
export default {
  data() {
    return {
      optionsYear: [
        { text: "2020", value: "2020" },
        { text: "2019", value: "2019" },
        { text: "2018", value: "2018" },
      ],
      optionsDepartment: [
        { text: "D1", value: "d1" },
        { text: "D2", value: "d2" },
        { text: "D3", value: "d3" },
      ],
      optionsGender: [
        { text: "Male", value: "M" },
        { text: "Female", value: "F" },
        { text: "Others", value: "O" },
      ],
      user: {
        fullname: "",
        regnum: "",
        email: "",
        selectedDepartment: "d3",
        selectedYear: "2020",
        genderSelected: "F",
        dob: "",
        address: "",
        mobile: "",
        city: "",
        photo: null,
        tenper: null,
        twelveper: null,
        postalCode: null,
        cgpa: null,
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`,
      },
    };
  },
  methods: {
    updateProfile() {
      // alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style>
</style>
