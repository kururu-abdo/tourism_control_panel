import React, { Component } from "react";
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

class AddLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '' ,
            city_id: 1,
            category_id:1 ,
            area_desc:'' ,
            pics:'' ,
            lat:'' ,
            lon:'',
            cities:[] ,
            cats:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
         this.handleNameChange =this.handleNameChange.bind(this);

        this.handlecityChange = this.handlecityChange.bind(this);
        this.handlecategoryChange = this.handlecategoryChange.bind(this);

        this.handledesc = this.handledesc.bind(this);
        this.handlepics = this.handlepics.bind(this);

        this.handleLat = this.handleLat.bind(this);
        this.handleLon = this.handleLon.bind(this);

    }




    componentDidMount() {


        let initalCities = [];
       
        fetch('http://localhost:9000/cities')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                let initalCities = [];
                initalCities = data.map((state) => {
                    return state;
                })
                this.setState({
                    cities: initalCities
                })


            });



        let initalCats = [];

        fetch('http://localhost:9000/cats')
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






handleNameChange(event){
    event.preventDefault();
    this.setState(
        {
            name: event.target.value
        })

}
handlecityChange(event){
    event.preventDefault();


    this.setState({
        city_id:event.target.value
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



       
        axios.post(`http://localhost:9000/addlocation`, {
           city_id:  this.state.city_id,

           name:this.state.name ,
           pics: this.state.pics ,
            description: this.state.area_desc,
           cat:this.state.category_id,
           lat:this.state.lat ,
           lon:this.state.lon
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



        let cities = this.state.cities;
        let optionItems = cities.map((city) =>
            <option value={city.city_id}>{city.city_name}</option>
        );
        let cats = this.state.cats;
        let catsoptions = cats.map((cat) =>
            <option value={cat.class_id}>{cat.name}</option>
        );

        return (


            <div  >

                <form class="col-lg-6 offset-lg-3 ">
                    <Typography component="h1" variant="h5">
                        Add  tourist Area
        </Typography>


                    <div className="form-group">
                        <label>Location Name </label>
                        <input type="text" className="form-control"
                            placeholder="Enter   name"
                            value={this.state.value}
                            onChange={this.handleNameChange}

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



     <div className="form-groub">
         <label>
             Description
         </label>
                        <textarea className="form-control"  value={this.state.area_desc} onChange={this.handledesc}>
                            Hello there, this is desc of the area
</textarea>







     </div>


<div className="form-groub">

    <label>picures</label>

                        <textarea className="form-control" value={this.state.pics} onChange={this.handlepics}>
                            
                            </textarea>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            you must add pictures as links into array []  like [linl11 , link2 ,etc]
</small>
</div>


<div  className="form-gruop">
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



export default AddLocation;