<template>
  <section class="edu-section">
    <b-row class="edu-row">
      <b-col class="edu-col">

        <b-card id="education-card" class="education-card overflow-hidden shadow-sm">
          <b-card-body class="edu-cardbody">
            <h2 class="education-title font-weight-bold">Education</h2>
            
            <b-container class="edu-entry" v-for="edu in education" :key="edu.id">
              <b-row>
                <b-col lg="8">
                  <b-card-title class="edu-title">{{edu.location}}</b-card-title>
                  <b-card-text class="edu-degree font-weight-bolder">{{edu.degree}}</b-card-text>
                  <b-card-text class="edu-text">{{edu.text}}</b-card-text>
                </b-col>
                <b-col lg="4">
                  <b-card-text class="edu-date">{{edu.date}}</b-card-text>
                </b-col>
              </b-row>
              <hr id=dark-divider class="divider my-4" />
            </b-container>

          </b-card-body>
        </b-card>

      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  components: {},
  name: 'education-section',
  data() {
    return {
      education: [
        { location: 'University of Gothenburg', degree: 'Master\'s Programme in Game Design and Technology', date: '2020 - 2022', text: '' },
        { location: 'University of Gothenburg', degree: 'Bachelor\'s Programme in Software Engineering and Management', date: '2017 - 2020', text: '' },
        { location: 'Hvitfeldtska Gymnasiet', degree: 'International Baccalaureate', date: '2014 - 2017', text: '' }
      ]
    }
  }
}
</script>

<style scoped>
.edu-section {
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
  padding-bottom: 5%;
}
#education-card {
  background: transparent;
  border-color: #96a5eb;
  background-color: #e4e6ff;
  /* color: #3b446b; */
  color: #2c3e50;
}
.education-title {
  text-align: left;
  padding: 1.5%;
}
.edu-entry {
  padding-bottom: 2%;
  text-align: left;
}
.edu-date {
  text-align: right;
}
@media (max-width: 430px) {
  .edu-section {
    padding-right: 2%;
    padding-left: 2%;
    padding-bottom: 20%;
  }
  .education-title {
    text-align: center;
    padding-bottom: 20%;
  }
  .edu-entry {
    padding-bottom: 20%;
    text-align: center;
  }
  .edu-degree {
    text-align: left;
  }
  .edu-date {
    text-align: center;
  }
}
</style>