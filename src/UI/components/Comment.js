import { MDBCard, MDBCardHeader, MDBCardBody, MDBDataTable, MDBTableHead, MDBTableBody, MDBTableFoot, MDBDataTableV5, MDBCardFooter, MDBCardText, MDBCardTitle } from "mdbreact";
import {  } from "../styles/Comment.css";

import React from 'react';


class Comment  extends React.Component    {
   
    render (){
        return (<div className="comment">

            <MDBCard className="comment" >
                <MDBCardTitle>{this.props.comment.user + "  -    " + this.props.comment.country}</MDBCardTitle>
                <MDBCardHeader>
                    {this.props.comment.location}
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        {this.props.comment.comment}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    {this.props.comment.time}
                </MDBCardFooter>


            </MDBCard>
        </div>)

    }
}

export default Comment