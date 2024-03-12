<template>
  <div class="contact">
   <h1>contact</h1>
    <div class="container-form" id="formContainer">
          <form action="https://formspree.io/f/xrgwdqyv" target="_blank" method="post">
            <div class="mb-3">
              <label for="fname" class="form-label">First name:</label>
              <input type="text" class="form-control" id="fname" name="fname" placeholder="Your name.." required />
            </div>

            <div >
              <label for="lname" class="form-label">Last name:</label>
              <input type="text" class="form-control" id="lname" name="lname" placeholder="Your surname.." required />
            </div>

            <div >
              <label for="email" class="form-label">Email:</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Your email.." required />
            </div>

            <div >
              <label for="comment" class="form-label">Comment:</label>
              <textarea class="form-control" id="comment" name="comment" placeholder="Type your message.." required></textarea>
            </div>

            <button type="submit" class="btn btn-dark">Submit</button>
          </form>
        </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>