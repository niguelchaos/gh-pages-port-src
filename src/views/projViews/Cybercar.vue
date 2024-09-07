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
          title: "Autonomous \"Cybercar\": Intersection Handling ",
          subtitle: "Microservices, Docker, Haar Cascades, and different Levels of Testing",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title: "", url: 'https://github.com/niguelchaos/Cybercar-G5-copy'},
            {title:"Mid-term Presentation", url: './ProjectDocuments/CybercarConceptsAndSolutions.pdf'},
            {title:"Final Report", url: './ProjectDocuments/CybercarDocumentation.pdf'},
          ],
          descriptionComponent: "cybercar-desc"
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