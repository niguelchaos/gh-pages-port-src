<template>
   <b-container fluid class="skills-container" id="skills" >
      <b-row>
         <b-col class="skills-header-col">
            <h1 class="skills-header">Skills</h1>
            <hr id="dark-divider" class="divider my-3" />
         </b-col>
      </b-row>

      <b-row id="skills-row">
         <b-col id="skills-main-col" v-for="a in skills" :key="a.id" sm="12" md="6" lg="6" xl="3">
            <skill-card :skill="a"></skill-card>
         </b-col>
      </b-row>
   </b-container>
</template>

<script>
import SkillCard from '@/components/cards/SkillCard.vue'
export default {
   components: {  SkillCard  },
   name: 'skills-section',
   data() {
      return {
         skills: [
            { id: 4, title: 'Game Design', text: 'Able to communicate ideas and vision, document game elements, and work in different domains such as programming and art.' },
            { id: 3, title: 'Gameplay Analysis', text: 'Able to analyze, criticize, and investigate how games function as systems, amongst other relevant concepts. ' },
            { id: 2, title: 'Game Development', text: 'Adequate scripting capabilities in C# and C++.' },
            { id: 1, title: 'Software Engineering', text: 'Experience in analyzing requirements and developing software for Web, Desktop, and Embedded Systems. Web Dev is hard.' },
            { id: 0, title: 'Software Design', text: 'Experience in designing software according to customer needs.' }
         ],
      }
   }
}
</script>

<style scoped>
.skills-header {
  font-weight: bold;
  font-size: 3.2rem;
  color: #d8dcff;
}
.skills-header-col {
  margin-left: 15%;
  margin-right: 15%;
}
.skills-container{
  display: block;
  background-position: center;
  background-size: cover;
  text-align: center;
  align-items: center;
  /* background-color: #fcd0a1; */
  background-color: #2d3142;

  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  justify-content:center;
  overflow: auto;
}
#skills-row {
  padding-right: 10%;
  padding-left: 10%;
}
</style>