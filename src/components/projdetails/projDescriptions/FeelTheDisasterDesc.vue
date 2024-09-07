<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            Thrust into a very inefficient recycling facility, the player takes on the role as a new worker to sort recyclables. 
            A single robot has infiltrated the facility, making a mess. 
            The player must prevent the robot from burning the recyclables, hopefully learning how to be correctly recycle trash and be nicer to the world through their consumption habits.
          </p>

          <p>
            A student game project which required us to make any game related to <a :href="'https://sdgs.un.org/goals'" target="_blank">SDGs</a>, 
            I wanted to make a game about how families could be affected by natural disasters by putting the player in the middle of one. Hence, the title.
            As my first Unity game, I thought it would be "pretty funny" if I could pull off a Virtual Reality game, as it sounded ridiculous even to myself - 
            especially since it was a 20% workload course and I only had a month of development time.
          </p>

        </b-col>

        <b-col lg="7">
          <div>
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              controls
              indicators
              :interval="0"
            >
            <b-carousel-slide
              v-for="image in this.media" :key="image.url"
              caption=""
              :img-src="image.url"
            ></b-carousel-slide>
            </b-carousel>

          </div>
        </b-col>
      </b-row>

      <p class="mt-3">
        I quickly learned the limitations of both myself and the Quest. With the Quest unable to simulate fire spreading at an acceptable frame rate, my original idea quickly looked infeasible.
        With 3 weeks left, I decided to take an "easier" theme - recycling. 
        Yet, I wanted a game that went beyond sorting garbage, and instead tried to look for interesting facts that could be included in the game.
        I finally settled on "what happens after trash is sorted" - though that clearly did not go so well.
      </p>
    </b-container>
    


    <h3>Concept</h3>
    <p>
      Recycle the milk carton correctly, preventing the enemy robot from burning the carton, and burn garbage unfit for recycling in a recycling facility! 
    </p>
    
    <h3>Mechanics</h3>
    <b-container>
      <b-row>
        <b-col md="4">
          <p><strong>Player</strong></p>
          <ul>
              <li>Pick, and throw objects in VR</li>
              <li>Wash Milk Carton</li>
              <li>Pick apart carton</li>
              <li>Punch Robot</li>
              <li>Burn Garbage</li>
              <li>Teleport/Movement</li>
          </ul>
        </b-col>
        
        <b-col md="8">
          <p><strong>Game</strong></p>
          <ul>
              <li>3 Levels: 
                <ul>
                  <li>Tutorial</li>
                  <li>Robot Battle</li>
                  <li>Burning Dirty Recyclables</li>
                </ul>
              </li>
              <li>Robot AI: 
                <ul>
                  <li>Throw milk carton into fire box</li>
                  <li>Punching player. A point light turned off everytime the player got hit to simulate "punching the daylights out of the player". Many bugs there.</li>
                </ul>
              </li>
              <li>General Game Flow: Scripted audio for win/lose states, etc.</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>

    <h3>Challenges</h3>
    <p>
      Many challenges were encountered:
      <ul>
        <li>
          Toolkit: At the time(November 2019), Unity's integration with the Oculus Quest was incomplete. 
          The VRTK solution looked attractive at the time due to its cross-platform nature, but its incomplete documentation then, 
          along with my lack of Unity knowledge created many technical roadblocks.
        </li>
        <li>
          Scattered Vision: Even after scrapping the natural disaster theme, the recycling theme was still vague. 
          I explored having the player move through a recycling factory, but deemed it too difficult. 
          I also wanted some action, as I thought just sorting would not be "fun enough". 
          Trying to merge these ideas together resulted in a confusing experience for the player, and actually increased the scope of the game.
          Being unable to include the majority of recycling trivia into the gameplay, I simply wrote it as text and displayed them at the end of each level.
        </li>
        <li>
          Game Design Knowledge: This was particularly challenging, as I had to try to learn VR best practices and general game design. 
          Lighting was poorly used, signposting was done badly, and the plethora of text boxes did not help. 
          Each level had new mechanics or goals, further confusing the players. 
        </li>
        <li>
          Incorrect Task Prioritization: Although there was a vague idea of an MVP, I would often waste time on non-essential features, even if it was technically prohibitive. 
          One particular feature was the ability for the player to see their own arms. Although it made it into the final game, much time was spent on getting it working, and in the end it did not heavily affect gameplay.
          The time could have been better used to flesh out the levels, or the enemy AI. Looking into blend trees for animation was also a waste of time with little gain.
        </li>
        <li>
          "Why Violence?": The concept if the enemy attacking the player was also problematic. My target audience were teachers, UX students, and generally non-gamists. 
          More importantly, the theme of violence did not tie into recycling very well. 
          As my goal with the enemy punching the player was simply to make the game more "exciting" to play, other methods, such as puzzles or a chase sequence, could have been better instead.
        </li>
      </ul>
    </p>
    
    <h3>Roles & Responsibilities</h3>
      <p>
        As the sole creator of the game, I was responsible for the design, programming, and sound integration for the game. 
      </p>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Unity3D</li>
      <li>Oculus Quest</li>
      <li>VRTK</li>
    </ul>

    
   </b-container>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        media: [
          { url: require('@/assets/feelTheDisasterMedia/tutfrontoverview.png')  },
          { url: require('@/assets/feelTheDisasterMedia/tutCloseupTable.png')  },
          { url: require('@/assets/feelTheDisasterMedia/tutwashedmilk.png')  },
          { url: require('@/assets/feelTheDisasterMedia/tutsideview.png')  },
          { url: require('@/assets/feelTheDisasterMedia/tutcapremove.png')  },

          { url: require('@/assets/feelTheDisasterMedia/recycleentrycorridor.png')  },
          { url: require('@/assets/feelTheDisasterMedia/recyclecenter.png')  },
          { url: require('@/assets/feelTheDisasterMedia/robotpunch.png')  },
          { url: require('@/assets/feelTheDisasterMedia/lightdimwhenpunched.png')  },
          { url: require('@/assets/feelTheDisasterMedia/robotthrowloss.png')  },

          { url: require('@/assets/feelTheDisasterMedia/burnoverview.png')  },
          { url: require('@/assets/feelTheDisasterMedia/burntext.png')  },
          { url: require('@/assets/feelTheDisasterMedia/winoverview.png')  },
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
