import React from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow, MarkerProps} from '@react-google-maps/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { geocodeByAddress } from 'react-google-places-autocomplete';
import { Link } from 'react-router-dom';
import "./UserNotesMap.css"

const id = ["919771f94d285faa"]
const key= process.env.REACT_APP_GOOGLEMAPS_APIKEY
const lib = ["places"]





export const UserNotesMap = () => {
    const [userNotes, setUserNotes] = useState([])
    const [selected, setSelected] =useState({})
    //view will keep the view of the map the same after closing the popup window on a property
    const [view, setView] = useState(
        {
            lat: 36.16049743877696, 
            lng: -86.78448535520621
    })

    const onSelect = (property) => {
        setSelected(property)
        setView(property.location)
        }
   

    useEffect(
        () => {
            return fetch("http://localhost:8088/userNotes")
            .then(res => res.json())
            .then(
                (response) => {
                    setUserNotes(response.filter(userNote => userNote.userId === parseInt(localStorage.getItem("property_user"))
                ))}
            )},[]
    )
    

    const mapStyles = {        
        height: "100vh",
        width: "100vw",
        left: "-350px",
        position: "absolute"};

    return (
        <>
        <div id = "map-content">
        <LoadScript libraries = {lib} mapIds = {id}>
        
        
            
            
        <GoogleMap
        
            
            mapContainerStyle={mapStyles}
            zoom={13}
            scrollwheel={true}
            tilt={45}
            options = {{mapId: "919771f94d285faa",
            scrollwheel:"true"}}
            center={view}>
                {
                    userNotes.map(userNote => {
                        return(
                            
                            

                            
                            <Marker
                            
                            class = "marker"
                            icon="https://sat02pap002files.storage.live.com/y4mKqHVHjqKQqRlBkuDPXZWv6vXYCKBVwrKr2FCTGF8aSxZg8cZp3HSRyF6ve49urSTUUczW6wKKjbpsWH2A_c009XS0iuEu_xVZLriHSA0tZyVywWCh3wUuVU8rNqpasLHpPsqsHpSCRE3y4red3WtSJ5Sv_18k0ZkyLlBHJDeJsFqHzIDY9QHtFLKuQFzITBv?width=50&height=50&cropmode=none"
                            key = {userNote.id} position = {userNote.location}
                            onClick={() => 
                                onSelect(userNote)
                            }
                        
                            />    
                        ) 
                    }
                    )
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                        position={selected.location}
                        clickable={true}
                        onCloseClick={()=>
                            setSelected({})}
                        >
                            <div className='popup-window'>
                            <h2> {selected.title}</h2>
                                <div className='image-container'>
                                    {/* <img id='prop-image' src = {selected.imageURL} height="300px"></img> */}
                                
                                </div>
                                    <div>
                                    <p>{`${selected.propertyTypeId}`}</p>
                                   <p>{`${selected.text}`}</p>
                                        </div>
                                
                                
                                </div>
                            </InfoWindow>
                    )
                    
                }
            
                </GoogleMap>
                </LoadScript>
            </div>
        </>)
        }
