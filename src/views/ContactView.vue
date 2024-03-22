<template>
  <div class="contact pt-2">
   <h1>Contact us</h1>
    <div class="container-form" id="formContainer">
          <form action="https://formspree.io/f/xrgwdqyv" target="_blank" method="post" @submit.prevent="submitForm">
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
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('https://formspree.io/f/xrgwdqyv', this.formData);
    console.log('Form submitted successfully:', response);
    alert('Form submitted successfully!');
    // Reset the form after successful submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
        
    }



</script>

<style>
.container-form {
  max-width: 50%;
  padding: 3%;
  margin-left:26%;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
}

/* .cont_details{
  color: green;
} */

.cont_details:hover{
  text-decoration: underline
}

</style>