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
        title: "WorldGenerator",
        subtitle: "3D Environment Plugin Development for Repli5",
        mainImage: { name: "https://repli5.com/worldgenerator/", index: 0 },
        images: [],
        links: [],
        descriptionComponent: "world-generator-desc",
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
