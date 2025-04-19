<template>
  <b-container fluid id="projects" class="">
    <!-- Projects-->
    <b-container class="projects-section p-0">
      <b-container class="projectcards-container" fluid>
        <b-row>
          <b-col
            class="proj-main-col"
            v-for="softengproj in softengProjects"
            :key="softengproj.id"
            xl="12"
            no-gutters
          >
            <project-card :project="softengproj"></project-card>
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
      softengProjects: [
        {
          num: 5,
          course: "Repli5, 3D Editor Development",
          title: "WorldGenerator",
          text:
            "A Blender addon to design and create 3D scenes interactively, built to train and test autonomous solutions faster.",
          highlightTitle: "Highlights",
          tech: "Blender Plugin Development, 3D Editor Tools, UI/UX, Agile",
          link: "https://repli5.com/worldgenerator/",
          imgsrc: "wg/wg_cover.png",
          detailslink: "/worldgenerator",
        },
        {
          num: 4,
          course: "Agile Development Processes (Group Project)",
          title: "Dummy Park: Visitor Web Application",
          text:
            "This project consisted of developing a visitor web app of a fictional amusement park in a self organizing team. The main focus of this project was to follow agile methodologies and principles, mainly a scrumban process. ",
          highlightTitle: "Highlights",
          tech: "Agile Methodologies, Scrumban, Role Rotations",
          link: "https://github.com/niguelchaos/dit192-team-4-visitor-app-fork",
          imgsrc: "dummypark/overview.png",
          detailslink: "/dummypark",
        },
        {
          num: 3,
          course: "Cyberphysical Systems: Systems of Systems (Group Project)",
          title: "Autonomous Vehicles: Intersection Handling",
          text:
            "Microservices developed and delivered for miniature vehicles, built on Raspberry Pi and Beagle Bone boards, to handle various traffic situations of an intersection. I created a PID controller for Adaptive Cruise Control.",
          highlightTitle: "Highlights",
          tech: "C++, Docker, OpenCV, Git",
          link: "https://github.com/niguelchaos/Cybercar-G5-copy",
          imgsrc: "kiwicaractual.jpg",
          detailslink: "/cybercar",
        },
        {
          num: 2,
          course: "Distributed Systems (Group Project)",
          title: "Java Project Dependency Visualizer",
          text:
            "Visualizer which illustrates the dependencies of a public Github Java Project. The backend was developed to be run on 5 separate physical systems across a WLAN network.",
          highlightTitle: "Highlights",
          tech: "MongoDB, Vue.js, Node.js, D3.js, Git",
          link: "https://github.com/TiEkl/GrOneContinued",
          imgsrc: "gronecropped.gif",
          detailslink: "",
        },
        {
          num: 1,
          course: "Systems Development (Group Project)",
          title: "Autonomous Vehicles: Parallel Parking",
          text:
            "Arduino project of using a miniature vehicle to parallel park itself. Software was implemented and deployed on the self-driving Arduino minicar. We had to build the car ourselves with the provided parts. Best part of the project.",
          highlightTitle: "Highlights",
          tech: "Arduino(C/C++), OpenCV",
          link: "https://github.com/Mokkants/group3car",
          imgsrc: "personalityparapark.png",
          detailslink: "",
        },
        {
          num: 0,
          course: "Team Programming (Group Project)",
          title: "Java Library Manager",
          text:
            "A library management system tasked with book keeping, customer handling, and book lending.",
          highlightTitle: "Highlights",
          tech: "Java, JavaFX, PostgreSQL, Git",
          link: "https://gitlab.com/TeamTen/DIT092-LibSys",
          imgsrc: "librarymanager.png",
          detailslink: "",
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
