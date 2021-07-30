import React from 'react';

function Popup(props) {
    return ( props.trigger) ? (
            <div className='popup'>
                <div className='popupInner'>
                <button className='closeButton' onClick={()=> props.setTrigger(false)}>Close</button>
                { props.children }
                </div>
            </div>
    ) : '';
}

export default Popup;