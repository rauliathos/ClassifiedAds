import React from 'react'
import LikesCounter from "./LikesCounter"

const Advert = ({adverts, handleAdvertToUpdate, onAdDelete}) => {

    const advertNodes = adverts.map((advert) => {
    
        return (
            <div key = {advert.title} className = "individual-ad-box-column">
            <h1>{advert.title}</h1>
            <img alt="image_description" src={ (advert.image) }></img>
            <p>{advert.category}</p>
            <p>{advert.askingPrice}</p>
            <p>{advert.description}</p>
            <p>{advert.admin ? advert.admin.userName : ""}</p>
            <LikesCounter/>
            <button onClick = {()=> {handleAdvertToUpdate(advert)
                console.log("HI")
            }}>Update</button>
            <button onClick = {()=> {onAdDelete(advert.id)}}>Delete</button>
            </div> 
        )
    })

    return(
        <div className="advert-list-row">
            {advertNodes}
        </div>
    )

}
export default Advert;