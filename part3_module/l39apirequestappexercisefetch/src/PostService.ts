// import fetch from 'node-fetch';

interface Post{
     id?: number,
     userId: number,
     title: string,
     body: string
}

export class PostService{

     private baseURL =  "https://jsonplaceholder.typicode.com/posts";


     // get posts
     async getPosts():Promise<Post[]>{

          const response = await fetch(this.baseURL);
          // console.log(response);

          if(!response.ok) throw new Error("Failed to fetch posts");
          
          return response.json();
          // const data = (await response.json()) as Post[];
          // return data;
     }

      // get post by id
      async getPostById(id:number):Promise<Post>{
          const response = await fetch(`${this.baseURL}/${id}`)

          if(!response.ok) throw new Error("Failed to fetch posts");

          return response.json();
          // const data = (await response.json()) as Post;
          // return data;
     }

     // create post (method 2 id:number)
     async createPosts(newPost:Omit<Post,"id">):Promise<Post>{
          const response = await fetch(this.baseURL,{
               method: "POST",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(newPost)
          });

          if(!response.ok) throw new Error("Failed to fetch posts");

          return response.json();
          // const data = (await response.json()) as Post;
          // return data;
     }

     // update post
     async updatePost(id:number,updatePost:Partial<Omit<Post,"id">>):Promise<Post>{
          const response = await fetch(`${this.baseURL}/${id}`,{
               method: "PUT",
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify(updatePost)
          });

          
          if(!response.ok) throw new Error("Failed to update posts");

          return response.json();
          // const data = (await response.json()) as Post;
          // return data;
     }

     // delete post
     async deletePost(id:number):Promise<string>{
          const response = await fetch(`${this.baseURL}/${id}`,{method: "DELETE"});

          
          if(!response.ok) throw new Error("Failed to delete posts");
          return `Post with ID ${id} deleted successfully`;
     }


}

// src/PostService.ts:22:11 - error TS2322: Type 'unknown' is not assignable to type 'Post[]'.

// စောစောက Typescript အတန်းမှာ
// အစ်ကို Bypass လုပ်ပြတဲ့နည်းက သုံးလို့ရတယ်နော်

// အစ်ကို့မှာ Error တက်ပြီး Config Setting မှာ module ပြင်ဖို့ပြနေတာက အစ်ကို့ Editor က update လိုက်မဖြစ်လို့ Error ပြသွားတာပါခင်ဗျ

// တကယ်က အလုပ်ဖြစ်ပါတယ်
// ညီ ညီမ တို့ Computer မှာ ပြန်စမ်းကြည့်နိုင်ပါတယ်

// json() မှာ အပိတ်ထည့်ပါ
