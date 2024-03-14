<template>
  <div class="about">
  <div class="scroll-container">
  <!-- <img src="https://i.ibb.co/41L5X3d/prod1.jpg" alt="Cinque Terre">
  <img src="https://i.ibb.co/F80jNRS/prod2-1.webp" alt="Forest"> -->
  <!-- <img src="https://i.ibb.co/ryBB5T4/prod3-3.jpg" alt="Northern Lights">
  <img src="https://i.ibb.co/gJhND9y/prod2.jpg" alt="Mountains"> -->
</div>
</div>
</template>
 
 <style scoped>
  div.scroll-container {
    /* background-color: #333; */
    overflow: hidden;
    white-space: nowrap;
    /* padding: 2px; */
    position: relative;
  }

  div.scroll-container img {
    /* padding: 10px; */
    display: inline-block;
    animation: scroll 20s linear infinite;
    width:100%;
    height:55vh;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  </style>
