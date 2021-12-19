import './MenuItem.css';

export function MenuItem({name, structure, img, imgPos,extraInfo = null}) {
    const imgPositionClass = imgPos === 'left' ? 'MenuItem__img_left' : 'MenuItem__img_right';
    return (
        <div className='MenuItem__container'>
            <div className='MenuItem__description'>
                <h3 className='MenuItem__name'>{name}</h3>
                <div className='MenuItem__structure'>
                    {structure && structure.join(',')}
                </div>
                {extraInfo && <div className='MenuItem__extra-info'>*{extraInfo}</div>}
            </div>
            <img className={`MenuItem__img ${imgPositionClass}`} src={img}/>
        </div>
    );
}
