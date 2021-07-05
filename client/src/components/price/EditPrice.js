import './EditPrice.scss';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updatePrice} from 'redux/actions/priceActions';
import {AiOutlineUpload} from 'react-icons/ai';
import {FaTrashAlt} from 'react-icons/fa';
import {IoMdAdd} from 'react-icons/io';

export const AddPrice = ({price, updatePrice, editing, setEditing}) => {

    const selections = price.map(el => el.type);
    const [selected, setSelected] = useState({
        type: selections[0],
        index: 0
    });

    const [add, setAdd] = useState("");
    const [header, setHeader] = useState("");

    const [save, setSave] = useState(false);
    const [position, setPosition] = useState({
        switching: false,
        value: "",
        index: ""
    });

    const checkWord = (word) => {
        if(word.split(" ")[0] === "header"){
            return word.split(" ").slice(1).join(" ");
        }
        return word
    }

    const onAdd = (type) => {
        if(type === "price") {
            price[selected.index].price.push(add)
            setAdd("")
        }
        if(type === "header") {
            price[selected.index].push(`header ${header}`);
            setHeader("")
        }
        setSave(true);
    };

    const onDelete = (index) => {
        price[selected.index].price.splice(index, 1);
        setSave(true);
        setAdd(!add ? "-" : "")
    };

    const onUpdate = () => {
        updatePrice(price[selected.index]._id, price[selected.index].price);
        setSave(false);
    }

    const onInsert = (value, index) => {
        if(!position.switching) return setPosition({...position, switching: true, value, index});

        if(index === position.index) return  setPosition({...position, switching: false, value: "", index: ""});

        price[selected.index].price.splice(position.index, 1);
        price[selected.index].price.splice(index, 0, position.value);

        setPosition({...position, switching: false, value: "", index: ""});
        setSave(true)
    }

    return ( 
        <div className="edit-price-container">
            <div className="edit-btn">
                <button onClick={() => setEditing(!editing) }>{!editing ? "Edit Price" : "Close Price"}</button>
            </div>

            {editing && 
                <div className="content">

                    <div className="selections">
                        {selections.map((el, i) => <button className={`${selected.type === el && "selected"}`} key={i} onClick={() => setSelected({type: el, index: i})} >{el}</button>)}
                        <br/><br/>
                        {save && <button onClick={() => onUpdate()}>Save Changes <br/> <AiOutlineUpload className="icon"/> </button>}
                    </div>

                    <div className="prices">
                        {price[selected.index].price.map((el,i) => 
                        <div key={i} className="options">
                            <button className={`${position.index === i && "selected"}`} onClick={() => onInsert(el, i)} >{checkWord(el)}</button>
                            <button onClick={() => onDelete(i)} ><FaTrashAlt/></button>
                        </div>
                        )}
                    </div>

                    <div className="add">
                        <li>
                        <input type="string" placeholder="Add a price" value={add === "-" ? "" : add} onChange={(e) => setAdd(e.target.value)} />
                        <button onClick={() => onAdd("price")} ><IoMdAdd className="icon"/></button>
                        </li>
                        <li>
                        <input type="string" placeholder="Add a header" value={header} onChange={(e) => setHeader(e.target.value)} />
                        <button onClick={() => onAdd("header")} ><IoMdAdd className="icon"/></button>
                        </li>
                    </div>

                </div>
            }
        </div>
    )
}

const mapDispatchToProps = {
    updatePrice
}

export default connect(null, mapDispatchToProps)(AddPrice)
