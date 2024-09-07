<template>
  <b-container fluid id="about" class="about-section overflow-auto" >
    <section data-aos="fade-in" data-aos-duration="200">
      <header class="masthead">
        <div class="about-container" >

          <b-row class="about-row" >
            <b-col class="about-col" lg="8" md="10">
                <h1 class="text-white font-weight-bold">About Me</h1>
                <hr id=about-divider class="divider my-3" />
            </b-col>
            <b-col id=about-details class="about-details" lg="8" md="10">
                <p class="font-weight-light">{{about.text1}}</p>
                <p class="font-weight-light">{{about.text2}}</p>
            </b-col>
          </b-row>

        </div>
      </header>
    </section>
  </b-container>
</template>

<script>
export default {
  components: {},
  name: 'about-section',
  data() {
    return {
      about: {
        text1: 'I am a Master\'s student in Game Design and Technology at Gothenburg University, with a Bachelor\'s in Software Engineering and Management. I am currently looking for opportunities to deepen my knowledge of Game Development.',
        text2: 'Oh, and rhythm games. Those are nice.'
      },
      education: [
        { location: 'University of Gothenburg', degree: 'Master\'s Programme in Game Design and Technology', date: '2020 - now', text: '' },
        { location: 'University of Gothenburg', degree: 'Bachelor\'s Programme in Software Engineering and Management', date: '2017 - 2020', text: '' },
        { location: 'Hvitfeldtska Gymnasiet', degree: 'International Baccalaureate', date: '2014 - 2017', text: '' }
      ]
    }
  }
}
</script>

<style scoped>
.about-section{
  display: block;
  background-color: #2d3142;
  text-align: center;
  align-items: center;
  align-self: center;
}
.about-col {
  font-size: 3.2rem;
}
.about-row {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 8em;
  padding-bottom: 8em;
  padding-right: 2rem;
  padding-left: 2rem;
}
.about-details {
  color:  #dfe2ff;
  font-size: 1.2rem;
}


#about-divider {
  background:  #dfe2ff;
}
</style>
      