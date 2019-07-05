import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'acdf55b7';
  const APP_KEY = 'd490ef2bd6cd7ba80ae1bdc9a050a1a0';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.uri} title={recipe.recipe.label} calories={recipe.recipe.calories} 
          image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} href={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
