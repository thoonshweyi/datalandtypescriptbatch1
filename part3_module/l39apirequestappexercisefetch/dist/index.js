var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PostService } from "./PostService.js";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const postserviceObj = new PostService();
        try {
            console.log("Fetching all posts");
            const posts = yield postserviceObj.getPosts();
            console.log(`Total posts: ${posts.length}`);
            console.log(`Fetching 2 posts: `, posts.slice(0, 2));
            console.log("\n\n Fetching post by ID");
            const post = yield postserviceObj.getPostById(5);
            console.log("Post 5: ", post);
            console.log("\n\n Creating a new post");
            const newpost = yield postserviceObj.createPosts({
                userId: 10,
                title: "My new Post 10.",
                body: "This is a test post crreated with Axios"
            });
            console.log("Created post successfully: ", newpost);
            console.log("\n\n Updating a new post");
            const editpost = yield postserviceObj.updatePost(1, {
                title: "My new Post 1.",
            });
            console.log("Updated post successfully: ", editpost);
            console.log("\n\n Deleting a new post");
            const message = yield postserviceObj.deletePost(1);
            console.log(message);
        }
        catch (err) {
            console.error("Error: ", err.message);
        }
    });
}
main();
