<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="12">
          <p class="font-italic text-center">
            This page is a work in progress. It will be updated in due time.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="6">
          <h4>Metroidvania Mechanics</h4>
          <p>
            Ability Gating, Optional Levels, Boss Battles, and Exploration were all considered during multiple stages of
            design.
          </p>
        </b-col>
        <b-col lg="6">
          <!-- <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>
          </div> -->
        </b-col>

        <b-col lg="6">
          <!-- <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>
          </div> -->
        </b-col>
        <b-col lg="6">
          <h4>Non Linear Levels</h4>
          <p>
            To support the freedom of exploration, players can choose to go through different routes.
            Different routes are gated by abilities to provide a sense of progression.
          </p>
        </b-col>

        <b-col lg="6">
          <h4>Exploration and Combat</h4>
          <p>
            Following classic metroidvania mechanics, mastery of abilities are made to support both player exploration
            and combat.
          </p>
        </b-col>
        <b-col lg="6">
          <!-- <div>
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="0">
              <b-carousel-slide v-for="image in this.images" :key="image.url" caption=""
                :img-src="image.url"></b-carousel-slide>
            </b-carousel>
          </div> -->
        </b-col>

      </b-row>
    </b-container>

    <h2>Blockout Timelapse</h2>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="700">
          <b-carousel-slide v-for="image in this.timelapse" :key="image.url" :caption="image.caption"
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
      <!-- <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="0.01">
          <b-carousel-slide v-for="image in this.blockouts" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div> -->
    </b-col>

    <h2>Overview</h2>
    <p>"Scarab Descent" is a 3D first-person shooter set in a vast desert ruin, heavily inspired by the aesthetics of
      Egyptian mythology with a touch of sci-fi. The game merges FPS mechanics with Metroidvania-style exploration,
      where players must uncover the mysteries of an ancient, insectoid civilization.
    </p>

    <p>
      <b>Genre</b>: Action-Adventure, Metroidvania <br>
      <b>Platform</b>: Windows PC <br>
      <b>Engine</b>: Unreal Engine 5<br>
      <b>Tools Used</b>: UE5, Cubegrid, Chaos Destruction <br>
      <b>Team Size</b>: 2 <br>
      <b>Role</b>: Blockout, Lighting, Pacing, Player Scripting <br>
    </p>

    <h2>Goals & Restrictions</h2>
    <p><b>Goals</b></p>
    <ul>
      <li> A MVP, self contained area encompassing all the pillars of this Metroidvania project.</li>
      <li> Take heavy inspiration from Hollow Knight’s map, and make it 3D.</li>
    </ul>
    <p><b>Personal Goals</b></p>
    <ul>
      <li> Learn more about Node-based Level Design, and how metroidvania levels can be designed.</li>
      <li> Practice iterating and refining the level design pipeline.</li>
      <li> Focus on the creation of whiteboxing environments.</li>
    </ul>

    <p><b>Requirements</b></p>
    <ul>
      <li>Exploration</li>
      <ul>
        <li>Non Linear: At least 2 paths to reach different areas.</li>
        <li>Ability Gated: One or more gated area that requires a skill to be reachable.</li>
        <li>Metroidvania-esque: The map should encourage backtracking.</li>
      </ul>
    </ul>

    <ul>
      <li>Combat</li>
      <ul>
        <li>At least one Boss which is tougher than other enemies.</li>
        <li>Multiple combat encounters to maintain engagement.</li>
      </ul>
    </ul>

    <ul>
      <li>Progression</li>
      <ul>
        <li>Player should be able to acquire an optional upgrade or skill that is rewarded by exploration.</li>
        <li>New skills should be usable in both exploration and combat.</li>
      </ul>
    </ul>

    <ul>
      <li>Others</li>
      <ul>
        <li>The complete map (world) is a large-sized level containing multiple rooms, exploring the world with distinct
          areas.</li>
        <li> This is set in a First person POV with mechanics such as running, jumping, shooting, and different
          abilities such as
          dashing.</li>
        <li> Map should take into account the desert theme.</li>
      </ul>
    </ul>

    <h2>Initial Brief</h2>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="3000">
          <b-carousel-slide v-for="image in this.brief" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>

    <h2>Layout</h2>
    <p>Here is the final layout and the sections.</p>
    <b-img :src="this.finallayout" fluid-grow alt="Fluid image"></b-img>
    <b-img :src="this.topdownblockout" fluid-grow alt="Fluid image"></b-img>


    <h2>Process</h2>
    <h3>Step 1: Research</h3>
    <p>
    After establishing the requirements and the general goals of the game, I began by looking at how other metroidvanias structured their game world. 
    I tried focusing on FPS metroidvanias, but there were not many. In the end, I decided to take a deeper look at Metroid Prime: Remastered and Hollow Knight. 
    This was because Prime was a clear standard in First Person Metroidvanias, while our game was initially inspired by Hollow Knight.
    I examined how the player moved through the world maps from point to point to understand how the maps were built. 
  </p>

  <p>
    When looking through the maps, I had the questions below in mind:
    <ul>
      <li> What common elements exist between Prime and HK's maps, despite one being 2D and another being 3D?</li>
      <li> How does the different themes affect the level design in their areas?</li>
      <li> How does the level design assist the feeling of progression, and how does it support different methods of traversal?</li>
      <li> How does the level design assist the feeling of ability progression and mastery?</li>
      <li> What techniques are used to maintain engagement when backtracking?</li>
    </ul>
  </p>

  <b-img :src="this.hkpathing" fluid-grow alt="Fluid image"></b-img>




      <!-- Observations
  Nodes and Edges
  Rooms can be categorized into nodes and edges
  Metroid Prime is clearer in this sense - Edges are often long corridors, Nodes are larger, open space used for large fights or set pieces.
  Prime often lets the player see most of, if not all, the “gates” upon entering the room.  
  Central Hub
  Large rooms are often “crossroads”
  Generally expands in verticality too
  Organic vs synthetic is also reflected in the layout
  Pirate Ship and constructed areas is angular, longer corridors, square-er, symmetrical
  Organic areas like forests have more curves, jagged edges
  Mines are rockier despite organic
  Final Boss can be reached in early game, generally locked by a certain skill/item.
  This item can be retrieved close
  Whether you can defeat it is up to skill.
  Placing the final boss early gives the player a goal throughout the game.
  Prime uses gate shooting mechanic to hard gate players from entering areas
  Hollow knight uses soft lock mechanics in some areas, such as the “fog of darkness”

  FP 3D vs 2D
  From a top down perspective, Metroid Prime is much more linear
  Prime has puzzles that takes advantage of 3D
  Shooting broken bricks that drop platforms down
  Different perspectives needed to reveal a puzzle
  Immersiveness comes from not only 3D itself, but the helmet and diegetic UI
  When explosions and effects happen, they light up the helmet

  Questions
  We know the flow should be nonlinear, and players can take multiple paths(or all of them) to reach the final boss. How?
  What common elements are there in metroidvanias in general that we should (or shouldnt) replicate?
  On the same path of thinking, what makes Prime and Hollow Knight different other than their perspectives?
  How are enemies placed?
  Since Prime doesnt have melee, how do they handle enemies getting too close?
  Similarly, how will we handle enemies in terms of behaviour and positioning since we arent too sure if we have melee?
  Platforming isn’t required to be a metroidvania, but how much of it should we have? -->

    <h3>Step 2: Design Document</h3>
    <h3>Step 3: References</h3>
    <h3>Step 4: 2D Map</h3>
    <h3>Step 5: Blockout, Iteration and Feedback</h3>
    <h4>Scoping Down</h4>

    <p>After several iterations and feedback, I realized that I had bitten off too much - I was essentially trying to
      create an entire world map. the final layout was smaller, puzzles were removed, and implemented mechanics were
      fewer.
      The general scope was reduced to maintain the self imposed time limit. Instead, I decided to focus and iterate
      more on several rooms.
    </p>

    <h2>Thought Processes & Design Decisions</h2>

    <h2>Gallery</h2>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.blockouts" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.layouts" :key="image.url" :caption="image.caption"
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>

  </b-container>
</template>

<script>

export default {

  components: {
  },
  data() {
    return {
      images: [

      ],
      blockouts: [
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00005.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00011.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00012.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00016.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00019.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00024.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00028.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00030.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00034.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00036.png') },
        { url: require('@/assets/scarabdescent/screenshots/HighresScreenshot00064.png') },
      ],
      timelapse: [
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t1.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t2.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t3.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t4.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t5.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t6.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t7.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t8.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t9.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t10.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t11.png') },
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t12.png') },
      ],
      processimages: [
      ],
      layouts: [
      { url: require('@/assets/scarabdescent/layouts/draft.png'), caption: "Draft"},
      { url: require('@/assets/scarabdescent/layouts/v1.png'), caption: "V1" },
      { url: require('@/assets/scarabdescent/layouts/v2.png'), caption: "V2" },
      { url: require('@/assets/scarabdescent/layouts/v3.png'), caption: "V3" },
      { url: require('@/assets/scarabdescent/layouts/v4.png'), caption: "V4" },
      { url: require('@/assets/scarabdescent/layouts/v5.png'), caption: "V5" },
      { url: require('@/assets/scarabdescent/layouts/FinalLayout.png'), caption: "Final" },
      ],
      finallayout: require('@/assets/scarabdescent/layouts/FinalLayout.png'),
      topdownblockout: require('@/assets/scarabdescent/screenshots/topdown.png'),
      brief: [
        { url: require('@/assets/scarabdescent/brief/1.png') },
        { url: require('@/assets/scarabdescent/brief/2.png') },
        { url: require('@/assets/scarabdescent/brief/3.png') },
        { url: require('@/assets/scarabdescent/brief/4.png') },
        { url: require('@/assets/scarabdescent/brief/5.png') },
        { url: require('@/assets/scarabdescent/brief/6.png') },
        { url: require('@/assets/scarabdescent/brief/8.png') },
      ],
      hkpathing: require('@/assets/scarabdescent/research/hkpathing.png'),

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
