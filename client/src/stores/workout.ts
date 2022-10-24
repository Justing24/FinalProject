import router from "@/router";
import { reactive } from "vue";
import session, { login, logout } from '../stores/session' 

export class workouData {
    public user: string | undefined;
    public title: string | undefined;
    public date: string | undefined;
    public duration: string | undefined;
     public type: string | undefined;
}



const workout = reactive( [
        { user:'Justin Ginese',title: '5 mile walk', date: 'Oct 10 2022', duration: '30 mins',  type: 'Endurance' },
        { user:'Justin Ginese', title: '250 Pushups', date: 'Oct 09 2022', duration: '40 mins',  type: 'Strength' },
       
    ] as workouData[]
);


export function addWorkout(user: string,title: string, date: string, duration: string,  type: string): void {

    workout.unshift({ user,title, date, duration, type });
    router.push('/workout')

}

export function deleteWorkout(index: number) {
    
        workout.splice(index, 1); 
}

export function editWorkout(index: number, user: string, title: string, date: string, duration: string, type: string){
    
    workout.splice(index, 1);
    workout.unshift({ user,title, date, duration, type });
    router.push('/workout')


}

export default workout;