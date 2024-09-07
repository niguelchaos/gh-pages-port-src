<template>
    <div>
        <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
    </div>
</template>

<script>
import ProjectDetails from '@/components/projdetails/ProjectDetails.vue';
export default {
  components: { ProjectDetails },
  data: () => {
    return {
      projectDetails: {
          title: "Jenga Fortress",
          subtitle: "Physics-based Local Multiplayer AR Duel",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"", url: 'https://github.com/niguelchaos/JengaFortress'},
            {title:"Initial Pitches", url: './ProjectDocuments/JengaFortressPitches.pdf'},
            {title:"Game Report", url: './ProjectDocuments/JengaFortressReport.pdf'},
            {title:"Mid-term Presentation", url: './ProjectDocuments/JengaFortressMidPresentation.pdf'},
            {title:"Download JengFort.apk", url: './ProjectDocuments/JengFort.apk'},
          ],
          descriptionComponent: "jenga-fortress-desc"
      }
    }
  },
  mounted() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    }
  }
}
</script>