import React, { Component } from "react";
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

class AddCity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '' ,

            state_id:1,
            states:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleStateChange=this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStateChange(event){
         event.preventDefault();


    // alert(event.target.value);
        this.setState({
            state_id  :event.target.value
        })
    }

    componentDidMount() {


         let initalStates = [];
//         axios
//             .get('http://localhost:9000/states', {

//                 state: this.state.name
//             })
//             .then((data)=>{
// initalStates = data.results.map((state)=>{
//     return state;
// })
//          this.setState({
//              states: initalStates
//          })

//             })
//             .catch(err => {
//                 console.error(err);
//             });



        fetch('http://localhost:9000/states')
            .then(response => {
                return response.json();
            }).then(data => {
console.log(data);
                let initalStates = [];
                initalStates = data.map((state) => {
                    return state;
                })
                this.setState({
                    states: initalStates
                })
                
                
            });




       
    }



    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();



        const city = {

            "state_id": parseInt(this.state.state_id, 10),
         "name": this.state.name
        };
        axios.post(`http://localhost:9000/add/city`, {
            state_id:this.state.state_id,
            name: this.state.name
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                const persons = res.data;
                alert(persons.msg);
            })

    }
    onClick(val) {





    }

    render() {






        let states = this.state.states;
        let optionItems = states.map((state) =>
            <option value={state.state_id}>{state.state_name}</option>
        );
        return (


            <div>

                <form class="col-lg-6 offset-lg-3 ">
                    <Typography component="h1" variant="h5">
                        Add City
        </Typography>


                    <div className="form-group">
                        <label>City Name </label>
                        <input type="text" className="form-control"
                            placeholder="Enter city  name"
                            value={this.state.name}
                            onChange={this.handleChange}

                            required />
                    </div>

<div className="form-groub">

                        <div class="mdb-select md-form">
                   <select    value={this.state.state_id} onChange={this.handleStateChange}>
                            {optionItems}
                        </select>
                    </div>
</div>

                    <button onClick={
                     this.handleSubmit


                    } type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                    
                </form>
            </div>
        );
    }
}



export default AddCity;