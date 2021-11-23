import '../styles/Users.css'
import React from 'react';
import '../styles/Comment.css'
import { Table, TableProps } from 'react-bootstrap';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBDataTable, MDBTableHead, MDBTableBody, MDBTableFoot, MDBDataTableV5 } from "mdbreact";
import  Comment from  '../components/Comment'
class Comments extends React.Component {

    constructor(props) {

        super(props)

        this.state={
            comments : []
        }
    }
    componentDidMount() {



        fetch('https://tour-app-sudan.herokuapp.com/location/comments'

        )
            .then((response) =>


                response.json()

            ).then(data => {

              console.log(data.data[0]);
                console.log(data.data[0]);
                let fetchedComments = []

                data.data.forEach(data => {
                    var comment = {
                        comment: data.comment,
                        time: data.time ,
                        location: data.location.location_ar_name ,
                        user :data.user.user_name,
                        country: data.user.country.country_ar_name
                    }
                    fetchedComments.push(comment)
                });
              
//   data.data.forEach(comment =>{
// fetchedComments.push(comment)
//   })

  this.setState({
      comments : fetchedComments
  })


             } )


            }


            render (){
                return (
                    <div className="card">
                        <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
تعليقات السياح                        </MDBCardHeader>                        {
                            this.state.comments.map(comment => <Comment comment={comment}/>)
                        }
                    </div>
                )
            }
}

export default Comments;