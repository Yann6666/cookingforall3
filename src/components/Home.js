import IconLeft from '../images/iconerandom.png'
import IconCenter from '../images/iconebyingredient.png'
import IconRight from '../images/iconebycountry.png'

import {
   Link
  } from "react-router-dom";

const Home = () => {

    return (

       
            <div className="Homebackground">
                
               
                <section className="Titre">
                    <h1> Cooking for All !!</h1>
                </section>
                <section className="Icons">
                   <Link to ="random" ><img src={IconLeft} alt="icone recette Tapas" /></Link>
                   <Link to ="ingredients" ><img src={IconCenter} alt="icone recette Volaille" /></Link>
                   <Link to ="country" ><img src={IconRight} alt="icone recette Boeuf" /></Link>
                </section>
                <section className="Text">
                    <p className="Rs">Random Search</p>
                    <p className="SbI">Search by Ingredient</p>
                    <p className="SbC">Search by Country</p>
                </section>
                <section className="Welcome">
                    <p>Welcome to  all Gourmets !!<br></br>Please click on one of the Icons Above</p>
                </section>
            </div>
       


    )
}

export default Home