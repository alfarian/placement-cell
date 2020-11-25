<template>
  <card title="Notifications" sub-title="Announcements from Placement Cell">
    <div>
      <div class="col">
        <b-card
          v-for="(i, index) in result"
          v-bind:key="index"
        >
          <br />
          {{ i.content }}
        </b-card>
      </div>
      <!-- <paper-table :data="table1.data" :columns="table1.columns"> </paper-table> -->
    </div>
  </card>
</template>
<script>
import axios from "axios";
import NotificationTemplate from "./Notifications/NotificationTemplate";
import { PaperTable } from "@/components";
import Card from "../components/Cards/Card.vue";
const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas",
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux",
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park",
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten",
  },
];
export default {
  mounted() {
    axios.get("https://placement-cell-alfa.herokuapp.com/feeds").then((res) => {
      console.log(res.data);
      this.result = res.data;
    });
  },
  components: {
    PaperTable,
    Card,
  },
  data() {
    return {
      result: "",
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
      table1: {
        title: "Stripped Table",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      const color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        component: NotificationTemplate,
        icon: "ti-gift",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
  },
};
</script>
<style>
</style>
