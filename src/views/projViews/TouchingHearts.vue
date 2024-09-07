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
          title: "Touching Hearts",
          subtitle: "An Exercise in Prototyping",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"Final Presentation Slides", url: './ProjectDocuments/TouchingHeartsPp.pdf'},
           
          ],
          
          descriptionComponent: "touching-hearts-desc"
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