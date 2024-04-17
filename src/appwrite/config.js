import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Services{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)    
            .setProject(conf.appwriteProjectId);  

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //refer create Document 
    //for a post we require hell lotta things hence parameter list is big....here featuredImage is id not the image
    //as per syntax of appwrite....and the object in args contains extra info
    //https://appwrite.io/docs/references/cloud/client-web/databases#createDocument
    async createPost ({title,slug,content,featuredImage,status,user_id}) {
        try {
            const promise = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    user_id
                }
            )
            return promise;
        } catch (error) {
            console.log("appwrite service createpost error",error);
            throw error;            
        }
    }

    // here we take slug seperately and other details as object in parameters coz 
    //slug helps in identifying the document aka article to update
    //https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            const promise = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            return promise;
        } catch (error) {
            console.log("appwrite service update article error",error);
            throw error;
        }
    }

    //https://appwrite.io/docs/references/cloud/client-web/databases#deleteDocument
    //only slug required to identify article
    async deletePost(slug){
        try {
            const promise = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true; //need not return promise as we are basically deleting
        } catch (error) {
            console.log("appwrite service delete article error",error);
            return false;
            // throw error;
        }
    }

    async getPost (slug){
        try {
             const promise = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
             )
             return promise;
        } catch (error) {
            console.log("appwrite service get document errror" , error);
            return false
        }
    }

    //we want posts whose status is active....so we use query with default value
    //https://appwrite.io/docs/references/cloud/client-web/databases#listDocuments
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            const promise = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries //aka the one passed as default parameter
            )
            return promise;
        } catch (error) {
            console.log("appwrite service error in queries or getPosts",error);            
            return false
        }
    }

    //now related to buckets/collections aka file handling
    // the parameter is the actual file, not string
    async uploadFile(file){
        try {
            const promise = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
                )
            return promise;
        } catch (error) {
            console.log("appwrite service error in uploading file",error);
            return false;
        }
    }

    //we need fileId to locate file and delete it 
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("appwrite service error in deleting file",error);            
            return false;
        }
    }

    //to preview file we dont need async coz the response is very fast form server
    previewFile(fileId){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileId);
        } catch (error) {
            console.log("appwrite service file preview error",error);
        }
    }
}

const services = new Services()
export default services;
