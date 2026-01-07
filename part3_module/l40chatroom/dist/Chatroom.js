import { db } from "./firebaseConfig";
import { collection, addDoc, onSnapshot, Timestamp, query, where, orderBy } from "firebase/firestore";
export class Chatroom {
    constructor(room, username) {
        // private unsubscribe:null | (()=>void) = null;
        this.unsubscribe = null;
        this.chats = collection(db, "chats");
        this.room = room;
        this.username = username;
    }
    // create chat message
    async addChat(message) {
        const now = new Date();
        const chatdata = {
            message,
            username: this.username,
            room: this.room,
            createdAt: Timestamp.fromDate(now)
        };
        try {
            const response = await addDoc(this.chats, chatdata);
        }
        catch (err) {
            console.error("Error adding chate :", err);
            throw err;
        }
    }
    // get chat messages ****
    getChats(callback) {
        const qty = query(this.chats, where('room', "==", this.room), orderBy('createdAt'));
        this.unsubscribe = onSnapshot(qty, (docSnap) => {
            docSnap.docChanges().forEach((item) => {
                // console.log(item);
                if (item.type === "added") {
                    callback(item.doc.data());
                }
            });
        });
    }
    // change chat room
    updateRoom(room) {
        this.room = room;
        // console.log("room updated = ",this.room);
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    // update user name 
    updateName(username) {
        // method 1
        this.username = username;
        localStorage.setItem("username", username);
        // method 2
        // return new Promise(resolve=>{
        //     this.username = username;
        //     localStorage.setItem("username",username);
        //     resolve();
        // });
    }
}
