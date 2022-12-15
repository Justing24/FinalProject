<script  setup lang="ts">
import workouts, { addWorkouts } from '../stores/workout'
import session, { api, login, logout } from '../stores/session'
import { ref } from 'vue';
import router from '../router'
import myFetch from '@/services/myFetch';
import SearchAutocomplete from '../components/SearchAutocomplete.vue';

let title = ref("")
let type = ref("")
let duration = ref("")
let date = ref("")


function SubmitForm() {
    const data = {
     user: `${session?.user?.firstName} ${session?.user?.lastName}`,
     title: title.value,
     date: date.value,
     duration: duration.value,
     type: type.value
    }
    console.log(data);
    console.log(JSON.stringify(data));
    myFetch('posts', data, 'POST')
    .then((response) => {
        console.log(response);
        router.push('/workout')
    })
    .catch((error) => {
        console.log(error);
    });
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

    
        <label class="label">Type</label>
            <SearchAutocomplete

             class="input"  placeholder="Enter Type" v-model="type"
      :items="[
        'Agility',
        'Sprint',
        'Endurance',
        'Strength',
        'Marathon'
      
      ]"
      
      
    /> 
             
               
            
    

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