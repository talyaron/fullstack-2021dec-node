

interface Story {
  name: string;
  story: string;
}

let conStory: Array<Story> = [];


export function postStory(req, res) {
  try {
    const { name, story } = req.body;
    if (!name) throw new Error("name is required");
    if (!story) throw new Error("story is required");
    const tellStory = { name, story };
    conStory.push(tellStory);
    res.send({ conStory });
  } catch (error) {
    res.send({ error: error.message });
  }
};

export function getStory(req, res){
  try {
     res.send({conStory}) 
  } catch (error) {
      res.send({ error: error.message }); 
  }
}