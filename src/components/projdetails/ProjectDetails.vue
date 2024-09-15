<template>
  <b-container>
    <name-header></name-header>

    <b-container class="project-details">
      <b-container class="section-heading">
        <h1>{{ projectDetails.title }}</h1>
        <h6>{{ projectDetails.subtitle }}</h6>
      </b-container>

      <b-container class="portfolio-item">
        <b-container class="portfolio-description">
            <b-container :is="projectDetails.descriptionComponent"></b-container>
            
            <h3 class="link-title">Links</h3> 
        </b-container>


        <b-form-row class="links">
          <b-col v-for="link in projectDetails.links" :key="link.id" class="link-col">
            <b-container> 

            <!-- if github link -->
            <a v-if="isGithubLink(link.url)" type="button" class="link-item btn btn-outline-light btn-lg pr-3" v-bind:href="link.url" target="_blank">
                <em :class="'bi bi-github'" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
            </a>

            <!-- if normal link -->
            <b-button v-if="!isGithubLink(link.url)" class="link-item link-button" :href="link.url" target="_blank"><strong>{{link.title}}</strong></b-button>
            
            </b-container>
          </b-col>
        </b-form-row>


      </b-container>
    </b-container>

  </b-container>
</template>

<script>
import NameHeader from '../NameHeader.vue';
import FeelTheDisasterDesc from './projDescriptions/FeelTheDisasterDesc.vue';
import TouchingHeartsDesc from './projDescriptions/TouchingHeartsDesc.vue';
import TimeloopMetroidDesc from './projDescriptions/TimeloopMetroidDesc.vue';
import GetMeowtOfHereDesc from './projDescriptions/GetMeowtOfHereDesc.vue';
import TronReplicaDesc from './projDescriptions/TronReplicaDesc.vue';
import JengaFortressDesc from './projDescriptions/JengaFortressDesc.vue';
import JengaFortressPcDesc from './projDescriptions/JengaFortressPCDesc.vue';
import RaphlAnimDesc from './projDescriptions/RaphlAnimDesc.vue';
import DummyParkDesc from './projDescriptions/DummyParkDesc.vue';
import CybercarDesc from './projDescriptions/CybercarDesc.vue';
import WorldGeneratorDesc from './projDescriptions/WorldGeneratorDesc.vue';

export default {
	props: ['projectDetails'],
  components: { 
    NameHeader,
    FeelTheDisasterDesc,
    TouchingHeartsDesc,
    TimeloopMetroidDesc,
    GetMeowtOfHereDesc,
    TronReplicaDesc,
    JengaFortressDesc,
    JengaFortressPcDesc,
    RaphlAnimDesc,
    DummyParkDesc,
    CybercarDesc,
    WorldGeneratorDesc
  },

  methods: {
    isGithubLink(projectlink) {
      const githubSubstr = 'github.com'
      if (projectlink.includes(githubSubstr)) {
        return true;
      } else {
        return false;
      }
    },
  }
}
</script>

<style scoped>
.section-heading {
  padding-bottom: 2rem;
}

.project-details {
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
.link-title{
  text-align: left;
}
.links {
  display: flex;
}
.link-col {
  flex-grow: 0;
  flex-basis: 1rem;
  padding-bottom: 1rem;

}
.link-item {
}
.link-button {
  background-color: #5c629900;
  border-color: #B298DC;
}


</style>