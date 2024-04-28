/**
 * basically a file to get env and export them
 * two benefits
 * accessing becomes easy, need not write import.blablabla
 * if we directly use env, error finding is very difficult 
 * and if values not found, the app straight up crashes  */

const conf ={
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceAPIkey : String(import.meta.env.VITE_TINY_MCE_API_KEY)
}

export default conf;