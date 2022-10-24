
<script setup lang="ts">
import session, { login, logout } from '../stores/session' ;
</script>
<template>
    <div class="columns">
    <div class="column is-half">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <p class="title is-4">{{session?.user?.firstName}} {{session?.user?.lastName}} </p>
                </p>
            </header>
        
            <div class="card-content">
            
                <div class="content">
                    <img src="../assets/logo.jpg" width="112" height="40">
                    <P>Welcome , Use the Navigation Bar to go through my website!!</P>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <article class="message is-link">
  <div class="message-body">
        Welcome back <strong>{{session?.user?.firstName}} {{session?.user?.lastName}}</strong>! 
        
  </div>
</article>
    </div>
</div>
</template>
<style scoped>
</style>