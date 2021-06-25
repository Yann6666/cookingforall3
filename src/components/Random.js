import IconCenter from '../images/iconebyingredient.png'
import IconRight from '../images/iconebycountry.png'
import Logo from '../images/icons8-lecture-de-youtube-96.png'

import axios from 'axios'
import { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";


const Random = () => {

    const [data, setData] = useState(null)
    useEffect(async () => {

        const address = 'https://www.themealdb.com/api/json/v1/1/random.php'
        const result = await axios(address)
        setData(result.data)
        console.log(result)

    }, [])
    //  console.log(data.meals[0].strMeal)
    function refreshPage() {
        document.location.reload()
    }
    return (
        <div className="Random">
            <div className="Menu">
                {data === null ?
                    <h3>En attente résultats</h3>
                    :
                    <h3>{data.meals[0].strMeal}</h3>
                }
                {data === null ?
                    <h2>En attente résultats</h2>
                    :
                    <h2>{data.meals[0].strArea}</h2>
                }
                {data === null ?
                    <h2>En attente de l'images</h2>
                    :
                    <img src={data.meals[0].strMealThumb}/>
                }
               {data === null ?
                    <h2>En attente de l'images</h2>
                    :
                    <a href={data.meals[0].strYoutube}
                    ><img className="Logo" src={Logo}/></a>
                }
                 
               

            </div>



                <div className="IconHome">
                <Link to="Home" ><img src="https://img.icons8.com/bubbles/100/000000/home-page.png"/></Link>
                </div>
            <div className="Textrandom">
                <p className="Click">Click The Icon Below and See What We Found For You !!</p>

                <button onClick={refreshPage}><span>Random Search</span></button>
               
            </div>
            <div className="Icons">
                <div className="SearchIng">
                    <Link to="ingredients" ><img src={IconCenter} alt="icone recette cuisine" /></Link>
                    <p >Search by Ingredient</p>
                </div>
                <div className="SearchCount">
                    <Link to="country" ><img src={IconRight} alt="icone recette cuisine" /></Link>
                    <p >Search by Country</p>
                </div>
            </div>

        </div>
    )
}



export default Random;