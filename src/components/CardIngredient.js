
import Logo from '../images/icons8-lecture-de-youtube-96.png'



const CardIngredient = (props) => {
   
    return(
        
            <div className="CardIngredients">
               <h3>{props.recipe}</h3>
               <h2>{props.country}</h2>
               <img src={props.picture}/>
               <a href={props.video}
                ><img className="Logo" src={Logo}/></a>
               
            </div>
        )  
}
export default CardIngredient