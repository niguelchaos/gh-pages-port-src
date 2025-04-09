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


      <main class="container py-5">
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
          <ul>
            <li> Speedruns clearly have much less backtracking, and the paths which do tend to be in the hub area.</li>
            <li> The topology of both games' world maps is generally hub and spoke, with more sub-hubs the more you go.
            </li>
            <ul>
              <li> There are many reasons for this. Development, world building, player frustration, and exploration are
                a few.</li>
            </ul>
            <li> Ability gates are often placed in earlier areas, since it gives you a reason to backtrack.</li>
            <li> There are generally smaller hubs which let the player backtrack less before encountering a save
              point/resting area, especially during early game.
            </li>
            <li> Late game backtracking tends to become longer and longer, not just because of area, but also because
              gated
              areas are intentionally placed in previous areas. This is offset by stronger traversal abilities.
            </li>
            <li> Players are generally better rewarded for exploring more, which is correlated to more backtracking.
              Rewards include resources obtained by killing enemies or finding secret areas.
            </li>
            <li> The final boss is placed near the starter area, likely to give players an objective throughout the
              game, or for ease of access. Generally locked by a certain skill/item. This item can be retrieved close,
              and whether you can defeat it is up to skill.
            </li>
            <li> Many abilities are optional.
            </li>
            <li> Players often need to defeat bosses or challenges to obtain new abilities.
            </li>
            <li> Rooms can be categorized into nodes and edges
              Edges are often long corridors, Nodes are larger, open space used for large fights or set pieces.
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
            <li> Prime has puzzles that takes advantage of 3D, such as falling bricks, perspective puzzles, and diegetic
              UI.
            </li>
            <li> Prime doesn’t feature a lot of traditional cover. It is mostly dodging.
            </li>
            <li> Boss areas are arenas of mostly flat spaces, some with gimmicks such as environmental hazards.
            </li>
            <li> Many of the enemies are faster/larger than the player, so its often a waiting game - wait for enemy to
              attack, and then react.
            </li>
            <li> Hollow Knight is slightly different, but also emphasizes dodging despite parrying being possible.
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
        <section class="subsection-container mb-5 pb-5 border-light">
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

          <header class="text-center mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Kitbashing</h2>
          </header>

          <p class="strong-content ">Kitbashing drastically changed how I approached blocking out rooms.
            Instead of extruding, I began massing out areas first, only creating new assets unless necessary.
            <br>This made blockouts more organic, allowing me to create more believable spaces by discovering them.
            <br>Pillars could now be rotated to become planks. Removing a boulder created a cave that could hide a
            secret.
            <br>The Canyon Hub is an example of this, shown below:
          </p>

          <b-row class="pt-1">
            <b-col lg="6">
              <b-img :src="this.initialcanyonblockout1" fluid alt="Draft"></b-img>
            </b-col>

            <b-col lg="6">
              <b-img :src="this.initialcanyonblockout3" fluid alt="Initial"></b-img>
            </b-col>
          </b-row>

          <p class="strong-content pt-3 text-justify text-center">The first iteration of the canyon hub.
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

          <p class="strong-content pt-3 text-justify text-center">
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

          <header class="text-center mb-4 pt-5">
            <h2 class="fw-bold mb-3 display-5">Blockout Timelapses</h2>
          </header>

        </section>
      </main>

    </b-container>

    <!-- <h2>Blockout Timelapse</h2>
    <b-col lg="12">
      <div>
        <b-carousel id="carousel" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators
          :interval="700">
          <b-carousel-slide v-for="image in this.timelapse" :key="image.url" :caption="image.caption"
            :img-src="image.url"></b-carousel-slide>
        </b-carousel>
      </div>

    </b-col> -->

    <div class="my-4"></div> <!-- Spacer with margin -->

    <section class="subsection-container border-light">
      <header class="text-center mb-4">
        <h2 class="subsection-header display-4">6. Iteration and Feedback</h2>
      </header>
    </section>

    <h4>Initial Feedback</h4>
    <p>
      While blocking out the first few rooms, namely the central and canyon hub, in my initial layout, I quickly
      realized several glaring issues in the initial map I would have to resolve even before completing it:
    </p>
    <ul>
      <li><b>Scope was too large.</b> Blocking out 6 areas, each with 5+ corridors and rooms was simply not feasible for
        an MVP.
      </li>
      <li><b>Scale was too large.</b> There was too much verticality.</li>
      <li>Directly converting Hollow Knight’s map to 3D is not feasible. Adding
        a new dimension naturally morphs the rooms.</li>
      <li><b>Each room was too large.</b> It took too long to traverse from room to room, even without enemies.</li>
      <li><b>Too many rooms</b> between major points of interest (Hub room, boss rooms).As a result, pacing was not
        representative of the graph.</li>
      <li>Too much jumping! Too much walking!</li>
      <li>Puzzles were<b> difficult to implement</b> due to the scripting overhead. </li>
      <li>It was difficult to understand their surroundings. Important elements to understand were things like entrances
        to the rooms and where the enemies were before engaging.</li>
      <li><b>Unclear uniqueness for each area.</b> The idea of canyon and ruins was clear, but it was not clear what
        distinct elements differentiated “canyon” and “ruins”.</li>
    </ul>

    <h4>Feedback 2</h4>
    <ul>
      <li><b>Canyon hub is too large.</b> With the canyon connecting to 2 bosses, the main hub is dwarfed by the sheer
        contrast in size.
      </li>
      <li><b>Hard to playtest without ability gating, enemies and weapons.</b></li>
      <li><b>Boss ability gate does not exist, cannot test start to end.</b></li>
      <li><b>Wayfinding Issues: It is too difficult to find my way around the map.</b></li>
      <li><b>Composition issues: No landmarks, no framing, and no vantage points that let you survey your
          surroundings.</b></li>
      <li><b>Unclear Affordances: Since scale was too large, it was always difficult to quickly understand if a rock was
          a wall
          or an obstacle that could be jumped over.</b></li>
    </ul>

    <!-- In Prime, standing in the middle of a room allows you to see the common exits/entrances, allowing you to find your
        way towards it (or find it blocked) -->

    <!-- I was not too worried about this, however, because I liked the idea that acquiring new abilities made the player
        realize what was previously impossible is now affordable. -->
    <h4>Solutions:</h4>
    <ul>
      <li><b>Removed puzzle to acquire Dash Ability, replaced with The Bridge.</b></li>
      <li><b>Fewer mechanics: Removed secondary abilities for each gun, ability gates are part of the level.</b></li>
      <li><b>Reduced distinct areas to 2: “Canyon” and “Ruins”. The elements I aimed each to have were:</b></li>
      <ul>
        <li>Canyon: Larger scale, more nature, rocky, rooms are more functioning machinery from the old civilization
          because
          of it being more protected.</li>
        <li>Ruins: Center of ancient ruins. Higher density of decay and rubble, more man-made rooms(which are smaller).
        </li>
      </ul>
      <li>
        Revisited scale and verticality: I tried to limit verticality and scale by placing specific rules and using some
        techniques:
      </li>
      <ul>
        <li>World aligned Prototyping textures: This helped greatly in making sure obstacles could be jumped (or double
          jumped) over. It made playtesting more comfortable.</li>
        <li>Modular kit: I began using the same doorway module for all entrances, and that made sure that doorways
          weren’t too
          large or small.</li>
        <li>Define what 1 "floor" is: Using staircases as measurements to roughly measure and standardize how tall
          things are.
        </li>
        <li>Roughly limit how long it takes to get from 1 floor to another: Generally, 2-3 jumps, and it shouldn't take
          more
          than a minute of walking.
        </li>
      </ul>
    </ul>

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
          url: require("@/assets/scarabdescent/screenshots/timelapse/t1.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t2.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t3.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t4.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t5.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t6.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t7.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t8.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t9.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t10.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t11.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t12.png"),
        },
        {
          url: require("@/assets/scarabdescent/screenshots/timelapse/t13.png"),
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
}

.single-image {
  width: 70%;
}
</style>
