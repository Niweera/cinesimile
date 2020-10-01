import React,{Component} from 'react';
import {Search} from 'carbon-components-react';

class Searchfield extends Component{

    render(){
        return(
            <Search id="search-1" placeHolderText="Search for similar movies"/>   
        );
    }
}
export default Searchfield; 