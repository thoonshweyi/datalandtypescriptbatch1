import {PostService} from "./PostService.js";

async function main(){
     const postserviceObj = new PostService();


     try{
          console.log("Fetching all posts");
          const posts = await postserviceObj.getPosts();
          console.log(`Total posts: ${posts.length}`);
          console.log(`Fetching 2 posts: `,posts.slice(0,2));

          console.log("\n\n Fetching post by ID");
          const post = await postserviceObj.getPostById(5);
          console.log("Post 5: ",post);

          console.log("\n\n Creating a new post");
          const newpost = await postserviceObj.createPosts({
                              userId: 10,
                              title: "My new Post 10.",
                              body: "This is a test post crreated with Axios"
                         });
          console.log("Created post successfully: ",newpost);

          console.log("\n\n Updating a new post");
          const editpost = await postserviceObj.updatePost(1,{
                              title: "My new Post 1.",
                         });
          console.log("Updated post successfully: ",editpost);

          
          console.log("\n\n Deleting a new post");
          const message = await postserviceObj.deletePost(1);
          console.log(message);
     }catch(err:any){
          console.error("Error: ",err.message);
     }

}
main();