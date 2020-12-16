import React, {useState} from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import Recipe from './components/Recipe';
import Alert from './components/Alert';


import './App.css';

const App = () => {
   

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
   
        
    

    var APP_ID = "a02a957c"
    var App_KEY = "a31e7fc44a365c497b1f3ca52ca992ea"
    var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`
    
    const getData = async () => {
       
            const result = await Axios.get(url);
            setRecipes(result.data.hits);
            console.log(result);
            setAlert("");
            setQuery("");
        
        
       
    };

    const onChange = (e) => {
        setQuery(e.target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        getData()
    };
    
    
    return (
        <div className="App">
            <h1>Food App</h1>
            <form className="search-form"
             onSubmit={onSubmit}>
             {alert !=="" && <Alert alert={alert}/>}
            <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query} />
            <input type="submit" value="search"/>
            </form>
            <div className="recipes">
            {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default App
