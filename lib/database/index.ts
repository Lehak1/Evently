// in serverless connections where code could be exceuted multiple times but not in a single continuous server process you need to manage database connections efficiently bcs each invocation of a serverless function could result in a new connection to database
 //if we dont cache it ,it will keep on making new connections
 //aa subsequent invocations can reuse existing connection if its still open or just try to create a new one

import mongoose from 'mongoose';
const MONGODB_URI =process.env.MONGODB_URI;

let cached=(global as any).mongoose || {conn:null,promise:null};

export const connectToDatabase=async () => {
if(cached.conn) return cached.conn;

if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');
 cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
dbName:'evently',
bufferCommands:false,

 })
cached.conn = await cached.promise;
return cached.conn;

}








