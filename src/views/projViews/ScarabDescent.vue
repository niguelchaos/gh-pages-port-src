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
        title: "Scarab Descent",
        subtitle: "A FPS Metroidvania inspired by Hollow Knight and Metroid Prime, in collaboration with Fabian Fröding",
        // mainImage: { name: "", index: 0 },
        images: [],
        links: [
          // {title:"WorldGenerator Product Details", url: 'https://repli5.com/worldgenerator/'},
        ],
        descriptionComponent: "scarab-descent-desc"
      }
    }
  },
  mounted() {
    this.scrollToTop()
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>