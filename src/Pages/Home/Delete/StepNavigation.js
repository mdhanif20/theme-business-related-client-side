import React from 'react';
import ShowingStep from './ShowingStep';

const StepNavigation = (props) => {
    return (
        <div className="stepWrapper">
            {
                props.labelArray.map((item,index)=><ShowingStep 
                key={index} index={index} lavel={item}
                updateStep={props.updateStep}
                selected={props.currentStep===index+1}
                ></ShowingStep>)
            }
            
        </div>
    );
};

export default StepNavigation;