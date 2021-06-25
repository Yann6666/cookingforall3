const CardCountry = (props) => {
   
    return(
        
            <div className="CardCountry">
               <h2>{props.recipe}</h2>
               <img src={props.picture}/>
               <p>{props.resume}</p>
               
            </div>
        )  
}
export default CardCountry