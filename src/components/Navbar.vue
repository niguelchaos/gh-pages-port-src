<template>
   <b-navbar v-b-scrollspy id="navbar" class="navbar" sticky toggleable="md" type="dark" expand="md">
      <b-nav-toggle target="nav-collapse" ></b-nav-toggle>
      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav class="navbar-nav mx-auto"  fill:true>
            <b-nav id="navpills" pills align="center">
               <b-nav-item  id="navtext" href="./#home" >Home</b-nav-item>
               <b-nav-item id="navtext" href="./#projects">Projects</b-nav-item>
               <b-nav-item id="navtext" href="./#contact">Contact</b-nav-item>
               <b-nav-item  id="navtext" href="./about">About</b-nav-item>
               <b-nav-item  id="navtext" href="./reports">Reports</b-nav-item>
               <b-nav-item id="navtext" to="/resume">Resume</b-nav-item>
            </b-nav>
         </b-navbar-nav>
      </b-collapse>
   </b-navbar>
</template>

<script>
// import CV from '@/assets/Resume_GameDesign.pdf'

export default {
  name: 'Navbar',
  props: [],
  data() {
    return {
      // CV: { CV }
    }
  }
}
</script>

<style scoped>
#navbar {
   background-color: #2d3142;
}
#navtext {
   color: #969ac0 !important;
   padding-right: 1%;
   padding-left: 1%;
}
.active {
   background-color: #5C6299 !important;
   border-radius: 0.4rem;
   color: #f7f8ff !important;
}
#navpills {
   flex-wrap: inherit;
   display: flex;
   flex-direction: row;
}
@media (max-width: 430px){
   #navpills {
      flex-direction: column;
   }
}
.navbar-dark .navbar-nav .nav-link:hover {
   color: #dde0ff;
}
.navbar-dark .navbar-nav .nav-link {
   color: #969ac0;
}
</style>
