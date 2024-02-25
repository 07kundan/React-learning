import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const useAccount = await this.account.create(ID.unique(), email, password, name);

            if (useAccount) {
                // call another method / if account created successfully login
                return this.login({ email, password });
            } else {
                return useAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            // console.log("appwrite service :: getCurrentUser :: error",error); // custom error
            throw error;
        }
        return null;
    }


    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}


const authservice = new AuthService();    //object of AuthService class

export default authservice; //exporting object