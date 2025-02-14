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

    <div class="my-4"></div> <!-- Spacer with margin -->

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

    <div class="my-4"></div> <!-- Spacer with margin -->

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

    <div class="my-4"></div> <!-- Spacer with margin -->

    <h2>Objective</h2>
    <p>Defeat the Final Boss.</p>

    <h2>Layout</h2>
    <p>Here is the final layout and the sections.</p>
    <b-col lg="6">
      <b-img :src="this.annotatedlayout" fluid-grow alt="Fluid image"></b-img>
    </b-col>

    <div class="my-4"></div> <!-- Spacer with margin -->


    <h2>Process</h2>
    <h3>Step 1: Research</h3>
    <p>
      After establishing the requirements and the general goals of the game, I began by looking at how other
      metroidvanias structured their game world.
      I tried focusing on FPS metroidvanias, but there were not many. In the end, I decided to take a deeper look at
      Metroid Prime: Remastered and Hollow Knight.
      This was because Prime was a clear standard in First Person Metroidvanias, while our game was initially inspired
      by Hollow Knight.
      I examined how the player moved through the world maps from point to point to understand how the maps were built.
    </p>

    <p>
      When looking through the maps, I had the questions below in mind:
    <ul>
      <li> What common elements exist between Prime and HK's maps, despite one being 2D and another being 3D?</li>
      <li> How does the different themes affect the level design in their areas?</li>
      <li> How does the level design assist the feeling of progression, and how does it support different methods of
        traversal?</li>
      <li> How does the level design assist the feeling of ability progression and mastery?</li>
      <li> What techniques are used to maintain engagement when backtracking?</li>
    </ul>
    </p>

    <p>
      I also analyzed the path players took from start to end of Hollow Knight and Metroid Prime.
      More specifically, I traced the path a speedrun took for Hollow Knight, and traced the path the IGN Walkthrough of
      Metroid Prime took to 100% the game.
      Although it is not exactly a fair comparison, I specifically did this to compare the differences between
      speedrunning and a more extensive playthrough to gain insight into both in a limited amount of time.
    </p>
    <p> Notes:</p>
    <ul>
      <li> Speedruns clearly have much less backtracking, and the paths which do tend to be in the hub area.</li>
      <li> There are generally smaller hubs which let the player backtrack less before encountering a save
        point/resting area, especially during early game.
        Late game backtracking tends to become longer and longer, not just because of area, but also because gated
        areas are intentionally placed in previous areas.
      </li>
      <li> Players are generally better rewarded for exploring more, which is correlated to more backtracking.</li>
    </ul>
    <b-row>
      <b-col lg="6">
        <b-img :src="this.hkpathing" fluid-grow alt="Fluid image"></b-img>
      </b-col>
      <b-col lg="6">

        <b-img :src="this.primepathing" fluid-grow alt="prime path"></b-img>
      </b-col>
    </b-row>

    <div class="my-4"></div> <!-- Spacer with margin -->

    <h3>Step 2: Initial Design Document</h3>
    <b-col lg="12">
      <p>
        With the general goals set and a general understanding of what kind of metroidvania experience I wanted
        clarified, I created a level design document to organize my thoughts.
        Although I was aware that things could change through iterations, creating the document was surprisingly helpful
        in establishing a "baseline" I could refer back to later on.
        In the document, I establish the the main objectives, the core gameplay, the main pillars, player mechanics,
        pacing and various metrics.
      </p>
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="3000">
          <b-carousel-slide v-for="image in this.brief" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
    <div class="my-4"></div> <!-- Spacer with margin -->

    <h3>Step 3: References</h3>
    <b-row>
      <b-col lg="6">
        <p>Along with the analyses of the paths taken in Metroid Prime and Hollow Knight, I also took other notes
          regarding gameplay and general level design.
          There was a clear focus on Metroid Prime as it was an 3D FPS Metroidvania, making it closer to what I was
          aiming for.
        </p>
      </b-col>

      <b-col lg="6">
        <b-img :src="this.observations" fluid-grow alt="Fluid image"></b-img>
      </b-col>
    </b-row>

    <div class="my-4"></div> <!-- Spacer with margin -->
    <h3>Step 4: 2D Map</h3>
    <p>
      When creating the 2D map, I kept fundamental considerations from the requirements, observations, genre, and
      narrative in mind:
    </p>

    <ul>
      <li> There should be at least 2 distinct areas, following the research I did for metroidvanias.
        Distinct areas provide the player with a mental map of where they generally are, creates interesting themes,
        encourages different playstyles,
        and gives a more believable narrative experience depending on the theme.</li>
      <li> Exploration needs to be non-linear. This means that there should be more than 2 paths to reach the final boss
        and different areas.
        The usage of a hub room is a common technique to do this, and thus promote backtracking. </li>
      <li> There should be ability gating to maintain player agency, but still prevent the player from going everywhere.
      </li>
      <li> New abilities should be usable in both exploration and combat.</li>
    </ul>

    <div class="my-4"></div> <!-- Spacer with margin -->

    <b-row>
      <b-col lg="6">
        <h5>Draft Layout</h5>
        <p>I began with a draft, settling on a hub-and-spoke topology, with a distinct area for each "spoke".</p>
        <b-img :src="this.draftlayout" fluid alt="Draft"></b-img>
      </b-col>

      <b-col lg="6">
        <h5>Initial Layout</h5>
        <p>I then began populating each area with rooms, reaching the initial layout.</p>
        <b-img :src="this.initiallayout" fluid alt="Initial"></b-img>
      </b-col>
    </b-row>

    <h5>Final Layout</h5>
    <p>
      After several iterations, I simplified the map to:
    </p>
    <b-img :src="this.finallayout" fluid alt="Final"></b-img>

    <div class="my-4"></div> <!-- Spacer with margin -->
    <h3>Step 5: Blockout, Iteration and Feedback</h3>
    <h4>Scope</h4>

    <p>After several iterations and feedback, I realized that I had bitten off too much - I was essentially trying to
      create an entire world map. the final layout was smaller, puzzles were removed, and implemented mechanics were
      fewer.
      The general scope was reduced to maintain feasibility. Instead, I decided to focus and iterate
      more on several rooms.
    </p>

    <h4>Scale</h4>
    <div class="my-4"></div> <!-- Spacer with margin -->


    <h4>Boss Rooms</h4>

    <div class="my-4"></div> <!-- Spacer with margin -->

    <h2>Thought Processes & Design Decisions</h2>

    <h3> Backtracking </h3>
    
    <p>Backtracking is focused on the two hubs: The central hub and the canyon hub.
      Following the progression flow in the initial brief, the player would have to revisit the central hub at least
      twice no matter which path they take.
      One future addition I would want to add is to add an ability gate to the central hub so that the player has a
      larger progression reason to revisit it.
    </p>
    <b-img  :src="this.backtrackroutes" fluid alt=""></b-img>
    <p class="text-center">Main backtracking routes</p>

    <h3>Ability Gates</h3>
    <p>
      Although the map was created with ability gates in mind, they were not implemented early on as it was not high on
      the priority list.
      <br>
      Initially, it was decided that ability gates would be similar to metroid prime, where a door would only open by
      shooting it with the correct type of gun.
      <br>
      However, since the vertical slice only had 1 new gun (rocket), there wasn’t enough abilities to “fire” at the
      gate.
      <br>
      I thus decided to integrate the ability gating into the room itself.
      <br>
      Following the initial brief flow, I created 2 ability gates: The one to The Bridge (Dash Ability) and the other
      one to the Boss.
    </p>
    <b-row>
      <b-col lg="6">
        <h5>Dash Ability Gate</h5>
        <b-img :src="this.dashabilitygate" fluid alt=""></b-img>
        <p>This ability gate can be passed with either a double jump OR the rocket.
          The yellow pillar illustrates what happens when the player fires a rocket at the gray pillar.
          <br>
          I also wanted to add a little environmental storytelling to why the pillar is almost falling.
          To do so, I added a large ring that has crashed onto the left side, as if an old building fell onto the
          hallway, emphasizing the theme of "ruins".
        </p>
      </b-col>
      <b-col lg="6">
        <h5>Boss Ability Gate</h5>
        <b-img :src="this.bossabilitygate" fluid alt=""></b-img>
        <p>This ability gate can be passed with either a double jump OR rocket AND the dash.
          <br>
          I reuse the pillar topple mechanic for the rocket.
          <br>
          Since this is the final room before the final boss, I added much denser debris to hint that something
          important was up ahead.
        </p>
      </b-col>
    </b-row>

    <div class="my-4"></div> <!-- Spacer with margin -->

    <h3> Environmental Storytelling </h3>
    <p>
      In order to sell the narrative of a fallen ancient civilization and the resulting theme of "ancient ruins", I
      tried to integrate environmental storytelling in various ways.
      When approaching environmental storytelling, the main question I wanted the players to ask was:
    </p>
    <p class="text-center">"What happened here?"</p>
    <p>
      Since I created a small blockout kit and had to be conservative with what I had to reduce iteration times,
      <br>
      most of these pieces are integrated into the gameplay in terms of combat, traversal, or both.
    </p>

    <b-row>
      <b-col lg="4">
        <b-img :src="this.fallentowerring" fluid alt=""></b-img>
        <p>How did this ring crash down?
          <br>Why are they still protecting the tower?
        </p>
      </b-col>
      <b-col lg="4">
        <b-img :src="this.guards" fluid alt=""></b-img>
        <p>What are they guarding?</p>
      </b-col>
      <b-col lg="4">
        <b-img :src="this.pileddebris" fluid alt=""></b-img>
        <p>How did so much debris get here?
          <br>(A large explosion?)
        </p>
      </b-col>
    </b-row>
    
    <div class="my-4"></div> <!-- Spacer with margin -->

    <h3> Distinct Areas </h3>


    <div class="my-4"></div> <!-- Spacer with margin -->

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
    <br>
    <b-col lg="12">
      <h5>Map</h5>
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.layouts" :key="image.url" :caption="image.caption"
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>

    <div class="my-4"></div> <!-- Spacer with margin -->
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
        { url: require('@/assets/scarabdescent/screenshots/timelapse/t13.png') },
      ],
      processimages: [
      ],
      layouts: [
        { url: require('@/assets/scarabdescent/layouts/draft.png'), caption: 'Draft' },
        { url: require('@/assets/scarabdescent/layouts/v1.png'), caption: 'V1' },
        { url: require('@/assets/scarabdescent/layouts/v2.png'), caption: 'V2' },
        { url: require('@/assets/scarabdescent/layouts/v3.png'), caption: 'V3' },
        { url: require('@/assets/scarabdescent/layouts/v4.png'), caption: 'V4' },
        { url: require('@/assets/scarabdescent/layouts/v5.png'), caption: 'V5' },
        { url: require('@/assets/scarabdescent/layouts/v6.png'), caption: 'V6' },
        { url: require('@/assets/scarabdescent/layouts/v7.png'), caption: 'Final' },
        { url: require('@/assets/scarabdescent/layouts/annotatedlayout.png'), caption: 'Annotated Map' },
      ],
      draftlayout: require('@/assets/scarabdescent/layouts/draft.png'),
      initiallayout: require('@/assets/scarabdescent/layouts/v1.png'),
      finallayout: require('@/assets/scarabdescent/layouts/v7.png'),
      annotatedlayout: require('@/assets/scarabdescent/layouts/annotatedlayout.png'),
      brief: [
        { url: require('@/assets/scarabdescent/brief/1.png') },
        { url: require('@/assets/scarabdescent/brief/2.png') },
        { url: require('@/assets/scarabdescent/brief/3.png') },
        { url: require('@/assets/scarabdescent/brief/4.png') },
        { url: require('@/assets/scarabdescent/brief/5.png') },
        { url: require('@/assets/scarabdescent/brief/6.png') },
        { url: require('@/assets/scarabdescent/brief/8.png') },
      ],
      backtrackroutes: require('@/assets/scarabdescent/backtracking/backtrackroutes.png'),
      dashabilitygate: require('@/assets/scarabdescent/abilitygates/dashgate.png'),
      bossabilitygate: require('@/assets/scarabdescent/abilitygates/bossgate.png'),
      
      crashedring: require('@/assets/scarabdescent/envstory/crashedring.png'),
      fallentowerring: require('@/assets/scarabdescent/envstory/tower.png'),
      pileddebris: require('@/assets/scarabdescent/envstory/pileddebris.png'),
      guards: require('@/assets/scarabdescent/envstory/guards.png'),
      stuckdisc: require('@/assets/scarabdescent/envstory/stuckdisc.png'),

      hkpathing: require('@/assets/scarabdescent/research/hkpathing.png'),
      primepathing: require('@/assets/scarabdescent/research/primepathing.png'),
      observations: require('@/assets/scarabdescent/reference/observations.png'),

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
