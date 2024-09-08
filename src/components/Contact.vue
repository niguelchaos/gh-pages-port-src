<template>
  <b-container class="contact" id="contact" fluid>
    <!-- <section class="contact-section"> -->

    <!-- <h2 class="contact-header"> </h2> -->
    <!-- <b-row>
        <b-col class="contact-divider-col">
          <hr class="contact-divider divider my-3" />
        </b-col>
      </b-row> -->
    <b-row id="contact-row" class="row justify-content-center">
      <b-col class="mx-2">
        <!-- <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="contacts.linkedin" target="_blank">
                <em class="bi bi-linkedin" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
                </a> -->

        <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="'mailto:' + contacts.email">
          <em class="bi bi-envelope-open-fill" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
        </a>

        <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="contacts.github" target="_blank">
          <em class="bi bi-github" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
        </a>
        <a type="button" class="contactbtn btn btn-outline-light" v-bind:href="contacts.itch" target="_blank">
          <em class="bi bi-link-45deg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></em>
        </a>
      </b-col>
    </b-row>

    <!-- <b-row>
              <b-col class="contact-text">
                <p>
                </p>
              </b-col>
            </b-row> -->

    <!-- </section> -->
  </b-container>
</template>

<script>
export default {
  name: 'contact-section',
  data() {
    return {
      contacts: {
        // linkedin: 'https://www.linkedin.com/in/nigel-chao/',
        email: 'niguelchaos@gmail.com',
        github: 'https://github.com/niguelchaos?tab=repositories',
        itch: 'https://niguelchaos.itch.io/'
      }
    }
  }
}
</script>

<style scoped>
.contact {
  background-color: #2d3142;
  display: block;
  padding: 1rem;
}

.contact-header {
  color: #dfe2ff;
}

.contact-divider {
  background-color: #cacfff;
}

.contactbtn {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

.contact-divider-col {
  margin-left: 20%;
  margin-right: 20%;
}

.contact-text {
  color: #dfe2ff;
  text-align: left;
}
</style>