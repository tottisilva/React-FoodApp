import React from 'react';
import {v4 as uuidv4} from 'uuid';

const RecipeDetails = ({ingredients}) => {
    return ingredients.map(ingredient =>{
        return (
            <ul key={uuidv4()} className="ingrendient-list">
                <li className="ingredient-text">{ingredient.text}</li>
                <li className="ingredient-weight">{ingredient.weight} weight - </li>
            </ul>
        );
    });
        
           
        
    
};

export default RecipeDetails
