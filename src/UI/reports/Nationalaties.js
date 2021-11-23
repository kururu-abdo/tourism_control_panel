/* eslint-disable no-unused-vars */

import { Bar ,Line ,Pie } from 'react-chartjs-2';
import React, { Component } from "react";
import   {Navbar}   from  'react-bootstrap';
class Nationlaties extends React.Component{
constructor(props){
super(props);



this.state={

    initialDatadata:[] ,

    chartData:{}
}

    }




componentDidMount(){

 let initalCountries = [];
       
    fetch('http://localhost:9000/countries')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                let initalCountries = [];
                initalCountries = data.map((state) => {
                    return state;
                })
                this.setState({
                    initialDatadata: initalCountries ,


                chartData:{

                    labels: initalCountries.map((country)=>country.country) ,


                    datasets:[
                        {
                            label:'tourist countries' ,
                            data: initalCountries.map((country) => country.total) ,
                            backgroundColor:[
                                '#0088FE', '#00C49F', '#FFBB28', '#FF8042'
                            ]

                        } ,

                    ]
                }
                })


            });




}

render(){

return (

<div          className="container">
       

       <div  className="chart">

            <Bar
                data={this.state.chartData}
                width={100}
                height={200} 
                options={{ 
                    
                    
                    title:{
display:true ,

text:'most country tousrists'
                    } ,
                    
                    legend:{
 display:true ,
positon:"right"
                    },
                    
                    maintainAspectRatio: false }}
            />
       </div>


</div>



);
}

}

export default  Nationlaties;