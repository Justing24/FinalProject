import router from "@/router";
import myFetch from "@/services/myFetch";
import { reactive } from "vue";

/**
 * First Name and Last Name of User
 */
export class User {
    public firstName: string | undefined;
    public lastName: string | undefined;

}


const session = reactive( {
    user: null as User | null

});


export function login(firstName: string, lastName: string): void {
    session.user = {
        firstName,
        lastName
       
       
    };
    router.push('/home');
    
}


export async function api<T>(url: string, data: any = null, method?: string) {
    try {
        return await myFetch<T>(url, data, method);
    } catch (error) {

        return {} as T;
    }
}

export function logout() {
    session.user = null;
    router.push('/');

}

export default session;
