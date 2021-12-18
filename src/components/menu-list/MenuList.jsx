import './MenuList.css';
import {MenuItem} from "../menu-item/MenuItem";

export function MenuList({title, items}) {
    return (
        <div className="MenuList__container">
            <h2 className='MenuList__title'>{title}</h2>
            {items.map((el, ind) =>
                <MenuItem
                    key={el.name}
                    name={el.name}
                    structure={el.structure}
                    img={el.img}
                    imgPos={ind % 2 === 0 ? 'left' : 'right'}
                    extraInfo={el.extraInfo}
                />)}
        </div>
    )
}