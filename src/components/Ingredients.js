
import IconRight from '../images/iconebycountry.png'
import IconLeft from '../images/iconerandom.png'
import Search from '../images/active-search-64.png'
import CardIngredients from '../components/CardIngredient.js'
import axios from 'axios'
import { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";

const Ingredients = () => {
    const [Word, setWord] = useState("")

    const [data, setData] = useState(null)
    useEffect(async () => {
       

         const address = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + Word
        const result = await axios(address)
        setData(result.data)
        console.log(result)
        //  console.log(result.data)

    }, [Word])


    return (
        <header>
            <div className="Ingredients">
                <div className="IconHome">
                    <Link to="Home" ><img src="https://img.icons8.com/bubbles/100/000000/home-page.png" /></Link>
                </div>
                <div className="Loupe">
                    <img src={Search} alt="icone loupe de recherche" />
                </div>
                <div className="Recipe">
                    <input className="Searchinput" type="text" value={Word}
                        onChange={(event) => {
                            console.log(event.target.value)
                            setWord(event.target.value)
                        }} placeholder="I'm Looking for an Ingredient or a Recipe..."></input>
                </div>
            


                <div className="Icons">
                    <div className="SearchRandom">
                        <Link to="random" ><img src={IconLeft} alt="icone recette cuisine" /></Link>
                        <p>Random Search</p>
                    </div>
                    <div className="SearchCount">
                        <Link to="country" ><img src={IconRight} alt="icone recette cuisine" /></Link>
                        <p>Search by Country</p>
                    </div>
                </div>
                <div className="Cards"> 
                   {data === null || data.meals === null? <p className="NoResult">No Results</p>:

                       (data.meals).map((Meal) => {
                            return(
                                <CardIngredients recipe={Meal.strMeal}
                                    country={Meal.strArea}
                                    picture={Meal.strMealThumb}
                                    video={Meal.strYoutube}
                                />
                            )
                         }
                        )
                    
                   }
                    
                </div>
            </div>
        </header>
    )
}

export default Ingredients
