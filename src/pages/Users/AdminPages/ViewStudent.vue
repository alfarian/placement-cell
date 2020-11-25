<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <br/>
          <dx-data-grid
            class="data_grid"
            id="grid-container"
            :remote-operations="true"
            :data-source="dataSource"
            :selected-row-keys="selectedRowKeys"
            :show-borders="true"
            :column-min-width="150"
          >
            <dx-filter-row
              :visible="showFilterRow"
              :apply-filter="currentFilter"
            />
            <dx-header-filter :visible="showHeaderFilter" />
           
           
            <dx-column v-for="i in columns" :data-field="i" :key="i" />

            <!-- <dx-scrolling column-rendering-mode="virtual"/> -->
            <!-- data-type="date" -->
          </dx-data-grid>
        </div>
      </card>
    </div>

    <!-- <div class="col-12">
      <card class="card-plain" title="List of Students">
        <div class="table-full-width table-responsive">
          <paper-table
            type="hover"
            :title="table2.title"
            :sub-title="table2.subTitle"
            :data="table2.data"
            :columns="table2.columns"
          >
          </paper-table>
        </div>
      </card>
    </div> -->
  </div>
</template>
<script>
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import {
  DxFilterPanel,
  DxColumn,
  DxDataGrid,
  DxSelection,
  DxHeaderFilter,
  DxSearchPanel,
  DxFilterRow,
} from "devextreme-vue/data-grid";
import { DxButton } from "devextreme-vue";
import axios from "axios";
import { PaperTable } from "@/components";
const tableColumns = [
  "Register_No",
  "Name",
  "Email",
  "department_name",
  "CGPA",
  "Gender",
];
const tableData = [
  {
    register_no: null,
    name: "",
    email: "",
    department_name: "",
    cgpa: "",
    gender: "",
  },
];

export default {
  components: {
    DxFilterPanel,
    DxButton,
    DxColumn,
    DxDataGrid,
    DxSelection,
    DxHeaderFilter,
    DxSearchPanel,
    DxFilterRow,
    PaperTable,
  },
  data() {
    return {
      selectedRowKeys:[],
      showFilterRow: true,
      showHeaderFilter: true,
      currentFilter:'',
      columns: [
        "register_no",
        "name",
        "email",
        "department_name",
        "cgpa",
        "gender",
      ],
      dataSource: [
        {
          "register_no": null,
          "name": "",
          "email": "",
          "department_name": "",
          "cpga": "",
          "gender": "",
        },
      ],
      tableFormData: [],
      students: [],
      table1: {
        title: "Registered Students",
        // subTitle: "Registered students",
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
  mounted() {
    axios
      .get("https://placement-cell-alfa.herokuapp.com/students")
      .then((res) => {
        if (res.data.length) {
          this.students = res.data;
          var maketable = [];
          for (let i = 0; i < this.students.length; i++) {
            maketable.push({
              register_no: this.students[i].register_no,
              name: this.students[i].name,
              email: this.students[i].email,
              department_name: this.students[i].department_name,
              cgpa: this.students[i].cgpa,
              gender: this.students[i].gender ? "Male" : "Female",
            });
          }
        }
        this.table1.data = maketable;
        this.dataSource = maketable;
      });
  },
};
</script>
<style>
</style>
