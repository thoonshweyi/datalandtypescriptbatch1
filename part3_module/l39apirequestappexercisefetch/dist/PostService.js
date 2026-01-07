var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from 'node-fetch';
export class PostService {
    constructor() {
        this.baseURL = "https://jsonplaceholder.typicode.com/posts";
    }
    // get posts
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.baseURL);
            // console.log(response);
            if (!response.ok)
                throw new Error("Failed to fetch posts");
            // return response.json();
            const data = (yield response.json());
            return data;
        });
    }
    // get post by id
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseURL}/${id}`);
            if (!response.ok)
                throw new Error("Failed to fetch posts");
            // return response.json();
            const data = (yield response.json());
            return data;
        });
    }
    // create post (method 2 id:number)
    createPosts(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.baseURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPost)
            });
            if (!response.ok)
                throw new Error("Failed to fetch posts");
            // return response.json();
            const data = (yield response.json());
            return data;
        });
    }
    // update post
    updatePost(id, updatePost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseURL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatePost)
            });
            if (!response.ok)
                throw new Error("Failed to update posts");
            // return response.json();
            const data = (yield response.json());
            return data;
        });
    }
    // delete post
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.baseURL}/${id}`, { method: "DELETE" });
            if (!response.ok)
                throw new Error("Failed to delete posts");
            return `Post with ID ${id} deleted successfully`;
        });
    }
}
// src/PostService.ts:22:11 - error TS2322: Type 'unknown' is not assignable to type 'Post[]'.
// စောစောက Typescript အတန်းမှာ
// အစ်ကို Bypass လုပ်ပြတဲ့နည်းက သုံးလို့ရတယ်နော်
// အစ်ကို့မှာ Error တက်ပြီး Config Setting မှာ module ပြင်ဖို့ပြနေတာက အစ်ကို့ Editor က update လိုက်မဖြစ်လို့ Error ပြသွားတာပါခင်ဗျ
// တကယ်က အလုပ်ဖြစ်ပါတယ်
// ညီ ညီမ တို့ Computer မှာ ပြန်စမ်းကြည့်နိုင်ပါတယ်
// json() မှာ အပိတ်ထည့်ပါ
