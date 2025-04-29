<template>
  <!-- <b-container class="full-width-section"> -->
  <b-container>
    <b-container fluid class="nav-column">
      <b-list-group v-b-scrollspy class="sidebar-nav">
        <!-- <b-list-group v-b-scrollspy:listgroup-ex> -->
        <b-list-group-item href="#list-concept">Overview</b-list-group-item>
        <b-list-group-item href="#list-contribution">Contribution</b-list-group-item>
        <b-list-group-item href="#list-process">Process</b-list-group-item>
        <b-list-group-item href="#list-research">Process: Research</b-list-group-item>
        <b-list-group-item href="#list-ideation">Process: Ideation</b-list-group-item>
        <b-list-group-item href="#list-designdoc"
          >Process: Design Document</b-list-group-item
        >
        <b-list-group-item href="#list-layout">Process: Layout</b-list-group-item>
        <b-list-group-item href="#list-blockout">Process: Blockout</b-list-group-item>
        <b-list-group-item href="#list-iteration">Iteration</b-list-group-item>
        <b-list-group-item href="#list-combat">Combat</b-list-group-item>
        <b-list-group-item href="#list-bossfights">Boss Fights</b-list-group-item>
        <b-list-group-item href="#list-conclusion">Conclusion</b-list-group-item>
        <b-list-group-item href="#list-credits">Credits</b-list-group-item>
      </b-list-group>
    </b-container>

    <section class="section-container border-light" id="list-concept">
      <header class="text-center mb-4">
        <h2 class="section-header display-4">CONCEPT</h2>
      </header>
      <div class="px-lg-5">
        <!-- Content -->
        <p class="strong-content">
          Scarab Descent is a Metroidvania FPS set in a vast desert ruin with a touch of
          sci-fi. The game merges FPS mechanics with Metroidvania-style exploration
          inspired by Metroid Prime and Hollow Knight, where players must find their
          spaceship to leave an alien world.
        </p>
      </div>
    </section>

    <b-container
      class="description-container"
      id="list-overview"
      style="position: relative; height: 100%"
    >
      <b-row class="py-3">
        <b-col lg="6">
          <div>
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/0KjdHme3Cig?si=ah5_VHd13vXz4UpO"
              allowfullscreen
            ></b-embed>
          </div>
        </b-col>
        <b-col lg="6">
          <div>
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/lseJqpHDyjU"
              allowfullscreen
            ></b-embed>
          </div>
        </b-col>
      </b-row>

      <div class="d-flex justify-content-center py-3">
        <div class="overview shaded-box">
          <b-row class="text-center">
            <b-col lg="4">
              <h4>My Role</h4>
              <p>Game/Level Designer</p>
            </b-col>
            <b-col lg="4">
              <h4>Team Size</h4>
              <p>2</p>
            </b-col>
            <b-col lg="4">
              <h4>Development Time</h4>
              <p>4 Months</p>
            </b-col>
          </b-row>

          <b-row class="text-center">
            <b-col lg="6">
              <h4>Genre</h4>
              <p>FPS Metroidvania</p>
            </b-col>
            <b-col lg="6">
              <h4>Game Engine</h4>
              <p>Unreal Engine 5</p>
            </b-col>
          </b-row>
        </div>
      </div>

      <b-container class="centered py-3">
        <b-button
          class="link-button button-box px-5 py-2"
          href="https://niguelchaos.itch.io/scarab-descent"
          target="_blank"
          ><strong>Download on Itch.io</strong></b-button
        >
      </b-container>

      <header class="text-center pt-5">
        <h2 class="fw-bold mb-3 display-5">Blockout Timelapse</h2>
      </header>
      <b-col lg="12 pb-5">
        <div>
          <b-carousel
            id="carousel"
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            controls
            indicators
            :interval="700"
          >
            <b-carousel-slide
              v-for="image in this.timelapse"
              :key="image.url"
              :caption="image.caption"
              :img-src="image.url"
            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>
      <main class="container py-3">
        <section class="section-container border-light" id="list-contribution">
          <header class="text-center mb-4">
            <h2 class="section-header display-4">CONTRIBUTION</h2>
          </header>

          <div class="row g-4">
            <!-- g-4 adds consistent gutter spacing -->

            <!-- Column 1 -->
            <div class="col-md-4">
              <div class="h-100 p-3">
                <!-- h-100 makes columns equal height -->
                <h3 class="fw-bold mb-3">Level Design</h3>
                <p class="lh-lg">
                  From ideation to blockout, I worked on all design and scripting.
                </p>
              </div>
            </div>

            <!-- Column 2 -->
            <div class="col-md-4">
              <div class="h-100 p-3">
                <h3 class="fw-bold mb-3">Combat Design</h3>
                <p class="lh-lg">I designed all final mechanics and behaviours for:</p>
                <ul class="">
                  <li>Weapons</li>
                  <li>Encounters</li>
                  <li>Enemies</li>
                  <ul class="">
                    <li>Behaviour Trees</li>
                    <li>Navigation</li>
                  </ul>
                </ul>
              </div>
            </div>

            <!-- Column 3 -->
            <div class="col-md-4">
              <div class="h-100 p-3">
                <h3 class="fw-bold mb-3">Mechanics</h3>
                <p class="lh-lg">I designed and implemented the following mechanics:</p>
                <ul class="">
                  <li>Pickups</li>
                  <li>Chaos Destruction</li>
                  <li>Interactibles</li>
                  <li>Player Abilities</li>
                  <li>Healthbar UI</li>
                </ul>
              </div>
            </div>

            <p><b>Personal Goals</b></p>
            <ul>
              <li>Learn more about the level design process.</li>
              <li>Practice iterating and refining the level design pipeline.</li>
              <li>Focus on the creation of whiteboxing environments.</li>
            </ul>
            <p class="lh-lg">
              Many of my efforts to implement mechanics and gameplay was to show how the
              level could work. Eventually, both gameplay and level began influencing each
              other.
            </p>
            <p><b>Teammate's responsibilities</b></p>
            <ul>
              <li>
                Initial Project Setup (Persistent Level setup, Gameplay Mechanics
                Prototype, Architecture).
              </li>
              <li>Deciding the theme and setting of the game.</li>
              <li>UI (Main menu, Game complete screen).</li>
            </ul>
          </div>
        </section>

        <section class="section-container border-light" id="list-process">
          <header class="text-center mb-4">
            <h2 class="section-header display-4">PROCESS</h2>
          </header>

          <div class="px-lg-5">
            <ol class="strong-content">
              <li>Research</li>
              <li>Ideation</li>
              <li>Design Document</li>
              <li>Layout</li>
              <li>Prototype / Blockout</li>
              <li>Iteration</li>
            </ol>
          </div>
        </section>

        <section class="subsection-container border-light" id="list-research">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">1. Research</h2>
          </header>

          <p class="">
            Since our game was inspired by Hollow Knight, I decided to study what common
            elements modern metroidvanias have. I chose to examine:
          </p>
          <ul>
            <li>Hollow Knight - the original inspiration</li>
            <li>
              Metroid Prime - The "standard" for FPS Metroidvania, which is similar to
              what we set out to make.
            </li>
          </ul>

          <p>Questions I had when researching:</p>
          <ul>
            <li>
              What common elements exist between Prime and HK's maps, despite one being 2D
              and another being 3D?
            </li>
            <li>How does the different themes affect the level design in their areas?</li>
            <li>How does the level design support the design pillars of each game?</li>
            <li>
              What techniques are used to maintain engagement when backtracking, which we
              know is a common pattern?
            </li>
          </ul>

          <p class="">I analyzed:</p>
          <ul class="strong-content">
            <li>A Hollow Knight speedrun.</li>
            <li>The path IGN walkthrough of Metroid Prime took to 100% the game.</li>
          </ul>
          <p class="lh-lg">
            I traced the path of both, noting specifically how much backtracking each had,
            placement of enemies, abilities, and how abilities are gated. Although it is
            not exactly a fair comparison, I specifically did this to compare the
            differences between the fastest and "slowest" to gain insight into both in a
            limited amount of time.
          </p>

          <b-row>
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.hkpathing"
                fluid-grow
                alt="Fluid image"
              ></b-img>
            </b-col>
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.primepathing"
                fluid-grow
                alt="prime path"
              ></b-img>
            </b-col>
          </b-row>

          <p class="strong-content">Findings and Observations:</p>
          <div class="my-4">
            <!-- Toggle Button -->
            <b-button v-b-toggle.collapse-1 variant="primary" class="mb-2">
              Show Findings
            </b-button>

            <!-- Collapsible Content -->
            <b-collapse id="collapse-1" v-model="collapsed" class="mt-2">
              <b-card class="shaded-box">
                <b-row class="pt-1">
                  <b-col lg="12">
                    <ul>
                      <li>
                        Speedruns clearly have much less backtracking, and the paths which
                        do tend to be in the hub area.
                      </li>
                      <li>
                        The topology of both games' world maps is generally hub and spoke,
                        with more sub-hubs the more you go.
                      </li>
                      <ul>
                        <li>
                          There are many reasons for this. Development, world building,
                          player frustration, and exploration are a few.
                        </li>
                      </ul>
                      <li>
                        Ability gates are often placed in earlier areas, since it gives
                        you a reason to backtrack.
                      </li>
                      <li>
                        There are generally smaller hubs which let the player backtrack
                        less before encountering a save point/resting area, especially
                        during early game.
                      </li>
                      <li>
                        Late game backtracking tends to become longer and longer, not just
                        because of area, but also because gated areas are intentionally
                        placed in previous areas. This is offset by stronger traversal
                        abilities.
                      </li>
                      <li>
                        Players are generally better rewarded for exploring more, which is
                        correlated to more backtracking. Rewards include resources
                        obtained by killing enemies or finding secret areas.
                      </li>
                      <li>
                        The final boss is placed near the starter area, likely to give
                        players an objective throughout the game, or for ease of access.
                        Generally locked by a certain skill/item. This item can be
                        retrieved close, and whether you can defeat it is up to skill.
                      </li>
                      <li>Many abilities are optional.</li>
                      <li>
                        Players often need to defeat bosses or challenges to obtain new
                        abilities.
                      </li>
                      <li>
                        Rooms can be categorized into nodes and edges Edges are often long
                        corridors, Nodes are larger, open space used for large fights or
                        set pieces.
                      </li>
                      <li>
                        The player can see most of the doors upon entering the room.
                      </li>
                      <li>Large rooms generally expand in verticality too.</li>
                      <li>
                        Organic vs synthetic is also reflected in the layout. Pirate Ship
                        and constructed areas is angular, longer corridors, symmetrical
                        Organic areas like forests have more curves, jagged edges
                      </li>
                      <li>
                        Prime uses gate shooting mechanic to hard gate players from
                        entering areas Hollow knight uses soft lock mechanics in some
                        areas, such as the “fog of darkness”
                      </li>
                      <li>
                        From a top down perspective, Metroid Prime is much more linear.
                      </li>
                      <li>
                        Prime has puzzles that takes advantage of 3D, such as falling
                        bricks, perspective puzzles, and diegetic UI.
                      </li>
                      <li>
                        Prime doesn’t feature a lot of traditional cover. It is mostly
                        dodging.
                      </li>
                      <li>
                        Boss areas are arenas of mostly flat spaces, some with gimmicks
                        such as environmental hazards.
                      </li>
                      <li>
                        Many of the enemies are faster/larger than the player, so its
                        often a waiting game - wait for enemy to attack, and then react.
                      </li>
                      <li>
                        Hollow Knight is slightly different, but also emphasizes dodging
                        despite parrying being possible.
                      </li>
                      <li>
                        Distinct areas:
                        <ul>
                          <li>Provide the player with a mental map of where they are</li>
                          <li>Creates interesting themes</li>
                          <li>Encourages different playstyles & mechanics</li>
                          <li>Gives a more believable narrative experience.</li>
                        </ul>
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </b-card>
              <p class="strong-content">
                While many of these are self explanatory, they helped me distill what we
                needed for an experience to be "metroidvania-esque".
              </p>
            </b-collapse>
          </div>
        </section>

        <section class="subsection-container border-light" id="list-ideation">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">2. Ideation</h2>
          </header>

          <p class="strong-content">
            Moodboards were a large part of the ideation, layout, and blockout process,
            each with a different goal.
          </p>

          <header class="text-center mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Project Start</h2>
          </header>

          <div class="centered pb-3">
            <b-img
              :src="this.settingmoodboard"
              class="single-image img-border"
              alt="mood"
            ></b-img>
          </div>

          <p class="strong-content">
            When starting the project, we looked for relevant themes we wanted, relevant
            games, and art style we envisioned the game to have. This influenced our
            direction to look towards keywords such as "ruins", "desert", and "old
            civilizations".
          </p>

          <header class="text-center mb-4 pt-3">
            <h2 class="fw-bold mb-3 display-5">Layout & Blockout</h2>
          </header>

          <b-row>
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.v5moodboard1"
                fluid-grow
                alt="Fluid image"
              ></b-img>
            </b-col>
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.v5moodboard2"
                fluid-grow
                alt="prime path"
              ></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3">
            For layout and blockout, I researched architecture, relevant games and
            moviesthat fit the specific concept I assigned to specific rooms.
            <br />
            There was no clear "step" at this stage. The moodboard was iteratively used
            together with the layout during the blockout process, which made the layouts
            quite messy. <br />
            This influenced specific elements in a room. One clear example was the river
            in the canyon hub, which was inspired by various images of, well, canyons.
          </p>
        </section>

        <section class="subsection-container border-light" id="list-designdoc">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">3. Design Document</h2>
          </header>

          <div class="px-lg-5">
            <p class="">
              With the goals set more clearly, I created a level design document to
              organize my thoughts. In the document, I establish the the main objectives,
              the core gameplay, the main design pillars, player mechanics, pacing and
              various metrics.
            </p>

            <h2>Main Project Goal</h2>
            <p>
              A MVP, self contained area encompassing all the pillars of this
              Metroidvania.
            </p>

            <h2>Game Objective</h2>
            <p>Defeat the Final Boss.</p>

            <div>
              <b-carousel
                id="carousel"
                style="text-shadow: 0px 0px 2px #000"
                fade
                controls
                indicators
                :interval="3000"
              >
                <b-carousel-slide
                  v-for="image in this.brief"
                  :key="image.url"
                  caption=""
                  :img-src="image.url"
                ></b-carousel-slide>
              </b-carousel>
            </div>

            <div class="my-4"></div>
            <!-- Spacer with margin -->

            <header class="text-center mb-4">
              <h2 class="fw-bold mb-3 display-5">Design Pillars</h2>
            </header>
            <p class="strong-content">
              The design pillars were of particular importance. They influenced many
              design decisions, including which ones to prioritize as I continued
              iteration.
            </p>

            <div class="row g-4">
              <!-- g-4 adds consistent gutter spacing -->

              <!-- Column 1 -->
              <div class="col-md-4">
                <div class="h-100 p-3">
                  <!-- h-100 makes columns equal height -->
                  <h3 class="fw-bold mb-3">Exploration</h3>
                  <ul class="">
                    <li>Create a sense of the unknown.</li>
                    <li>Find new abilities by exploring new areas.</li>
                    <li>
                      Players should feel more and more curious about the world as they
                      move through spaces.
                    </li>
                    <li>Reward curiosity and perseverance</li>
                  </ul>
                </div>
              </div>

              <!-- Column 2 -->
              <div class="col-md-4">
                <div class="h-100 p-3">
                  <h3 class="fw-bold mb-3">Combat</h3>
                  <ul class="">
                    <li>Combat should be challenging for the player.</li>
                    <li>
                      Skilled players should be able to find alternative ways to defeat
                      them.
                    </li>
                    <li>New abilities should give new methods of defeating enemies.</li>
                    <li>Tight, responsive mechanics.</li>
                  </ul>
                </div>
              </div>

              <!-- Column 3 -->
              <div class="col-md-4">
                <div class="h-100 p-3">
                  <h3 class="fw-bold mb-3">Progression</h3>
                  <ul class="">
                    <li>
                      Ability based gating. Players should not be able to explore all
                      areas in the beginning.
                    </li>
                    <li>
                      Player character should feel stronger through exploration and combat
                      by acquiring abilities.
                    </li>
                    <li>
                      Newly acquired skills should facilitate exploring previous areas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="subsection-container border-light" id="list-layout">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">4. Layout</h2>
          </header>

          <p class="strong-content lh-lg">
            The layouts were made using Figma. This allowed me to collaborate and discuss
            with others, as well as make efficient changes.
          </p>

          <p>
            When creating the 2D map, I kept fundamental considerations from the
            requirements, observations, genre, and narrative in mind:
          </p>
          <ul>
            <li>Have distinct areas to encourage exploration.</li>
            <li>
              Have more than 2 paths/playthrough methods to reach the final boss and
              different areas. The usage of a hub room is a common technique to do this.
            </li>
            <li>
              There should be a way to prevent prevent the player from going everywhere.
              Ability gating areas is a proven method.
            </li>
            <li>New abilities should be usable in both exploration and combat.</li>
          </ul>

          <header class="text-center mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">World Map Layout</h2>
          </header>

          <b-row>
            <b-col lg="6">
              <h5>1. Draft Layout</h5>
              <p>
                I began by drafting the entire world map, settling on a hub-and-spoke
                topology, with a distinct area for each "node". The world map encompasses
                the entire playable space and mainly influenced the paths the player could
                take.
              </p>
              <b-img class="img-border" :src="this.draftlayout" fluid alt="Draft"></b-img>
            </b-col>

            <b-col lg="6">
              <h5>2. Initial Layout</h5>
              <p>
                I then filled each area with rooms, reaching the initial layout. Note that
                the rooms are not drawn to scale, as the mechanic metrics at this point
                were not well defined yet. Scale issues would later be a constant battle I
                would fight.
              </p>
              <b-img
                class="img-border"
                :src="this.initiallayout"
                fluid
                alt="Initial"
              ></b-img>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12">
              <h5>3. Final Layout</h5>
              <p>
                After many iterations of blockout and layout, I greatly reduced the scope,
                and settled on this:
              </p>
              <ul>
                <li>7 areas reduced to 2.</li>
                <li>Only 2 ability gates exist, following the initial brief's flow.</li>
                <li>Each boss rewards the player with a new ability.</li>
                <li>
                  Each boss has a "theme", shown by the titles underneath each one. I
                  wanted each boss to challenge the player differently.
                </li>
                <li>
                  Since the player could go anywhere at any time, I instead went for a
                  more atomic approach. I wanted a low intensity beat before every boss
                  fight. To show this pacing, I removed enemies in each corridor before
                  each boss.
                </li>
              </ul>
              <p class="strong-content">
                Changes continued to happen as I continued iterating and playtesting.
                <br />
                Enemy placements, scale (especially the canyon hub), boss areas, and many
                more were affected. However, room placement were roughly the same, and
                many changes aimed to accentuate/support the decisions shown here.
              </p>
              <b-img class="img-border" :src="this.finallayout" fluid alt="Final"></b-img>
            </b-col>
          </b-row>
        </section>
        <section class="subsection-container border-light" id="list-blockout">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">5. Prototype / Blockout</h2>
          </header>

          <p class="strong-content">
            The blockout was created using UE5's Cubegrid tool. Initially, I created
            entire rooms as a single static mesh asset, only to find it extremely
            difficult to modify later on. I began modelling small, reusable assets that
            turned into a modular kit which I could use to kitbash levels together
            quickly.
          </p>

          <div class="centered pb-3">
            <b-img
              class="img-border"
              :src="this.ldk"
              style="width: 100%"
              alt="mood"
            ></b-img>
          </div>

          <p class="text-justify text-center">
            The level design kit that I used. Note that there are also meshes of entire
            rooms from early iterations. Most assets were built to fit player metrics.
            This helped keep scale in check, since I could always measure if an object
            could be jumped over by dragging in something I knew could be jumped over.
            Later, placing world aligned grid textures further helped me gauge scale.
          </p>

          <header class="mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Kitbashing</h2>
          </header>

          <p class="strong-content">
            Kitbashing drastically changed how I approached blocking out rooms. Instead of
            extruding, I began massing out areas first, only creating new assets unless
            necessary. <br />This made blockouts more organic, allowing me to create more
            believable spaces by discovering them. <br />Pillars could now be rotated to
            become planks. Removing a boulder created a cave that could hide a secret.
            <br /><br />The Canyon Hub is an example of this, shown below:
          </p>

          <b-row class="pt-1">
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.initialcanyonblockout1"
                fluid
                alt="Draft"
              ></b-img>
            </b-col>

            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.initialcanyonblockout3"
                fluid
                alt="Initial"
              ></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 pb-5 text-justify text-center">
            The first iteration of the canyon hub. <br />The nature of UE5's cubegrid
            (along with my lack of knowledge), lack of metrics, and the lack of a gridded
            prototyping texture caused this level to be too boxy and too large.
          </p>

          <b-row>
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.ldkcanyonblockout1"
                fluid
                alt="Draft"
              ></b-img>
            </b-col>

            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.ldkcanyonblockout2"
                fluid
                alt="Initial"
              ></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 pb-5 text-justify text-center">
            The first kitbashed iteration of the canyon hub, created entirely from 2
            rocks, 1 box, 1 ramp, and a pillar.
            <br />
            Heavy use of scaling and rotations allowed me to create variation with the
            same asset.
          </p>

          <b-row>
            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.finalcanyonblockout1"
                fluid
                alt="Draft"
              ></b-img>
            </b-col>

            <b-col lg="6">
              <b-img
                class="img-border"
                :src="this.finalcanyonblockout2"
                fluid
                alt="Initial"
              ></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 text-justify">
            This version is a final iteration of the level, fully playable. While many
            elements were modified, many things stayed the same due to the modular
            approach:
          </p>
          <ul>
            <li>The general landscape of the level was kept.</li>
            <li>The same assets have been reused even more.</li>
          </ul>

          <header class="mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Effects of Prototyping</h2>
          </header>
          <p class="strong-content">
            Combat, AI behaviour, metrics, and unknown technical limitations heavily
            prolonged iteration times.
          </p>
          <p class="text-justify">
            Initially, I started this project without planning to implement combat or
            interactive mechanics such as pickups, buttons, weapons, damage systems, or
            enemy AI. As I progressed, there was an increasing amount of elements that
            were difficult to showcase how the level related to specific events and
            combat.
            <br />Some of these were:
          </p>
          <ul>
            <li>The turrets on the bridge firing sticky projectiles.</li>
            <li>The rocket being able to destroy destructibles.</li>
            <li>The rocket boss firing at the player from a far distance.</li>
            <li>Combat encounters used to heighten intensity.</li>
            <li>How can I show ability gating without implementing abilities?</li>
            <li>
              How can I show that the player is rewarded after a high intensity area?
            </li>
          </ul>

          <p class="text-justify">
            Thus began a cycle of prototyping mechanics and AI, playtesting, and iterating
            on the blockout. Combat had a large impact on how levels looked:
          </p>
          <ul>
            <li>Enemy AI(and EQS) affected cover, pathing, spacing.</li>
            <li>Weapons (and metrics): rocket explosions radii, fire rate, etc.</li>
            <li>The rocket boss firing at the player from a far distance.</li>
            <li>Combat encounters used to heighten intensity.</li>
            <li>Scale of levels, sightlines.</li>
          </ul>

          <p class="strong-content text-justify">
            I should have worked on implementing combat elements like weapons and enemies
            before moving on to block out the entire world.
          </p>
        </section>

        <section id="list-iteration" class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">6. Iteration and Feedback</h2>
          </header>
        </section>

        <p class="strong-content text-justify">
          Many things were added, modified, or removed that wasn't considered during
          planning but emerged from playtests. Others happened while I prototyped, blocked
          out, and playtested the game myself. Below is a compiled list of problems and
          solutions across all playtests and feedback at different points in time.
        </p>

        <header class="text-center mb-4 pt-3">
          <h2 class="fw-bold mb-3 display-5">Problems</h2>
        </header>

        <p class="strong-content text-justify">
          The scope of levels, combat mechanics, and player abilities were all constantly
          reduced.
          <br />Below are issues found:
        </p>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Project Scope</h2>
        </header>

        <b-card class="shaded-box">
          <ul>
            <li>
              Blocking out 7 areas each with 5+ corridors was too much, and not an MVP.
            </li>
            <li><b>Weapon systems took too long to implement.</b></li>
            <li><b>Puzzles needed additional scripting that took too long.</b></li>
            <li>
              <b>Doors were problematic:</b>
              <ul>
                <li>
                  Sliding doors were whole new world of problems. States, animations,
                  dynamic sub level loading, players getting crushed, Do enemies follow
                  you to the next room? What about obstacles blocking the way?
                </li>
                <li>
                  Ability gating in the style of Metroid Prime, where each door only
                  opened by being shot by a specific weapon, was removed. Ability gating
                  these doors added more bugs.
                </li>
              </ul>
            </li>
            <li>
              Rest areas: supposed to heal the player, save the game and assign the player
              checkpoint.
            </li>
          </ul>
        </b-card>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Scale</h2>
        </header>
        <b-card class="shaded-box">
          <ul>
            <li>Too much walking, too much jumping!</li>
            <li>Too much verticality.</li>
            <li>
              Directly converting Hollow Knight’s map to 3D is not feasible. Adding a new
              dimension naturally morphs the rooms.
            </li>
            <li>
              <b>Each room was too large.</b> It took too long to traverse from room to
              room, even without enemies. I later learned that placing enemies and cover
              made the room feel smaller instead.
            </li>
            <li>
              <b>Pacing was not representative of the design.</b> Too many rooms between
              major points of interest (Hub room,boss rooms).
            </li>
            <li>
              <b>Canyon hub is too large.</b> the ruins hub is dwarfed by the sheer
              contrast in size. Additional problem: Moving rooms around was increasingly
              annoying.
            </li>
            <li>
              <b
                >Unclear Affordances: Since scale was too large, it was always difficult
                to quickly understand if a rock was a wall or an obstacle that could be
                jumped over.</b
              >
            </li>
            <li>
              It was difficult to understand the player's surroundings. Important elements
              to understand were things like entrances, enemy location, events, beginning
              of bossfights.
            </li>
          </ul>
        </b-card>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Pacing</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <ul>
            <li>Many were related to scale and combat, mentioned above.</li>
            <li>
              "Too much dead time" in between places, where time is just spent walking
              from place to place. Although related to scale, the larger problem was that
              players felt bored in between points of interest.
            </li>
            <li>
              Moving around the blockout was boring - no moving or interactive objects
              made it difficult for players to feel "high intensity".
            </li>
          </ul>
        </b-card>
        <!-- </b-collapse> -->

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Combat, Difficulty Curve, Balance</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <ul>
            <li>
              Rocket boss was too difficult. It would fire a volley of 8-9 rockets in 1
              second.
            </li>
            <li>
              Players wanted to try out the new abilities they obtained. On my side, I
              wanted to make sure players understood what each ability did right after
              they obtained it.
            </li>
            <li>
              Seeing health bars above all enemies overwhelmed the player, giving them a
              sense of "impossible to kill them all".
            </li>
            <li>
              The difficulty contrast between a single enemy in the tutorial, then
              suddenly bombarded by a group of 4 melee + 4 ranged in the Ruins Hub was too
              much.
            </li>
            <li>
              The rocket ability could fire every 0.1 seconds. Players heavily abused
              this, effectively turning on easy mode for each combat encounter.
            </li>
            <li>
              The bridge was confusing. When entering, many turrets already fire at the
              player, they did not understand the mechanics of the turret.
            </li>
            <li>
              Cover was not reliable. When players thought they would be safe, they would
              get hit. <br />This was even worse for the rocket boss, whose rockets had an
              explosion radius.
            </li>
            <li>
              Due to the unique AI for each boss, 3 out of 4 bosses had large changes in
              the level (and in their behaviour) as their behaviour and weapons were added
              and fleshed out. This will be discussed further in the Boss Fights section.
            </li>
          </ul>
        </b-card>
        <!-- </b-collapse> -->

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Visual Clarity, Readability</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <li>
            <b>Unclear uniqueness for each area.</b> The idea of canyon and ruins was
            clear, but it was not clear what distinct elements differentiated “canyon” and
            “ruins”.
          </li>
          <li><b>"Is this destructible?"</b></li>
          <li>
            <b
              >"Why is this destructible yellow, but this yellow door is not
              destructible?"</b
            >
          </li>
          <li><b>"Did I come from this door? Is this the same door?"</b></li>
          <li><b>"What am I supposed to do after killing the boss?"</b></li>
        </b-card>
        <!-- </b-collapse> -->

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Technical</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <ul>
            <li>
              Adding, modifying, and removing sections of a level was difficult in
              cubegrid.
            </li>
            <li>
              Assigning different textures to different parts of the level was difficult
              when the entire level was 1 asset/model.
            </li>
            <li>
              Creating curved/circular sections was difficult in UE's cubegrid tool.
            </li>
            <li>
              <b
                >Hard to playtest without ability gating, enemies and weapons. Cannot test
                from start to end.</b
              >
            </li>
            <li>
              <b>Boss ability gate does not exist, cannot test start to end.</b>
            </li>
            <li>
              Stepping on chaos destruction debris spun the player around, creating a
              glitching, nauseating effect. (never fixed)
            </li>
          </ul>
        </b-card>
        <!-- </b-collapse> -->

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Performance</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <p>
            These were things that dropped FPS. Not all were the root problem, but
            contributed in some shape or form.
          </p>
          <ul>
            <li>The entire world is loaded on startup.</li>
            <li>Meshes were not distance culled.</li>
            <li>Overlapping dynamic lighting everywhere.</li>
            <li>Chaos destruction debris did not sleep</li>
          </ul>
        </b-card>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Wayfinding</h2>
        </header>
        <b-card class="shaded-box">
          <li><b>"It is too difficult to find my way around the map."</b></li>
          <li>
            <b
              >Composition issues: No landmarks, no framing, and no vantage points that
              let you survey your surroundings.</b
            >
          </li>
          <li>
            <b
              >The larger the area was, the less inclined players wanted to explore,
              especially if they asked "what am I supposed to do now".</b
            >
          </li>
          <li>
            <b
              >Some were confused and stopped when they could first reached the final boss
              ability gate and couldn't pass it.</b
            >
          </li>
        </b-card>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Exploration</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <li>
            <b
              >"Not finding any treasure after fighting a large group of enemies made me
              not want to explore"</b
            >
          </li>
          <li>
            <b
              >Being a blockout, players did not feel the mood of an alien planet, heavily
              reducing immersion.</b
            >The lack of music, ambience, visuals, all contributed to the lack of
            immersion.
          </li>
          <li>
            <b
              >Many players disliked backtracking (relatable), heavily reducing the desire
              to explore new areas by having to go through already-explored places.</b
            >
            This was exacerbated by the lack of respawning enemies, increasingly long
            walking times in between areas, especially in hallways.
          </li>
        </b-card>
        <!-- </b-collapse> -->

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Audiovisual Feedback</h2>
        </header>
        <!-- Element to collapse -->
        <!-- <b-collapse id="citprobs"> -->
        <b-card class="shaded-box">
          <li><b>"When did I get hit?"</b></li>
          <li><b>"Which button do I press to pick this up?"</b></li>
          <li><b>"Am I dead?"</b></li>
          <li>
            <b
              >Players wanted to have feedback when being damaged, damaging enemies, and
              when picking things up.</b
            >
          </li>
        </b-card>
        <!-- <b-button v-b-toggle.citprobs class="m-1">Toggle Show Problems</b-button> -->
        <!-- </b-collapse> -->

        <header class="text-center mb-4 pt-5">
          <h2 class="fw-bold mb-3 display-5">Solutions</h2>
        </header>
        <!-- <b-button v-b-toggle.citsolutions class="m-1">Toggle Show Problems</b-button> -->

        <!-- Element to collapse -->
        <!-- <b-collapse id="citsolutions"> -->
        <b-card class="shaded-box">
          <ul>
            <!-- scope -->
            <li>
              <b>Reduced distinct areas from 7 to 2</b>, with the minimal amount of
              corridors. Each corridor had a reason to stay, whether it was to ability
              gate something or to balance pacing.
            </li>
            <li><b>No Weapon Alt Fire modes.</b></li>
            <li><b>No weapon reloading.</b></li>
            <li><b>Puzzle to acquire Dash removed, replaced by the Bridge.</b></li>
            <li><b>Removed doors. Instead, placed cover to hide sightlines.</b></li>
            <li>
              <b>No "rest" areas</b> Instead, additional health packs were scattered
              around the map.
            </li>
            <!-- scale -->
            <li>
              Roughly limit how long it takes to get from 1 point of interest to another:
              not more than a minute of walking. Combat encounters were later added to act
              as POIs from a pacing standpoint.
            </li>
            <li>
              Limit verticality. Reaching a different platform should take around 2-3
              jumps/1 min walking.
            </li>
            <li>
              Use canyon hub's scale as an opportunity instead to surprise the player and
              encourage exploration.
            </li>
            <li>
              World aligned Prototyping textures: This helped greatly in making sure
              obstacles could be scaled over. It made playtesting more comfortable.
            </li>
            <li>
              Define what 1 "floor" is: Using staircases as measurements to roughly
              measure and standardize how tall things are.
            </li>
            <li>
              Modular kit: Model reusable assets in cubegrid. Example: Use the same
              doorway frame for all entrances. Also helped with scale.
            </li>
            <li>Largely removed corridor to mage boss</li>
            <li>To reduce dead time, added more encounters, especially at corridors.</li>
            <li>
              To reward defeating enemies, added a hidden fireball powerup at one large
              encounter, and more health around others.
            </li>
            <li>
              Made it faster to reach the final boss ability gate. Furthermore, make the
              dash section of the gate much clearer in the beginning. Use destructible
              pillars player can jump over or fire rockets at. Make the dashable gap
              clearer. The player may still take awhile to realize they cannot get to the
              other side, but they would not be able to advance no matter what.
            </li>
            <li>
              Added sound effects for interactions, different sounds when getting hit and
              shooting the ground, and button activations.
            </li>
            <li>
              Reduced rockets fire rate for rocket boss, made it evade player when on
              cooldown
            </li>
            <li>
              Huge hallways were dead time because they were linear. Used it with more
              intention - to contrast it with larger, open nonlinear areas
            </li>
            <li>
              Some indication of final objective is good - added text in the beginning,
              and a beam of light at the final boss so players can orient themselves at
              certain spots from other rooms, inciting curiousity.
            </li>
            <li>
              Tweaked canyon blockout to better show points of interest at different
              vantage points.
            </li>
            <li>
              Bridge: Introducing buttons should be much simpler. Buttons should only open
              doors, not kill turrets as well. Remove all turrets in the button tutorial
              area.
            </li>
            <li>
              Create suspicious pink light in front of bridge's ability gate, make it
              clearer that something exists there.
            </li>
            <li>
              Stepping stones for river in Canyon Hub, make it more inviting/less scary to
              go closer and dip your feet in.
            </li>
            <li>
              Players didn't know what to do after killing rocket boss: Heavy handed
              guidance by preventing the player from leaving unless they pick up the
              ability. Furthermore, shine a spotlight on the ability pickup.
            </li>
            <li>Show instructions only after you get the ability.</li>
            <li>
              Rocket Boss: Show the ability when you trigger the boss fight to tell the
              player where to get the ability, but gate it.
            </li>
            <li>
              Dash ability is shown and given at the end of the bridge instead. This
              softly encourages player to use it when returning to the entrance.
            </li>
            <li>
              Dash turrets are reactivated only after you obtain the dash ability, letting
              players set the pace.
            </li>
            <li>
              Instead of adding landmarks, give unique properties to each door in ruins
              hub - red/blue light, pillar half way fallen, etc.
            </li>
            <li>
              Bridge has 3 checkpoints when falling into void so you can't cheat the
              system anymore
            </li>
            <li>
              Rocket Boss shoots 3 rockets instead of 9, with a cooldown of 3 seconds
              instead of 1. While on cooldown, moves around to maintain line of sight.
            </li>
            <li>
              Chaos Destruction debris sleeps after 3 seconds, disappears after sleeping.
            </li>
            <li>Lights farther than 10000 units are culled.</li>
            <li>Meshes are culled at certain distances.</li>
            <li>Navigation meshes are static.</li>
            <li>
              Create a combat token system to limit the amount of enemies attacking the
              player at the same time, regardless of how many enemies are in range.
            </li>
          </ul>
        </b-card>
        <!-- </b-collapse> -->

        <b-row class="py-3">
          <b-col lg="6">
            <h5>Lighting: Before</h5>
            <b-img class="img-border" :src="this.lightingbefore" fluid alt=""></b-img>
          </b-col>
          <b-col lg="6">
            <h5>Lighting: After</h5>
            <b-img class="img-border" :src="this.lightingafter" fluid alt=""></b-img>
          </b-col>
        </b-row>

        <b-row class="py-3">
          <b-col lg="6">
            <h5>River: Before</h5>
            <b-img class="img-border" :src="this.riverbefore" fluid alt=""></b-img>
          </b-col>
          <b-col lg="6">
            <h5>River: After</h5>
            <b-img class="img-border" :src="this.riverafter" fluid alt=""></b-img>
          </b-col>
        </b-row>

        <b-row class="py-3">
          <b-col lg="6">
            <h5>Mage Corridor: Before</h5>
            <b-img class="img-border" :src="this.magecorridorbefore" fluid alt=""></b-img>
          </b-col>
          <b-col lg="6">
            <h5>Mage Corridor: After</h5>
            <b-img class="img-border" :src="this.magecorridorafter" fluid alt=""></b-img>
          </b-col>
        </b-row>
        <b-row class="py-3">
          <b-col lg="6">
            <h5>Dash Gate: Before</h5>
            <b-img class="img-border" :src="this.dashgatebefore" fluid alt=""></b-img>
          </b-col>
          <b-col lg="6">
            <h5>Dash Gate: After</h5>
            <b-img class="img-border" :src="this.dashgateafter" fluid alt=""></b-img>
          </b-col>
        </b-row>

        <div class="my-4">
          <!-- Toggle Button -->
          <b-button v-b-toggle.collapse-1 variant="primary" class="mb-2">
            Show Raw Feedback
          </b-button>

          <!-- Collapsible Content -->
          <b-collapse id="collapse-1" v-model="collapsed" class="mt-2">
            <b-card class="shaded-box">
              <b-row class="pt-1">
                <b-col
                  lg="12"
                  v-for="image in this.feedback"
                  :key="image.url"
                  :caption="image.caption"
                  :img-src="image.url"
                >
                  <b-img :src="image.url" fluid alt="Draft"></b-img>
                </b-col>
              </b-row>
            </b-card>
          </b-collapse>
        </div>

        <header class="text-center mb-4 pt-5">
          <h2 class="fw-bold mb-3 display-5">Thought Processes & Design Decisions</h2>
        </header>

        <h3>Backtracking</h3>
        <p class="strong-content">Do we actually need backtracking?</p>
        <p>
          Backtracking is focused on the two hubs: The central hub and the canyon hub.
          Following the progression flow in the initial brief, the player would have to
          visit the central hub at least twice no matter which path they take. One future
          addition I would want to add is to add an ability gate to the central hub so
          that the player has a larger progression reason to revisit it.
        </p>
        <p>
          Backtracking felt like a side effect from a hub and spoke layout. Playtesters
          quickly mentioned the unwillingness to revisit areas and backtrack since it was
          boring.
          <br />To maintain pacing and intensity, other games use respawning enemies,
          world events, and fast travel to keep intensity high or to reduce backtracking.
          Since I did not have have these mechanics, I could only hope the player obtained
          the dash ability early. As such, a lot of work was done to reduce backtracking
          by reducing distance between areas instead.
        </p>
        <b-img class="img-border" :src="this.backtrackroutes" fluid alt=""></b-img>
        <p class="text-center">Main backtracking routes</p>

        <h3>Ability Gates</h3>
        <p>
          Although the map was created with ability gates in mind, they were not
          implemented early on as it was not high on the priority list.
          <br />
          Initially, it was decided that ability gates would be similar to metroid prime,
          where a door would only open by shooting it with the correct type of gun.
          <br />
          However, doors proved too difficult to implement.
          <br />
          I thus decided to integrate the ability gating into the room itself.
          <br />
          Following the initial brief flow, I created 2 ability gates: The one to The
          Bridge (Dash Ability) and the other one to the Boss.
        </p>
        <b-row>
          <b-col lg="6">
            <h5>Dash Gate: Before</h5>
            <b-img
              class="img-border"
              :src="this.dashabilitygatebefore"
              fluid
              alt=""
            ></b-img>
          </b-col>
          <b-col lg="6">
            <h5>Dash Gate: After</h5>
            <b-img
              class="img-border"
              :src="this.dashabilitygateafter"
              fluid
              alt=""
            ></b-img>
          </b-col>
        </b-row>

        <p>
          This ability gate can be passed with either a double jump OR the rocket. The
          yellow pillar illustrates what happens when the player fires a rocket at the
          gray pillar.
          <br />
          After iterating, I also added an ability check to force the player to dash out
          of the room.
        </p>

        <b-row>
          <b-col lg="6">
            <h5>Final Boss Gate: Before</h5>
            <b-img
              class="img-border"
              :src="this.bossabilitygatebefore"
              fluid
              alt=""
            ></b-img>
          </b-col>
          <b-col lg="6">
            <h5>Final Boss Gate: After</h5>
            <b-img
              class="img-border"
              :src="this.bossabilitygateafter"
              fluid
              alt=""
            ></b-img>
          </b-col>
        </b-row>

        <p>
          This ability gate can be passed with either a double jump OR rocket AND the
          dash.
          <br />
          Since this is the final boss, I added much denser debris to hint that something
          important was up ahead.
          <br />
          This setup was very confusing for players. The gap was unclear, and nobody saw
          the double jump platforms.
          <br />After iterating, this was simplified and changed to dash first, since
          players with dash could already complete the game. This also let players quickly
          know if they can enter the area or not. The sky lightbeam hints the importance
          of the room up ahead.
        </p>
        <section class="subsection-container border-light" id="list-combat">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Combat</h2>
          </header>
          <p>
            Weapons, Behaviour Trees, Enemy AI, and Animations were all a mix of technical
            and design challenges. There are 2 types of normal enemies featured in the
            game: Melee and Ranged.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Gameplay Ability System (GAS)</h2>
          </header>
          <p class="">
            I wanted to reduce the amount of redundant code as much as possible. GAS
            allowed me to easily use the same ability for the player and enemies. All
            weapon abilities were created using GAS, which allowed for quick prototyping
            and adding abilities for players and enemies. One example is the rifle, which
            is used by both the player and ranged enemy.
          </p>
          <p class="strong-content">
            Adding an enemy use a different attack was a matter of just changing the
            granted abilities and changing the gameplay tag.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Miss Chance</h2>
          </header>
          <p class="strong-content">
            There are no hitscan weapons in the game. All weapons fire projectiles as
            actual game objects. To simulate miss chance, I instead gave recoil to
            enemies. Miss chance is calculated as recoil over distance. The closer the
            player is, the less recoil the enemy has. However, the recoil caused enemies
            to miss at close distance, which reduces the risk/reward aspect as well as
            "realism" - it didn't feel good. Additionally, Slow projectiles with recoil
            felt like they were more accurate because of player movement (as if the AI was
            leading the shot).
          </p>
          <b-img class="img-border" :src="this.distancerecoil" fluid alt=""></b-img>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Flinching/Interrupted</h2>
          </header>
          <p class="strong-content">
            AI play a flinching when shot, which sets them to a stun state. When
            flinching, enemies cannot fire or move. This gave an extra dimension during
            combat. Melee enemies can block shots, which recover faster than flinching,
            making them advance faster. Furthermore, this gives the player time to take
            cover or continue attacking. I used this mechanic to my advantage as well in
            different bosses, only letting them flinch during specific periods of time
            (during attacking)
          </p>
          <b-img class="img-border" :src="this.rocketinterrupt" fluid alt=""></b-img>
          <p class="strong-content text-center">
            The player risks eating a rocket, but is rewarded by cancelling the boss'
            attack, giving a window of opportunity to deal more damage.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Stealth, Cone of Vision</h2>
          </header>
          <p class="strong-content">
            Enemies could only see in front of them. This, in combination of a open world,
            allowed for the basic mechanics of stealth. I took advantage of this, and
            designed paths at certain areas to be able to completely stealth through an
            enemy encounter.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Damage System</h2>
          </header>
          <p class="strong-content">
            The other piece of the modular puzzle was the damage system component, which
            was also used for both the player and enemies. This helped unify basic
            mechanics (healing), while allowing for flexibility by overriding the
            component's methods.
          </p>
          <b-img class="img-border" :src="this.dmgsystem" fluid alt=""></b-img>
          <p class="strong-content text-center">
            This system allowed me to add specific logic to damage functions (by
            overriding) without needing to change the core function.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Normal Enemies</h2>
          </header>

          <p class="strong-content">
            As my first time working on behaviour trees and EQS, making BTs for ~6 enemy
            types was difficult and a headache. Behaviour trees (and EQS) naturally
            drastically changed how the player responded to combat encounters. For
            enemies, I had 2 main goals for normal encounters:
          </p>
          <li>Melee enemies: Encourage the player to move around (kiting), tankier.</li>
          <li>Ranged enemies: Encourage player to take cover, more damage.</li>

          <p class="strong-content">
            Melee enemies chased the player and had a 30% chance to block incoming
            projectiles other than rockets. This gave players an impression of melee
            enemies being tankier without giving them more health. More importantly,
            players with rockets could bypass the "tankiness", providing more risk (close
            range explosions damaging self) and reward.
          </p>
          <p class="strong-content">
            Ranged enemies moved to an ideal location (in range and clear line of fire)
            and fired at the player once, and repeated this. Balancing ranged enemies'
            difficulty was difficult. Feedback conflicted between different player types.
            FPS players found it too easy, while Metroidvania players found it too
            difficult/overwhelming. I experimented with fire rates, damage, and move
            speed. Ranged enemies also find cover and heal if they are low on health.
          </p>
          <p class="strong-content">
            With this, combining melee and ranged enemies in an encounter created a
            balance between cover-taking and movement.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Token System</h2>
          </header>
          <p class="strong-content">
            Q: What if an encounter has 10 ranged enemies and they all fire at once?
            <br />
            A: The player dies instantly and it feels unfair.
          </p>
          <p class="strong-content">
            Although its natural that combat should feel and be more intense with more
            enemies, the open world nature created several problems. Players could
            effectively aggro multiple encounters' enemies and take them on a journey.
            Multiple solutions could have been used. I could have broken up the nav mesh,
            set a time limit for enemies to disengage, or set bounds in the encounter. At
            around the same time, I learned and implemented the token system, which
            effectively helped break this dependency of the number of aggro'ed enemies and
            combat intensity. The token system limited the amount of enemies attacking the
            player at any given time.
          </p>

          <b-row>
            <b-col lg="6">
              <!-- <h5>Dash Gate: Before</h5> -->
              <b-img class="img-border" :src="this.tokenstore" fluid alt=""></b-img>
            </b-col>
            <b-col lg="6">
              <!-- <h5>Dash Gate: After</h5> -->
              <b-img class="img-border" :src="this.tokenattackend" fluid alt=""></b-img>
            </b-col>
            <b-img class="img-border" :src="this.tokenattackstart" fluid alt=""></b-img>
          </b-row>
          <p>
            Tokens are "taken" from the player when an enemy attacks and released when
            attacks end.
          </p>
        </section>
        <section class="subsection-container border-light" id="list-bossfights">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Boss Fights</h2>
          </header>
          <p class="strong-content">
            I wanted each boss fight to challenge the player a different way. Ideally,
            this would cause boss rooms to be different as well. This philosophy would
            proceed to cause many headaches. Following the initial brief, I already knew
            which ability to give to players early on.
            <br />To this end, I assigned a theme early on to each boss:
          </p>
          <ul>
            <li>
              Rocket Boss: "The Castle". Emphasize verticality. Boss has the high ground,
              player dodges rockets while reaching the top of the tower.
            </li>
            <li>
              Double Jump Boss: "The Arena". Emphasize stealth, cover taking. Player and
              boss should be in closer proximity.
            </li>
            <li>
              Dash Boss: "The Bridge". Emphasize movement and speed. Rather than a single
              boss, reverse tower defense instead.
            </li>
          </ul>
          <!--  -->
          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Rocket Boss (Castle)</h2>
          </header>

          <div class="single-image centered py-2">
            <!-- RocketRingTower -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/0fMZmiifTz4"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            A early iterations of the tower. I wanted to integrate some degree of clutter,
            ruins, and route finding. Note that the boss character itself (behaviour,
            animations, etc) has not been created yet at this point. I wanted the boss to
            stay the the top of the tower, firing at the player.
            <br />I also wanted special events to happen, such as the dome falling down on
            the boss to deal massive damage, by shooting at the tethers holding the dome
            up. <br />
            Walking around the space, it is clear the scale is too large, there are many
            blind spots, and its hard to look at the tower itself while going up the ring.
          </p>

          <div class="single-image centered py-2">
            <!-- RocketSlopeTower -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/GLclD17G0oY"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            A second iteration with the boss character implemented. I liked the
            destructible pillars in front, which showed the power of the rocket and forced
            the player to advance. The scale was still too large; it felt like an ant
            fighting a giant, which was cool, but was not what I was going for.
            <br />
            Having destructible routes was frustrating, since the player had to start from
            the ground and find another route up again. Another issue was the boss could
            fall down from the tower when flinching. Sightlines were another issue. With
            so much clutter (ruins, poles etc), there was no real fear of getting hit by
            rockets because the boss couldn't even see the player half the time.
          </p>

          <div class="single-image centered py-2">
            <!-- RocketCrabTowerFallLowFPS -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/ZocJDRdJr_w"
              allowfullscreen
            ></b-embed>
          </div>

          <p class="strong-content">
            A third iteration. Chaos Destruction and geometry collections caused many
            performance issues as well. I ended up increasing the sleep threshhold and
            removed debris later on. The player shouldn't have rockets by the way, just a
            showcase of the problem here.
          </p>

          <div class="single-image centered py-2">
            <!-- Rocket Stage Carpet Bomb -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/lPnEFZ07rRM"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            Scrapping the tower, I still wanted to emphasize verticality, at least a
            little. Hence a stage was created, with a much lower height. To increase
            intensity and difficulty, I also increased the fire rate and number of
            rockets, which I thought worked well.
            <br />
            Until playtesters died too many times. Lowering scale helped with problems
            such as dead time, while removing the clutter helped the boss maintain sight
            with the player. Problems such as falling from flinching still existed, the
            boss was hard to read at times, and the boss firing at the player before they
            entered the room, amongst others.
          </p>

          <div class="single-image centered py-2">
            <!-- FinalRocketBoss -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/uVtWCz9b-uc"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            A one way valve, a tutorial to leave the area, color coded destructibles, and
            the "tower climb" as a way to have a low intensity moment between combat
            encounters. Moving the rooms around in the world became more and more time
            consuming. Instead of downsizing the room, I put the arena inside the room
            itself to avoid moving sublevels around.
            <br />The arena's destructibles also softly teach the player what is
            destructible after they obtain the ability. <br />The boss tries to maintain
            maximum distance helped promote player movement around the arena - whether
            they want to get closer to the boss or farther from them. <br />Furthermore,
            the boss tries to take cover when on cooldown. Because of this, the boss does
            not generally move towards the center of the arena, even though they can.
          </p>
          <p class="strong-content">
            In the end, it felt like I strayed away from emphasizing verticality with the
            boss, and ended up with a rather flat, arena-like level. In that sense, I did
            not feel like I accomplished what I set out to do in this bossfight. However,
            I found this boss reinforced the core combat loop much better than previous
            iterations, from entering the bossfight, obtaining the ability, and
            understanding how to use the ability.
          </p>
          <b-img class="img-border" :src="this.rocketbt" fluid alt=""></b-img>
          <p class="strong-content text-center">
            The behaviour tree was deceptively simple. By making the boss constantly
            moving to an ideal distance and preferring a greater distance from the player,
            players thought the boss was evading the player and being aggressive at the
            same time, forcing players to move around the arena as well. Furthermore, it
            adapted to different playstyles well too. Players who wanted to get closer to
            the boss and players who wanted to evade the boss both had a sense of push and
            pull. I really liked this.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Double Jump Boss (Arena)</h2>
          </header>
          <div class="single-image centered py-2">
            <!-- ArenaFirstIteration -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/XKoNuPBk3Xk"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            Too bright - how to hide anything if its so bright?
          </p>

          <div class="single-image centered py-2">
            <!-- MageFirstIteration -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/Qh2_3Abyf-c"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            Can't see the enemy, even when on the balcony. Can shoot at the enemy even
            before jumping down the one way valve.
          </p>

          <div class="single-image centered py-2">
            <!-- MageHealthbarHeal -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/vTv3qPOrwHE"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            Showing healthbar made it too easy to find the mage, reducing stealth aspect.
            Healing next to the player made it too easy to cancel their healing.
            Spotlighting (and framing) the boss' shadow on the wall made players notice it
            much more. Invisible wall to prevent hurting enemy before they jump down the
            arena.
          </p>

          <div class="single-image centered py-2">
            <!-- FinalArena -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/H_Hr9A7pV1A"
              allowfullscreen
            ></b-embed>
          </div>

          <p class="strong-content">
            Hid the healthbar for the mage boss completely. This made it more difficult
            for the player to find the boss, which was good. A more controversial effect
            was the lack of progression feedback. Is the boss nearly dying? How much did
            they heal? In the end, I decided that it was a good tradeoff. The uncertainty
            coupled with the "slippery" feeling of the boss helped emphasize the theme of
            this boss. When the boss goes to heal, it finds a location that is farthest
            away from the player. This forces the player to play hide and seek with it. It
            was a bit too easy for players to find the boss when it was healing due to the
            bright VFX, but I believe the core gameplay is achieved.
          </p>

          <b-img class="img-border" :src="this.magebt" fluid alt=""></b-img>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Dash Boss (Bridge)</h2>
          </header>

          <b-row>
            <b-col lg="6">
              <div class="">
                <!-- incredibles scene -->
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/t-XbDgXvNhI"
                  allowfullscreen
                ></b-embed>
              </div>
            </b-col>
            <b-col lg="6">
              <div class="">
                <!-- BridgeDeath -->
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/igm2IEPdyu4"
                  allowfullscreen
                ></b-embed>
              </div>
            </b-col>
          </b-row>

          <p class="strong-content">
            Inspired by The Incredibles scene. Early iterations consisted of little cover
            and was easy to die. However, the difficulty was not the issue. Rather, the
            frustrations came from the feeling of unfairness - there was no way to counter
            the fast moving projectiles. Furthermore, the lack of feedback on damaged made
            it confusing.
          </p>

          <div class="single-image centered py-2">
            <!-- StraightBridgeSuccess  -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/tRr__3q4BYs"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            I liked the idea of the projectiles sticking to each other to create emergent
            platforms and cover, similar to a "goo gun" (Prey, The Finals).
            <br />To solve the issue of the player getting trapped, shooting the yellow
            projectiles would loosen them. <br />
            The chaotic nature of the turrets grew on me - to make it less unfair, maybe I
            could add more cover. I planned for the player to press a button at the end of
            the bridge, which would kill all turrets and reveal the dash ability. At this
            point, I had not yet implemented pick ups, buttons, or level events.
          </p>

          <div class="single-image centered py-2">
            <!-- BridgeWithPickup -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/DmUyMfcyzgk"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            With the button interaction and pickups prototyped, the pacing could be seen
            more clearly. I wanted the player to return to the
            <br />However, the button at the end of the bridge was confusing. What did it
            do? Where is the dash ability? <br />Playtesters felt extremely confused when
            going through this section of the game. The goal was unclear, the enemy was
            new and has never been introduced, the concept of buttons was new, and the
            player was bombarded by projectiles before they even entered the room.
          </p>

          <div class="single-image centered py-2">
            <!-- BridgeTutorial -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/YzZI3Uv3nYw"
              allowfullscreen
            ></b-embed>
          </div>
          <p class="strong-content">
            Players quickly understood how turrets worked by the time they reached the
            middle of the bridge. Introducing one turret first allowed them to experiment
            what new mechanics there were in a safe space. The first button was confusing,
            as players didnt expect it would kill the turrets. The button at the end of
            the bridge was still confusing - "why did the lights turn off?" "What am I
            supposed to do now?"
          </p>

          <div class="single-image centered py-2">
            <!-- FinalBridge -->
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/Dr3JdxeB9bk"
              allowfullscreen
            ></b-embed>
          </div>

          <p class="strong-content">
            Removed button killing turrets entirely. Dash is given when player reaches the
            end of the bridge. This does 2 things: Returning to the entrance is much
            faster, enhancing the power of the new ability, the theme of speed, and softly
            teaching them the ability. Added a wall to hide behind at the end of the
            bridge for confused players to rest and plan their next move. Added ability
            gate to force them to use the ability to leave the room. Eventually, they will
            have to realize they need to turn back because there is no other way. Turrets
            only reactivate when the player acquires the ability.
          </p>
        </section>

        <section class="subsection-container border-light" id="list-conclusion">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Evaluation, Conclusion</h2>
          </header>

          <p class="strong-content">
            How on earth do people document projects? This was way too much lol. Thank the
            heavens for version control because all the videos and timelapse screenshots
            came from going back in time.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Did I achieve my original goals?</h2>
          </header>
          <p class="strong-content">
            The goals of this project was to create a "FPS Metroidvania vertical slice
            with a sci-fi desert theme". I believe this game achieved this in terms of
            gameplay design, but the lack of an art pass and unrefined audio hurt
            immersion, the design pillar of exploration, and the idea of a vertical slice.
            I believe I learned a lot from this as well. As my first time doing level and
            combat design on this scale, there were many unforeseen challenges.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">The Successful</h2>
          </header>
          <li>
            From a design standpoint I think the metroidvania flow was executed well,
            albeit basic. The playtime and pacing early on (before all the enemies are
            killed) was also good.
          </li>
          <li>
            Boss Fights: One of the most work I put in, each boss fight presented unique
            problems I had never encountered before. Each boss battle challenged the
            player in a different, engaging way.
          </li>
          <li>
            Difficulty: Balancing between FPS players and Metroidvania players was
            difficult. I leaned towards the easier side, but some FPS players still found
            some encounters to be difficult.
          </li>
          <li>
            There were many technical challenges. I had to learn many unreal related
            things to accomplish this. Ranging from AI, Cubegrid, Chaos Destruction,
            animation montages, Level Management, Optimization, and GAS.
          </li>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">The Failures</h2>
          </header>
          <li>
            Pacing was still an issue in the end. The lack of respawning enemies in
            encounters meant more dead time when players had to return to the final boss.
          </li>
          <li>
            The lack of progression systems when defeating enemies is also an issue.
            Health is only for survival, but it doesn't make players stronger or easier to
            defeat enemies.
          </li>
          <li>
            Combat in general was also quite barebones. Implementing weak points, for
            example, would have helped engagement. Reloading, animations, different gun
            models would all have been good additions for better combat flow and feedback.
          </li>
          <li>
            Performing and art pass was too difficult. Replacing blockmeshes, adding
            shaders/materials and blending them together was beyond my skill.
          </li>
          <li>
            AI was one of the most problematic challenge. EQS, Behaviour trees, and enemy
            abilities were all interconnected problems that took much time to debug. More
            responsive behaviour and animations for different states and different models
            would also have increased immersion.
          </li>
          <li>
            Destructibles was also underused. I originally wanted every pillar in the
            Arena to be destructible, but debris (the player would spin when standing on
            debris) and performance made it difficult.
          </li>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">
              What would I do differently if I started this again?
            </h2>
          </header>
          <p>This is actually a disguised learnings section.</p>
          <li>
            I believe genre would be one key thing I would change. The nature of a
            metroidvania made me create a whole world, rather than an "encounter". While
            interesting, this high level thinking initially defined the scope. In the end,
            I still believe 3 bosses, 2 areas, and creating surrounding mechanics from
            scratch is still too large as a piece. It would have perhaps been better to
            only work on a polished room, and 1-2 bosses. The gameplay flow worked well as
            a metroidvania with ability gates, non linear gameplay, and backtracking, but
            it left a lot to be desired in terms of the feeling of exploring an alien
            planet. I think a more linear, Call of Duty style level would have made for a
            better exercise.
          </li>
          <li>
            Use off the shelf assets as much as possible! Rather than creating
            interaction, combat, and ui systems myself, I believe it could have looked a
            lot better in the same amount of time if I didnt create everything from
            scratch. One important thing was that I had to rework a lot of levels and
            rooms only when the combat system and AI was nearly finalized. Off the shelf
            combat systems could have let me prototype things earlier. On that note...
          </li>
          <li>
            Make / prototype the combat and AI systems before blocking out the entire
            world (maybe a few rooms only)! Combat systems solidify 2 things: Player
            metrics and the type of area a space is. It's difficult to imagine a combat
            space with only combat mechanics without enemies, and enemy behaviour can
            really affect pacing. I could have saved a lot of iteration time if combat
            systems were made first.
          </li>
          <li>
            Define and lock down basic player metrics early! Movement speed, jump height,
            dash distance, crouch (i.e. traversal) all caused reworking large parts of
            levels.
          </li>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Future Work</h2>
          </header>

          <p class="strong-content">
            An architecture/art pass would be improve immersion. It would help distinguish
            the two different areas a lot better, and bring it up a level. Polishing the
            UI, weapon feel(recoil, animations) and audio would contribute to more less
            player confusion and greater immersion. Implementing enemy encounter
            respawning would help with pacing. Finally, improving the AI (better
            perception, more attacks/types/variation) and respawning enemies after rooms
            would regulate pacing.
          </p>
        </section>
        <section class="subsection-container border-light" id="list-credits">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Credits</h2>
          </header>
          <ul>
            <li>
              Desert Caravan by Aaron Kenny Music promoted on
              https://www.chosic.com/free-music/all/
            </li>
            <li>
              Waterfall Sounds by tramp963, Pixabay
              https://pixabay.com/sound-effects/waterfall-sounds-259625/
            </li>
            <li>
              https://pixabay.com/sound-effects/spacecraft-chrasing-88048/ spacecraft
              chrasing Unilyd (Freesound)
            </li>
            <li>
              https://pixabay.com/sound-effects/highflow-river-6221/ Highflow River
              CaganCelik (Freesound)
            </li>
            <li>
              https://www.fab.com/listings/23869931-3e46-4c42-b541-9f6057f12d13 Cartoon
              Water Shader, Sandvector Studios
            </li>
            <li>
              https://www.fab.com/listings/9190e4a3-1f44-4715-a3a4-342846002b2c Modular
              Sci Fi Indoor/Outdoor environment pack - Rocky Swampy Planet, JessyStorm's
              Assets
            </li>
            <li>
              https://www.fab.com/listings/fc3a309a-a3eb-46de-bebe-dcb40dc31e48 Skeleton
              Knight Modular, buxioded
            </li>
            <li>Military Silver Weapons pack</li>
            <li>Various Mixamo models and animations</li>
            <li>
              https://www.youtube.com/watch?v=-t3PbGRazKg&list=PLNwKK6OwH7eW1n49TW6-FmiZhqRn97cRy
              Smart Enemy AI Tutorial, Ali Elzoheiry
            </li>
          </ul>
        </section>

        <!-- <h4>Rooms</h4>
    <p>Each room went through a number of iterations themselves (and will continue having more iterations), most if not
      all suffering from the issues mentioned above.
      <br>
      Note that this is still a work in progress.
    </p> -->
        <!-- <b-row>
    <b-col lg="6">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.iter_canyonhub" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
    <b-col lg="6">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.iter_tower" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
    <b-col lg="6">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.iter_bridge" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
    <b-col lg="6">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="5000">
          <b-carousel-slide v-for="image in this.iter_arena" :key="image.url" caption=""
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
  </b-row> -->
      </main>
    </b-container>

    <section class="subsection-container border-light" id="list-credits">
      <header class="text-center mb-4">
        <h2 class="subsection-header display-5">Gallery (WIP screenshots)</h2>
      </header>
    </section>
    <b-col lg="12">
      <div>
        <b-carousel
          id="carousel"
          :aspect="'16:9'"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          controls
          indicators
          :interval="500"
        >
          <b-carousel-slide
            v-for="(image, index) in this.galleryList"
            :key="index"
            :img-src="image"
            caption=""
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
    <br />
    <b-col lg="12">
      <h5>Map</h5>
      <div class="ratio ratio-16x9">
        <b-carousel
          id="carousel"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          controls
          indicators
          :interval="5000"
        >
          <b-carousel-slide
            v-for="image in this.layouts"
            :key="image.url"
            :caption="image.caption"
            :img-src="image.url"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </b-col>
  </b-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      timelapse: [
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/6.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/7.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/8.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/9.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/10.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/11.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/12.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/13.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/14.png"),
        },
      ],
      processimages: [],
      layouts: [
        {
          url: require("@/assets/scarabdescent/layouts/draft.png"),
          caption: "Draft",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v1.png"),
          caption: "V1",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v2.png"),
          caption: "V2",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v3.png"),
          caption: "V3",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v4.png"),
          caption: "V4",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v5.png"),
          caption: "V5",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v6.png"),
          caption: "V6",
        },
        {
          url: require("@/assets/scarabdescent/layouts/v7.png"),
          caption: "Final",
        },
        {
          url: require("@/assets/scarabdescent/layouts/annotatedlayout.png"),
          caption: "Annotated Map",
        },
      ],
      settingmoodboard: require("@/assets/scarabdescent/ideation/settingmoodboard.jpg"),
      v5moodboard1: require("@/assets/scarabdescent/ideation/v5moodboard1.png"),
      v5moodboard2: require("@/assets/scarabdescent/ideation/v5moodboard2.png"),
      draftlayout: require("@/assets/scarabdescent/layouts/draft.png"),
      initiallayout: require("@/assets/scarabdescent/layouts/v1.png"),
      middlelayout: require("@/assets/scarabdescent/layouts/v4.png"),
      finallayout: require("@/assets/scarabdescent/layouts/v8.png"),
      annotatedlayout: require("@/assets/scarabdescent/layouts/annotatedlayout.png"),
      initialcanyonblockout1: require("@/assets/scarabdescent/blockout/initcanyonblockout1.png"),
      initialcanyonblockout2: require("@/assets/scarabdescent/blockout/initcanyonblockout2.png"),
      initialcanyonblockout3: require("@/assets/scarabdescent/blockout/initcanyonblockout3.png"),
      ldkcanyonblockout1: require("@/assets/scarabdescent/blockout/ldkcanyonblockout1.png"),
      ldkcanyonblockout2: require("@/assets/scarabdescent/blockout/ldkcanyonblockout2.png"),
      ldk: require("@/assets/scarabdescent/blockout/leveldesignkit.png"),
      finalcanyonblockout1: require("@/assets/scarabdescent/blockout/finalcanyonblockout1.png"),
      finalcanyonblockout2: require("@/assets/scarabdescent/blockout/finalcanyonblockout2.png"),

      brief: [
        {
          url: require("@/assets/scarabdescent/brief/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/brief/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/brief/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/brief/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/brief/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/brief/6.png"),
        },
        {
          url: require("@/assets/scarabdescent/brief/8.png"),
        },
      ],

      backtrackroutes: require("@/assets/scarabdescent/backtracking/backtrackroutes.png"),
      dashabilitygatebefore: require("@/assets/scarabdescent/iterations/abilitygates/dashgatebefore.png"),
      dashabilitygateafter: require("@/assets/scarabdescent/iterations/abilitygates/dashgateafter.png"),
      bossabilitygatebefore: require("@/assets/scarabdescent/iterations/abilitygates/bossgatebefore.png"),
      bossabilitygateafter: require("@/assets/scarabdescent/iterations/abilitygates/bossgateafter.png"),

      lightingbefore: require("@/assets/scarabdescent/iterations/lighting/lightingbefore.png"),
      lightingafter: require("@/assets/scarabdescent/iterations/lighting/lightingafter.png"),

      magecorridorbefore: require("@/assets/scarabdescent/iterations/solutions/mage/framedmagecorridorbefore.png"),
      magecorridorafter: require("@/assets/scarabdescent/iterations/solutions/mage/framedmagecorridorafter.png"),

      dashgatebefore: require("@/assets/scarabdescent/iterations/solutions/DashGateBefore.png"),
      dashgateafter: require("@/assets/scarabdescent/iterations/solutions/DashGateAfter.png"),

      riverbefore: require("@/assets/scarabdescent/iterations/solutions/RiverBefore.png"),
      riverafter: require("@/assets/scarabdescent/iterations/solutions/RiverAfter.png"),

      tokenattackstart: require("@/assets/scarabdescent/combat/token/attackstart.png"),
      tokenattackend: require("@/assets/scarabdescent/combat/token/attackend.png"),
      tokenstore: require("@/assets/scarabdescent/combat/token/store.png"),

      crashedring: require("@/assets/scarabdescent/envstory/crashedring.png"),
      fallentowerring: require("@/assets/scarabdescent/envstory/tower.png"),
      pileddebris: require("@/assets/scarabdescent/envstory/pileddebris.png"),
      guards: require("@/assets/scarabdescent/envstory/guards.png"),
      stuckdisc: require("@/assets/scarabdescent/envstory/stuckdisc.png"),

      hkpathing: require("@/assets/scarabdescent/research/hkpathing.png"),
      primepathing: require("@/assets/scarabdescent/research/primepathing.png"),
      observations: require("@/assets/scarabdescent/reference/observations.png"),

      magebt: require("@/assets/scarabdescent/bosses/magebt.png"),
      teleporthealbt: require("@/assets/scarabdescent/combat/TeleportToHeal.png"),
      rocketbt: require("@/assets/scarabdescent/bosses/RocketBossBT.png"),

      dmgsystem: require("@/assets/scarabdescent/combat/DamageSystem.png"),
      distancerecoil: require("@/assets/scarabdescent/combat/DistanceBasedRecoil.png"),
      rocketinterrupt: require("@/assets/scarabdescent/combat/RocketBossInterrupt.png"),

      iter_arena: [
        {
          url: require("@/assets/scarabdescent/iterations/arena/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arena/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arena/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arena/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arena/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arena/6.png"),
        },
      ],
      iter_arenahallway: [
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway/1.png"),
        },
      ],
      iter_arenahallway2: [
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/6.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/7.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/8.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/arenahallway2/9.png"),
        },
      ],
      iter_bridge: [
        {
          url: require("@/assets/scarabdescent/iterations/bridge/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/6.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/7.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/8.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/9.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/10.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/bridge/11.png"),
        },
      ],
      iter_canyonhub: [
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/6.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/7.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/8.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/9.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/10.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/11.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/12.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/13.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/14.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/15.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/canyonhub/16.png"),
        },
      ],
      iter_centralhub: [
        {
          url: require("@/assets/scarabdescent/iterations/centralhub/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/centralhub/2.png"),
        },
      ],
      iter_tower: [
        {
          url: require("@/assets/scarabdescent/iterations/tower/1.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/2.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/3.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/4.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/5.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/6.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/7.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/8.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/9.png"),
        },
        {
          url: require("@/assets/scarabdescent/iterations/tower/10.png"),
        },
      ],
      feedback: [
        { url: require("@/assets/scarabdescent/iterations/feedback/1.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/2.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/3.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/4.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/5.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/6.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/7.png") },
        { url: require("@/assets/scarabdescent/iterations/feedback/8.png") },
      ],
      galleryList: [],
    };
  },
  mounted() {
    this.loadGalleryImages();
    // this.importAll(require.context('@/assets/scarabdescent/screenshots/', true, /\.png$/));
  },
  methods: {
    async loadGalleryImages() {
      // 1. For development (webpack context)
      const context = require.context(
        "@/assets/scarabdescent/screenshots/", // Your folder path
        true,
        /\.png$/ // Pattern to match
      );

      // Get all matching file paths
      this.galleryList = context.keys().map((key) => context(key));

      /* 
      // 2. For production (API endpoint alternative)
      try {
        const response = await axios.get('/api/carousel-images');
        this.imageList = response.data;
      } catch (error) {
        console.error("Error loading images:", error);
      }
      */
    },
    importAll(r) {
      r.keys().forEach(key => (this.galleryList.push({ pathLong: r(key), pathShort: key })));
    },

  },
};
</script>

<style scoped>
.link-col {
  display: block;
  align-items: baseline;
  justify-content: center;
}

.link-button {
  background-color: #5c629900;
  border-color: #b298dc;
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

.overview {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border: 1px solid #cecece;
  width: 80%;
}

.shaded-box {
  background-color: rgba(34, 34, 44, 0.7);
  /* White with 70% opacity */
  backdrop-filter: blur(5px);
  /* Optional: frosted glass effect */
  border-radius: 15px;
  /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Subtle shadow */
  /* width: 80%;
  max-width: 600px; */
  /* Additional padding is handled by Bootstrap's p-4 class */
}
.button-box {
  background-color: rgba(255, 81, 0, 0.7);
  /* White with 70% opacity */
  /* backdrop-filter: blur(5px); */
  /* Optional: frosted glass effect */
  border-radius: 15px;
  /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Subtle shadow */
  /* width: 80%;
  max-width: 600px; */
  /* Additional padding is handled by Bootstrap's p-4 class */
}

.section-container {
  border-top: 4px solid #dee2e6;
  /* border-bottom: 4px solid #dee2e6; */
  /* Thick divider line */
  padding-top: 2rem;
  /* Space above the divider */
  margin-top: 2rem;
  /* Space below the divider */
}

.section-header {
  font-size: 2.5rem;
  /* Large header text */
  font-weight: 700;
  letter-spacing: 1px;
  /* Spaced out letters */
  text-transform: uppercase;
  /* All caps */
  /* color: #333; Dark gray color */
}

.subsection-container {
  border-top: 2px solid #797979;
  /* Thick divider line */
  padding-top: 3rem;
  /* Space above the divider */
  margin-top: 3rem;
  /* Space below the divider */
}

.subsection-header {
  font-size: 2rem;
  /* Large header text */
  font-weight: 500;
  letter-spacing: 0.5px;
  /* Spaced out letters */
  text-transform: uppercase;
  /* All caps */
}

.section-content {
  padding: 0 2rem;
  /* Horizontal padding for content */
}

/* Remove bottom border from last section */
.section-container:first-child {
  border-top: none;
  padding-top: 0;
  margin-top: 0;
}

.fluid-weight {
  font-weight: 550;
  /* Between medium and semibold */
  font-variation-settings: "wght" 550;
}

.strong-content {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.6;
}

.strong-content b,
.strong-content strong {
  font-weight: 800;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.single-image {
  width: 70%;
}
.img-border {
  border: 3px solid #f5f5f5; /* Thickness + color */
  border-radius: 4px; /* Optional rounded corners */
}
.nav-column {
  position: fixed;
  left: 0;
  top: 15%;
  /* height: 100vh; */
  /* Controlled by :style binding */
  width: 17%;
  z-index: 1000;
}
.sidebar-nav {
  --active-bg: #4e73df;
  --active-text: white;
  --hover-bg: #f8f9fa;
  --inactive-bg: white;
  --inactive-text: #495057;
}
.sidebar-nav .list-group-item:not(.active):hover {
  background-color: var(--hover-bg);
  transform: translateX(3px);
}
.sidebar-nav .list-group-item.active {
  /* background-color: var(--active-bg); */
  /* color: var(--active-text); */
  /* font-weight: 600; */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.sidebar-nav .list-group-item i {
  transition: transform 0.2s ease;
}

.sidebar-nav .list-group-item.active i {
  transform: scale(1.1);
}
</style>
