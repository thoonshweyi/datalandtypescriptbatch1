var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    addChat(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            const chatdata = {
                message,
                username: this.username,
                room: this.room,
                createdAt: Timestamp.fromDate(now)
            };
            try {
                const response = yield addDoc(this.chats, chatdata);
            }
            catch (err) {
                console.error("Error adding chate :", err);
                throw err;
            }
        });
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
