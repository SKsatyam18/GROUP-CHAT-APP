import { Client, Account, Databases } from 'appwrite';

export const PROJECT_ID = '656104669bdb4f5f6f08'
export const DATABASE_ID= '65610d28c740e9072fe5'
export const COLLECTION_ID_MESSAGES = '65610d3d49929c1af5c3'

const client = new Client();



client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656104669bdb4f5f6f08');


    export const account = new Account(client);
export const databases = new Databases(client)

export default client;