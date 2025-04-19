<template>
  <b-container fluid id="projects" class="">
    <!-- Projects-->
    <b-container class="projects-section p-0">
      <b-container class="projectcards-container" fluid>
        <b-row>
          <b-col
            class="proj-main-col"
            v-for="miscproj in miscProjects"
            :key="miscproj.id"
            xl="12"
            no-gutters
          >
            <project-card :project="miscproj"></project-card>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
import ProjectCard from "@/components/cards/ProjectCard.vue";
export default {
  components: { ProjectCard },
  name: "projects-section",
  data() {
    return {
      miscProjects: [
        {
          num: 1,
          course: "Interactive Storytelling",
          title: "The Sapling",
          text:
            "An animated short about a sapling finding happiness around it. The entire team never used Blender before this course. I designed the environment, modelled the trees, and animated the lighting, trees, and camera from 2:50 until the end.",
          highlightTitle: "Highlights",
          tech: "Blender, Shaders, Working with 5 FPS Viewports",
          roles: "Sound Drafting, Shaders, Modelling, Animation, Cinematography",
          link: "",
          imgsrc: "https://www.youtube.com/embed/DFPqqOFhVUo",
          detailslink: "",
        },
        {
          num: 0,
          course: "Expression with 2D Animation 1",
          title: "Original Character Animation",
          text:
            "Unity integration of an original character's animation I created, focusing on the quality of character dynamics following the 12 Principles of Animation in order to convey personality through animation.",
          highlightTitle: "Highlights",
          tech: "Krita, Understanding Animation Principles",
          roles: "Character Design & Animation, Programming, Background Art",
          link: "https://github.com/niguelchaos/RaphlUnityIntegration",
          imgsrc: "raphlanim.gif",
          detailslink: "/raphlanim",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  background-color: #d8dcff;

  align-items: center;
  justify-content: center;
  align-self: center;
  /* width: auto; */
}

/* @media (max-width: 430px) {
  .projects-section {
    padding-right: 0%;
    padding-left: 0%;
    padding: 0;
    margin: 0;
  }
} */

.proj-main-col {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
