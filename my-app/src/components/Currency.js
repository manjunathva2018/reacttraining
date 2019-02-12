//Function Base Component ( no need to use class )
import React from 'react';
import { connect } from 'react-redux';
import { changeCurrency } from '../_store/actions/currencyAction';

// props directly use as a parameter 
const Currency = (props) => {
    const { codes,changeCurrency } = props;
    return(
        <select onChange={(e) => changeCurrency(e.currentTarget.value)}>
            {codes.map(
                c => <option key={c} value={c}>
                    {c}
                </option>
            )}
        </select>
    );
}

// display the currency 
const mapDispatchToProps = (dispatch) =>({
    changeCurrency:(c)=>dispatch(changeCurrency(c))
});
export default connect(null,mapDispatchToProps)(Currency);