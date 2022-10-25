import router from "@/router";
import { reactive } from "vue";
import session, { login, logout } from './session' 

export class UserData {
    public user: string | undefined;
    public firstName: string | undefined;
    public lastName: string | undefined;

}
const users = reactive( [
    { user: 'Justin Ginese', firstName: 'Justin', lastName: 'Ginese'},
   
] as UserData[]
);
export function addUser(user: string, firstName: string, lastName: string): void {

    users.unshift({ user,firstName, lastName });
    router.push('/user')

}


export default users;