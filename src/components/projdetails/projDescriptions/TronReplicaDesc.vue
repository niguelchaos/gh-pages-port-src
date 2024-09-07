<template>
  <b-container>

    <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
          <p>
            The original Tron was created in 1982 and was extremely popular at the time, 
            leading to some people calling Snake games "Light Cycle games". 
            The original mini-game features a single player moving a futuristic motorcycle, called a light cycle within the Tron universe, around the screen in a grid-like behaviour. Light cycles can create walls of light where any light cycle can crash into.
            The player is also able to slow down the speed of the bike. The objective of the game is to force one or more enemy cycles into crashing into these trails or into the edges of the screen while avoiding them yourself at the same time.
          </p>
          <p>
            In the original, the player would play through the 4 mini games in increasing difficulty endlessly. For the light cycle mini-game, a higher difficulty meant more enemies.  
            A 2 player solution was implemented here instead, scrapping the increasing difficulty mechanic.
          </p>

        </b-col>

        <b-col lg="7">
            <b-img center :src="require(`@/assets/tron.gif`)" alt="Image" class="details-image"></b-img>
        </b-col>
      </b-row>
    </b-container>
    
    <h3>Challenges</h3>
    <p>
      Challenges consisted of getting walls to connect properly while changing speed, emulating grid-like movement, collision detections, and prioritizing features. 
      Details of challenges can be found in the mid-term presentation. 
      Although I really wanted to implement AI enemies, too much time was spent on fixing core issues, which was a bit sad.
      Development time was ~3 weeks. 
    </p>
    

    <h3>Specification</h3>
    <p>
       Tron consists of two basic entities: The <strong>players' Light Cycles</strong> and the <strong>Wall Trails</strong> produced. Light Cycles explode upon hitting any wall or edge.
    </p>
    
    <h3>Mechanics</h3>
    <b-container>
      <b-row>
        <b-col md="6">
          <p><strong>Light Cycles:</strong></p>
          <ul>
              <li>Move around in a grid-like fashion</li>
              <li>3 different speeds - Slow, Default, Fast</li>
              <li>Wall Trails left behind bike</li>
              <li>Crash when hit walls or edge</li>
          </ul>
        </b-col>
        
        <b-col md="6">
          <p><strong>Game</strong></p>
          <ul>
              <li>Score for each Player</li>
              <li>Change Background</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    
    <h3>Roles & Responsibilities</h3>
      <p>
         As the sole creator of the game, I was responsible for the design, programming, and sound for the game. 
         As this was made in a course that emphasized good architecture, special attention was paid to the engine architecture.
         A detailed report of the code is linked at the bottom of the page. 
      </p>
      
    <h3>Tools used:</h3>
    <ul>
      <li>C++</li>
      <li>SDL</li>
      <li>Audacity</li>
      <li>Version Control - Git</li>
    </ul>

      
    <!-- <h3 class="align-center">Links</h3>
    <b-container>
    <b-row>
      <b-col class="link-col">

        <a class="link-item float-left">
          <a type="button" class="btn btn-outline-light btn-lg pr-3" v-bind:href="'https://github.com/niguelchaos/GEATron'" target="_blank">
            <em :class="'bi bi-github'" width="32" height="32" fill="currentColor" viewBox="0 0 32 32"></em>
          </a>
        </a>
        
        <a class="link-item float-left">
          <b-button class="link-button" href="./ProjectDocuments/GEATronReport.pdf" target="_blank"><strong>Read Tron Report</strong></b-button>
        </a>
        
        <a class="link-item float-left">
          <b-button class="link-button" href="./ProjectDocuments/MidtermTron.pdf" target="_blank"><strong>Mid-Term Presentation</strong></b-button>
        </a>
        <a class="link-item float-left">
          <b-button class="link-button" href="./ProjectDocuments/FinalPresentationTron.pdf" target="_blank"><strong>Final Presentation</strong></b-button>
        </a>
      </b-col>
    </b-row>
    </b-container> -->
    
    <!-- <br> <a href="./JengaFortressReport.pdf" target="_blank"><strong>Report</strong></a> -->
    
   </b-container>
</template>

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
