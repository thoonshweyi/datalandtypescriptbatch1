"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const axios_1 = __importDefault(require("axios"));
class PostService {
    constructor() {
        this.api = axios_1.default.create({
            baseURL: "https://jsonplaceholder.typicode.com/",
            timeout: 5000
        });
    }
    // get posts
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get("/posts");
            return response.data;
        });
    }
    // get post by id
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get(`posts/${id}`);
            return response.data;
        });
    }
    // create post (method 1 id?:number)
    //  async createPosts(newPost:Post):Promise<Post>{
    //      const response = await this.api.post<Post>("/posts",newPost)
    //      return response.data;
    // }
    // create post (method 2 id:number)
    createPosts(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.post("/posts", newPost);
            return response.data;
        });
    }
}
exports.PostService = PostService;
// interface Post{
//      id: number,
//      userId: number,
//      title: string,
//      body: string
// }
// type PostWithoutId = Omit<Post,"id">
// type PostWithoutId{
//      userId: number,
//      title: string,
//      body: string
// }
// 1️⃣ What type is response.data really?
// const response = await axios.get<Post[]>(this.baseURL);
// axios.get<Post[]>() returns Promise<AxiosResponse<Post[]>>
// await unwraps the Promise
// So after await, TypeScript sees:
// response: AxiosResponse<Post[]>
// That means:
// response.data: Post[]
// ✅ NOT a Promise
// 2️⃣ Then why does the function return Promise<Post[]>?
// Because of async keyword.
// async getPosts(): Promise<Post[]> {
// Rule of JavaScript:
// Any function marked async always returns a Promise
// Even if you return a normal value.
// 3️⃣ What really happens behind the scenes
// Your code:
// async getPosts(): Promise<Post[]> {
//     const response = await axios.get<Post[]>(this.baseURL);
//     return response.data;
// }
// JavaScript internally converts it to something like:
// getPosts(): Promise<Post[]> {
//     return new Promise((resolve, reject) => {
//         axios.get<Post[]>(this.baseURL)
//             .then(response => {
//                 resolve(response.data); // Post[]
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }
// 💡 Key point:
// response.data = Post[]
// resolve(response.data) wraps it into a Promise
// 4️⃣ Important rule (remember this)
// async function f() {
//     return 5;
// }
// Type is:
// Promise<number>
// Even though you returned 5.
// 5️⃣ Another clear example
// async function getNumber() {
//     return 10;
// }
// Usage:
// const n = getNumber();
// console.log(n); // Promise { 10 }
// But:
// const n = await getNumber();
// console.log(n); // 10
// Same idea as your response.data.
// 6️⃣ So who creates the Promise?
// ❌ Not response.data
// ❌ Not axios here
// ✅ async function itself
// 7️⃣ Visual explanation 🧠
// axios.get()  ---> Promise<Response>
//       await
//         ↓
// response     ---> Response
// response.data ---> Post[]
// return response.data
//         ↓
// async function
//         ↓
// Promise<Post[]>
// 8️⃣ Final sentence (very important)
// response.data stays Post[]
// async automatically wraps your return value into Promise<Post[]>
