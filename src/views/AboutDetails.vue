<template>
  <b-container>
    <name-header></name-header>

    <b-container class="details">
      <b-container class="section-heading">
        <h2>About Me</h2>
        <hr id="about-divider" class="divider my-3" />

        <p class="text-left">
          My experience in academia has provided me with a diverse set of skills within
          software engineering and game design. My international experiences have provided
          me a sense of cultural fluency and a global mindset.
        </p>
        <!-- <hr id=about-divider class="divider my-3" /> -->
        <p class="text-left"></p>
        <hr id="about-divider" class="divider my-3" />
      </b-container>

      <!-- <b-container class="details-item">
        <b-row>
          <b-col class="float-left">
            <b-container class="games-list">
              <h4>Important Videos</h4>
              <p>Completely irrelevant to game or software development. However, I consider all to have good storytelling.</p>
              <ul>
                <li><a :href="'https://www.youtube.com/watch?v=gM-_Jt0m6eY'" target="_blank"><strong>Feelin Kinda Panzer</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=JNpd1WjFkUk'" target="_blank"><strong>C H E S S - P A W N - R E Q U I E M</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=1cfKc8U4iwg'" target="_blank"><strong>Nvidia Bread</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=c-rTM9qOasQ'" target="_blank"><strong>Dead Fantasy series</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=4CTSf1QRk9w'" target="_blank"><strong>bottom gear</strong></a></li>
                <li><a :href="'https://www.youtube.com/watch?v=siIE8i48hlg'" target="_blank"><strong>ボーカロイドたちが2コードくり返してﾃｯﾃｰﾃﾚｯﾃｰとか叫ぶだけ</strong></a></li>
              </ul>
            </b-container>
            
          </b-col>
        </b-row>
      </b-container> -->

      <!-- <b-container class="details-item">
        <skills></skills>
      </b-container> -->
    </b-container>
  </b-container>
</template>

<script>
import NameHeader from "@/components/NameHeader.vue";
import Skills from "@/components/Skills.vue";

export default {
  components: { NameHeader, Skills },
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
.section-heading {
  padding-bottom: 2rem;
}

#about-divider {
  background: rgba(223, 226, 255, 0.548);
}

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

.description {
  align-items: left;
  text-align: left;
}

.games-list {
  align-items: left;
  text-align: left;
}
</style>
