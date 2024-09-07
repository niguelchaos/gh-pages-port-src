<template>
  <b-container fluid id="top" class="base">
    <b-row>
      <b-col id="content-col" class="content-col" no-gutters>
        <!-- <b-container fluid class="home-section" id="home">
          <b-jumbotron class="home-jumbo" id="home-jumbo" header="Nigel Chao" lead="Software Engineer, Game Developer" fluid>
          </b-jumbotron>
        </b-container> -->

        <name-header class="name-section" id="home"></name-header>
        <!-- Mobile (< 768px): stack columns by making one half-width and one full-width
              Desktop (>= 768px): keep both columns in same row in 4:8 ratio -->
        
        <!-- <about-section></about-section> -->

        <projects-section></projects-section>

        <!-- Contact-->
        <contact-section></contact-section>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import { Api } from '@/Api'

import NameHeader from '@/components/NameHeader.vue';
import ContactSection from '@/components/Contact.vue'
// import SkillsSection from '@/components/Skills.vue'
import AboutSection from '@/components/AboutOverview.vue'
import ProjectsSection from '@/components/Projects.vue'

export default {
  name: 'home',
  components: { 
    NameHeader,
    ContactSection,
    // SkillsSection,
    AboutSection,
    ProjectsSection
  },
  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style>
body, html {
  height: 100%;
  width: 100%;
  scroll-behavior: auto;
}

.base{
  height:100%;
  width:100%;
  /* background-color: #f3e0ff; */
}
#vertical-nav {
  flex-direction: column;
}
#content-col {
  padding: 0%;
}
.name-section {
  min-height: 35vh;
}
.home-section{
  display: flex;
  min-height: 30vh;
  background-color: #d8dcff;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
#home-jumbo {
  background: transparent;
}
.projects-tabs .nav-pills .nav-link.active {
  background-color: #5C6299;
  color: #eeefff;
}
.projects-tabs .nav-pills .nav-link:not(.active) {
  /* background-color: #5C6299; */
  color: #5C6299;
  border: #2d3142;
}
#dark-divider {
  background:  #6c759e;
}




</style>
