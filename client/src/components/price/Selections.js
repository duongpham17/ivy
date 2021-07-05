import './Selections.scss'
import React, {useState} from 'react';

export const Selections = ({price}) => {

    const selections = ["Everything"].concat(price.map(el => el.type));

    const everything = price.map(el => el.price).flat();

    const [selected, setSelected] = useState({
        type: "Everything",
        index: 0
    });

    const toMap = selected.index === 0 ? everything : price[selected.index - 1].price;

    const checkWord = (word) => {
        if(word.split(" ")[0] === "header"){
            return word.split(" ").slice(1).join(" ");
        }
        return word
    }

    return (
        <div className="selections-container">
            {selections.map((el, i) => 
                <button key={i} className={`${selected.type === el && "selected"}`} onClick={() => setSelected({type: el, index: i})}>{el}</button>
            )}

            <div className="content">
                {toMap.map((el, i) => 
                <div key={i}>
                    <p className={`${el.split(" ")[0] === "header" && "header"}`}>{checkWord(el)}</p>
                </div>
                )}
            </div>
        </div>
    )
}


export default Selections
