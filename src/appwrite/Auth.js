import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// documentation => https://appwrite.io/docs/products/auth/email-password 
//  the class here contains all shit for the signup and login via email aka auth services

export class AuthService {
    Client = new Client();  //client aka client for appwrite
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)    
            .setProject(conf.appwriteProjectId);    

        this.account = new Account(this.Client);
        // "this.Client" IS VERY IMPORTANT !!!!!! THIS !!!!!
        
        //we did nothing different than documentation
        //just implimented it in a class and 
        //created an Client and account object only when the AuthService object is created via constructor
        //production shit...saves resources k
    }

    // You can use the Appwrite Client SDKs to create an account using email and password.
    // async-await coz the methods return a promise and you dont wanna proceed before creating account 
    // sequence of args as per documentation
    //object destructuring in parameters done here
    async createAccount ({email,password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                //if user account is created...then just login em fam
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("appwrite error create acc", error);
            throw error;
        }
        //try-catch coz account creation can fail too 
    }

    // After you've created your account, users can be logged in using the Create Email Session route
    async login ({email,password}){
        try {
            const promise = this.account.createEmailSession(email,password);
            return promise;
        } catch (error) {
            console.log("appwrite error login acc", error);
            throw error;            
        }
    }

    async getCurrentUser(){
        try {
            const promise = await this.account.get();
            if (promise) {
                return promise  
            }
            else return null
        } catch (error) {
            console.log("appwrite error getuser ", error);
            // throw error;
        }
        return null; 
        // not getting the account or a problem in try-catch isnt an error, 
        //just return null and handle it in frontend
    }

    async logout(){
        try {
            const promise = await this.account.deleteSessions(); //sessions with a "s"
            return promise;
        } catch (error) {
            console.log("appwrite error logout ", error);
            // throw error;
        }
        return null;
    }
}


const authService = new AuthService() // notice "a" for object  and "A" for class
export default authService;