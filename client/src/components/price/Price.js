import './Price.scss';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {getPrice, deletePrice} from '../../redux/actions/priceActions';

import { MdEdit } from 'react-icons/md';

import CreatePrice from './CreatePrice';
import EditPrice from './EditPrice';

export const Price = ({price:{price, loading}, auth:{user}, getPrice, deletePrice}) => {

    const [edit, setEdit] = useState(false);
    const [editType, setEditType] = useState("");

    const [options, setOptions] = useState({
        type: "",
        _id: "",
    });

    const [select, setSelect] = useState("Everything")

    useEffect(() => {
        !price.length && getPrice();
        return
    }, [getPrice, price.length]);

    useEffect(() => {
        setOptions({
            type: ["Everything"].concat(price.map(el => el.type)),
            _id: ["1"].concat(price.map(el => el._id))
        })
    }, [price])

    return (loading ? <p className="loading" /> : !price.length && user?.role === "admin" ? <CreatePrice/> :

        <div id="price-container">

            {user?.role === "admin" && <button className={edit ? "edit-btn color" : "edit-btn" } onClick={() => setEdit(!edit)}><MdEdit className="icon"/> Edit</button>} <br/>

            {edit && user?.role === "admin" && 
                <div className="type-content">
                    <button className={"Add" === editType ? "selection" : ""} onClick={() => setEditType("Add") }>Add</button>
                    <button className={"Delete" === editType ? "selection" : ""} onClick={() => setEditType("Delete") }>Delete</button>

                    {editType === "Add" && <CreatePrice/>}
                </div>
            }

            {options.type && options.type.map((el, i) => 
                <div key={i} className="type-btn-container">
                    {user?.role === "admin" && edit && editType === "Delete" && <button className="delete-btn" onClick={() => deletePrice(options._id[i])}>X</button>}
                    <button className={select === el ? "types-btn-choosen" : "types-btn" } key={el._id} onClick={() => setSelect(el)}>{el.charAt(0).toUpperCase() + el.slice(1)}</button>
                </div>
            )}

            {select=== "Everything" && 
                <div className="everything-container">
                    {price.map((el) => 
                        <div key={el._id}>
                            {el.price.map((em, i) => 
                            <div key={i}>
                                {em.includes("header") ? <h2>{em.slice(6)}</h2> : <p>{em}</p>}
                            </div>
                            )}
                        </div>
                    )}
                </div>
            }

            {price.map(el => 
                <div key={el._id} className="map-content">
                    <EditPrice el={el} select={select} role={user?.role} edit={edit}/>
                </div>
            )}

        </div>
    )
}

const mapStateToProps = (state) => ({
    price: state.priceReducers,
    auth: state.authReducers
})

const mapDispatchToProps = {
    getPrice,
    deletePrice
}

export default connect(mapStateToProps, mapDispatchToProps)(Price)
