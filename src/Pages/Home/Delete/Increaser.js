import React, { useState } from 'react';
import StepNavigation from './StepNavigation';
import "./increaser.css";

const Increaser = () => {
    const labelArray = ["Step-1","Step-2","Step-3","Step-4","Step-5"]
    const [currentStep,setCurrentStep]= useState(1);

    const updateStep=(step)=>{
        setCurrentStep(step);
    }

    return (
        <div>
            <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
            <p>Select Step: {currentStep}</p>
        </div>
    );
};

export default Increaser;