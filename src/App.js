import {observer } from 'mobx-react';
import logo from './logo.svg';
import Sidebar from "react-sidebar"
import React from 'react';
import UserSore from './store/UserStore';
import SideNavbar from './UI/SideNavbar';
import Login from './UI/Login';
import Slideshow from './UI/Slideshow';

import './App.css';
class App  extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }


  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }
render(){



  return (

   
    // <Admin dataProvider={restProvider('https://tour-app-sudan.herokuapp.com/')}>
    // </Admin>





<>
     
      <SideNavbar></SideNavbar>

      




</>


    );
  
}
}

export default observer(App);
