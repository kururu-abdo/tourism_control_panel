import React, { Component } from "react";
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Loader from 'react-loader-spinner'
import {observer}  from 'mobx-react';
import UserStore from '../store/UserStore';
class AddState extends React.Component{

constructor(props){
    super(props);
    this.state = {
       name: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
 

componentDidMount(){
   console.log('this is the first method in the sd')
}

    handleChange(event) {
        this.setState(
            { name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

       alert('A name was submitted: ' + this.state.name);
       
//UserStore.isLoading =true;

//         fetch('http://127.0.0.1:9000/' ,{
// method:"get" ,
//  mode: 'cors' ,
// headers:{
//     "Access-Control": "Access-Control-Allow-Origin",
//     "Accept":"application/json" ,
//     "Content-Type":"application/json"
// }
// })
//             .then(response => alert(response.data.msg))

    
//     const requestOptions = {
//         method: 'POST',
//       mode: 'cors' ,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ state: this.state.name })
//     };
//         fetch('http://localhost:9000/addstate', requestOptions)
//         .then(response => response.json())
//         .then(data => console.log(data));


       const stataObject = {
            "state": this.state.name
        };

        axios
            .post('http://localhost:9000/addstate', {

            state:this.state.name
            })
            .then(() => console.log('Book Created'))
            .catch(err => {
                console.error(err);
            });
    

    //    postData('https://67a53befc068.ngrok.io/addstate', { state: this.state.name })
    //         .then(data => {
    //             console.log(data); // JSON data parsed by `data.json()` call
    //         });


//         axios.post('https://67a53befc068.ngrok.io/addstate',
// {
//     state:  this.state.name
// }



//     )
//     .then((res)=>alert(res.data));
        UserStore.isLoading = false
    //   axios({
    //         headers: {
    //             'content-type': 'application/json;charset=utf-8' ,
    //              "Access-Control": "Access-Control-Allow-Origin"
    //         },
    //         method: 'post',
    //         url: `https://67a53befc068.ngrok.io/addstate`,
    //         params: {
    //     state:    this.state.name               
    //         },
         
    //     })
    //         .then((response) => alert(response.data.msg))
    //         .catch((error) => error);




        // axios.post(`https://67a53befc068.ngrok.io/addstate` ,{
        //     user
        // })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //         const persons = res.data;
        //         alert(persons.msg);
        //     })
      
    }

  
 onClick(val){





}

render(){
var check = UserStore.isLoading;

var renderedItem;

if(!check){

    renderedItem = <>
    <input type="submit" value="Submit"   />

    <button onClick={
        () => this.handleSubmit()


    } type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>

</>


}else{
    renderedItem = <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}

    />
}


    return (

     
              <div>
            
            <form class="col-lg-6 offset-lg-3 ">
                <Typography component="h1" variant="h5">
                    Add State
        </Typography>


                <div className="form-group">
                    <label>State Name </label>
                        <input type="text" className="form-control" 
                    placeholder="Enter state name"  
                        value={this.state.name} 
                        onChange={this.handleChange}
                    
                    required/>
                </div>

                <button onClick={this.handleSubmit} type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
           
            </form>
              </div>
    );
}
}



export default observer(AddState);