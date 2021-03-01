// async function run(){
//     const listID = await getIDs();
//     const recipe = await getRecipe(listID[0])
//     console.log(listID)
//     console.log(recipe) 
// } 

const getIDs = () =>
 
setTimeout(() =>  {([532, 543, 753, 1, 5]);
},1500);


const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
    setTimeout( (ID) => {
    const recipe = {
    title: "Fresh tomato pasta", publisher: "Or ashtemker",
    };
    resolve(`${ID}: ${recipe.title}`); },
    1500, recipeID);
  }); 
};


getIDs()
    .then((IDs) => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then((recipe) => {
        console.log(recipe);
    })
    .catch((error) => {
        console.log("It is an error!");
    });


  const run = async () => {
    const listId = await getIDs();
    const recipe = await getRecipe(listId[0]);
    console.log(listId);
    console.log(recipe);
}

run();