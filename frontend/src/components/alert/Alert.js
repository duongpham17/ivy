import './Alert.scss';
import React from 'react';
import {connect} from 'react-redux';

const Alert = ({alert}) => (
    <div className={`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
)

const mapStateToProps = state => ({
    alert: state.alertReducers
});

export default connect(mapStateToProps)(Alert)