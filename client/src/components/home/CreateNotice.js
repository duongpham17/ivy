import './CreateNotice.scss';
import React,{useState} from 'react';
import { connect } from 'react-redux';
import { createNotice } from '../../redux/actions/noticeActions';
import { AiOutlineUpload } from 'react-icons/ai';

export const CreateNotice = ({auth:{user}, createNotice}) => {

    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        createNotice(message);
        setMessage("")
    };

    return ( !user ? "" : user.role === "admin" && 
        <div id="create-notice-container">
            <form onSubmit={(e) => onSubmit(e)}>
                <p>New Notice:</p>
                <textarea placeholder="Enter new message to users" value={message} onChange={(e) => setMessage(e.target.value) } />
                {message.length >= 5 && <button><AiOutlineUpload/></button> }
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducers
})

const mapDispatchToProps = {
    createNotice
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotice)
