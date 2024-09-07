<template>
  <b-container class="name-heading">
    <b-jumbotron class="name-jumbo" id="name-jumbo">
      <h1 class="name-header">Nigel Chao</h1>
      <h5 class="name-lead">Software Engineer, Game Developer</h5>
      <hr id=name-divider class="divider my-3" />
    </b-jumbotron>
  </b-container>
</template>

<script>

</script>

<style scoped>
.name-heading {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0px;

}
.name-jumbo {
  background-color: #2d3142;
  color: #d8dcff;
  margin: 0px;
}
.name-header {
   color: #ecf1ff;
}
.name-lead {
  color: #cacfff;
}
#name-divider {
  background:  #6c759e;
}
</style>