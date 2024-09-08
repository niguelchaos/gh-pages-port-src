<template>
  <b-container fluid id="projects" class="projects">
    <h1 class="project-header">Projects</h1>

    <b-container fluid class="project-divider">
      <hr id=dark-divider class="divider my-4" />
    </b-container>
    <!-- Projects-->
    <b-container class="projects-section p-0">
      <!-- <b-card no-body> -->
      <b-tabs class="projects-tabs" pills align="center">

        <b-tab title="Software Engineering">
          <b-container class="projectcards-container" fluid>
            <b-row>
              <b-col class="proj-main-col" v-for="softengproj in softengProjects" :key="softengproj.id" xl="12"
                no-gutters>
                <project-card :project="softengproj"></project-card>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>

        <b-tab title="Game Development" active>
          <b-container class="projectcards-container" fluid>
            <b-row>
              <b-col class="proj-main-col" v-for="gamedevproj in gamedevProjects" :key="gamedevproj.id" xl="12"
                no-gutters>
                <project-card :project="gamedevproj"></project-card>
              </b-col>
            </b-row>
          </b-container>

          <b-container class="proj-main-col">
            <b-button v-b-toggle.collapse-1 variant="primary">Show Older Projects</b-button>
            <b-collapse id="collapse-1" class="mt-2">
              <b-row>
                <b-col class="proj-main-col" v-for="gamedevproj in gamedevProjectsOld" :key="gamedevproj.id" xl="12"
                  no-gutters>
                  <project-card :project="gamedevproj"></project-card>
                </b-col>
              </b-row>
            </b-collapse>
          </b-container>


        </b-tab>

        <b-tab title="Miscellaneous">
          <b-container class="projectcards-container" fluid>
            <b-row>
              <b-col class="proj-main-col" v-for="miscproj in miscProjects" :key="miscproj.id" xl="12" no-gutters>
                <project-card :project="miscproj"></project-card>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>

      </b-tabs>
    </b-container>
  </b-container>
</template>

<script>
import ProjectCard from '@/components/cards/ProjectCard.vue'
export default {
  components: { ProjectCard },
  name: 'projects-section',
  data() {
    return {
      softengProjects: [
        {
          num: 4, course: 'Agile Development Processes', title: 'Dummy Park: Visitor Web Application', text: 'This project consisted of developing a visitor web app of a fictional amusement park in a self organizing team. The main focus of this project was to follow agile methodologies and principles, mainly a scrumban process. ',
          highlightTitle: "Highlights", tech: 'Agile Methodologies, Scrumban, Role Rotations', link: 'https://github.com/niguelchaos/dit192-team-4-visitor-app-fork', imgsrc: 'dummypark/overview.png', detailslink: "/dummypark"
        },
        {
          num: 3, course: 'Cyberphysical Systems: Systems of Systems', title: 'Autonomous Vehicles: Intersection Handling', text: 'Microservices developed and delivered for miniature vehicles, built on Raspberry Pi and Beagle Bone boards, to handle various traffic situations of an intersection. I created a PID controller for Adaptive Cruise Control.',
          highlightTitle: "Highlights", tech: 'C++, Docker, OpenCV, Git', link: 'https://github.com/niguelchaos/Cybercar-G5-copy', imgsrc: 'kiwicaractual.jpg', detailslink: "/cybercar"
        },
        {
          num: 2, course: 'Distributed Systems', title: 'Java Project Dependency Visualizer', text: 'Visualizer which illustrates the dependencies of a public Github Java Project. The backend was developed to be run on 5 separate physical systems across a WLAN network.',
          highlightTitle: "Highlights", tech: 'MongoDB, Vue.js, Node.js, D3.js, Git', link: 'https://github.com/TiEkl/GrOneContinued', imgsrc: 'gronecropped.gif', detailslink: ""
        },
        {
          num: 1, course: 'Systems Development', title: 'Autonomous Vehicles: Parallel Parking', text: 'Arduino project of using a miniature vehicle to parallel park itself. Software was implemented and deployed on the self-driving Arduino minicar. We had to build the car ourselves with the provided parts. Best part of the project.',
          highlightTitle: "Highlights", tech: 'Arduino(C/C++), OpenCV', link: 'https://github.com/Mokkants/group3car', imgsrc: 'personalityparapark.png', detailslink: ""
        },
        {
          num: 0, course: 'Team Programming', title: 'Java Library Manager', text: 'A library management system tasked with book keeping, customer handling, and book lending.',
          highlightTitle: "Highlights", tech: 'Java, JavaFX, PostgreSQL, Git', link: 'https://gitlab.com/TeamTen/DIT092-LibSys', imgsrc: 'librarymanager.png', detailslink: ""
        }
      ],
      gamedevProjects: [
        {
          num: 7, course: 'Personal Project', title: 'Jenga Fortress PC', text: 'Main attempt to learn about multiplayer aspects as well as FPS-esque elements. Main achievements include basic authentication, a lobby system, syncing players within a game session, and general FPS character feel.',
          highlightTitle: "Highlights", tech: 'Multiplayer, Lobby System, Unity Netcode', roles: '', link: 'https://github.com/niguelchaos/JengaFortress_PC', imgsrc: 'jengfortpc_multi.gif', detailslink: "/jengafortresspc"
        },
        {
          num: 6, course: 'Experimental Game Design (Group Project)', title: 'Jenga Fortress AR', text: 'AR game where you explode fortresses made out of wooden blocks.',
          highlightTitle: "Highlights", tech: 'Mobile AR Limitations, Physics', roles: 'Game Design, Programming', link: 'https://github.com/niguelchaos/JengaFortress', imgsrc: 'https://www.youtube.com/embed/l_vUDjO9Uzw', detailslink: "/jengafortress"
        },
        {
          num: 5, course: 'Game Engine Architecture', title: 'Tron(1982) Replica', text: 'Partial recreation of the light cycle minigame from Bally Midway\'s Tron, with a focus on architectural decisions. Due to time constraints, local multiplayer was implemented instead.',
          highlightTitle: "Challenges", tech: 'C++, SDL, Architectural Design', roles: 'Design, Programming', link: 'https://github.com/niguelchaos/GEATron', imgsrc: 'tron.gif', detailslink: "/tronreplica"
        },
        {
          num: 4, course: 'Game Development (Group) Project', title: 'Get Meowt of Here', text: 'A local 2-player puzzler designed to elicit empathy between the players by highlighting the importance of diversity. Featuring 2 controllable cats within their own "world", players had to solve puzzles together to progress.',
          highlightTitle: "Highlights", tech: 'Puzzle/Narrative Design, Satisfying External Needs', roles: 'Design, Programming', link: 'https://natashamangan.itch.io/get-meowt-of-here', imgsrc: 'empathuzzler.png', detailslink: "/getmeowtofhere"
        },
        {
          num: 3, course: 'Group Project', title: 'Timeloop Metroidvania', text: 'A metroidvania inspired by The Legend of Zelda: Majora\'s Mask and Hollow Knight involving a 3-day system. A joint collaboration with Fabian Fröding, whose portfolio is linked below.',
          highlightTitle: "Highlights", tech: 'Unity, Camera Controls, State Machines', roles: 'Design, Programming', link: 'https://fabianfroding.github.io/', imgsrc: 'timeloop.png', detailslink: "/timeloopmetroid"
        },
        {
          num: 2, course: 'Product Service System Design', title: 'Feel The Disaster', text: 'A VR game made to teach the player the intricacies of recycling, requiring the player to recycle a milk carton correctly. My first Unity project, I had to learn Unity alongside the limitations of the Oculus Quest. Many mistakes were made.',
          highlightTitle: "Highlights", tech: 'VR Best Practices, Oculus Quest Limitations, Learning Unity', roles: 'Game & Level Design, Programming, Sound', link: 'https://github.com/niguelchaos/FeelTheDisaster', imgsrc: 'feelthedisaster.png', detailslink: "/feelthedisaster"
        },

      ],
      gamedevProjectsOld: [
        {
          num: 1, course: 'Gameplay Design', title: 'Touching Hearts (Board Game)', text: 'Group project with a focus on prototyping and reflecting on design decisions. The 4 player card game had a dark but humourous theme, involving harvesting and trading organs to achieve their individual goals.',
          highlightTitle: "Highlights", tech: 'Prototyping, Iteration', roles: 'Design, Prototyping', link: '', imgsrc: 'touchinghearts.png', detailslink: "/touchinghearts"
        },
        {
          num: 0, course: 'Product Service System Design', title: 'The Biggest Brain', text: 'A simple 2-player button masher. Created using the frustratingly buggy Gameblox editor. My first game ever made. Surprisingly fun for the first 30 seconds.',
          highlightTitle: "Inspiration", tech: 'Galaxy Brain meme', roles: 'Design, Programming, Art', link: 'https://gameblox.org/play/23256/', imgsrc: 'biggestbrain/biggestbrainp2.png', detailslink: ""
        }
      ],
      miscProjects: [
        {
          num: 1, course: 'Interactive Storytelling', title: 'The Sapling', text: 'An animated short about a sapling finding happiness around it. The entire team never used Blender before this course. I designed the environment, modelled the trees, and animated the lighting, trees, and camera from 2:50 until the end.',
          highlightTitle: "Highlights", tech: 'Blender, Shaders, Working with 5 FPS Viewports', roles: 'Sound Drafting, Shaders, Modelling, Animation, Cinematography', link: '', imgsrc: 'https://www.youtube.com/embed/DFPqqOFhVUo', detailslink: ""
        },
        {
          num: 0, course: 'Expression with 2D Animation 1', title: 'Original Character Animation', text: 'Unity integration of an original character\'s animation I created, focusing on the quality of character dynamics following the 12 Principles of Animation in order to convey personality through animation.',
          highlightTitle: "Highlights", tech: 'Krita, Understanding Animation Principles', roles: 'Character Design & Animation, Programming, Background Art', link: 'https://github.com/niguelchaos/RaphlUnityIntegration', imgsrc: 'raphlanim.gif', detailslink: "/raphlanim"
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: #d8dcff;
  padding-top: 3rem;
  align-content: center;
  justify-content: center;
}

.project-header {
  font-weight: bold;
  font-size: 3.2rem;
}

.project-divider {
  padding-left: 15% !important;
  padding-right: 15% !important;
}

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
  padding-left: .5rem;
  padding-right: .5rem;
}
</style>