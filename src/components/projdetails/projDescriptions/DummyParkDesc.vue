<template>
  <b-container>
     
     <b-container class="description-container">
      <b-row>
        <b-col lg="7">
          <h3>Description</h3>
          <p>
            This project consisted of a self organizing team of 9 students working to elicit requirements, implement, test and deploy code for a visitor web app of a fictional amusement park. 
            An agile process was followed with an iterative approach to deliver a project throughout its lifecycle. 
            There were 3 sprints in total, each sprint having 2-3 weeks time frame. 
            The team members tried out different roles to have a mindset of working in Agile teams and to learn the responsibilities of multiple roles.
            There were a total of 4 roles: Product Owner, Scrum Master Deputy, UI / UX Designer, and Developer.
          </p>
        </b-col>

        <b-col lg="5">
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
        </b-col>
      </b-row>
    </b-container>
    
    <h3>Concept</h3>
    <p>
      Teachers act/roleplay as customers, you build the app that they want by following an Agile process. 
      We made things a bit harder for ourselves by rotating roles. 
    </p>
    
    <h3>Roles & Responsibilities</h3>

      <h5>Team Member</h5>
        <ul>
          <li>Participated in refining the process continuously.</li>
        </ul>

      <h5>UI / UX Designer</h5>
        <ul>
          <li>Set up and used Figma to design and communicate mock up designs</li>
          <li>Laying the groundwork for future sprints.</li>
          <li>Established a common color scheme</li>
          <li>Created mock-ups for user stories of the current and next sprint.</li>
        </ul>

      <h5>Developer</h5>
      <ul>
        <li>Drove the development of crucial features, namely the Activities user story.</li>
        <li>Participated in guiding and teaching other members important concepts and setups.</li>
        <li>Ensuring code was ready for customer reviews.</li>
        <li>Identified dependencies, discussing the stories to establish a development approach.</li>
      </ul>

      <h5>Product Owner / Customer Deputy</h5>
      <ul>
        <li>Sprint planning to analyze feature requirements, used to prioritize stories.</li>
        <li>Prioritized user stories, providing suggestions for team members.</li>
        <li>Adapted process to account for short sprint time.</li>
        <li>Elicited and discussed user stories with customer, updating the customer with current progress to ensure requirements were fulfilled.</li>
        <li>Tested and reviewed implemented features, as I was aware of the development process at the point.</li>
        <li>Maintained product backlog, clarifying issues.</li>
        <li>Established and refined feature acceptance criteria and user stories.</li>
      </ul>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Vue.js</li>
      <li>Express.js</li>
      <li>MongoDB</li>
      <li>Docker - hosting, running database locally</li>
      <li>Figma</li>
      <li>Google Sheets, Docs</li>
      <li>Trello</li>
      <li>Version Control - Git</li>
    </ul>

    <h3>Challenges</h3>
    <p>
      Many challenges happened early on, when the team was still not mature. 
      As some team members (I included) were not familiar with the responsibilities of some roles, some time was spent experimenting and learning the ropes.
      As we became more acquainted and time passed, with us refining the process through retrospectives and sprint plannings, we realised that the roles were not set in stone.
      We not only had to adapt the process to account for changes in requirements, but also different sprint lengths and human issues(sickness, work, real life stuff).
      As we also decided on role rotations, different members gradually gained different competencies. As the app became more complex, onboarding took longer as well.   
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

</style>

