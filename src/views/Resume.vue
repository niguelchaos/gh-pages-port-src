<template>
  <b-container id="resume">
    <name-header></name-header>

    <b-container class="details">
      <b-container class="section-heading">
        <h2>Download Resume</h2>
        <hr id="heading-divider" class="divider my-3" />
      </b-container>

      <b-container class="details-item">
        <b-row>
          <b-col class="link-col">
            <a class="link-item float-center">
              <b-button class="link-button cv-button" href="./NigelChao_Resume.pdf" target="_blank"><strong>CV
                  (PDF)</strong></b-button>
            </a>
          </b-col>
        </b-row>
      </b-container>

    </b-container>

  </b-container>
</template>

<script>
import NameHeader from '@/components/NameHeader.vue';
import EducationCard from '@/components/aboutdetails/Education.vue';
import Skills from '@/components/Skills.vue';


export default {
  // name: "resume",
  components: { NameHeader, EducationCard, Skills },
  data() {
    return {
    }
  },
  mounted() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;

  color: #dfe2ff;
  padding-bottom: 7rem;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
}

.details-content {
  align-content: left;
  align-items: left;
  align-self: left;
  justify-items: left;
}

.details-item {
  padding-bottom: 3rem;
}

#heading-divider {
  /* height: 10px; */
  background: #6c759e;
}

.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
  padding-bottom: 1rem;
}

.link-button {
  color: #e9edff;
  background-color: #5C6299;
  margin-right: 1rem;
  font-size: 1rem;
}

.cv-button {
  font-size: 20px;
  background-color: #4c357763;
  border-color: #B298DC;
}

.link-item {
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}
</style>