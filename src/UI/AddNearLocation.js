import React, { Component } from "react";
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

class AddNearLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            area_id: 1,
            category_id: 1,
            rank: 0,
            
            lat: '',
            lon: '',
            location: [],
            cats: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRankChange= this.handleRankChange.bind(this);
        this.handlecityChange = this.handlecityChange.bind(this);
        this.handlecategoryChange = this.handlecategoryChange.bind(this);

  

        this.handleLat = this.handleLat.bind(this);
        this.handleLon = this.handleLon.bind(this);

    }




    componentDidMount() {


        let initalCities = [];

        fetch('http://localhost:9000/tourist/areas')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
               
                initalCities = data.map((state) => {
                    return state;
                })
                this.setState({
                    location: initalCities
                })


            });



        let initalCats = [];

        fetch('http://localhost:9000/utility/cats')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                let initalCats = [];
                initalCats = data.map((state) => {
                    return state;
                })
                this.setState({
                    cats: initalCats
                })


            });




    }




handleRankChange(event){

    event.preventDefault();

    this.setState({
        rank:event.target.value
    })
}

    handleNameChange(event) {
        event.preventDefault();
        this.setState(
            {
                name: event.target.value
            })

    }
    handlecityChange(event) {
        event.preventDefault();


        this.setState({
            area_id: event.target.value
        })
    }
    handlecategoryChange(event) {
        event.preventDefault();


        this.setState({
            category_id: event.target.value
        })
    }



    handledesc(event) {
        event.preventDefault();


        this.setState({
            area_desc: event.target.value
        })
    }
    handlepics(event) {
        event.preventDefault();


        this.setState({
            pics: event.target.value
        })
    }



    handleChange(event) {
        this.setState({ name: event.target.value });
    }


    handleLat(event) {
        this.setState({ lat: event.target.value });
    }


    handleLon(event) {
        this.setState({ lon: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();




        axios.post(`http://localhost:9000/add/near/location`, {
            area_id:this.state.area_id ,
            name:this.state.name ,
            rank:this.state.rank,

            cat: this.state.category_id,
            lat: this.state.lat,
            lon: this.state.lon
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



        let locations = this.state.location;
        let optionItems = locations.map((city) =>
            <option value={city.area_id}>{city.area_name}</option>
        );
        let cats = this.state.cats;
        let catsoptions = cats.map((cat) =>
            <option value={cat.utility_id}>{cat.utility_name}</option>
        );

        return (


            <div  >

                <form class="col-lg-6 offset-lg-3 ">
                    <Typography component="h1" variant="h5">
                        Add  Near Location
        </Typography>


                    <div className="form-group">
                        <label>Location Name </label>
                        <input type="text" className="form-control"
                            placeholder="Enter   name"
                            value={this.state.value}
                            onChange={this.handleChange}

                            required />
                    </div>

                    <div className="form-groub">
                        <label>City Name</label>
                        <div class="mdb-select md-form">
                            <select value={this.state.city_id} onChange={this.handlecityChange} >
                                {optionItems}
                            </select>
                        </div>
                    </div>
                    <div className="form-groub">
                        <label>Category</label>
                        <div class="mdb-select md-form">
                            <select value={this.state.category_id} onChange={this.handlecategoryChange}>
                                {catsoptions}
                            </select>
                        </div>
                    </div>


                    <div className="form-gruop">
                        <label>Rating</label>
                        <input
                            type="number" pattern="[0-9]*"

                            className='form-control'

                            onChange={this.handleRankChange}
                            value={this.state.rank}

                        />
                    </div>

    


                    <div className="form-gruop">
                        <label>latitude</label>
                        <input
                            type="number" pattern="[0-9]*"

                            className='form-control'

                            onChange={this.handleLat}
                            value={this.state.lat}

                        />
                    </div>

                    <div className="form-gruop">
                        <label>longitude</label>
                        <input
                            type="number" pattern="[0-9]*"

                            className='form-control'

                            onChange={this.handleLon}
                            value={this.state.lon}
                        />
                    </div>




                    <button onClick={
                        this.handleSubmit


                    } type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>

                </form>
            </div>
        );
    }
}



export default AddNearLocation;