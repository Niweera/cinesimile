import React, { Component} from 'react';
import { navbarItems} from "./navbarItems";
import './navbar.css';
import Sidenavbar from'./sidenavbar';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "carbon-components-react";
import { Menu32 } from '@carbon/icons-react';
class Navbar extends Component {
    state={
            showPanel:false,
         };
    render() {
        return (
            <React.Fragment>
                <Header aria-label="CineSimile" className="bx--col-sm-10 header">
                    <SkipToContent />
                    <HeaderName href="/" prefix="" className="bx--col-lg-2">
                    CineSimile
                    </HeaderName>
                    <HeaderNavigation aria-label="CineSimileItems" className="nav-menu" >
                            {navbarItems.map( (item,index)=>{
                                return (
                                    <HeaderMenuItem href={item.url} className="navbar-items  bx--col-lg-10" key={index+item.title}>{item.title}</HeaderMenuItem>
                                );
                            } )}
                            
                    </HeaderNavigation>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="side-bar" onClick={this.showSidePanel}  className={this.state.showPanel?"focus-in":"focus-out"}>
                            <Menu32/>
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                    <Sidenavbar />
            </Header>
            </React.Fragment>
        );
    }
    
    showSidePanel=()=>
    {
        var allClasses= document.getElementsByClassName('bx--header-panel');
        for (let i = 0; i < allClasses.length; i++) { 
            if(this.state.showPanel)
                 allClasses[i].classList.remove("bx--header-panel--expanded");
            else
                allClasses[i].classList.add("bx--header-panel--expanded");

           this.setState({showPanel:!this.state.showPanel})     
        } 

    }
}

export default Navbar;