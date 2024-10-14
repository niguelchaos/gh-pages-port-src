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
          title: "Dummy Park: Visitor Web Application",
          subtitle: "A web application built using an agile process",
          mainImage: {name: "", index: 0},
          images: [],
          links: [
            {title:"", url: 'https://github.com/niguelchaos/dit192-team-4-visitor-app-fork'},
            {title:"Final Presentation", url: './ProjectDocuments/Dummypark_Final_Presentation.pdf'},
            {title:"Final Report", url: './ProjectDocuments/Dummypark_Postmortem.pdf'},
          ],
          descriptionComponent: "dummy-park-desc"
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