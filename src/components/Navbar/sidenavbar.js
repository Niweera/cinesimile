import React from "react";
import { navbarItems} from "./navbarItems";
import {
    Switcher,
    SwitcherItem,
    SwitcherDivider,
    HeaderPanel,
  } from "carbon-components-react";
const Sidenavbar = () => {
    return (
        <React.Fragment>
        <HeaderPanel aria-label="Header Panel" className="header-side">
        <Switcher aria-label="Switcher Container">
        {navbarItems.map( (item,index)=>{
           let keyLabel=index+item.title+"sideBar";
                                return (

                                   <React.Fragment key={index+"div"+item.title}><SwitcherItem aria-label={keyLabel} href={item.url} className="navbar-items"  key={index+"sidebar"}>{item.title}</SwitcherItem> <SwitcherDivider /></React.Fragment >
                                );
                            } )}
        </Switcher>
      </HeaderPanel>
      </React.Fragment>
    );
  };

export default Sidenavbar;  