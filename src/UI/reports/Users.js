/* eslint-disable no-unused-vars */
import '../styles/Users.css'
import React from 'react';
import { Table, TableProps } from 'react-bootstrap';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBDataTable, MDBTableHead, MDBTableBody, MDBTableFoot, MDBDataTableV5 } from "mdbreact";

// const columns = ["Person", "Age", "Company", "Country", "City"];

// const data = [
//     ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
//     ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
//     ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
//     ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
// ]

// const TableEditablePage = props => {
//     return (
//         // <MDBCard>
//         //     <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
//         //         Users
//         //     </MDBCardHeader>
//         //     <MDBCardBody>
//          //data={data} columns={columns}    /

//                 <MDBDataTable 

//                 data={
//                      {
//                          columns: {columns},
//                          rows : data
//                      }
//                 }
//                 >
//                     <MDBTableHead>Users</MDBTableHead>
//                  </MDBDataTable>   
//         //     </MDBCardBody>
//         // </MDBCard>
//     );
// };

// export default TableEditablePage;



class Users extends React.Component {




    constructor(props) {

        super(props)


        this.state = {

            users: [],
            columns: [],
            data: [
                ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
                ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
                ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
                ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
            ]


        }

    }


    componentDidMount() {



        fetch('https://tour-app-sudan.herokuapp.com/user/users'

        )
            .then((response) =>


                response.json()

            ).then(data => {


                var mUser = {
                    ID: data.data[0].user_id,
                    Name: data.data[0].user_name,
                    email: data.data[0].email,
                    phone: data.data[0].phone,
                    address: data.data[0].address,
                    country: data.data[0].country.country_ar_name,
                    Type: data.data[0].user_type.type_ar_name

                }
                let keys = Object.keys(mUser)
                let labels = []
                for (let key in keys) {

                    if (keys[key] === "password" || keys[key] === "pic" || keys[key] === "userTypeTypeId" || keys[key] === "country_id" || keys[key] === "countryCountryId") {
                        continue;
                    } else {
                        labels.push(keys[key])

                    }
                }

                this.setState({
                    columns: labels
                })




                let fetchedUsers = []
                data.data.forEach((user) => {
                    let i = 1
                    console.log(i++);

                    var mUser = {
                        ID: user.user_id,
                        Name: user.user_name,
                        email: user.email,
                        phone: user.phone,
                        address: user.address,
                        country: user.country.country_ar_name,
                        Type: user.user_type.type_ar_name

                    }

                    //    console.log(data);
               
                    fetchedUsers.push(mUser)




                    console.log(this.state.users.length);
                })
                this.setState({
                    users: fetchedUsers
                })
            });




    }







    render() {
        return (<div className="tab">





            {/* <Table    >
          
    {
        this.state.columns.map(col=><th> {col} </th>)
    } ,
{
                this.state.users.map(user => <td>{user} </td>)
}




       </Table> */}



            <MDBCard >
                <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                    تقرير عن السياح
                </MDBCardHeader>
                <MDBCardBody>


                    <MDBDataTable
                        noBottomColumns="true"

                        displayEntries="true"                       
  dark="true"
                        data={{
                            columns: this.state.columns.map(col => {
                                return {
                                    searchable: false,
                                    label: col,
                                    field:col,
                                    sort: "Name",
                                }
                            }),
                            rows:



                                this.state.users
                            // .map(user => {
                            //     let usersData = []
                            //     usersData.push(user)
                            //     return usersData
                            // })
                        }}
                    // key="ID"
                    //     data={this.state.users} columns={this.state.columns}
                    >

                    </MDBDataTable>
                </MDBCardBody>
            </MDBCard>
        </div>)
    }
}


export default Users;