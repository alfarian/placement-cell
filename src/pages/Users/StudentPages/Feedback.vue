<template>
  <card class="card" title="Enter Feedback">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Company"
              :disabled="false"
              title="Name of Company"
              placeholder="Company"
              v-model="user.name"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <!-- <fg-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
            >
            </fg-input> -->
          </div>
          <div class="col-md-4">
            <!-- <fg-input
              type="email"
              label="Email"
              placeholder="Email"
              v-model="user.email"
            >
            </fg-input> -->
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <!-- <fg-input
              type="text"
              label="First Name"
              placeholder="First Name"
              title="Name of Representative"
              v-model="user.firstName"
            >
            </fg-input> -->
          </div>
          <div class="col-md-6">
            <!-- <fg-input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </fg-input> -->
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
                v-model="user.details"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button
            type="info"
            round
            @click.native.prevent="updateFeedback"
          >
            submit
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import NotificationTemplate from "@/pages/Notifications/NotificationTemplate.vue";

import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "My Company",
        details: `Update here .`,
       
      },
       notifications: {
          topCenter: false,
        },
        type: ["", "info", "success", "warning", "danger"],
    };
  },
  methods: {
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
    updateFeedback() {
     
    },
  },
};
</script>
<style>
</style>
