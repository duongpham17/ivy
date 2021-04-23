import './EditPrice.scss';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { updatePrice } from '../../redux/actions/priceActions';
import { AiOutlineUpload, AiOutlineMinus } from 'react-icons/ai';

export const AddPrice = ({el, picker, edit, role, updatePrice}) => {

    const [add, setAdd] = useState("");
    const [header, setHeader] = useState("");
    const [save, setSave] = useState(false);
    const [position, setPosition] = useState({
        switching: false,
        value: "",
        index: ""
    });

    const onAdd = (e, type) => {
        e.preventDefault();
        if(type === "price") {
            el.price.push(add)
            setAdd("")
        }
        if(type === "header") {
            el.price.push(`header ${header}`);
            setHeader("")
        }
        setSave(true);
    };

    const onDelete = (index) => {
        el.price.splice(index, 1);
        setSave(true);
        //in order to update state
        setAdd(add === "" ? "-" : "");
    };

    const onUpdate = (e) => {
        e.preventDefault();
        updatePrice(el._id, el.price);
        setSave(false);
    }

    const onInsert = (e, value, index) => {
        e.preventDefault()

        if(!position.switching) return setPosition({...position, switching: true, value, index});

        if(index === position.index) return  setPosition({...position, switching: false, value: "", index: ""});

        el.price.splice(position.index, 1);
        el.price.splice(index, 0, position.value);

        setPosition({...position, switching: false, value: "", index: ""});
        setSave(true)
    }

    return ( el.type.toLowerCase() === picker.toLowerCase() && 
        <div id="add-price-container">
            {el.price.map((el, i) => 
                <div key={el+i}>
                    {role === "admin" && edit ?
                    <div className={`edit-content ${position.switching && position.index === i && "switching"}`} onClick={(e) => onInsert(e, el, i)}>
                        <button onClick={() => onDelete(i)}><AiOutlineMinus/></button>
                        {el.includes("header") ? <h2 className={edit && "edit-header"}>{el.slice(6)}</h2> : <p>{el}</p>}
                    </div>
                    : 
                    <div>
                        {el.includes("header") ? <h2 className={!edit && "no-edit-header"}>{el.slice(6)}</h2> : <p>{el}</p>}
                    </div>
                    }
                </div>
            )}
            
            {role === "admin" && edit &&
            <div>
                <form onSubmit={(e) => onAdd(e, "price")}>
                    <input type="text" placeholder="Add price and description" value={add === "-" ? "" : add} onChange={(e) => setAdd(e.target.value)} />
                    <button>+</button>
                </form>
                <form onSubmit={(e) => onAdd(e, "header")}>
                    <input type="text" placeholder="Add header" value={header === "-" ? "" : header} onChange={(e) => setHeader(e.target.value)} />
                    <button>+</button>
                </form>
                
                {save && <button className="save-btn" onClick={(e) => onUpdate(e)}><AiOutlineUpload/></button>}
            </div>
            }
        </div>
    )
}

const mapDispatchToProps = {
    updatePrice
}

export default connect(null, mapDispatchToProps)(AddPrice)
