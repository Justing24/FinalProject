<template>
    <div>
        <article class="message is-info">
            <div class="message-header">
                <p>Stats</p>
            </div>
            <div class="message-body">

                <h1>Viewing Workout Stats</h1>
            </div>
        </article>

        <div class="message-body" v-for="(workout, i) in workouts" :key="i">
                    {{ workout.user }}
                    {{ workout.title }}
                    {{ workout.type }}
                    {{ workout.duration }}
                    {{ workout.date }}
                    
                </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import workouts, { deleteWorkout, getWorkout } from '../stores/workout'
const statWorkouts = reactive([] as any[]);
getWorkout().then((data) => {
    statWorkouts.push(...data);
    console.log(statWorkouts);
});
</script>

<style scoped>
</style>
