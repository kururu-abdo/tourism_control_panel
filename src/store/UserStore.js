import { extendObservable } from 'mobx'

class UserStore {
    constructor(){

        extendObservable(this, {
loading: false , 
            isLoggedIn: false ,
user_name:'Abdo' ,
roll:'admin' 

        });
    }}


export default new UserStore();