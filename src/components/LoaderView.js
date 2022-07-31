import {PulseLoader} from "react-spinners";
import React from "react";

export function LoaderView() {
    return <div className="fixed inset-0 flex items-center justify-center">
        <PulseLoader loading={true} size={14} color="#42b3f5" speedMultiplier={0.8}/>
    </div>;
}