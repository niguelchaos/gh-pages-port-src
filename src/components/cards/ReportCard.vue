<template>
  <!-- <div :data-aos="fadeStyle" data-aos-duration="100" data-aos-easing="ease-out-sine"> -->
  <b-container class="rep-card-container">
   <b-card class="rep-card overflow-hidden shadow-sm">
      <b-row no-gutters>

         <b-col class="card-contents-col" id="card-contents-col" lg="12">
            <b-row>
               <b-col>

                  <b-row class="text-row">
                    <b-col class="text-col">
                      <b-card-body class="cardbody">

                        <b-card-sub-title class="rep-course">{{report.course}}</b-card-sub-title>
                        <!-- <hr class="text-divider" /> -->
                        <b-card-title class="rep-title">
                            <a class="rep-title-link" v-bind:href="report.link" target="_blank">{{report.title}}</a>
                        </b-card-title>
                        
                        <p class="rep-roles">{{report.roles}}</p>

                        <b-card-text class="card-text">{{report.text}}</b-card-text>
                        <span class="align-middle font-weight-bolder">{{report.highlightTitle}}: {{report.tech}}</span>
                        <!-- <hr class="mb-3 ml-0" /> -->
                        <!-- <hr class="text-divider" /> -->
                      </b-card-body>
                    </b-col> 
                  </b-row>
                  
                  <b-row v-if="this.showLinks" class="linkbutton-row" align-v="baseline">
                     <b-col v-for="doc in report.docs" :key="doc.id" class="linkbutton-col">
                        
                        <b-button class="link-button " v-bind:href="doc.link" target="_blank">
                           <strong>{{doc.title}}</strong>
                        </b-button>

                     </b-col>
                  </b-row>

               </b-col>
            </b-row>
         </b-col>

      </b-row>
   </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'report-card-item',
  props: ['report'],
  data() {
    return {
      fadeStyle: '',
      showLinks: true,
    }
  },
  mounted() {
    this.checkLink(this.report.link)
  },
  methods: {

    checkLink(reportlink) {
      // const githubSubstr = 'github.com'
      if (this.report.docs === []) {
        this.showLinks = false
      } else {
        this.showLinks = true
      }
    },

  }
}
</script>
<style scoped>
.rep-card-container {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
  padding-bottom: 1.5rem;

}
.rep-card {
   max-width: 2000px;
   background: transparent;
   color:#cacfff;
   border-color: #96a5eb;
   /* background-color: #cacfff; */
   /* background-color: #5f6994; */
}

#card-contents-col {
   margin-left: auto;
   margin-right: auto;
   align-self: center;
   text-align: left;
}

.text-divider {
   margin-bottom: 1rem;
   margin-top: 0.5rem;
   /* background-color: #2c3e504d; */
}
.rep-course {
  color: #96a5eb;
   text-align: left;
   margin-bottom: 0.5rem;
}
.rep-title {
  margin-bottom: 0.4rem;
}
.rep-title-link {
  color: #e6e8ff
}
.rep-roles {
   margin-bottom: 1rem;
   font-weight: bold;
   font-size: 0.9rem;
}

@media (max-width: 430px) {
   .rep-card {
      padding:0;
   }
   #card-contents-col {
      /* text-align: center; */
      margin-top: .5rem;
   }
   .card-text {
      text-align: left;
   }
}


.cardbody {
   padding: 0%;
   /* margin-left: 5%; */
   /* margin-right: 5%; */
   /* margin-top: 5%; */
   /* margin-bottom: 2%; */
}

.linkbutton-col {
   /* margin-top: 0%; */
   padding-top: 1rem;
}

.link-button {
  background-color: #2d3142;
  border-color: #B298DC;
  color: #f7f8ff
}

</style>
