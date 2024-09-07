<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            My first traditional character animation ever, this student project tasked with creating a Idle, Walk, and Run animation cycle of a original character in a 2D game style. 
            As the assignment assessed the quality of character motion, I focused heavily on the the animations itself, trying to follow the 12 principles of animation.
            The run cycle was prioritized because....I liked it more.
            I chose a pixel art style because I had no drawing tablet. Pixel art is surprisingly difficult - one pixel off and it looks wrong.
          </p>
          <p>
            The character, called Raphl, is a stoic messenger, sturdily clothed and lightly armored to combat the weather and monsters. 
            As such, I wanted to convey a sense of effortless swiftness and efficiency in his motions, always aware of his surroundings.
          </p>

        </b-col>

        <b-col lg="7">
          <b-img center :src="require(`@/assets/raphlanim.gif`)" alt="Image" class="details-image"></b-img>
          <!-- <b-row>
            <b-col lg="4">
              <b-img center :src="require(`@/assets/RaphlIdle.gif`)" alt="Image" class="details-image"></b-img>
            </b-col>
            <b-col lg="4">
              <b-img center :src="require(`@/assets/RaphlWalk.gif`)" alt="Image" class="details-image"></b-img>
            </b-col>
            <b-col lg="4">
              <b-img center :src="require(`@/assets/RaphlRunHanddrawn.gif`)" alt="Image" class="details-image"></b-img>
            </b-col>
          </b-row> -->
        </b-col>
      </b-row>

    </b-container>

    <b-container>
      <b-row>
        <b-col md="6">
          <h4>Tools used:</h4>
          <ul>
            <li>Unity2D: Camera, Background, Character Controller</li>
            <li>Krita: Animation, Art</li>
          </ul>
        </b-col>
        
        <b-col md="6">
          <h4>States/Cycles:</h4>
            <ul>
              <li>Idle - Animated on 6s</li>
              <li>Walk - Animated on 2s</li>
              <li>Run - Animated on 1s</li>
            </ul>
        </b-col>
      </b-row>
    </b-container>
      
    <!-- <h3 class="align-center">Links</h3>
    <b-row>
      <b-col class="link-col">
        
        <a class="link-item float-left">
          <a type="button" class="btn btn-outline-light btn-lg float-left pr-3" v-bind:href="'https://github.com/niguelchaos/RaphlUnityIntegration'" target="_blank">
            <em :class="'bi bi-github'" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
          </a>
        </a>

        <a class="link-item">
          <b-button class="link-button" href="./ProjectDocuments/RaphlAnimExe.zip" target="_blank"><strong>RaphlUnityExe.zip</strong></b-button>
        </a>

      </b-col>
    </b-row> -->
    
  </b-container>
</template>

<style scoped>
.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}
.link-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.link-button {
  background-color: #5C6299;
}
.details-image {
  width: 100%;
  height: auto;
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
   top:0;
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
</style>
