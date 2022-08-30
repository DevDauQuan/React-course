import React from 'react';

function RenderItem(props) {
    return (
        <div className="youtube">
            <div className="youtube-item" key={props.key}>
                <img src={props.img} alt="" className="youtube-img" />
            </div>
            <div className="youtube-footer">
                <img src={props.ava} alt="" className="youtube-ava" />
                <div className="youtube-desc">
                    <h3 className="youtube-author">{props.name}</h3>
                    <p className="youtube-info"> {props.desc}</p>
                </div>
            </div>
        </div>

    );
};

export default RenderItem;