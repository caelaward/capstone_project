<template>
  <div class="container-fluid" id="aboutImg"><h1>About us</h1></div>
 <div class="container-fluid w-76 mt-2" id="aboutPage">
   
    <div class="row mt-5">
    <div class="col" >
    <p>At BloubergLux, we're dedicated to helping you find your perfect home sweet home. Whether you're a first-time buyer, seasoned investor, or looking to sell your current property, we're here to guide you through every step of the journey.</p>
    </div>
    </div>
    <div class="row mt-5">
    <div class="col">
      <h2>Our mission</h2>
     <p>We believe that everyone deserves a place they can truly call home. Our mission is to simplify the process of buying and selling houses by providing exceptional service, expert guidance, and personalized attention to each of our clients.</p>
    </div>
     <!-- <img src="https://imgur.com/ZwTZkvx" class="col w-50 img-fluid p-0 "> -->
     <video autoplay muted loop  class="col w-50">
      <source src="https://i.imgur.com/ZwTZkvx.mp4" type="video/mp4">
     </video>
    </div> 

      <h2 class="mt-5 mb-4">What we offer</h2>
    <div class="row">
    <div class="col me-2" id="offers"><img src="https://i.ibb.co/fnWxRXb/variety-house.jpg" class="imgtransaction"> <h4>Wide Selection</h4><p> Explore a diverse range of properties including single-family homes, condos, townhouses, and more.</p></div>

    <div class="col me-2" id="offers"><img src="https://i.ibb.co/Mn2sTd0/advice-img.webp" class="imgtransaction" ><h4>Expert Advice</h4><p> Our team of experienced real estate professionals is here to offer expert advice and guidance tailored to your unique needs and preferences.</p></div>

    <div class="col" id="offers"><img src="https://i.ibb.co/ncV7Z5g/transaction-Img.jpg" class="imgtransaction"><h4>Seamless Transactions</h4><p> From initial search to closing the deal, we ensure a smooth and hassle-free experience for both buyers and sellers.</p></div>

    </div>
    

 </div>
</template>

<script>
export default {

}
</script>

<style>
/* p{
  padding-top:20%
} */
#aboutImg{
  background-image: url('https://i.ibb.co/Tq1qD4x/about-img3.jpg');
  
  background-repeat: no-repeat;
  background:cover;
  background-position: center;
  padding-top:2rem;
  background-size: 100%;
  height:40vh
}

#offers{
  border:solid 1px  black;
  padding:1rem;
  border-radius:10px;
  margin-top:1rem
  }

 .imgtransaction{
  height:20vh;
  width:100%;
  border-radius:5px;
  margin-bottom:1rem
  }

/* #aboutPage{
      background: linear-gradient(112deg, #FFFFFF 50%, #999966 50%);
} */

</style>