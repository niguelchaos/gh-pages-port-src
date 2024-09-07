<template>
  <b-container>
     
     <b-container class="description-container">
      <b-row>
        <b-col lg="12">
          <h3>Description</h3>
          <p>
            Created turn based card game focusing on resource management and disruption. 
            The course was an exercise of understanding the activities and responsibilities of gameplay design, 
            going through the game development process from ideation to evaluation, with an iteration of playtesting. 
          </p>
        </b-col>

        <!-- <b-col lg="5">
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
          
          </div>
        </b-col> -->
      </b-row>
    </b-container>
    
    <h3>Concept</h3>
    <p>
      
    </p>
    
    <h3>Activities & Responsibilities</h3>

      <ul>
        <li>Analyzing gameplay systems.</li>
        <li>Establishing a theme and setting through mechanics and gameplay.</li>
        <li>Designing and implementing a core gameplay loop, explaining the reasons and effects of the interaction of mechanics.</li>
        <li>Participating in playtesting, identifying issues, and modifying gameplay to address issues.</li>
      </ul>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Figma - Sketching, Prototyping</li>
      <li>Tabletopia - Implementation, Playesting</li>
    </ul>

    <h3>Challenges</h3>
    <p>
      Was the game as humorous and fun to play as we wanted it to I mean the playtests show kind of yay
    </p>


  </b-container>
</template>

<script>
  export default {


    components: {
 
    },
    data() {
      return {
        gameimages: [
          { url: require('@/assets/dummypark/homepage.png')  },
          { url: require('@/assets/dummypark/signin.png')  },
          { url: require('@/assets/dummypark/activities.png')  },
          { url: require('@/assets/dummypark/activitydetails.png')  },
          { url: require('@/assets/dummypark/buytickets.png')  },
          { url: require('@/assets/dummypark/bundleticket.png')  },
          { url: require('@/assets/dummypark/ticketconfirmation.png')  },
          { url: require('@/assets/dummypark/booking.png')  },
        ],
        processimages: [
          
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

/* lightbox */

 
</style>

