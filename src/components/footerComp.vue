 <template>
      <div class="footer">
    
      <div class="container-fluid ">
        <div class="row">
        
            <p class="lead fs-6">
              BloubergLux &copy; <span>{{ currentYear }}</span>
            </p>
          
        </div>
    </div>
    </div>

</template>

<script>
export default {
        name: 'FooterComp',
        data() {
            return{
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>