import React from 'react';
import {Input} from './styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDestination , searchDestination} from '../store/actions';

class SearchBar extends React.Component{
    onInputChange = (e)=>{
        console.log(e.target.value);
        this.props.action.searchDestination(e.target.value);
    }
    render(){
        return(
            <section>
                <Input placeholder="Search for a planet" onChange={this.onInputChange} />
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(
        {
            searchDestination
        },
        dispatch
    )
})
export default connect('', mapDispatchToProps)(SearchBar);