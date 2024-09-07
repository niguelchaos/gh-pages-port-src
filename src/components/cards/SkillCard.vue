<template>
  <!-- <div data-aos="fade-in" data-aos-duration="100" data-aos-easing="ease-in-sine"> -->
  <div>
      <b-card id="skills-card" class="overflow-hidden">
         <b-card-title>
            {{skill.title}}
         </b-card-title>
         <b-card-text>
            {{skill.text}}
         </b-card-text>
      </b-card>
   </div>
</template>

<script>
export default {
  name: 'skill-card-item',
  props: ['skill']
}
</script>

<style scoped>

#skills-card {
  color: #2c3e50;
  border-color: #96a5eb;
  background-color: #e4e6ff;

  /* background-color: #ffead3; */
  /* border-color: #fff0e1; */
  border-radius: 25px;
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
