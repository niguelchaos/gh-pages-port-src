<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="6">
          <h3>Summary</h3>
          <p>
            Frontend-focused developer creating a comprehensive road and environment design
            plugin for Blender, built for faster training and testing of autonomous solutions.
            <br>
            Specialized in user interface design, tool development, and workflow optimization within the Blender
            ecosystem.
            Additional expertise as a Scrum Master and UI Facilitator, contributing to efficient project management and
            enhanced user experiences.
          </p>
          <p>
            My responsibilities gradually expanded into 3 categories: Developer, Scrum Master, and UI Designer.
          </p>
        </b-col>

        <b-col lg="6">
          <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>

          </div>
        </b-col>
      </b-row>
    </b-container>

    <h3>Key Skills</h3>
    <ul>
      <li>Blender Plugin Development</li>
      <li>User Interface Design</li>
      <li>Requirements Elicitation</li>
      <li>Agile Methodologies</li>
      <li>Process Improvement</li>
    </ul>

    <h3>Key Contributions</h3>
    <p>
      Led the frontend development of a Blender plugin for road and environment design.
      <br>
      Focused on creating intuitive tools and interfaces to enhance user experience and productivity alongside the UI
      Designer and users.
    </p>
    <ol>
      <li>Tool Development</li>
      <ul>
        <li>Road & Region Editing Tools</li>
        <li>Building Generator System</li>
        <li>Selection System</li>
        <li>Preset System</li>
      </ul>
      <br>

      <li>User Interface & Experience</li>
      <ul>
        <li>Designed and implemented custom UI within Blender</li>
        <li>Implemented intuitive tool icons</li>
        <li>Design and implemented beta features toggle system</li>
      </ul>
      <br>

      <li>Data Management</li>
      <ul>
        <li>Project Save/Load</li>
        <li>Copy/Paste</li>
        <li>Import/Export</li>
        <li>Asset Management & Packing</li>
      </ul>
      <br>

      <li>Documentation and Quality Assurance</li>
      <ul>
        <li>Designed & implemented a one-click documentation generation system</li>
        <li>Produced comprehensive product documentation</li>
        <li>Conducted QA and testing procedures</li>
        <li>Led sprint ceremonies & backlog refinement sessions</li>
      </ul>
      <br>

      <li>Workflow Optimization</li>
      <ul>
        <li>Implemented a CI/CD pipeline button to easily generate releases.</li>
        <li>Streamlined process improvement initiatives</li>
        <li>Facilitated requirements elicitation sessions</li>
      </ul>
    </ol>

    <h3>Additional Responsibilities</h3>
    <ul>
      <li><b>Scrum Master:</b> Led agile development processes, improving team efficiency.</li>
      <li><b>UI Facilitator:</b> Collaborated with UX designers to enhance user satisfaction.</li>
    </ul>

    <h3>Technical Skills</h3>
    <ul>
      <li>Programming: Python, Blender Python API</li>
      <li>Agile Tools: JIRA, Notion</li>
      <li>Bitbucket Pipelines, Docker</li>
      <li>UI/UX: Blender UI system, Figma</li>
      <li>Google Sheets, Docs</li>
      <li>Version Control - Git</li>
    </ul>
  </b-container>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import LightBox from 'vue-image-lightbox'
export default {
  // name: 'swiper-example-thumbs-gallery',
  // title: 'Thumbs gallery with Two-way control',

  components: {
    // Swiper,
    // SwiperSlide,
    // LightBox
  },
  data() {
    return {
      images: [
        { url: require('@/assets/wg/wg_editor.jpeg') },
        { url: require('@/assets/wg/wg_cover.png') },
      ],
      processimages: [

      ]

    }
  },
  mounted() {
    // console.log(this.$router.currentRoute.path);
  }
}
</script>


<style scoped>
.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}

.link-button {
  background-color: #5c629900;
  border-color: #B298DC;
}

.link-item {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.details-image {
  width: 100%;
  height: auto;
}

.description-container {
  padding-bottom: 5%;
}
</style>
