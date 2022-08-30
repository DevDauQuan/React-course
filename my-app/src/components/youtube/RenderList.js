import React from 'react';
import { Data } from '../../data';
import RenderItem from './RenderItem';

const RenderList = () => {
    return (
        <div className="content">
            {Data.map((item) => (
                <RenderItem name={item.name} desc={item.desc}
                    ava={item.avatar}
                    img={item.img}>
                </RenderItem>
            ))}
        </div>
    );
};

export default RenderList;