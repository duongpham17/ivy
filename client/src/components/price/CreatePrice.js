import './CreatePrice.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {createPrice} from '../../redux/actions/priceActions';
import { AiOutlineUpload } from 'react-icons/ai';

export const CreatePrice = ({createPrice}) => {

    const [type, setType] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        createPrice(type);
        setType("");
    }

    return (
        <div id="create-price-container">
            <form onSubmit={(e) => onSubmit(e)}>
                <input placeholder="Enter Type E.g ombre, acrylic ..." value={type} onChange={(e) => setType(e.target.value)} />
                {type.length >= 3 && <button className="create-btn"><AiOutlineUpload/></button> }
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createPrice
}

export default connect(null, mapDispatchToProps)(CreatePrice)
