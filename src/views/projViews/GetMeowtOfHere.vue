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
            title: "Get Meowt Of Here",
            subtitle: "Local Multiplayer Empathetic Puzzler",
            mainImage: {name: "", index: 0},
            images: [],
            links: [
              {title:"Itch Page", url: 'https://natashamangan.itch.io/get-meowt-of-here'},
              {title:"Game Report", url: './ProjectDocuments/GetMeowtofHereReport.pdf'},
            ],
            descriptionComponent: "get-meowt-of-here-desc"
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