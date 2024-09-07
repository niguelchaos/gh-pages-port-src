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
          title: "Jenga Fortress PC",
          subtitle: "Physics-based Multiplayer Duel",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"Download JengFortPC.zip", url: './ProjectDocuments/jfriplobbywaitingroom.zip'},
          ],
          descriptionComponent: "jenga-fortress-pc-desc"
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