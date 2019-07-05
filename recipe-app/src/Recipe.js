import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, href}) => {
  return(
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={style.recipe}>
        <h1>{title}</h1>
        <ol className={style.list}>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <img className={style.image} src={image} alt=""/>
        <p>calories: {calories}</p>
      </div>
    </a>
  )
}

export default Recipe;