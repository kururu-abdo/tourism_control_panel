import React, { Component } from "react";
import UserStore from '../store/UserStore';
import {observer} from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import {axios} from 'axios';
 class Login extends Component {



    onClick(){
           UserStore.user_name= 'Abdurrahim hassan kururu';
           UserStore.isLoggedIn= true;
       

    // axios.get('http://localhost:9000')
    //   .then(res => {
    //     const persons = res.data;
    //     console.log(persons);
    //   })
  

//         fetch('http://localhost:9000/' ,{
// method:"get" ,
//  mode: 'cors' ,
// headers:{
//     "Access-Control": "Access-Control-Allow-Origin",
//     "Accept":"application/json" ,
//     "Content-Type":"application/json"
// }
// })
//             .then(response => response.json())
//             .then(data => alert(data.data));
     }
    render() {


       
        return (
<div>

                <Typography component="h1" variant="h5">
                Log in 
        </Typography>
                <form class="col-lg-6 offset-lg-3 ">

              

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button onClick={
                        () => this.onClick()


                    } type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
</div>
         
         
            );
    }
}


export default observer(Login);