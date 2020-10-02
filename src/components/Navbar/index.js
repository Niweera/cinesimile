import React from 'react';
import { navbarItems} from "./navbarItems";
import './navbar.css';
import Sidenavbar from'./sidenavbar';
import showSidePanel from'./showSidePanel';
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
 const Navbar =()=> {
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
                    <HeaderGlobalBar id="global_header">
                        <HeaderGlobalAction aria-label="side-bar" onClick={showSidePanel} id="show-side-panel" >
                            <Menu32/>
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                    <Sidenavbar />
            </Header>
            </React.Fragment>
        );
    }    
export default Navbar;