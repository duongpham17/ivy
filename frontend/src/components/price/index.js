import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {getPrice} from 'redux/actions/priceActions';

import Selections from './Selections';
import EditPrice from './EditPrice';

export const Index = ({price:{price, loading}, auth:{user}, getPrice}) => {

    const [editing, setEditing] = useState(false);
    
    useEffect(() => {
        if(!price.length) getPrice();
    }, [getPrice, price.length]);

    return (loading ? <p className="loading" /> :
        <div>
           {user?.role === "admin" && <EditPrice setEditing={setEditing} editing={editing} price={price} />}

           {!editing && <Selections price={price}/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    price: state.priceReducers,
    auth: state.authReducers
})

const mapDispatchToProps = {
    getPrice,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
