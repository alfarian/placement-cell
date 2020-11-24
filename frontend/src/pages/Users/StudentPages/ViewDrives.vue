<template>
  <div>
    <div class="row">
      <div class="container card" style="overflow: scroll">
        <br />

        <div class="row" v-for="i in drives" v-bind:key="i">
          <div class="col">
            <b-card class="border  companyCard" :title="i.name">
              <b-card-text>
                <div class="row">
                  <div class="col">
                          
                    <b-card >
                      {{ i.details }}
                    </b-card>
                    
                  </div>
                </div>
              </b-card-text>
            </b-card>
                                        <br />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../../../components/Cards/Card.vue";

export default {
  components: { Card },

  data() {
    return {
      drives: [],
    };
  },
  mounted() {
    axios
      .get("https://placement-cell-alfa.herokuapp.com/drives")
      .then((res) => {
        if (res.data.length) {
          this.drives = res.data;
          console.log(res.data);

          // this.students = res.data;
          // var maketable = [];
          // for (let i = 0; i < this.students.length; i++) {
          //   maketable.push({
          //     register_no: this.students[i].register_no,
          //     name: this.students[i].name,
          //     email: this.students[i].email,
          //     department_name: this.students[i].department_name,
          //     cgpa: this.students[i].cgpa,
          //     gender: this.students[i].gender ? "Male" : "Female",
          //   });
          // }
        }
        // this.table1.data = maketable;
        // this.dataSource = maketable;
      });
  },
};
</script>

<style>
.companyCard{
  margin: 0 auto;
  background-color :beige;
  border-left:5px solid rgb(173, 26, 26) !important;
  color: antiquewhite;
}
</style>