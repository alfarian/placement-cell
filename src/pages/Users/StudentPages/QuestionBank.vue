<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <br />
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
      selectedRowKeys: [],
      showFilterRow: true,
      showHeaderFilter: true,
      currentFilter: "",
      columns: [
        "question_id",

        "department",
        "year",
        "semester",
        "type",
        "link",
      ],
      dataSource: [
        {
          department: "CSE",
          link:
            "http://www.governmentadda.com/wp-content/uploads/2017/11/average-questions-governmentadda.com_.pdf",
          question_id: 1,
          semester: "s3",
          type: "maths average",
          year: 2020,
        },
      ],
      tableFormData: [],
      students: [],
      table1: {
        title: "Question Bank",
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
      .get("https://placement-cell-alfa.herokuapp.com/questions")
      .then((res) => {
        console.log(res.data);
        this.result = res.data;
        this.dataSource= res.data
      });
  },
};
</script>
<style>
</style>
