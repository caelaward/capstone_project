<template>
  <div class="aboutPage">
    <div class="container-fluid" id="img_cont">
      <div id="HomeText">
    <h1 class="text-white" >Welcome to BloubergLux</h1>
    <button type="button" class="btn btn-outline-light me-2 mt-2"><router-link to="/contact" class="nav-link" href="contact">Contact</router-link></button>
      <button type="button" class="btn btn-outline-light mt-2"><router-link to="/products" class="nav-link " href="products">Our Products</router-link></button>
  </div>
      <!-- <img src="https://i.ibb.co/0Y2fV1c/homeImg.jpg" id="home-img"> -->
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
    <img src="https://i.ibb.co/sywrD1k/homeImg5.jpg"  >
  </div>
  <div class="column">
    <img src="https://i.ibb.co/55sXpF7/homeIMG.jpg"  >
  </div>
</div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

/* https://i.ibb.co/0Y2fV1c/homeImg.jpg */
#HomeText{
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:whitesmoke;
  text-shadow: 1px 1px 1px white;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #F1F1F1; /* Grey text */
  width: 50%; /* Full width */
  padding: 55px; /* Some padding */
  border-radius: 5px;
}
#img_cont{
  background-image: url("https://i.ibb.co/0Y2fV1c/homeImg.jpg");
   background-repeat: no-repeat;
  background:cover;
  background-position: center;
  padding-top:2rem;
  background-size: 100%;
  height:100vh
}
#home-img{
  width:75%;
  height:55vh
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