import IconLeft from '../images/iconerandom.png'
import IconCenter from '../images/iconebyingredient.png'
import CardCountry from '../components/CardCountry.js'
import axios from 'axios'
import { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";

const Country = () => {
    const [inputValue, setInputValue] = useState("")
    const [Area, setArea] = useState("")
    const [data, setData] = useState(null)
    useEffect(async () => {

        const address = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + Area

        const result = await axios(address)
        setData(result.data)
        console.log(result)

    }, [Area])
    const InputChange = (e) => {
        setInputValue(e.target.value)
    }
    return (

        <div className="Country">
            <div className="IconHome">
                <Link to="Home" ><img src="https://img.icons8.com/bubbles/100/000000/home-page.png" alt="Icone Home" /></Link>
            </div>
            <div className="AllFlags">
                <div className="Flag">
                    <button className="British" value="british"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "british")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/gb.png" alt="Drapeaux Britannique" />
                        <p>British</p> </button>


                </div>

                <div className="Flag">
                    <button className="american" value="american"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "american")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/us.png" alt="Drapeaux américain" />
                        <p>American</p></button>
                </div>
                <div className="Flag">
                    <button className="French" value="French"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "French")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/fr.png" alt="Drapeaux français" />
                        <p>French</p></button>
                </div>
                <div className="Flag">
                    <button className="Canadian" value="Canadian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Canadian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/ca.png" alt="Drapeaux canadien" />
                        <p>Canadian</p></button>
                </div>
                <div className="Flag">
                    <button className="Jamaican" value="Jamaican"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Jamaican")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/jm.png" alt="Drapeaux jamaicain" />
                        <p>Jamaican</p></button>
                </div>
                <div className="Flag">
                    <button className="Chinese" value="Chinese"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Chinese")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/cn.png" alt="Drapeaux chinois" />
                        <p>Chinese</p></button>
                </div>
                <div className="Flag">
                    <button className="Dutch" value="Dutch"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Dutch")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/nl.png" alt="Drapeaux hollandais" />
                        <p>Dutch</p></button>
                </div>
                <div className="Flag">
                    <button className="Egyptian" value="Egyptian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Egyptian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/eg.png" alt="Drapeaux egyptien" />
                        <p>Egyptian</p></button>
                </div>
                <div className="Flag">
                    <button className="Greek" value="Greek"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Greek")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/gr.png" alt="Drapeaux grecque" />
                        <p>Greek</p></button>
                </div>
                <div className="Flag">
                    <button className="Indian" value="Indian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Indian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/in.png" alt="Drapeaux indien" />
                        <p>Indian</p></button>
                </div>
                <div className="Flag">
                    <button className="Irish" value="Irish"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Irish")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/ie.png" alt="Drapeaux irlandais" />
                        <p>Irish</p></button>
                </div>
                <div className="Flag">
                    <button className="Italian" value="Italian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Italian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/it.png" alt="Drapeaux italien" />
                        <p>Italian</p></button>
                </div>
                <div className="Flag">
                    <button className="Japanese" value="Japanese"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Japanese")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/jp.png" alt="Drapeaux japonais" />
                        <p>Japanese</p></button>
                </div>
                <div className="Flag">
                    <button className="Kenyan" value="Kenyan"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Kenyan")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/ke.png" alt="Drapeaux kenian" />
                        <p>Kenyan</p></button>
                </div>
                <div className="Flag">
                    <button className="Malaysian" value="Malaysian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Malaysian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/my.png" alt="Drapeaux malaisien" />
                        <p>Malaysian</p></button>
                </div>
                <div className="Flag">
                    <button className="Mexican" value="Mexican"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Mexican")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/mx.png" alt="Drapeaux mexicain" />
                        <p>Mexican</p></button>
                </div>
                <div className="Flag">
                    <button className="Moroccan" value="Moroccan"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Moroccan")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/mo.png" alt="Drapeaux marocain" />
                        <p>Moroccan</p></button>
                </div>
                <div className="Flag">
                    <button className="Croatian" value="Croatian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Croatian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/hr.png" alt="Drapeaux croate" />
                        <p>Croatian</p></button>
                </div>
                <div className="Flag">
                    <button className="Norvegian" value="Norvegian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Norvegian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/no.png" alt="Drapeaux norvegien" />
                        <p>Norvegian</p></button>
                </div>
                <div className="Flag">
                    <button className="Portuguese" value="Portuguese"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Portuguese")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/pt.png" alt="Drapeauxportugais" />
                        <p>Portuguese</p></button>
                </div>
                <div className="Flag">
                    <button className="Russian" value="Russian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Russian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/ru.png" alt="Drapeaux russe" />
                        <p>Russian</p></button>
                </div>
                <div className="Flag">
                    <button className="Argentina" value="Argentina"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Argentina")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/ar.png" alt="Drapeaux argentin" />
                        <p>Argentina</p></button>
                </div>
                <div className="Flag">
                    <button className="Spanish" value="Spanish"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Spanish")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/es.png" alt="Drapeaux espagnol" />
                        <p>Spanish</p></button>
                </div>
                <div className="Flag">
                    <button className="Slovak" value="Slovak"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Slovak")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/sk.png" alt="Drapeaux slovaque" />
                        <p>Slovak</p></button>
                </div>
                <div className="Flag">
                    <button className="Thai" value="Thai"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Thai")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/th.png" alt="Drapeaux thailandais" />
                        <p>Thai</p></button>
                </div>
                <div className="Flag">
                    <button className="Vietnamese" value="Vietnamese"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Vietnamese")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/vn.png" alt="Drapeaux vietnamien" />
                        <p>Vietnamese</p></button>
                </div>
                <div className="Flag">
                    <button className="Turkish" value="Turkish"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Turkish")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/tr.png" alt="Drapeaux turque" />
                        <p>Turkish</p></button>
                </div>
                <div className="Flag">
                    <button className="Syrian" value="Syrian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Syrian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/sy.png" alt="Drapeaux syrien" />
                        <p>Syrian</p></button>
                </div>
                <div className="Flag">
                    <button className="Algerian" value="Algerian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Algerian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/dz.png" alt="Drapeaux algerien" />
                        <p>Algerian</p></button>
                </div>
                <div className="Flag">
                    <button className="Tunisian" value="Tunisian"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Tunisian")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/tn.png" alt="Drapeauxtunisien" />
                        <p>Tunisian</p></button>
                </div>
                <div className="Flag">
                    <button className="Polish" value="Polish"
                        onClick={(event) => {
                            console.log(event.target.value)
                            setArea(event.target.value = "Polish")
                        }} >
                        <img src="https://www.themealdb.com/images/icons/flags/big/64/pl.png" alt="Drapeaux polonais" />
                        <p>Polish</p></button>
                </div>
            </div>
            <div className="Wonders">
                <input className="Searchinput" type="text" value={Area}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setArea(event.target.value)
                    }} placeholder="British, French, Vietnamese, ... "></input>
            </div>
            <div className="IconCountry">
                <div className="SearchRandomCountry">
                    <Link to="random" ><img src={IconLeft} alt="icone recette cuisine" /></Link>
                    <p>Random Search</p>
                </div>
                <div className="SearchIngCountry">
                    <Link to="ingredients" ><img src={IconCenter} alt="icone recette cuisine" /></Link>
                    <p >Search by Ingredient</p>
                </div>

            </div>
            <div className="Card">
                {data === null || data.meals === null ? <p className="NoResult">No Results</p> :

                    (data.meals).map((Meal) => {
                        return (
                            <CardCountry recipe={Meal.strMeal}
                                picture={Meal.strMealThumb}
                                video={Meal.strYoutube}
                            />
                        )
                    }
                    )

                }

            </div>
        </div>
    )
}

export default Country