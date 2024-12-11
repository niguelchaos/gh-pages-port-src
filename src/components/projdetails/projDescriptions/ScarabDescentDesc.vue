<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="12">
          <p class="font-italic text-center">
            This page is a work in progress. It will be updated in due time.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6">
          <h4>Metroidvania Mechanics</h4>
          <p>
            Ability Gating, Optional Levels, Boss Battles, and Exploration were all considered during multiple stages of
            design.
          </p>
        </b-col>
        <b-col lg="6">
          <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>

        <b-col lg="6">
          <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <b-col lg="6">
          <h4>Non Linear Levels</h4>
          <p>
            To support the freedom of exploration, players can choose to go through different routes.
            Different routes are gated by abilities to provide a sense of progression.
          </p>
        </b-col>

        <b-col lg="6">
          <h4>Exploration and Combat</h4>
          <p>
            Following classic metroidvania mechanics, mastery of abilities are made to support both player exploration
            and combat.
          </p>
        </b-col>
        <b-col lg="6">
          <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>

      </b-row>
    </b-container>

    <h2>Blockout Timelapse</h2>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="0.01">
          <b-carousel-slide v-for="image in this.blockouts" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>

    <h2>Overview</h2>
    <p><b>Description</b></p>
    <p><b>Requirements</b></p>
    <p><b>Genre</b></p>
    <p><b>Engine</b></p>
    <p><b>Tools Used</b></p>
    <p><b>Team Size</b></p>
    <p><b>Role</b></p>

    <h2>Goals & Restrictions</h2>
    <p><b>Goals</b></p>
    <p><b>Restrictions</b></p>

    <h2>Initial Brief</h2>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="3000">
          <b-carousel-slide v-for="image in this.brief" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>

    <h2>Layout</h2>
    <p>Here is the initial layout and the sections.</p>


    <h2>Process</h2>
    <h3>Step 1: Research</h3>
    <h3>Step 2: Design Document</h3>
    <h3>Step 3: References</h3>
    <h3>Step 4: 2D Map</h3>
    <h3>Step 5: Blockout, Iteration and Feedback</h3>
    <h4>Scoping Down</h4>

    <p>After several iterations and feedback, I realized that I had bitten off too much - I was essentially trying to
      create an entire world map. the final layout was smaller, puzzles were removed, and implemented mechanics were
      fewer.
      The general scope was reduced to maintain the self imposed time limit. Instead, I decided to focus and iterate
      more on several rooms.
    </p>

    <h2>Thought Processes & Design Decisions</h2>

    <h2>Gallery</h2>

  </b-container>
</template>

<script>

export default {

  components: {
  },
  data() {
    return {
      images: [

      ],
      blockouts: [
        { url: require('@/assets/scarabdescent/HighresScreenshot00005.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00011.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00012.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00016.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00019.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00024.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00028.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00030.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00034.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00036.png') },
        { url: require('@/assets/scarabdescent/HighresScreenshot00064.png') },
      ],
      processimages: [
      ],
      layout: [
      ],
      brief: [
        { url: require('@/assets/scarabdescent/brief/1.png') },
        { url: require('@/assets/scarabdescent/brief/2.png') },
        { url: require('@/assets/scarabdescent/brief/3.png') },
        { url: require('@/assets/scarabdescent/brief/4.png') },
        { url: require('@/assets/scarabdescent/brief/5.png') },
        { url: require('@/assets/scarabdescent/brief/6.png') },
        { url: require('@/assets/scarabdescent/brief/8.png') },
      ]

    }
  },
  mounted() {
    // console.log(this.$router.currentRoute.path);
  }
}
</script>

<style scoped>
.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}

.link-button {
  background-color: #5c629900;
  border-color: #B298DC;
}

.link-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.details-image {
  width: 100%;
  height: auto;
}

.description-container {
  padding-bottom: 5%;
}
</style>
