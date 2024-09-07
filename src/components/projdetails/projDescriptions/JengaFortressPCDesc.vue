<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            Project Goal: Learn multiplayer basics, FPS basics.
          </p>

          <p>
            Originally wanting to learn the basics of how to implement a First-Person Shooter, I gradually wanted to
            also implement a basic multiplayer system around it as well.
            Around the same time, Unity Netcode's Beta version was out, and I wanted to learn and explore how I could
            implement multiplayer into my game.
            Implementing both FPS elements and Multiplayer was, perhaps, unsurprisingly difficult, as I did not
            understand the concepts of networking in a 3D world, with animations, fast moving objects, and replication.
          </p>

          <p>
            In the end, while a complete game (in that there is no win condition) was not created, I learned a great
            deal about both FPS and multiplayer in general.
          </p>

          <p> Major elements include: </p>
          <ul>
            <li>Rigidbody FPS System</li>
            <ul>
              <li>Wall running, sprinting, and crouching.</li>
              <li>Basic weapon firing, which knocks the player back when fired.</li>
            </ul>
            <li>Basic Multiplayer System</li>
            <ul>
              <li>Authentication</li>
              <li>Lobby System</li>
              <li>Server/Client Replication (RPCs, Network Managers)</li>
            </ul>
          </ul>
        </b-col>

        <b-col lg="7">
          <b-img center :src="require(`@/assets/jengfortpc_multi.gif`)" alt="Image" class="details-image"></b-img>
        </b-col>
      </b-row>

    </b-container>


    <h3>Tools used:</h3>
    <ul>
      <li>Unity Netcode</li>
      <li>Version Control - Git</li>
    </ul>

  </b-container>
</template>

<script>
// import LightBox from 'vue-image-lightbox'
export default {
  components: {
  },
  data() {
    return {
      media: [
      ]
    }
  },
  mounted() {
    // console.log(this.$router.currentRoute.path);
  }
}
</script>

<style scoped>
.link-row {
  /* display: block; */
  /* align-items: center; */
  /* justify-content: center; */
}

.link-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.link-button {
  background-color: #5c629900;
  border-color: #B298DC;
}

.description-container {
  padding-bottom: 5%;
}

.yt-vid {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  padding-right: 100%;
  /* padding-left: 0; */
}

.yt-vid iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 430px) {
  .yt-vid {
    /* height: 0px; */
    /* padding-top: 25px; */
    /* padding-bottom: 56.2%; */
    max-width: 300px;
    position: relative;
  }

  .yt-vid iframe {
    width: 100%;
    height: 100%;
  }
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.carousel-control-next-icon:after {
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
}
</style>
