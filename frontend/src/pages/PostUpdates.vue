<template>
    <div class="row">
      <!-- <div class="col-xl-4 col-lg-5 col-md-6">
        <user-card>

        </user-card>
        <members-card>

        </members-card>
      </div> -->
      <div class="col-xl-12 col-lg-7 col-md-6">
        <template v-if="this.$store.state.storeUsers.personaType=='admin'"> 
        <edit-profile-form>

        </edit-profile-form>
        </template>
        <template v-if="this.$store.state.storeUsers.personaType=='student'"> 
        <stu-edit-profile-form>

        </stu-edit-profile-form>
        </template>
        <template v-if="this.$store.state.storeUsers.personaType=='comp'"> 
        <comp-edit-profile-form>

        </comp-edit-profile-form>
        </template>
      </div>
    </div>
</template>
<script>
import EditProfileForm from "./UserProfile/AdminPostUpdateForm";
import StuEditProfileForm from "./UserProfile/StudentEditProfileForm ";
import CompEditProfileForm from "./UserProfile/CompEditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";
import MembersCard from "./UserProfile/MembersCard.vue";
export default {
  components: {
    CompEditProfileForm,
    StuEditProfileForm,
    EditProfileForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
