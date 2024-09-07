<template>
   <b-container>
      <name-header></name-header>

      <b-container class="details">
         <div class="section-heading">
            <h1>{{ aboutDetails.title }}</h1>
            <h6>{{ aboutDetails.subtitle }}</h6>
         </div>
         <div class="details-item">
            <div class="details-description">
               <div :is="aboutDetails.descriptionComponent"></div>
            </div>
         </div>
      </b-container>
   </b-container>
</template>

<script>
import NameHeader from '../NameHeader.vue';

export default {
	props: ['aboutDetails'],
    components: {  NameHeader },
    methods: {
    }
}
</script>

<style scoped>


.section-heading {
  padding-bottom: 2rem;
}

.details {
  display: flex;
  flex-direction: column;

  color:  #dfe2ff;
  padding-bottom: 7rem;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
}
.portfolio-description {
   align-items: left;
   text-align: left;
}
</style>