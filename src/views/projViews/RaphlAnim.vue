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
          title: "Original Character Animation",
          subtitle: "His name's Raphl apparently",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"", url: 'https://github.com/niguelchaos/RaphlUnityIntegration'},
            {title:"RaphlUnityExe.zip", url: './ProjectDocuments/RaphlAnimExe.zip'},
          ],
          descriptionComponent: "raphl-anim-desc"
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