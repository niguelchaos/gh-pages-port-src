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
          title: "Feel The Disaster",
          subtitle: "Title actually describes game's development",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"", url: 'https://github.com/niguelchaos/FeelTheDisaster'},
            {title:"Final Presentation Poster", url: './ProjectDocuments/FeelTheDisasterdarkplain.pdf'},
          ],
          descriptionComponent: "feel-the-disaster-desc"
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