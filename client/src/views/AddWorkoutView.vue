
<script  setup lang="ts">
import workouts, { addWorkout } from '../stores/workout'
import session, { login, logout } from '../stores/session'
import { ref } from 'vue';
import router from '../router'

let title = ref("")
let type = ref("")
let duration = ref("")
let date = ref("")


function SubmitForm() {
   addWorkout(`${session?.user?.firstName} ${session?.user?.lastName}`,title.value,date.value,duration.value,type.value)

  }


</script>

<template>
    <div>

        <article class="message is-info">
            <div class="message-header">
                <p>Add Workout</p>

            </div>
        </article>

        <div class="field">
            <label class="label is-large">Add New Workout</label>
            <label class="label">Title</label>
            <div class="control">
                <input  class="input"  placeholder="Enter Title" v-model="title"/>
            </div>
        </div>

        

        <div class="field">
            <label class="label">Type</label>

            <div class="control">
                <input class="input"  placeholder="Enter Type of Workout" v-model="type"/>
               
            </div>
        </div>

        <div class="field">
            <label class="label">Duration</label>

            <div class="control">
                <input class="input"  placeholder="Enter Duration" v-model="duration"/>
                
            </div>
        </div>

        <div class="field">
            <label class="label">Date</label>

            <div class="control">
                <input class="input"  placeholder="Enter Date" v-model="date"/>
               
            </div>
        </div>
        <div class="control">
          
            <button  @click="SubmitForm()"  class="button is-link">Submit</button>
        </div>
    
    </div>
</template>

<style scoped>

</style>