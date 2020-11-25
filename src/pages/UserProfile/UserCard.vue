<template>
  <card class="card-user">
    <div slot="image">
      <b-card title="StudentName">
        <br />
        <div class="row">
          <div class="col-6">
            <p class="description text-left">
              Register Number :00000000
               <br />
              Mobile: 0000000000
              <br />
              Email :xxxxxxx@xxx.com
               <br />
            </p>
          </div>
          <div class="col-6">
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3"></div>
            <div class="col-3">
              <p class="description text-right border" style="margin: 10px">
                --PHOTO HERE --
              </p>
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <div>
      <div class="author"></div>
    </div>
    <hr />
   
  </card>
</template>
<script>
export default {
  data() {
    return {
      details: [
        {
          title: "12",
          subTitle: "Pending",
        },
        {
          title: "2",
          subTitle: "Submitted",
        },
        {
          title: "24",
          subTitle: "Left",
        },
      ],
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    },
  },
};
</script>
<style>
</style>
