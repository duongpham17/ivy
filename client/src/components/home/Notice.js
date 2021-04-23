import './Notice.scss';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getNotice, deleteNotice} from '../../redux/actions/noticeActions';
import ReactHtmlParser from 'react-html-parser';


export const Notice = ({ auth:{user}, notice:{notice}, getNotice, deleteNotice}) => {

    const replace = (str) => str.replace(/\//g, "<br/>");

    useEffect(() => {
        if(!notice.length) return getNotice();
    }, [getNotice, notice.length]);

    const onDelete = (e, i) => {
        e.preventDefault()
        deleteNotice(i)
    }

    return ( !notice ? <p className="loading" /> : 
        <div id="notice-container">
            <p className="latest">Notices</p>
            {notice.map(el => 
            <div key={el._id} className="map-content">
                {user?.role === "admin" && <button onClick={(e) => onDelete(e, el._id)}>X</button>}
                <p className="date">{el.createdAt.slice(0, 10)}</p>
                <p>{ReactHtmlParser(replace(el.message))}</p>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    notice: state.noticeReducers,
    auth: state.authReducers
})

const mapDispatchToProps = {
    getNotice,
    deleteNotice
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice)
