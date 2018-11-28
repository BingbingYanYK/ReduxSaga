import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDestination } from '../../../store/actions';

const SearchResult = (props)=>{
    if(props.destinations.loading){
        return (<div>loading</div>);
    }
    else{
        return (
            <ul>
                {
                    props.destinations.list.map(
                        d=>(
                            <li key= {d.id} onClick={()=>{ props.action.setDestination(d.id)} }>{d.name}</li>
                        )
                    )
                }
            </ul>
        );
    }
}
const mapStateToProps = (state)=>({
    destinations: state.destinations
})
const mapDispatchToProps = dispatch=>({
    action: bindActionCreators(
        {
            setDestination
        },
        dispatch
    )
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);