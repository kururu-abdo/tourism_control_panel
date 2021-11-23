/* eslint-disable no-unused-vars */

import React from 'react'
import '../styles/Location.css'
import { Jumbotron, NavbarBrand } from 'react-bootstrap';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardText, MDBCardFooter } from "mdbreact";

class Location extends React.Component {


    render() {
        return (<div className="location"> 

<MDBCard>
                <MDBCardHeader className="header" >{this.props.loc.name} </MDBCardHeader>
    <MDBCardBody>
        <MDBCardText>
            {
                this.props.loc.desc
            }
        </MDBCardText>
    </MDBCardBody>
    <MDBCardFooter className="footer">
                    <div>{this.props.loc.city}</div>
                    <div>{this.props.loc.state}</div>
    </MDBCardFooter>
</MDBCard>

        </div>)
    }
}
export default Location;

