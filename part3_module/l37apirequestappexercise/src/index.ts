import {PostService} from "./PostService";

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
     }catch(err:any){
          console.error("Error: ",err);
     }

}
main();