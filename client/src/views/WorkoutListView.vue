<script setup lang="ts">
// import workouts, { deleteWorkout } from '../stores/workout'
import router from '@/router';
import { reactive } from 'vue';
import session, { login, logout } from '../stores/session' 
import { workouData, deleteWorkout, getWorkout} from '../stores/workout';
const workouts = reactive([] as any[]);
getWorkout().then((data) => {
    workouts.push(...data);
    console.log(workouts);
});
async function deleteWorkoutByClient(id:string, index: number) {
    await deleteWorkout(id);
    console.log(workouts); 
    workouts.splice(index, 1);
    console.log(workouts);
    router.push('/workout');
}
</script>

<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Workout List</p>
            </div>
            <div class="message-body">

                <h1>Current Workout Viewing</h1>

                <button class="button is-primary" @click="$router.push('/addworkout')
                ">Add A New WORKOUT</button>
                <div v-for="(workout, i) in workouts" :key="i">




                    <div class="card">
                        <div class="card-image">
                            <header class="card-header">
                                <p class="card-header-title">
                                    {{ workout.title }}
                                </p>
                            </header>
                            
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    
                                </div>
                                <div class="media-content">
                                    <p class="title">{{ workout.user }}</p>
                                </div>
                            </div>

                            <div class="content">
                                {{ workout.type }}
                                {{ workout.duration }}
                               
                                <br>
                                <p>{{ workout.date }}</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </article>
    </div>
</template>

