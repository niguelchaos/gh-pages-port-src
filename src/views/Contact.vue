<template>
  <b-container id="resume">
    <name-header></name-header>

    <b-container class="details">
      <b-container class="section-heading">
        <h2>Contact</h2>
        <hr id="heading-divider" class="divider my-3" />
      </b-container>

      <b-container class="details-item">
        <p>
          You can reach me via email:
        </p>

        <b-row id="contact-row" class="row justify-content-center">
          <b-col class="mx-2">
            <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="'mailto:' + contacts.email">
              <em class="bi bi-envelope-open-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
            </a>

          </b-col>
        </b-row>
      </b-container>

    </b-container>

  </b-container>
</template>

<script>
import NameHeader from '@/components/NameHeader.vue';

export default {
  // name: "resume",
  components: { NameHeader },
  data() {
    return {
      contacts: {
        email: 'niguelchaos@gmail.com',
      }
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

.link-item {
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}
</style>