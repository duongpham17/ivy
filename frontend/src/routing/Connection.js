import './Routing.scss';
import React, {Fragment} from 'react';
import {RiWifiOffLine} from 'react-icons/ri';

const Connection = () => {

    const online = window.navigator.onLine

    return (
        <Fragment>
            {!online ? 
            <section className="no-connection">
                <h2>No Internet Connection. Please Check Your Internet. <br/><RiWifiOffLine size="2.5rem"/></h2>
            </section>
            : ""}
        </Fragment>
    )
}

export default Connection