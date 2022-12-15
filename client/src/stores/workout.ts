import myFetch from "@/services/myFetch";
import router from "@/router";
import { reactive, watch } from "vue";
import session, { login, logout } from '../stores/session' 
import { api } from "./session";

export class workouData {
    public user: string | undefined;
    public title: string | undefined;
    public date: string | undefined;
    public duration: string | undefined;
     public type: string | undefined;
}



export function getWorkout() {
    return api<workouData[]>('posts');
 }
 
 export function getSpecificWorkout(title: string) {
     return api<workouData>(`posts/${title}`);
 }
 
 let workout = reactive([] as workouData[]);
 
 export function load () {
     myFetch('/api/v1/posts')
     .then((data) => {
         workout.splice(0, workout.length, ...data as workouData[]);
 
     })
 }
 
 export function addWorkouts (post: workouData) {
     myFetch('/api/v1/posts', post, 'POST')
     .then((data) => {
         workout.push(data as workouData);
     })
 }
 
 
 export function deleteWorkout(id: string){
 
     return api<workouData>(`posts/${id}`, {}, 'DELETE');
 
 }
 
 export function addWorkout(user: string,title: string, date: string, duration: string, location: string, picture: string, type: string): void {
    
     workout.unshift({ user,title, date, duration, type });
     router.push('/workout')
 
 }
 
 

 export function editWorkout(index: number,user: string,title: string, date: string, duration: string, location: string, picture: string, type: string){
     workout.splice(index, 1);
     workout.unshift({ user,title, date, duration, type });
     router.push('/workout')
 
 
 }
 
 export interface workout {
     workout: workouData[];
     addWorkout: (user: string,title: string, date: string, duration: string, type: string) => void;
     deleteWorkout: (index: number) => void;
     editWorkout: (index: number,user: string,title: string, date: string, duration: string, type: string) => void;
     load: () => void;
 }   
 
 export interface workoutData {
     user: string,
     title: string,
     date: string,
     duration: string,
     type: string 
 }   
 
 
 export default workout;

