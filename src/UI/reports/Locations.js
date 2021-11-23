/* eslint-disable no-unused-vars */

import React from 'react'
import '../styles/Location.css'
import { Jumbotron, NavbarBrand } from 'react-bootstrap';
import { MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";
import Location from '../components/Location'
class Locations extends React.Component {

constructor(){
  super()

    this.state={
        locations :[]
    }
}

    componentDidMount() {



        fetch('https://tour-app-sudan.herokuapp.com/location/tour'

        )
            .then((response) =>


                response.json()

            ).then(data => {

             
                let fetchedLocations = []

                data.data.forEach(data => {
                    var location = {
                        name: data.location_ar_name,
                        state: data.state.state_ar_name,
                        city: data.city.city_ar_name,
                        type: data.type.type_ar_name ,
                        desc: data.ar_desc
                    }
                    fetchedLocations.push(location)
                });

                //   data.data.forEach(comment =>{
                // fetchedComments.push(comment)
                //   })

                this.setState({
                    locations: fetchedLocations
                })


            })


    }


    render() {
        return (<div className="locations"> 
        
     {
                this.state.locations.map(location => <Location loc={location} />)
     }
        </div>)
  }
  }
export default Locations;

            