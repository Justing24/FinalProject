<script setup lang="ts">

import { reactive, ref } from 'vue';
import { getPeople, type UserData, type addUser } from '@/stores/users';
import { RouterLink } from 'vue-router';
import session, { login, logout } from '../stores/session'
import LoginBadge from './LoginBadge.vue';

let isActive = ref(false);
let isOpen = ref(false);


</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/logo.jpg" width="112" height="40">
        
      </a>

      <a role="button" :class="{ 'is-active': isOpen }" @click="isOpen = !isOpen"  class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <router-link to="/home" class="navbar-item">
          Home
        </router-link>

        <router-link to="/workout" class="navbar-item">
          Workout
        </router-link>
        <router-link to="/stats" class="navbar-item">
          Stats
        </router-link>

       
      
      </div>

      <div class="navbar-end">
        <router-link to="/adduser" class="navbar-item">
          Sign Up
        </router-link>
        <div class="navbar-item">
          <div class="buttons">
            
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
              
                <button v-if="session.user == null || session.user.firstName == 'Guest'" @click="isActive = !isActive" class="button" aria-haspopup="true"
                  aria-controls="dropdown-menu3">
                  <span>Log in</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div v-if="session.user == null || session.user.firstName == 'Guest' " class="dropdown-menu" id="dropdown-menu1" role="menu" v-show="isActive">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item" @click="login('Justin', 'Ginese')">
                    
                    
                      Justin Ginese
                    
                  </a>
                  <a href="#" class="dropdown-item" @click="login('Billy', 'Smith')"> 

                    Billy Smith
                    </a>
            
                </div>
              </div>
            </div>
            <router-link to="/admin" class="button">
              Admin
            </router-link>
            <LoginBadge></LoginBadge>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>



<style lang="scss" scoped>


</style>