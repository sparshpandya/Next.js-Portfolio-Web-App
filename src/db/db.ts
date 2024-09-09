import { MongoClient } from 'mongodb';

let client: MongoClient;
let clientPromise: Promise<MongoClient> | undefined;

const url: string | undefined = process.env.MONGODB_CONN_URL;

if (!clientPromise) {
    // Create a new MongoClient and connect it to MongoDB
    try {
        if (url) {
            client = new MongoClient(url);
            // Store the connection promise in the global scope
            clientPromise = client.connect();
        }
    } catch (e) {
        console.log(e);
    }
}

export default clientPromise;