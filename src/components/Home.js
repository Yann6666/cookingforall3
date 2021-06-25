import IconLeft from '../images/iconerandom.png'
import IconCenter from '../images/iconebyingredient.png'
import IconRight from '../images/iconebycountry.png'

import {
   Link
  } from "react-router-dom";

const Home = () => {

    return (

       
            <div className="Homebackground">
                {/* <div classname="Homebackground">
                <img src={Homebackground} alt="Légumes sur une planche en bois" />
                </div> */}
                <section className="Titre">
                    <h1> Cooking for All !!</h1>
                </section>
                <section className="Icons">
                   <Link to ="random" ><img src={IconLeft} alt="icone recette cuisine" /></Link>
                   <Link to ="ingredients" ><img src={IconCenter} alt="icone recette cuisine" /></Link>
                   <Link to ="country" ><img src={IconRight} alt="icone recette cuisine" /></Link>
                </section>
                <section className="Text">
                    <p>Random Search</p>
                    <p>Search by Ingredient</p>
                    <p>Seach by Country</p>
                </section>
                <section className="Welcome">
                    <p>Welcome to  all Gourmets !!<br></br>Please click on one of the Icons Above</p>
                </section>
            </div>
       


    )
}

export default Home