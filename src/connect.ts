import mongoose from "mongoose";

export function connect(connectUrl: string) {
    return mongoose.connect(connectUrl)
        .then(() => console.log("Success connect to DB"));
}