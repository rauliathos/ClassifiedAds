import React from 'react'
import LikesCounter from "./LikesCounter"
import UpdateModal from "./UpdateModal"

const Advert = ({ adverts, advertsToShow, handleAdvertToUpdate, onAdDelete, admins, triggerTextUpdate, handleAdDelete, advertToUpdate, handleAdUpdate }) => {

    const getAdminById = (admins, id) => {
        const foundAdmin = admins.find(admin => {

            return admin.id === Number(id)
        })
        if (foundAdmin) {
            return foundAdmin.userName
        } else {
            return null;
        }
    }


    if (adverts.length > advertsToShow.length && advertsToShow.length === 0) {
        const advertNodes = adverts.map((advert) => {
            console.log(advert)

            return (
                <div key={advert.title} className="individual-ad-box-column">
                    <h1>{advert.title}</h1><LikesCounter />
                    <img alt="image_description" src={(advert.image)}></img>
                    {/* <p>Category: {advert.category}</p>
                    <p>Asking Price: £{advert.askingPrice}</p>
                    <p>Description: {advert.description}</p>
                    <p>Posted By: {advert.adminRender ? getAdminById(admins, advert.adminRender) : ""}</p> */}
                    <button onClick={() => { handleAdvertToUpdate(advert) }}>Get ready to update</button>
                    <UpdateModal onClick={() => { handleAdvertToUpdate(advert) }} advert = {advert} handleAdvertToUpdate={handleAdvertToUpdate} advertToUpdate={advertToUpdate} handleAdUpdate={handleAdUpdate} triggerTextUpdate={triggerTextUpdate} />
                    <button onClick={() => { onAdDelete(advert.id) }}>Delete</button>
                </div>
            )
        })

        return (
            <div className="advert-list-row">
                {advertNodes}
            </div>
        )

    } else {

        const filteredNodes = advertsToShow.map((advert) => {

            return (
                <div key={advert.title} className="individual-ad-box-column">
                    <h1>{advert.title}</h1><LikesCounter />
                    <img alt="image_description" src={(advert.image)}></img>
                    {/* <p>{advert.category}</p>
                    <p>{advert.askingPrice}</p>
                    <p>{advert.description}</p>
                    <p>{advert.admin ? advert.admin.userName : ""}</p> */}
                    <button onClick={() => { handleAdvertToUpdate(advert) }}>Get ready to update</button>
                    <UpdateModal onClick={() => { handleAdvertToUpdate(advert) }} handleAdvertToUpdate={handleAdvertToUpdate} advertToUpdate={advertToUpdate} handleAdUpdate={handleAdUpdate} triggerTextUpdate={triggerTextUpdate} />
                    <button onClick={() => { handleAdvertToUpdate(advert) }}>Update</button>
                    <button onClick={() => { onAdDelete(advert.id) }}>Delete</button>
                </div>
            )
        })



        return (
            <div className="advert-list-row">
                {filteredNodes}
            </div>
        )

    }

}
export default Advert;
