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
          title: "Tron Replica",
          subtitle: "SDL Nightmare",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"", url: 'https://github.com/niguelchaos/GEATron'},
            {title:"Final Report", url: './ProjectDocuments/GEATronReport.pdf'},
            {title:"Mid-Term Presentation", url: './ProjectDocuments/MidtermTron.pdf'},
            {title:"Final Presentation", url: './ProjectDocuments/FinalPresentationTron.pdf'},
          ],
          
          descriptionComponent: "tron-replica-desc"
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