

<script  setup lang="ts">
import users, { addUser } from '../stores/users'
import { ref } from 'vue';
import router from '../router'

let user = ref("")
let firstName = ref("")
let lastName = ref("")



function SubmitForm() {
   addUser(user.value,firstName.value,lastName.value)

  }


</script>

<template>
    <div>

        <article class="message is-info">
            <div class="message-header">
                <p>Sign Up</p>

            </div>
        </article>
        <div class="field">
            <label class="label is-large">Add User</label>
            <label class="label">Enter Full Name</label>
            <div class="control">
                <input  class="input"  placeholder="Enter First & Last Name" v-model="user">
            </div>
        </div>
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input  class="input"  placeholder="Enter First Name" v-model="firstName">
            </div>
        </div>

        

        <div class="field">
            <label class="label">Last Name</label>

            <div class="control">
                <input class="input"  placeholder="Enter Last Name" v-model="lastName"/>
               
            </div>
        </div>

       
        <div class="control">
          
            <button  @click="SubmitForm()"  class="button is-link">Submit</button>
        </div>
    
    </div>
</template>

<style scoped>

</style>
