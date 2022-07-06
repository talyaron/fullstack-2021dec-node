import uid from "./helpers";

interface Post{
    title: string;
    ingredients:string;
    owner:string;
    id:string;
    instructions:string;
    imageSrc:string;
}
let posts: Array <Post> = [{title:'Bread',
 ingredients:'flour,water,oil',owner:'Shira',id:'jbhvc',instructions:'1:mix all ingredients, 2:knead,3:bloat...',
 imageSrc:'bla'}];


export function getPosts(req, res){
    try {
      res.send({posts})
    } catch (error) {
      console.error(error);
      res.send({error:error.message});
      
    }
  }

  export function addPost(req, res){
    try {
      const {title} = req.body;
      if(!title ) throw new Error('no title')
    
      const id = uid();
      if(!id ) throw new Error('no id')
    
      const {owner} = req.body;
      if(!owner ) throw new Error('no owner')
    
      const {ingredients} = req.body;
      if(!ingredients ) throw new Error('no ingredients')
    
      const {instructions} = req.body;
      if(!instructions ) throw new Error('no instructions')

      const {imageSrc} = req.body;
      if(!imageSrc ) throw new Error('no imageSrc')
      
      posts.push({title,id,ingredients,owner,instructions,imageSrc})
      res.send({posts})
    } 
      catch (error) {
        console.error(error);
        res.send({error:error.message});
        
      }
    
    }

    export function deletePost(req,res){
        try {
          const {postId} = req.body;
          if (!postId)  throw new Error ('post Id is missing')
          console.log(postId);
      
          posts = posts.filter(recipe=>recipe.id !== postId)
      
          res.send({posts});
          
        } catch (error) {
          console.error(error);
          res.send({error:error.message});
        }
      }

     
      export function updatePost(req,res){
        try {
          const {newTitle,id} = req.body;
          if (!newTitle) throw new Error ('No title')
          if (!id) throw new Error ('No id')
      
      
          const index = posts.findIndex(post=>post.id === id);
      
          if (index ===-1) throw new Error (`No id with id: ${id} in recipes `)
      
          posts[index].title = newTitle;
          res.send({posts});
      
      
      
        } 
        catch (error) {
          console.error(error);
          res.send({error:error.message}); 
        }
      }
      
    //   export function editPost(req,res){
    //     try {
    //       const {newTitle,id} = req.body;
    //       if (!newTitle) throw new Error ('No title')
    //       if (!id) throw new Error ('No id')
      
      
    //       const index = posts.findIndex(post=>post.id === id);
      
    //       if (index ===-1) throw new Error (`No id with id: ${id} in posts `)
      
    //       posts[index].title = newTitle;
    //       res.send({posts});
      
      
      
    //     } 
    //     catch (error) {
    //       console.error(error);
    //       res.send({error:error.message}); 
    //     }
    //   }