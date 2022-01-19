import React from 'react';

const ShowingStep = (props) => {
    return (
        <div className={"stepBlock" + (props.selected ? "selected":'')}>
            <div className={"circleWrapper"} onClick={()=>props.updateStep(props.index)}>
                <div className="circle">{ props.index + 1}</div>
            </div>
            <span>{props.lavel}</span>
        </div>
       
    );
};

export default ShowingStep;