<template>
  <b-container id="reports">
    <name-header></name-header>

    <b-container class="details">
      <b-container class="details-item">
        <h4>Academic & Research Reports</h4>
        <p>
          Click on the titles to read each report.
        </p>
        <hr id="dark-divider" class="divider my-4" />

        <!-- <b-row>
          <b-col class="link-col">
            <a class="link-item float-left">
              <b-button class="link-button" href="./AcademicReports/DecisiveFinishers.pdf" target="_blank">Gameplay Style: Decisive Finishers</b-button>
            </a>

            <a class="link-item float-left">
              <b-button class="link-button" href="./AcademicReports/KaraokeAsGame.pdf" target="_blank">Karaoke as a Game</b-button>
            </a>

            <a class="link-item float-left">
              <b-button class="link-button" href="https://gupea.ub.gu.se/bitstream/2077/67100/1/gupea_2077_67100_1.pdf" target="_blank">Evaluating the Trade-offs of Diversity-Based Test Prioritization: An Experiment</b-button>
            </a>
          </b-col>
        </b-row> -->

        <b-container class="reportcards-container" fluid>
          <b-row>
            <b-col class="rep-main-col" v-for="report in reports" :key="report.id" xl="12" no-gutters>
              <report-card :report="report"></report-card>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
import NameHeader from "@/components/NameHeader.vue";
import ReportCard from "@/components/cards/ReportCard.vue";

export default {
  // name: "resume",
  components: { NameHeader, ReportCard },
  data() {
    return {
      reports: [
        {
          num: 3,
          course: "Master Thesis",
          title:
            "Player Environmental Awareness: Rules of Thumb for Environmental Storytelling in Role-Playing Games",
          text: "This thesis explored how different game aspects and techniques are used to support environmental storytelling through game analyses and in-depth interviews. Using a grounded theory inspired approach, the data was open coded and distilled into practical Rules of Thumb.",
          highlightTitle: "Highlights",
          tech: "Environmental Storytelling Techniques, Level Design, Game Design, RPGs, Expert Interviews",
          link: "https://gupea.ub.gu.se/handle/2077/74250",
          docs: [
            {
              title: "Final Presentation.pdf",
              link: "./AcademicReports/ReportDocuments/MscThesisFinalPresentation.pdf",
            },
          ],
        },
        {
          num: 2,
          course: "Gameplay Design",
          title: "Gameplay Style: Decisive Finishers",
          text: "Explorations of a gameplay pattern identified in a wide range of games.",
          highlightTitle: "Highlights",
          tech: "MDA Mechanics, Gameplay Patterns and Styles, Gameplay Style Modulation Consequences",
          link: "./AcademicReports/DecisiveFinishers.pdf",
          docs: [],
        },
        {
          num: 1,
          course: "Introduction to Game Design",
          title:
            "Karaoke - Behavioural changes of a Non-Game considered as a Game",
          text: "Where I am forced to consider, if you will, hypothetically, that karaoke is a game.",
          highlightTitle: "Highlights",
          tech: "Game Models, Gamification, Mechanics, Role Playing",
          link: "./AcademicReports/KaraokeAsGame.pdf",
          docs: [],
        },
        {
          num: 0,
          course: "Bachelor Thesis",
          title:
            "Evaluating the Trade-offs of Diversity-Based Test Prioritization: An Experiment",
          // text: "Jaccard. Very nice. Fast and good on the Unit level. But thats nothing look at NCD. Nice jesus NCD is really super. But wait you ain't seen SS yet. Impressive, very nice. Lets see Random's performance. Look at that speed, the ignorance of the test contents. Oh my god its so cheap too- ",
          text: "This study investigates a range of Diversity Test Prioritization Techniques through a fractional factorial experiment, synthesizing the newfound knowledge into recommendations.",
          highlightTitle: "Highlights",
          tech: "Diversity-based Testing, Test Case Prioritization, Natural Language Processing",
          link: "https://gupea.ub.gu.se/bitstream/2077/67100/1/gupea_2077_67100_1.pdf",
          docs: [
            {
              title: "Progress Presentation.pdf",
              link: "./AcademicReports/ReportDocuments/BscThesisProgressPresentation.pdf",
            },
            {
              title: "Final Presentation.pdf",
              link: "./AcademicReports/ReportDocuments/BscThesisFinalPresentation.pdf",
            },
          ],
        },
      ],
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

<style scoped>
.reportcards-container {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
}

.rep-main-col {
  padding-right: 0.1rem;
  padding-left: 0.1rem;
}

.details {
  display: flex;
  flex-direction: column;

  color: #dfe2ff;
  padding-bottom: 7rem;
  padding-right: 0.1rem;
  padding-left: 0.1rem;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-items: center;
}

.details-content {
  align-content: left;
  align-items: left;
  align-self: left;
  justify-items: left;
}

.details-item {
  padding-bottom: 3rem;
}

#heading-divider {
  /* height: 10px; */
  background: #6c759e;
}

.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}

.link-button {
  color: #e9edff;
  background-color: #5c6299;
  margin-right: 1rem;
  font-size: 1rem;
}

.link-item {
  /* margin-right: 1rem; */
  margin-bottom: 1rem;
}
</style>