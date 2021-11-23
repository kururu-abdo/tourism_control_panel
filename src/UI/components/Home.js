/* eslint-disable no-unused-vars */

import React from 'react'
import '../styles/Home.css'
import { Jumbotron  , NavbarBrand} from 'react-bootstrap';
import { MDBCard, MDBCardHeader, MDBCardBody  } from "mdbreact";
import Locations from  '../reports/Locations'

class Home extends React.Component{


    render(){
        return (<div className="home">
           
<Jumbotron>
       <div className="title">
                    <h4>الدليل السياحي</h4>
    <h4>لوحة التحكم</h4>


       </div>
        
</Jumbotron>


<Locations />

        </div>)
    }
}

export default Home;