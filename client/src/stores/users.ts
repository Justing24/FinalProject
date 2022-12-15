import myFetch from "@/services/myFetch";
import router from "@/router";
import { reactive, watch  } from "vue";
import session, { login, logout } from '../stores/session' 
import { api } from "./session";

export class UserData {
    public user: string | undefined
    public firstName: string | undefined
    public lastName: string | undefined
    

}

export function getPeople()
{
    return api<UserData[]>('people');
}

export function getPerson(user: string)
{
    return api<UserData>(`people/${user}`);
}

let peopleArray = reactive([] as UserData[]);

export function load () {
    myFetch('/api/v1/people')
    .then((data) => {
        peopleArray.splice(0, peopleArray.length, ...data as UserData[]);

    })
}
watch(()=> session.user, load);

export function addUser (people: UserData) {
    myFetch('/api/v1/people', {
        method: 'POST',
        body: JSON.stringify(people)
    })
    .then((data) => {
        peopleArray.push(data as UserData);
        router.push('/people');
    })
}


export function deletePeople (user: string) {
    myFetch('/api/v1/people/' + user, {
        method: 'DELETE'
    })
    .then(() => {
        load();
    })
}

export interface People {
    people: UserData[];
    load: () => void;
    addUser: (people: UserData) => void;
    deletePeople: (user: string) => void;
}
export interface person {
    user: string ;
    firstName: string ;
    lastName: string ;
   
}   

