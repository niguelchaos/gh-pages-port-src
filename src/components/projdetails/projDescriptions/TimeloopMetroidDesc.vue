<template>
  <b-container>

     <b-container class="description-container">
      <b-row>
        <b-col lg="5">
          <h3>Description</h3>
         <p>
            A collaboration with <a :href="'https://fabianfroding.github.io/'" target="_blank">Fabian</a>, 
            this ongoing project is heavily inspired by metroidvanias, featuring a three-day system inspired by The Legend of Zelda: Majora's Mask.
         </p>
         <p>
            Using Unity, all systems were coded from scratch without third-party frameworks.
            All art is also drawn by ourselves. 
         </p>
         <p>
            The game is still under early development.
         </p>
        </b-col>

        <b-col lg="7">

        </b-col>
      </b-row>
    </b-container>
    
    <h3>Features</h3>
    <b-container>
      <b-row>
        <b-col>

          <ul>
            <li>2D Player Controller</li>
            <li>Various Player Abilities</li>
            <li>Enemy AI</li>
            <li>Equipment System</li>
            <li>Day cycle System</li>
            <li>Dialogue System</li>
            <li>Camera System</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>

    <h3>Challenges</h3>
    <p>
      <ul>
        <li>
          Architecture: There were many discussions and changes to the code architecture, as we wanted a high degree of extensibility and reusability.
          As such, the codebase had several large refactors as we learned more.
          One downside is that the code ended up to be quite complex, containing a multitude of ScriptableObjects and state machines, for example.
          Haven't figured that part out yet.
        </li>
      </ul>
    </p>
    
    <h3>Roles & Responsibilities</h3>
      <p>
        Currently, I have mainly worked on the 2D player controller, some enemy AI, and the Camera system. 
      </p>
      
    <h3>Tools used:</h3>
    <ul>
      <li>Unity</li>
      <li>PlasticSCM</li>
    </ul>

     
  </b-container>
</template>
