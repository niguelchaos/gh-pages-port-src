<template>
  <div>
    <ProjectDetails :projectDetails="projectDetails"></ProjectDetails>
  </div>
</template>

<script>
import ProjectDetails from "@/components/projdetails/ProjectDetails.vue";
export default {
  components: { ProjectDetails },
  data: () => {
    return {
      projectDetails: {
        title: "Scarab Descent",
        subtitle: "",
        // mainImage: { name: "", index: 0 },
        images: [],
        links: [{ title: "Download on Itch.io", url: "https://niguelchaos.itch.io/scarab-descent" }],
        descriptionComponent: "scarab-descent-desc",
      },
    };
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
