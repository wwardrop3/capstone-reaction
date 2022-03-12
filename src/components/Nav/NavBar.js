//The purpose of this component is to product the nav bar that will be consistent across the entire app
import "./Nav.css"
import { Link } from "react-router-dom"
import { deleteUser, getPropertyTypes } from "../APIManager"
import { useHistory } from "react-router-dom"
import { appLogo } from "../REAction"
import { useEffect, useState } from "react"



export const NavBar =() => {
    const[propertyTypes, setPropertyTypes] = useState([])
    const [typeId, setTypeId] = useState()
    


    //Invoke GetProperties from the API manager to fetch all propertyType objects and then save to app state
    useEffect(
        () => {
            getPropertyTypes()
                .then(
                    (typesResponse) => {
                        setPropertyTypes(typesResponse)
                    }
                )
        },
        //anytime a user requests a different property type, rerun
        [typeId]
    )

    const history=useHistory()

    return (
        <>




            <div className="nav-container">

                <div className="logo-container">  
                    <div className="site-logo-container">
                        <img className="nav-logo" src="https://sat02pap002files.storage.live.com/y4mm11WoPkT-8cLau7ZPGs85-7O3T8PMPE7ar5QlOSvuMNOXiLXj5XDdx9J2dC7m8JwhYdMrPgZaaJMtk5P16GDXzJTZ7E5cOHJoMCP203fA4Pmm-bOAfKHw7rmjLNg5l7zmL27qMP3_RQCNl4n678O9PytbTJdYRIdcSFkZ8bWxzk_W3QUqQyAETU8fMx763fP4kleOR9YKF3_gdAt4A39_pmRz6PI9vPPYFpxEU_6TpA?encodeFailures=1&width=857&height=371"/>
                    </div>
                </div>  

                <div className="nav-buttons">

                    <div className="view-filter">
                    
                    <h5>Filter by Type</h5>
                    <select 
                    name="view-select"
                    className="nav-button"
                        onChange = {
                            (evt) => {
                                if(evt.target.value === "All"){
                                    history.push("/properties")
                                } else{
                                    const foundPropertyType = propertyTypes.find(type => type.id === parseInt(evt.target.value))
                                    history.push(`/properties/type/${foundPropertyType.id}`)
                                }
                                
                            }}
                            >
                            <option value = "0">Select Type</option>
                            <option value = "All">All Properties</option>
                        {propertyTypes.map(type => {
                            return <option value = {`${type.id}`}>{`${type.name}`}</option>})}   
                    </select>
                </div>

               
    {/* 
                    <button name = "map-all" className="nav-button"
                        onClick={
                            (evt) => {
                                history.push(`/properties/geocoder`)
                                

                            }
                        }>Geocoder
                    </button>

                
    */}
                <div className="view-filter">
                    <h5>Add by Property Type</h5>
                    <select className="nav-button"
                        onChange = {
                            (evt) => {
                                setTypeId(parseInt(evt.target.value))
                                const foundPropertyType = propertyTypes.find(type => type.id === parseInt(evt.target.value))
                                const typeName = foundPropertyType.name
                                history.push(`/properties/create/${foundPropertyType.id}`)
                            }}
                            >
                            <option value = "0">Select Type</option>
                        {propertyTypes.map(type => {
                            return <option value = {`${type.id}`}>{`${type.name}`}</option>})}   
                        </select>
                </div>

                <div className="view-filter">
                    <button name = "map-all" className="nav-button"
                        onClick={
                            (evt) => {
                                history.push(`/properties/map`)
                                

                            }
                        }>Property Map
                    </button>
                </div>
               

                <div className="view-filter">

                    <button className="nav-button"

                    onClick={
                        (evt) => {
                            history.push("/create-user-note")

                        }
                    }>Create Note</button>
                </div>
                
                <div className="view-filter">
                    
                    <button className="nav-button"

                    onClick={
                        (evt) => {
                            history.push("/user-notes/map")

                        }
                    }>View Notes</button>
                </div>

                <div className="view-filter">
                    <button className="nav-button"

                    onClick={
                        (evt) => {
                            localStorage.removeItem("property_user")
                            history.push("/login")

                        }
                    }>Log Out</button>
                </div>
            </div>




                        
                        
                
                
            </div>
    </>
)
}
