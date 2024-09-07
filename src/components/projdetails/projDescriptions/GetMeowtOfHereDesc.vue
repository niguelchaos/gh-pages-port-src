<template>
  <b-container>
     
     <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            This game project aimed to design a game to meet the requirements of the Chalmers Student Union - to create increase inclusion between students.
            To this end, this game was made to bring relative strangers together by increasing empathy between players, 
            assuming that a greater understanding between students can make students more accepting of student culture. 
            To do so, a game experience was created with mechanics that emphasized cooperation, attempting to put players in each others' shoes.
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
              v-for="image in this.gameimages" :key="image.url"
              caption=""
              :img-src="image.url"
            ></b-carousel-slide>
            </b-carousel>
            
            <!-- <light-box :media="media" :showLightBox="false" :showThumbs="true"></light-box> -->
          </div>
        </b-col>
      </b-row>
    </b-container>
    
    <h3>Concept</h3>
    <p>
      Two player puzzler game where you embark on a journey alongside your companion, working together in order to solve puzzles and boost each other across obstacles.
    </p>
    
    <h3>Roles & Responsibilities</h3>

      <h5>Designer</h5>
      <p>
        <a :href="'https://miro.com/about/'" target="_blank">Miro</a> was used extensively to collaborate on the design of the game. 
        Activities included selecting assets to assess the feasibility of features, affinity mapping to establish the themes of the game, discussing playtesting results, and discussing puzzle and narrative ideas. 
        The design of the game was very much a group effort, and much discussion was needed to make compromises, establish a clearer direction, and reducing scope.
        We wanted players to cooperate and feel empathetic towards one another, and I felt that we needed to tell a story in the game for that to happen.
        Shown below are some of the sketches used to promote discussions of the general narrative and level design.
      </p>

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
          v-for="image in this.processimages" :key="image.url"
          caption=""
          :img-src="image.url"
        ></b-carousel-slide>
        </b-carousel>
        
        <!-- <light-box :media="media" :showLightBox="false" :showThumbs="true"></light-box> -->
      </div>

      <p class="my-3">
        Many ideas revolved around trying to tell the story through the mechanics and level design/progression.
        Some of these ideas are shown below. Needless to say, the scope was heavily reduced, and the narrative almost non-existent.
        However, some core concepts that many of us wanted remained: 
        The idea of reversing gravity so that two players entered each other's world, and the two players meeting each other for only a brief moment.
      </p>

      <h5>Level Designer</h5>
      <ul>
        <li>Collaborated with others to sketch out level ideas and designs.</li>
        <li>Made the loading screen. Yes I am very proud of it.</li>
      </ul>
      <p>
        There was much discussion surrounding how the different puzzles could help evoke empathy, taking the narrative into consideration.
        Many sketches were made to not only try to encourage the players to communicate, 
        but also fit in an in-game narrative where the cats gradually had a greater understanding of each other's "world". 
      </p>

      <h5>Programmer</h5>
      <ul>
        <li>Coded puzzle tools, mainly the gravity reversal mechanic.</li>
      </ul>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Unity2D</li>
      <li>C#</li>
      <li>Version Control - Git</li>
    </ul>

    <h3>Challenges</h3>
    <p>
      During development, there was much discussion and level sketches on symbolizing that the cats gradually knew more of the other's "world".
      As such, many levels were planned to be implemented, illustrating this in-game narrative as well as hoping that players also could better understand each other in reality.  
      As time progressed, we constantly reduced our scope to fit the timeframe, resulting in 3 levels. 
      This meant that we had to condense much of the in game narrative, and also lowered our chances with giving players a chance to know each other, as the game was being too short to do so.
      The timeframe also meant that very little user testing was done to nail down the aesthetics of the game before the exhibition - which essentially became our user testing session.
      This project also taught me to not shy away from using existing assets, and the various ways to use them.
    </p>
    <p>
      During playtests, many players did not feel like their empathy increased after playing, since puzzles were seen as too easy, resulting in a lack of player communication. 
      We did try to prioritize the game being fun rather than raising empathy, as we thought that it was a more achievable goal. The majority of players enjoyed the game, however, which is a good sign.
    </p>

  </b-container>
</template>

<script>
  // import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  // import LightBox from 'vue-image-lightbox'
  export default {
    // name: 'swiper-example-thumbs-gallery',
    // title: 'Thumbs gallery with Two-way control',

    components: {
      // Swiper,
      // SwiperSlide,
      // LightBox
    },
    data() {
      return {
        gameimages: [
          { url: require('@/assets/empathuzzler.png')  },
          { url: require('@/assets/getmeowtofhere/finallevel.png')  },
          { url: require('@/assets/getmeowtofhere/loadingscreen.png')  },
        ],
        processimages: [
          { url: require('@/assets/getmeowtofhere/levelsketches.png')  },
          { url: require('@/assets/getmeowtofhere/reducedscope.png')  },
          { url: require('@/assets/getmeowtofhere/narrativesketches.png')  },
          { url: require('@/assets/getmeowtofhere/teammatepuzzleideaModded.png')  },
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

.description-container {
  padding-bottom: 5%;
}


 
</style>

