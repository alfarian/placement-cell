<template>
  <card class="card" title="Upload Training Details">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Department"
              :disabled="false"
              title="Name of Department"
              placeholder="Placement Cell"
              v-model="user.company"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
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
          <div class="col-md-6">
            <fg-input
              type="text"
              label="First Name"
              placeholder="First Name"
              title="Name of Representative"
              v-model="user.firstName"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Add Description</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="user.content"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            submit
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        company: "Department",
        username: "User",
        email: "",

        firstName: "Steve",
        lastName: "Hanigan",
        address: "Melbourne, Australia",
        city: "Melbourne",
        country: "Australia",
        postalCode: 3015,
        content: `Update here .`,
      },
    };
  },
  methods: {
    updateProfile() {
      // alert("Your data: " + JSON.stringify(this.user));
      let data = {
        content: this.user.content,
      };

      axios.post("http://192.168.1.8:3000/feed", data).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style>
</style>
