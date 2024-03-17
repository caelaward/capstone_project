<template>
  <div class="aboutPage">
    <div class="container-fluid" id="img_cont">

    <h1>Welcome to BloubergLux</h1>
      <img src="https://i.ibb.co/0Y2fV1c/homeImg.jpg" id="home-img">
    </div>

  </div>
  <div class="container pt-5">
  <h1>Choose your dream home</h1>
  <div class="row">
  <div class="column">
    <img src="https://i.ibb.co/q5KmWKH/about-img2.webp" >
  </div>
  <div class="column">
    <img src="https://i.ibb.co/pW4H2Sh/about-img.jpg" >
  </div>
  <div class="column">
    <img src="https://i.ibb.co/cCcv9CT/home-img.jpg"  >
  </div>
  <div class="column">
    <img src="https://i.ibb.co/0Y2fV1c/homeImg.jpg"  >
  </div>
  <div class="column">
    <img src="https://i.ibb.co/0Y2fV1c/homeImg.jpg"  >
  </div>
</div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
/* .aboutPage{
      background: linear-gradient(90deg, #FFFFFF 60%, #999966 40%);

} */
.aboutPage {
  background: linear-gradient(to right, #8b8b7c 30%, white 20%, white 70%);
}

#home-img{
  width:75%;
  height:55vh
}

#img_cont{
  
padding-left:25%
}

 
.column {
  flex: 1;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
  box-sizing: border-box; /* Ensures padding doesn't affect width */
}

  
.column img {
  width: 100%;
  height: 25vh;
  transition: transform 0.3s;
}

  .column img:hover{
    transform: scale(1.2);
  }

  .row {
  display: flex;
  justify-content: space-between; /* Adjust spacing between columns */
}
</style>