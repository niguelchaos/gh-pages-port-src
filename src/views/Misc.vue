<template>
  <b-container fluid class="fullwidth">
    <name-header></name-header>
    <b-row class="project-section">
      <h2 class="project-header">Miscellaneous</h2>

      <b-container fluid class="project-divider">
        <hr id="dark-divider" class="divider my-2" />
      </b-container>
      <misc></misc>
    </b-row>

    <contact-section></contact-section>
  </b-container>
</template>

<script>
import NameHeader from "@/components/NameHeader.vue";
import ContactSection from "@/components/Contact.vue";
import Misc from "@/components/MiscCards.vue";

export default {
  components: { NameHeader, ContactSection, Misc },
  data() {
    return {};
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.fullwidth {
  height: 100%;
  width: 100%;
  /* background-color: #f3e0ff; */
}
.project-header {
  font-weight: bold;
  font-size: 2.5rem;
}
.project-divider {
  padding-left: 15% !important;
  padding-right: 15% !important;
}

.project-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: #d8dcff;
  padding-top: 3rem;
  align-content: center;
  justify-content: center;
}
.details {
  display: flex;
  flex-direction: column;

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
  background-color: #5c6299;
  margin-right: 1rem;
  font-size: 1rem;
}

.cv-button {
  font-size: 20px;
  background-color: #4c357763;
  border-color: #b298dc;
}

.link-item {
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}
</style>
