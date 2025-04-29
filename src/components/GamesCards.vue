<template>
  <b-container fluid id="projects" class="">
    <!-- Projects-->
    <b-container class="projects-section p-0">
      <b-container class="projectcards-container" fluid>
        <b-row>
          <b-col
            class="proj-main-col"
            v-for="gamedevproj in gamedevProjects"
            :key="gamedevproj.id"
            xl="12"
            no-gutters
          >
            <project-card :project="gamedevproj"></project-card>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="proj-main-col">
        <b-button v-b-toggle.collapse-1 variant="primary">Show Older Projects</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-row>
            <b-col
              class="proj-main-col"
              v-for="gamedevproj in gamedevProjectsOld"
              :key="gamedevproj.id"
              xl="12"
              no-gutters
            >
              <project-card :project="gamedevproj"></project-card>
            </b-col>
          </b-row>
        </b-collapse>
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
      gamedevProjects: [
        {
          num: 8,
          course: "Personal Project",
          title: "Scarab Descent",
          text:
            "A Metroidvania FPS set in a vast desert ruin with a touch of sci-fi. A vertical slice blockout featuring 4 unique bosses, upgrades, and non-linear exploration.",
          highlightTitle: "Roles & Responsibilities",
          tech:
            "Blockout, Pacing, Lighting, Enemy AI, Player Abilities, Level Design Techniques, Chaos Destruction, GAS",
          roles: "Game & Level Design, Vertical Slice Blockout",
          link: "",
          imgsrc: "scarabdescent/covers/NoFogCover.png",
          detailslink: "/scarabdescent",
        },
        {
          num: 7,
          course: "Personal Project",
          title: "Jenga Fortress PC",
          text:
            "Main attempt to learn about multiplayer aspects as well as FPS-esque elements. Main achievements include basic authentication, a lobby system, syncing players within a game session, and general FPS character feel.",
          highlightTitle: "Highlights",
          tech: "Multiplayer, Lobby System, Unity Netcode",
          roles: "",
          link: "https://github.com/niguelchaos/JengaFortress_PC",
          imgsrc: "jengfortpc_multi.gif",
          detailslink: "/jengafortresspc",
        },
        {
          num: 6,
          course: "Experimental Game Design (Group Project)",
          title: "Jenga Fortress AR",
          text: "AR game where you explode fortresses made out of wooden blocks.",
          highlightTitle: "Highlights",
          tech: "Mobile AR Limitations, Physics",
          roles: "Game Design, Programming",
          link: "https://github.com/niguelchaos/JengaFortress",
          imgsrc: "https://www.youtube.com/embed/l_vUDjO9Uzw",
          detailslink: "/jengafortress",
        },
        {
          num: 5,
          course: "Game Engine Architecture",
          title: "Tron(1982) Replica",
          text:
            "Partial recreation of the light cycle minigame from Bally Midway's Tron, with a focus on architectural decisions. Due to time constraints, local multiplayer was implemented instead.",
          highlightTitle: "Challenges",
          tech: "C++, SDL, Architectural Design",
          roles: "Design, Programming",
          link: "https://github.com/niguelchaos/GEATron",
          imgsrc: "tron.gif",
          detailslink: "/tronreplica",
        },
        {
          num: 4,
          course: "Game Development (Group) Project",
          title: "Get Meowt of Here",
          text:
            'A local 2-player puzzler designed to elicit empathy between the players by highlighting the importance of diversity. Featuring 2 controllable cats within their own "world", players had to solve puzzles together to progress.',
          highlightTitle: "Highlights",
          tech: "Puzzle/Narrative Design, Satisfying External Needs",
          roles: "Design, Programming",
          link: "https://natashamangan.itch.io/get-meowt-of-here",
          imgsrc: "empathuzzler.png",
          detailslink: "/getmeowtofhere",
        },
      ],
      gamedevProjectsOld: [
        {
          num: 3,
          course: "Group Project",
          title: "Timeloop Metroidvania",
          text:
            "A metroidvania inspired by The Legend of Zelda: Majora's Mask and Hollow Knight involving a 3-day system. A joint collaboration with Fabian Fröding, whose portfolio is linked below.",
          highlightTitle: "Highlights",
          tech: "Unity, Camera Controls, State Machines",
          roles: "Design, Programming",
          link: "https://fabianfroding.github.io/",
          imgsrc: "timeloop.png",
          detailslink: "/timeloopmetroid",
        },
        {
          num: 2,
          course: "Product Service System Design",
          title: "Feel The Disaster",
          text:
            "A VR game made to teach the player the intricacies of recycling, requiring the player to recycle a milk carton correctly. My first Unity project, I had to learn Unity alongside the limitations of the Oculus Quest. Many mistakes were made.",
          highlightTitle: "Highlights",
          tech: "VR Best Practices, Oculus Quest Limitations, Learning Unity",
          roles: "Game & Level Design, Programming, Sound",
          link: "https://github.com/niguelchaos/FeelTheDisaster",
          imgsrc: "feelthedisaster.png",
          detailslink: "/feelthedisaster",
        },
        {
          num: 1,
          course: "Gameplay Design",
          title: "Touching Hearts (Board Game)",
          text:
            "Group project with a focus on prototyping and reflecting on design decisions. The 4 player card game had a dark but humourous theme, involving harvesting and trading organs to achieve their individual goals.",
          highlightTitle: "Highlights",
          tech: "Prototyping, Iteration",
          roles: "Design, Prototyping",
          link: "",
          imgsrc: "touchinghearts.png",
          detailslink: "/touchinghearts",
        },
        {
          num: 0,
          course: "Product Service System Design",
          title: "The Biggest Brain",
          text:
            "A simple 2-player button masher. Created using the frustratingly buggy Gameblox editor. My first game ever made. Surprisingly fun for the first 30 seconds.",
          highlightTitle: "Inspiration",
          tech: "Galaxy Brain meme",
          roles: "Design, Programming, Art",
          link: "https://gameblox.org/play/23256/",
          imgsrc: "biggestbrain/biggestbrainp2.png",
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
