//Component will produce a page that displays information for the selected project
import { waitForElementToBeRemoved } from "@testing-library/react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { deleteProperty, removeProperty, retrieveProperty } from "../../APIManager"


//create component function MultifamilyProperty
export const OfficeProperty = ({property, setProperty}) => {


    const history = useHistory()

                      
    return (

        <>
        <div className="infoContainer">
                <div>
                    <h2>Occupancy</h2>
                    <p>{property.totalSF}</p>
                </div>

                <div>
                    <h2>Units</h2>
                    <p>{property.stories}</p>
                </div>

                <div>
                    <h2>Average SF</h2>
                    <p>{property.avgRent}</p>
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
        
        </>
    )
            
}