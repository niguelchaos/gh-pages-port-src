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
          <div class="pt-5 pb-5">
            <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/0KjdHme3Cig?si=ah5_VHd13vXz4UpO"
              allowfullscreen></b-embed>
          </div>
        </b-col>
        <b-col lg="6">
          <div class="pt-5 pb-5">
            <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/lseJqpHDyjU"
              allowfullscreen></b-embed>
          </div>
        </b-col>
      </b-row>

      <header class="text-center mb-4 pt-3">
        <h2 class="fw-bold mb-3 display-5">Blockout Timelapse</h2>
      </header>
      <!-- <h2>Blockout Timelapse</h2> -->
      <b-col lg="12 pb-5">
        <div>
          <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
            :interval="700">
            <b-carousel-slide v-for="image in this.timelapse" :key="image.url" :caption="image.caption"
              :img-src="image.url"></b-carousel-slide>
          </b-carousel>
        </div>
      </b-col>

      <div class="d-flex justify-content-center ">
        <div class="overview shaded-box">
          <b-row class="text-center">
            <b-col lg="4">
              <h4>My Role</h4>
              <p>Game/Level Designer</p>
            </b-col>
            <b-col lg="4">
              <h4>Team Size</h4>
              <p>
                2
              </p>
            </b-col>
            <b-col lg="4">
              <h4>Development Time</h4>
              <p>
                4 Months
              </p>
            </b-col>
          </b-row>

          <b-row class="text-center">
            <b-col lg="6">
              <h4>Genre</h4>
              <p>
                FPS Metroidvania
              </p>
            </b-col>
            <b-col lg="6">
              <h4>Game Engine</h4>
              <p>
                Unreal Engine 5
              </p>
            </b-col>
          </b-row>
        </div>
      </div>

      <main class="container py-3">
        <!-- Section 1 -->
        <section class="section-container border-light">
          <header class="text-center mb-4">
            <h2 class="section-header display-4">CONCEPT</h2>
          </header>
          <div class="px-lg-5">
            <!-- Content -->
            <p class="strong-content">Scarab Descent is a Metroidvania FPS set in a vast desert ruin with a touch of
              sci-fi.
              The game merges FPS mechanics with Metroidvania-style exploration inspired by Metroid Prime and Hollow
              Knight,
              where players must find their spaceship to leave an alien world.</p>
          </div>
        </section>

        <section class="section-container border-light">
          <header class="text-center mb-4">
            <h2 class="section-header display-4">CONTRIBUTION</h2>
          </header>

          <div class="row g-4"> <!-- g-4 adds consistent gutter spacing -->

            <!-- Column 1 -->
            <div class="col-md-4">
              <div class="h-100 p-3"> <!-- h-100 makes columns equal height -->
                <h3 class="fw-bold mb-3">Level Design</h3>
                <p class=" lh-lg">
                  From ideation to blockout, I worked on all design and scripting.
                </p>
              </div>
            </div>

            <!-- Column 2 -->
            <div class="col-md-4">
              <div class="h-100 p-3">
                <h3 class="fw-bold mb-3">Combat Design</h3>
                <p class=" lh-lg">
                  I designed all final mechanics and behaviours for:
                </p>
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
                <p class=" lh-lg">
                  I designed and implemented the following mechanics:
                </p>
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
              <li> Learn more about the level design process.</li>
              <li> Practice iterating and refining the level design pipeline.</li>
              <li> Focus on the creation of whiteboxing environments.</li>
            </ul>
            <p class="strong-content lh-lg">
              Many of my efforts to implement mechanics and gameplay was to show how the level could work.
              Eventually, both gameplay and level began influencing each other.
            </p>
            <p><b>Teammate's responsibilities</b></p>
            <ul>
              <li> Initial Project Setup (Levels, Gameplay Mechanics, Architecture).</li>
              <li> Setting the theme and setting of the game.</li>
              <li> UI (Main menu, Game flow).</li>
            </ul>
          </div>
        </section>

        <section class="section-container border-light">
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

        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">1. Research</h2>
          </header>

          <p class="strong-content lh-lg">
            Since our game was inspired by Hollow Knight, I decided to study what common elements modern metroidvanias
            have.
            I chose to examine:
          </p>
          <ul>
            <li>Hollow Knight - the original inspiration</li>
            <li>Metroid Prime - The "standard" for FPS Metroidvania, which is similar to what we set out to make.</li>
          </ul>

          <p>
            Questions I had when researching:
          </p>
          <ul>
            <li> What common elements exist between Prime and HK's maps, despite one being 2D and another being 3D?</li>
            <li> How does the different themes affect the level design in their areas?</li>
            <li> How does the level design support the design pillars of each game?</li>
            <li> What techniques are used to maintain engagement when backtracking, which we know is a common pattern?
            </li>
          </ul>

          <p class="strong-content lh-lg">
            I analyzed:
          </p>
          <ul class="strong-content">
            <li> A Hollow Knight speedrun.</li>
            <li> The path IGN walkthrough of Metroid Prime took to 100% the game.</li>
          </ul>
          <p class="lh-lg">
            I traced the path of both, noting specifically how much backtracking each had, placement of enemies,
            abilities, and how abilities are gated.
            Although it is not exactly a fair comparison, I specifically did
            this to compare the differences between the fastest and "slowest" to gain insight into
            both in a limited amount of time.
          </p>

          <b-row>
            <b-col lg="6">
              <b-img :src="this.hkpathing" fluid-grow alt="Fluid image"></b-img>
            </b-col>
            <b-col lg="6">

              <b-img :src="this.primepathing" fluid-grow alt="prime path"></b-img>
            </b-col>
          </b-row>

          <p class="strong-content"> Findings and Observations:</p>
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
                      <li> Speedruns clearly have much less backtracking, and the paths which do tend to be in the hub
                        area.</li>
                      <li> The topology of both games' world maps is generally hub and spoke, with more sub-hubs the
                        more you go.
                      </li>
                      <ul>
                        <li> There are many reasons for this. Development, world building, player frustration, and
                          exploration are
                          a few.</li>
                      </ul>
                      <li> Ability gates are often placed in earlier areas, since it gives you a reason to backtrack.
                      </li>
                      <li> There are generally smaller hubs which let the player backtrack less before encountering a
                        save
                        point/resting area, especially during early game.
                      </li>
                      <li> Late game backtracking tends to become longer and longer, not just because of area, but also
                        because
                        gated
                        areas are intentionally placed in previous areas. This is offset by stronger traversal
                        abilities.
                      </li>
                      <li> Players are generally better rewarded for exploring more, which is correlated to more
                        backtracking.
                        Rewards include resources obtained by killing enemies or finding secret areas.
                      </li>
                      <li> The final boss is placed near the starter area, likely to give players an objective
                        throughout the
                        game, or for ease of access. Generally locked by a certain skill/item. This item can be
                        retrieved close,
                        and whether you can defeat it is up to skill.
                      </li>
                      <li> Many abilities are optional.
                      </li>
                      <li> Players often need to defeat bosses or challenges to obtain new abilities.
                      </li>
                      <li> Rooms can be categorized into nodes and edges
                        Edges are often long corridors, Nodes are larger, open space used for large fights or set
                        pieces.
                      </li>
                      <li> The player can see most of the doors upon entering the room.
                      </li>
                      <li> Large rooms generally expand in verticality too.
                      </li>
                      <li> Organic vs synthetic is also reflected in the layout.
                        Pirate Ship and constructed areas is angular, longer corridors, symmetrical
                        Organic areas like forests have more curves, jagged edges
                      </li>
                      <li> Prime uses gate shooting mechanic to hard gate players from entering areas
                        Hollow knight uses soft lock mechanics in some areas, such as the “fog of darkness”
                      </li>
                      <li> From a top down perspective, Metroid Prime is much more linear.
                      </li>
                      <li> Prime has puzzles that takes advantage of 3D, such as falling bricks, perspective puzzles,
                        and diegetic
                        UI.
                      </li>
                      <li> Prime doesn’t feature a lot of traditional cover. It is mostly dodging.
                      </li>
                      <li> Boss areas are arenas of mostly flat spaces, some with gimmicks such as environmental
                        hazards.
                      </li>
                      <li> Many of the enemies are faster/larger than the player, so its often a waiting game - wait for
                        enemy to
                        attack, and then react.
                      </li>
                      <li> Hollow Knight is slightly different, but also emphasizes dodging despite parrying being
                        possible.
                      </li>
                      <li> Distinct areas:
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
            </b-collapse>
          </div>

          <p class="strong-content"> While many of these are self explanatory, they helped me distill what we needed for
            an experience to be "metroidvania-esque".</p>
        </section>

        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">2. Ideation</h2>
          </header>

          <p class="strong-content">
            Moodboards were a large part of the ideation, layout, and blockout process, each with a different goal.
          </p>


          <header class="text-center mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Project Start</h2>
          </header>

          <div class="single-image-container pb-3">
            <b-img :src="this.settingmoodboard" class="single-image" alt="mood"></b-img>
          </div>

          <p class="strong-content">
            When starting the project, we looked for relevant themes we wanted, relevant games, and art style we
            envisioned the game
            to have.
            This influenced our direction to look towards keywords such as "ruins", "desert", and "old civilizations".
          </p>

          <header class="text-center mb-4 pt-3">
            <h2 class="fw-bold mb-3 display-5">Layout & Blockout</h2>
          </header>

          <b-row>
            <b-col lg="6">
              <b-img :src="this.v5moodboard1" fluid-grow alt="Fluid image"></b-img>
            </b-col>
            <b-col lg="6">

              <b-img :src="this.v5moodboard2" fluid-grow alt="prime path"></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3">
            For layout and blockout, I researched architecture, relevant games and moviesthat fit the specific concept I
            assigned to specific rooms.
            <br> There was no clear "step" at this stage. The moodboard was iteratively used together with the layout
            during the blockout process, which made the layouts quite messy.
            <br> This influenced specific elements in a room. One clear example was the river in the canyon hub, which
            was inspired by various images of, well, canyons.
          </p>

        </section>

        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">3. Design Document</h2>
          </header>

          <div class="px-lg-5">
            <p class="">
              With the goals set more clearly, I created a level design document to organize my thoughts. In the
              document, I establish the the
              main objectives, the core gameplay, the main design pillars, player
              mechanics, pacing and various metrics.
            </p>

            <h2>Main Project Goal</h2>
            <p>A MVP, self contained area encompassing all the pillars of this Metroidvania.</p>

            <h2>Game Objective</h2>
            <p>Defeat the Final Boss.</p>

            <div>
              <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" fade controls indicators :interval="3000">
                <b-carousel-slide v-for="image in this.brief" :key="image.url" caption=""
                  :img-src="image.url"></b-carousel-slide>
              </b-carousel>
            </div>

            <div class="my-4"></div> <!-- Spacer with margin -->

            <header class="text-center mb-4">
              <h2 class="fw-bold mb-3 display-5">Design Pillars</h2>
            </header>
            <p class="strong-content">
              The design pillars were of particular importance. They influenced many design decisions, including which
              ones to prioritize as I continued iteration.
            </p>

            <div class="row g-4"> <!-- g-4 adds consistent gutter spacing -->

              <!-- Column 1 -->
              <div class="col-md-4">
                <div class="h-100 p-3"> <!-- h-100 makes columns equal height -->
                  <h3 class="fw-bold mb-3">Exploration</h3>
                  <ul class="">
                    <li>Create a sense of the unknown.</li>
                    <li>Find new abilities by exploring new areas.</li>
                    <li>Players should feel more and more curious about the world as they move through spaces.</li>
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
                    <li>Skilled players should be able to find alternative ways to defeat them.</li>
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
                    <li>Ability based gating. Players should not be able to explore all areas in the beginning.</li>
                    <li>Player character should feel stronger through exploration and combat by acquiring abilities.
                    </li>
                    <li>Newly acquired skills should facilitate exploring previous areas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">4. Layout</h2>
          </header>

          <p class="strong-content lh-lg">
            The layouts were made using Figma. This allowed me to collaborate and discuss with others, as well as make
            efficient changes.
          </p>

          <p>
            When creating the 2D map, I kept fundamental considerations from the requirements, observations, genre, and
            narrative in mind:
          </p>
          <ul>
            <li> Have distinct areas to encourage exploration.</li>
            <li> Have more than 2 paths/playthrough methods to reach the final boss and different areas.
              The usage of a hub room is a common technique to do this. </li>
            <li> There should be a way to prevent prevent the player from going everywhere. Ability gating areas is a
              proven method.
            </li>
            <li> New abilities should be usable in both exploration and combat.</li>
          </ul>


          <header class="text-center mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">World Map Layout</h2>
          </header>

          <b-row>
            <b-col lg="6">
              <h5>1. Draft Layout</h5>
              <p>I began by drafting the entire world map, settling on a hub-and-spoke topology, with a distinct area
                for each "node".
                The world map encompasses the entire playable space and mainly influenced the paths the player could
                take.</p>
              <b-img :src="this.draftlayout" fluid alt="Draft"></b-img>
            </b-col>

            <b-col lg="6">
              <h5>2. Initial Layout</h5>
              <p>I then filled each area with rooms, reaching the initial layout.
                Note that the rooms are not drawn to scale, as the mechanic metrics at this point were not well defined
                yet.
                Scale issues would later be a constant battle I would fight.
              </p>
              <b-img :src="this.initiallayout" fluid alt="Initial"></b-img>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="12">
              <h5>3. Final Layout</h5>
              <p>After many iterations of blockout and layout, I greatly reduced the scope, and settled on this:
              </p>
              <ul>
                <li> 7 areas reduced to 2.</li>
                <li> Only 2 ability gates exist, following the initial brief's flow.</li>
                <li> Each boss rewards the player with a new ability.</li>
                <li> Each boss has a "theme", shown by the titles underneath each one. I wanted each boss to
                  challenge the player differently.</li>
                <li>
                  Since the player could go anywhere at any time, I instead went for a more atomic approach.
                  I wanted a low intensity beat before every boss fight. To show this pacing, I removed enemies in each
                  corridor
                  before each boss.</li>
              </ul>
              <p class="strong-content">Changes continued to happen as I continued iterating and playtesting. <br>
                Enemy placements, scale (especially the canyon hub), boss areas, and many more were
                affected.
                However, room placement were roughly the same, and many changes aimed to accentuate/support the
                decisions shown here.
              </p>
              <b-img :src="this.finallayout" fluid alt="Final"></b-img>
            </b-col>
          </b-row>


        </section>
        <section class="subsection-container  border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-4">5. Blockout / Prototype</h2>
          </header>

          <p class="strong-content">The blockout was created using UE5's Cubegrid tool.
            Initially, I created entire rooms as a single static mesh asset, only to find it extremely difficult to
            modify later on.
            I began modelling small, reusable assets that turned into a modular kit which I could use to
            kitbash levels together quickly.
          </p>

          <div class="single-image-container pb-3">
            <b-img :src="this.ldk" class="" style="width: 100%" alt="mood"></b-img>
          </div>

          <p class="text-justify text-center">The level design kit that I used.
            Note that there are also meshes of entire rooms from early iterations.
            Most assets were built to fit player metrics.
            This helped keep scale in check, since I could always measure if an object could be jumped over by dragging
            in something I knew could be jumped over.
            Later, placing world aligned grid textures further helped me gauge scale.
          </p>

          <header class="mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Kitbashing</h2>
          </header>

          <p class="strong-content ">Kitbashing drastically changed how I approached blocking out rooms.
            Instead of extruding, I began massing out areas first, only creating new assets unless necessary.
            <br>This made blockouts more organic, allowing me to create more believable spaces by discovering them.
            <br>Pillars could now be rotated to become planks. Removing a boulder created a cave that could hide a
            secret.
            <br><br>The Canyon Hub is an example of this, shown below:
          </p>

          <b-row class="pt-1">
            <b-col lg="6">
              <b-img :src="this.initialcanyonblockout1" fluid alt="Draft"></b-img>
            </b-col>

            <b-col lg="6">
              <b-img :src="this.initialcanyonblockout3" fluid alt="Initial"></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 pb-5 text-justify text-center">The first iteration of the canyon hub.
            <br>The nature of UE5's cubegrid (along with my lack of knowledge), lack of metrics, and the lack of a
            gridded prototyping texture caused this level to be too boxy and too large.
          </p>

          <b-row>
            <b-col lg="6">
              <b-img :src="this.ldkcanyonblockout1" fluid alt="Draft"></b-img>
            </b-col>

            <b-col lg="6">
              <b-img :src="this.ldkcanyonblockout2" fluid alt="Initial"></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 pb-5 text-justify text-center">
            The first kitbashed iteration of the canyon hub, created entirely from 2 rocks, 1 box, 1 ramp, and a pillar.
            <br> Heavy use of scaling and rotations allowed me to create variation with the same asset.
          </p>

          <b-row>
            <b-col lg="6">
              <b-img :src="this.finalcanyonblockout1" fluid alt="Draft"></b-img>
            </b-col>

            <b-col lg="6">
              <b-img :src="this.finalcanyonblockout2" fluid alt="Initial"></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 text-justify ">
            This version is a final iteration of the level, fully playable.
            While many elements were modified, many things stayed the same due to the modular approach:

          <ul>
            <li>The general landscape of the level was kept.</li>
            <li>The same assets have been reused even more.</li>
          </ul>
          </p>

          <header class="mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Effects of Prototyping</h2>
          </header>
          <p class="text-justify">
            Initially, I started this project without planning to implement combat or interactive mechanics such as
            pickups, buttons, weapons,
            damage systems, or enemy AI.
            As I progressed, there was an increasing amount of elements that were difficult to showcase how the level
            related to specific events and combat.
            <br>Some of these were:
          </p>
          <ul>
            <li>The turrets on the bridge firing sticky projectiles.</li>
            <li>The rocket being able to destroy destructibles.</li>
            <li>The rocket boss firing at the player from a far distance.</li>
            <li>Combat encounters used to heighten intensity.</li>
            <li>How can I show ability gating without implementing abilities?</li>
            <li>How can I show that the player is rewarded after a high intensity area?</li>
          </ul>

          <p class="text-justify">
            Thus began a cycle of prototyping mechanics and AI, playtesting, and iterating on the blockout.
            Combat had a large impact on how levels looked:
          <ul>
            <li>Enemy AI(and EQS) affected cover, pathing, spacing. </li>
            <li>Weapons (and metrics): rocket explosions radii, fire rate, etc.</li>
            <li>The rocket boss firing at the player from a far distance.</li>
            <li>Combat encounters used to heighten intensity.</li>
            <li>Scale of levels, sightlines.</li>
          </ul>

          </p>
          <p class="strong-content text-justify">
            Conclusion: I should have worked on implementing combat elements like weapons and enemies before moving
            on to block out the entire world.
          </p>

        </section>












        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">6. Iteration and Feedback</h2>
          </header>
        </section>

        <p class="strong-content text-justify">
          Many things were added, modified, or removed that wasn't considered during planning but emerged from
          playtests. Others happened while I prototyped, blocked out, and playtested the game myself.
          Below is a compiled list of problems and solutions across all playtests and feedback at different points in
          time.
        </p>

        <header class="text-center mb-4 pt-3">
          <h2 class="fw-bold mb-3 display-5">Problems</h2>
        </header>

        <p class="strong-content text-justify">
          Levels, combat mechanics, and player abilities were all constantly reduced.
          <br>Below are issues found:
        </p>













        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Project Scope</h2>
        </header>
        <ul>
          <li>
            Blocking out 7 areas each with 5+ corridors was too much, and not an MVP.
          </li>
          <li><b>Weapon systems took too long to implement.</b></li>
          <li><b>Puzzles needed additional scripting that took too long.</b></li>
          <li><b>Doors were problematic:</b>
            <ul>
              <li>
                Sliding doors were whole new world of problems. States, animations, dynamic sub level
                loading, players getting crushed, Do enemies follow you to the next room? What about obstacles blocking
                the
                way?
              </li>
              <li>
                Ability gating in the style of Metroid Prime, where each door only opened by being shot by a specific
                weapon, was removed. Ability gating these doors added more bugs.
              </li>
            </ul>
          </li>
          <li><b>Rest areas healed the player, saved the game and assigned the player checkpoint.</b>
            All of which meant more time.
          </li>
        </ul>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Scale</h2>
        </header>
        <ul>
          <li>Too much walking, too much jumping!</li>
          <li>Too much verticality.</li>
          <li>Directly converting Hollow Knight’s map to 3D is not feasible. Adding
            a new dimension naturally morphs the rooms.</li>
          <li><b>Each room was too large.</b> It took too long to traverse from room to room, even without enemies.
            I later learned that placing enemies and cover made the room feel smaller instead.</li>
          <li><b>Pacing was not representative of the design.</b>
            Too many rooms between major points of interest (Hub room,boss rooms).</li>
          <li><b>Canyon hub is too large.</b> the ruins hub is dwarfed by the sheer contrast in size.
            Additional problem: Moving rooms around was increasingly annoying.
          </li>
          <li><b>Unclear Affordances: Since scale was too large, it was always difficult to quickly understand if a rock
              was a wall or an obstacle that could be jumped over.</b></li>
          <li>It was difficult to understand the player's surroundings.
            Important elements to understand were things like entrances, enemy location, events, beginning of
            bossfights.
          </li>
        </ul>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Pacing</h2>
        </header>
        <ul>
          <li>Many were related to scale and combat, mentioned above.</li>
          <li>"Too much dead time" in between places, where time is just spent walking from place to place.
            Although related to scale, the larger problem was that players felt bored in between points of interest.
          </li>
          <li>Moving around the blockout was boring - no moving or interactive objects made it difficult for players to
            feel "high intensity".</li>
        </ul>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Combat, Difficulty Curve, Balance</h2>
        </header>
        <ul>
          <li>Rocket boss was too difficult. It would fire a volley of 8-9 rockets in 1 second.</li>
          <li>Players wanted to try out the new abilities they obtained.
            On my side, I wanted to make sure players understood what each ability did right after they obtained it.
          </li>
          <li>Seeing health bars above all enemies overwhelmed the player, giving them a sense of "impossible to kill
            them
            all".</li>
          <li>The difficulty contrast between a single enemy in the tutorial,
            then suddenly bombarded by a group of 4 melee + 4 ranged in the Ruins Hub was too much.</li>
          <li>The rocket ability could fire every 0.1 seconds. Players heavily abused this, effectively turning on easy
            mode
            for each combat encounter.</li>
          <li>The bridge was confusing. When entering, many turrets already fire at the player, they did not understand
            the
            mechanics of the turret.</li>
          <li>Cover was not reliable. When players thought they would be safe, they would get hit.
            <br>This was even worse for the rocket boss, whose rockets had an explosion radius.
          </li>
          <li>Due to the unique AI for each boss, 3 out of 4 bosses had large changes in the level (and in their
            behaviour)
            as their behaviour and weapons were added and fleshed out. This will be discussed further in the Boss Fights
            section.</li>
        </ul>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Visual Clarity, Readability</h2>
        </header>
        <li><b>Unclear uniqueness for each area.</b> The idea of canyon and ruins was clear, but it was not clear what
          distinct elements differentiated “canyon” and “ruins”.</li>
        <li><b>"Is this destructible?"</b></li>
        <li><b>"Why is this destructible yellow, but this yellow door is not destructible?"</b></li>
        <li><b>"Did I come from this door? Is this the same door?"</b></li>
        <li><b>"What am I supposed to do after killing the boss?"</b></li>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Technical</h2>
        </header>
        <ul>
          <li>Adding, modifying, and removing sections of a level was difficult in cubegrid.</li>
          <li>Assigning different textures to different parts of the level was difficult when the entire level was 1
            asset/model.
          </li>
          <li>Creating curved/circular sections was difficult in UE's cubegrid tool.</li>
          <li><b>Hard to playtest without ability gating, enemies and weapons. Cannot test from start to end.</b></li>
          <li><b>Boss ability gate does not exist, cannot test start to end.</b></li>
          <li>Stepping on chaos destruction debris spun the player around, creating a glitching, nauseating effect.
            (never
            fixed)</li>
        </ul>


        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Performance</h2>
        </header>
        <p>These were things that dropped FPS. Not all were the root problem, but contributed in some shape or form.</p>
        <ul>
          <li>The entire world is loaded on startup.</li>
          <li>Meshes were not distance culled.</li>
          <li>Overlapping dynamic lighting everywhere.</li>
          <li>Chaos destruction debris did not sleep</li>
        </ul>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Wayfinding</h2>
        </header>
        <li><b>"It is too difficult to find my way around the map."</b></li>
        <li><b>Composition issues: No landmarks, no framing, and no vantage points that let you survey your
            surroundings.</b></li>
        <li><b>The larger the area was, the less inclined players wanted to explore, especially if they asked "what am I
            supposed to do now".</b></li>
        <li><b>Some were confused and stopped when they could first reached the final boss ability gate and couldn't
            pass
            it.</b></li>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Exploration</h2>
        </header>
        <li><b>"Not finding any treasure after fighting a large group of enemies made me not want to explore"</b></li>
        <li><b>Being a blockout, players did not feel the mood of an alien planet, heavily reducing immersion.</b>The
          lack
          of music, ambience, visuals, all contributed to the lack of immersion.</li>
        <li><b>Many players disliked backtracking (relatable), heavily reducing the desire to explore new areas by
            having to
            go through already-explored places.</b> This was exacerbated by the lack of respawning enemies, increasingly
          long walking times in between areas, especially in hallways.</li>

        <header class="mb-2 pt-3">
          <h2 class="fw-bold mb-3 display-5">Audiovisual Feedback</h2>
        </header>
        <li><b>"When did I get hit?"</b></li>
        <li><b>"Which button do I press to pick this up?"</b></li>
        <li><b>"Am I dead?"</b></li>
        <li><b>Players wanted to have feedback when being damaged, damaging enemies, and when picking things up.</b>
        </li>















        <header class="text-center mb-4 pt-5">
          <h2 class="fw-bold mb-3 display-5">Solutions</h2>
        </header>
        <ul>
          <!-- scope -->
          <li>
            <b>Reduced distinct areas from 7 to 2</b>, with the minimal amount of corridors.
            Each corridor had a reason to stay, whether it was to ability gate something or to balance pacing.
          </li>
          <li><b>No Weapon Alt Fire modes.</b></li>
          <li><b>No weapon reloading.</b></li>
          <li><b>Puzzle to acquire Dash removed, replaced by the Bridge.</b></li>
          <li><b>Removed doors. Instead, placed cover to hide sightlines.</b></li>
          <li><b>No "rest" areas</b> Instead, additional health packs were scattered around the map.
          </li>
          <!-- scale -->
          <li>Roughly limit how long it takes to get from 1 point of interest to another: not more than a minute of
            walking.
            Combat encounters were later added to act as POIs from a pacing standpoint.
          </li>
          <li>Limit verticality. Reaching a different platform should take around 2-3 jumps/1 min walking.</li>
          <li>Use canyon hub's scale as an opportunity instead to surprise the player and encourage exploration.</li>
          <li>World aligned Prototyping textures: This helped greatly in making sure obstacles could be scaled over.
            It made playtesting more comfortable.</li>
          <li>Define what 1 "floor" is: Using staircases as measurements to roughly measure and standardize how tall
            things are.
          </li>
          <li>Modular kit: Model reusable assets in cubegrid.
            Example: Use the same doorway frame for all entrances. Also helped with scale.
          </li>
          <li>Largely removed corridor to mage boss</li>
          <li>To reduce dead time, added more encounters, especially at corridors.</li>
          <li>To reward defeating enemies, added a hidden fireball powerup at one large encounter, and more health
            around
            others.</li>
          <li>Made it faster to reach the final boss ability gate. Furthermore, make the dash section of the gate much
            clearer in the
            beginning. Use destructible pillars player can jump over or fire rockets at. Make the dashable gap clearer.
            The player may still take awhile to realize they cannot get to the other side, but they would not be able to
            advance no matter what.</li>
          <li>Added sound effects for interactions, different sounds when getting hit and shooting the ground, and
            button
            activations.</li>
          <li>Reduced rockets fire rate for rocket boss, made it evade player when on cooldown</li>
          <li>Huge hallways were dead time because they were linear. Used it with more intention - to contrast it with
            larger, open nonlinear areas</li>
          <li>Some indication of final objective is good - added text in the beginning, and a beam of light at the final
            boss so players can orient themselves at certain spots from other rooms, inciting curiousity.</li>
          <li>Tweaked canyon blockout to better show points of interest at different vantage points.</li>
          <li>Bridge: Introducing buttons should be much simpler. Buttons should only open doors, not kill turrets as
            well.
            Remove all turrets in the button tutorial area.</li>
          <li>Create suspicious pink light in front of bridge's ability gate, make it clearer that something exists
            there.
          </li>
          <li>Stepping stones for river in Canyon Hub, make it more inviting/less scary to go closer and dip your feet
            in.
          </li>
          <li>
            Players didn't know what to do after killing rocket boss: Heavy handed guidance by preventing the player
            from
            leaving unless they pick up the ability. Furthermore, shine a spotlight on the ability pickup.</li>
          <li>Show instructions only after you get the ability.</li>
          <li>Rocket Boss: Show the ability when you trigger the boss fight to tell the player where to get the ability,
            but
            gate it.</li>
          <li>Dash ability is shown and given at the end of the bridge instead. This softly encourages player to use it
            when
            returning to the entrance.</li>
          <li>Dash turrets are reactivated only after you obtain the dash ability, letting players set the pace.</li>
          <li>Instead of adding landmarks, give unique properties to each door in ruins hub - red/blue light, pillar
            half
            way fallen, etc.</li>
          <li>Bridge has 3 checkpoints when falling into void so you can't cheat the system anymore</li>
          <li>Rocket Boss shoots 3 rockets instead of 9, with a cooldown of 3 seconds instead of 1. While on cooldown,
            moves
            around to maintain line of sight.</li>
          <li>Chaos Destruction debris sleeps after 3 seconds, disappears after sleeping.</li>
          <li>Lights farther than 10000 units are culled.</li>
          <li>Meshes are culled at certain distances.</li>
          <li>Navigation meshes are static.</li>
          <li>Create a combat token system to limit the amount of enemies attacking the player at the same time,
            regardless of how many enemies are in range.</li>
        </ul>

        <div class="my-4">
          <!-- Toggle Button -->
          <b-button v-b-toggle.collapse-1 variant="primary" class="mb-2">
            Show Raw Feedback
          </b-button>

          <!-- Collapsible Content -->
          <b-collapse id="collapse-1" v-model="collapsed" class="mt-2">
            <b-card class="shaded-box">

              <b-row class="pt-1">
                <b-col lg="12" v-for="image in this.feedback" :key="image.url" :caption="image.caption"
                  :img-src="image.url">
                  <b-img :src="image.url" fluid alt="Draft"></b-img>
                </b-col>
              </b-row>
            </b-card>
          </b-collapse>
        </div>


        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Combat</h2>
          </header>
          <p>
            Weapons, Behaviour Trees, Enemy AI, and Animations were all a mix of technical and design challenges.
            There are 2 types of normal enemies featured in the game: Melee and Ranged.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Gameplay Ability System (GAS)</h2>
          </header>
          <p class="strong-content">
            I wanted to reduce the amount of redundant code as much as possible.
            GAS allowed me to easily use the same ability for the player and enemies.
            All weapons were created using GAS, which allowed for quick prototyping and adding abilities for players and
            enemies.
            One example is the rifle, which is used by both the player and ranged enemy.
          </p>
          <p class="strong-content">
            Adding an enemy use a different attack was a matter of just changing the granted abilities and changing the
            gameplay tag.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Miss Chance</h2>
          </header>
          <p class="strong-content">
            There are no hitscan weapons in the game. All weapons fire projectiles as actual game objects.
            To simulate miss chance, I instead gave recoil to enemies.
            Miss chance is calculated as recoil over distance. The closer the player is, the less recoil the enemy has.
            However, the recoil caused enemies to miss at close distance, which reduces the risk/reward aspect as well
            as "realism" - it didn't feel good.
            Additionally, Slow projectiles with recoil felt like they were more accurate because of player movement (as
            if the AI was leading the shot).
          </p>
          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Flinching/Interrupted</h2>
          </header>
          <p class="strong-content">
            AI play a flinching when shot, which sets them to a stun state. When flinching, enemies cannot fire or move.
            This gave an extra dimension during combat.
            Melee enemies can block shots, which recover faster than flinching, making them advance faster.
            Furthermore, this gives the player time to take cover or continue attacking.
            I used this mechanic to my advantage as well in different bosses, only letting them flinch during specific
            periods of time (during attacking)
          </p>
          <p class="strong-content">
            Adding an enemy use a different attack was a matter of just changing the granted abilities and changing the
            gameplay tag.
          </p>
          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Stealth, Cone of Vision</h2>
          </header>
          <p class="strong-content">
            Enemies could only see in front of them. This, in combination of a open world, allowed for the basic
            mechanics of stealth.
            I took advantage of this, and designed paths at certain areas to be able to completely stealth through an
            enemy encounter.
          </p>


          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Damage System</h2>
          </header>
          <p class="strong-content">
            The other piece of the modular puzzle was the damage system component, which was also used for both the
            player and enemies. This helped unify basic mechanics (healing), while allowing for flexibility by
            overriding the component's methods.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Normal Enemies</h2>
          </header>

          <p class="strong-content">
            As my first time working on behaviour trees and EQS, making BTs for ~6 enemy types was difficult and a
            headache.
            Behaviour trees (and EQS) naturally drastically changed how the player responded to combat encounters.
            For enemies, I had 2 main goals for normal encounters:
          </p>
          <li>Melee enemies: Encourage the player to move around (kiting), tankier.</li>
          <li>Ranged enemies: Encourage player to take cover, more damage.</li>

          <p class="strong-content">
            Melee enemies chased the player and had a 30% chance to block incoming projectiles other than rockets.
            This gave players an impression of melee enemies being tankier without giving them more health.
            More importantly, players with rockets could bypass the "tankiness", providing more risk (close range
            explosions damaging self) and reward.
          </p>
          <p class="strong-content">
            Ranged enemies moved to an ideal location (in range and clear line of fire) and fired at the player once,
            and repeated this.
            Balancing ranged enemies' difficulty was difficult. Feedback conflicted between different player types.
            FPS players found it too easy, while Metroidvania players found it too difficult/overwhelming.
            I experimented with fire rates, damage, and move speed.
            Ranged enemies also find cover and heal if they are low on health.
          </p>
          <p class="strong-content">
            With this, combining melee and ranged enemies in an encounter created a balance between cover-taking and
            movement.
          </p>

          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Token System</h2>
          </header>
          <p class="strong-content">
            Q: What if an encounter has 10 ranged enemies and they all fire at once?
            <br> A: The player dies instantly and it feels unfair.
          </p>
          <p class="strong-content">
            Although its natural that combat should feel and be more intense with more enemies, the open world
            nature created several problems.
            Players could effectively aggro multiple encounters' enemies and take them on a journey.
            Multiple solutions could have been used. I could have broken up the nav mesh, set a time limit for enemies
            to disengage, or set bounds in the encounter.
            At around the same time, I learned and implemented the token system, which effectively helped break this
            dependency of the number of aggro'ed enemies and combat intensity.
            The token system limited the amount of enemies attacking the player at any given time.
          </p>

        </section>
        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Boss Fights</h2>
          </header>
          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Rocket Boss (Castle)</h2>
          </header>
          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Double Jump Boss (Arena)</h2>
          </header>
          <header class="mb-2 pt-3">
            <h2 class="fw-bold mb-3 display-5">Dash Boss (Bridge)</h2>
          </header>

        </section>
        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Evaluation, Conclusion</h2>
          </header>
        </section>
        <section class="subsection-container border-light">
          <header class="text-center mb-4">
            <h2 class="subsection-header display-5">Credits</h2>
          </header>
          <ul>
            <li>Desert Caravan by Aaron Kenny
              Music promoted on https://www.chosic.com/free-music/all/</li>
            <li>Waterfall Sounds by tramp963, Pixabay https://pixabay.com/sound-effects/waterfall-sounds-259625/</li>
            <li>https://pixabay.com/sound-effects/spacecraft-chrasing-88048/ spacecraft chrasing
              Unilyd (Freesound)</li>
            <li>https://pixabay.com/sound-effects/highflow-river-6221/ Highflow River
              CaganCelik (Freesound)</li>
            <li>https://www.fab.com/listings/23869931-3e46-4c42-b541-9f6057f12d13 Cartoon Water Shader, Sandvector
              Studios</li>
            <li>https://www.fab.com/listings/9190e4a3-1f44-4715-a3a4-342846002b2c Modular Sci Fi Indoor/Outdoor
              environment pack - Rocky Swampy Planet, JessyStorm's Assets</li>
            <li>https://www.fab.com/listings/fc3a309a-a3eb-46de-bebe-dcb40dc31e48 Skeleton Knight Modular, buxioded</li>
            <li>Military Silver Weapons pack</li>
            <li>Various Mixamo models and animations</li>
            <li>https://www.youtube.com/watch?v=-t3PbGRazKg&list=PLNwKK6OwH7eW1n49TW6-FmiZhqRn97cRy Smart Enemy AI
              Tutorial, Ali Elzoheiry</li>
          </ul>




        </section>

        <div class="my-4"></div> <!-- Spacer with margin -->

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

        <div class="my-4"></div> <!-- Spacer with margin -->

        <h2>Thought Processes & Design Decisions</h2>

        <h3> Backtracking </h3>





        <p>Backtracking is focused on the two hubs: The central hub and the canyon hub.
          Following the progression flow in the initial brief, the player would have to revisit the central hub at least
          twice no matter which path they take.
          One future addition I would want to add is to add an ability gate to the central hub so that the player has a
          larger progression reason to revisit it.
        </p>
        <b-img :src="this.backtrackroutes" fluid alt=""></b-img>
        <p class="text-center">Main backtracking routes</p>

        <h3>Ability Gates</h3>
        <p>
          Although the map was created with ability gates in mind, they were not implemented early on as it was not high
          on
          the priority list.
          <br>
          Initially, it was decided that ability gates would be similar to metroid prime, where a door would only open
          by
          shooting it with the correct type of gun.
          <br>
          However, doors proved too difficult to implement.
          <br>
          I thus decided to integrate the ability gating into the room itself.
          <br>
          Following the initial brief flow, I created 2 ability gates: The one to The Bridge (Dash Ability) and the
          other
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
              <br> This entire setup was very confusing for players, and therefore I redesigned it, simplifying it.
            </p>
          </b-col>
        </b-row>
      </main>

    </b-container>



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
import VueScrollTo from 'vue-scrollto'

export default {
  components: {},
  data() {
    return {
      images: [],
      blockouts: [
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00005.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00011.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00012.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00016.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00019.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00024.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00028.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00030.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00034.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00036.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/HighresScreenshot00064.png"),
        },
      ],
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
      dashabilitygate: require("@/assets/scarabdescent/abilitygates/dashgate.png"),
      bossabilitygate: require("@/assets/scarabdescent/abilitygates/bossgate.png"),

      crashedring: require("@/assets/scarabdescent/envstory/crashedring.png"),
      fallentowerring: require("@/assets/scarabdescent/envstory/tower.png"),
      pileddebris: require("@/assets/scarabdescent/envstory/pileddebris.png"),
      guards: require("@/assets/scarabdescent/envstory/guards.png"),
      stuckdisc: require("@/assets/scarabdescent/envstory/stuckdisc.png"),

      hkpathing: require("@/assets/scarabdescent/research/hkpathing.png"),
      primepathing: require("@/assets/scarabdescent/research/primepathing.png"),
      observations: require("@/assets/scarabdescent/reference/observations.png"),

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
        { url: require("@/assets/scarabdescent/iterations/feedback/1.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/2.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/3.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/4.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/5.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/6.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/7.png"), },
        { url: require("@/assets/scarabdescent/iterations/feedback/8.png"), },
      ],
    };
  },
  mounted() {
    // console.log(this.$router.currentRoute.path);
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
  background-color: rgba(44, 44, 44, 0.7);
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

.single-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}


.single-image {
  width: 70%;
}
</style>
