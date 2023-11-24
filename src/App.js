import './App.css';
import { useEffect, useState } from 'react';
import video from './video.mp4';
import MyRecipesComponents from './MyRecipesComponent';
import icon from './broccoli.png'

function App() {

const MY_ID = "8922ac7c";
const MY_KEY = "17015c825f71760ae171499b796893f7";

const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("potato");

useEffect(() => {
const getRecipe = async () => {
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
setMyRecipes(data.hits);
}
getRecipe()
}, [wordSubmitted])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button className='btn' onClick={finalSearch}>
          <img src={icon} alt="icon"/>
        </button>
      </div>
      {myRecipes.map((element, index) => (
      <MyRecipesComponents key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}/>
    ))}
    </div>
  );
}

export default App;