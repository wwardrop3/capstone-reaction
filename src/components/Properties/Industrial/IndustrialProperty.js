//Component will produce a page that displays information for the selected project

import { waitForElementToBeRemoved } from "@testing-library/react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { deleteProperty, removeProperty, retrieveProperty } from "../../APIManager"


//create component function MultifamilyProperty
export const IndustrialProperty = ({property, setProperty}) => {

    const { propertyId } = useParams()

    const history = useHistory()


    return (
        <>
  
        <section className="contentContainer">
            
            <div className="infoContainer">
                <div>
                    <h2>Tenants</h2>
                    <p>{property.tenants}</p>
                </div>

                <div>
                    <h2>Total SF</h2>
                    <p>{property.totalSF}</p>
                </div>

                <div>
                    <h2>Average PSF Rent</h2>
                    <p>{property.avgRentPSF}</p>
                </div>
                        
                <div>
                    <h2>Developer</h2>
                    <p>{property.developer}</p>
                </div>
                     
                <div>
                    <h2>Management</h2>
                    <p>{property.management}</p>
                </div>
            
            </div> 

        </section>
        </>
    )
}