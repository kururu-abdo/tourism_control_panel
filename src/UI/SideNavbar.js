/* eslint-disable no-unused-vars */
// eslint-disable-next-line
// eslint-disable-next-line no-unused-vars

import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import AddState from './AddState';
// eslint-disable-next-line no-unused-vars
import AddCity from './AddCity';
import AddLocation from './AddLocation';
import AddNearLocation from './AddNearLocation';
import Nationalaties from './reports/Nationalaties';
import Users from './reports/Users'
import Comments  from './reports/Comments'

import Home from '../UI/components/Home'
import './styles/SideNavbar.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link ,
    useRouteMatch,
    useParams
    
    } from 'react-router-dom';
import Slideshow from './Slideshow';
class SideNavbar  extends React.Component{


   render(){
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav

                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}

                         className="side"
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="">
                                <NavItem eventKey="">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Home
                        </NavText>
                                </NavItem>
                                <NavItem eventKey="users">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                       Users
                        </NavText>



                        
                                </NavItem>



                                <NavItem eventKey="comments">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Commetns
                        </NavText>




                                </NavItem>



                                
                            </SideNav.Nav>




                        </SideNav>
                        <main  className="main" >
                
                <Route path="/" exact component={props => <Home />} />
                {/* <Route path="/AddState" exact component={props => <AddState />} /> */}


                
                            <Route path="/Users" exact component={props => <Users />} />
                            <Route path="/Comments" exact component={props => <Comments />} />

{/* 
                            <Route path="/AddLocation" exact component={props => <AddLocation />} /> 

                            <Route path="/AddNearLocation" exact component={props => <AddNearLocation />} /> 

                            <Route path="/Nationalaties" exact component={props => <Nationalaties />} />  */}



                        </main>
                    </React.Fragment>
                )}
                />
            </Router>

        );
        }
}



export default SideNavbar;