import React from "react";
import Terminator from '../terminator/terminator.component';


const TerminatorList = ({models}) => {
    const terminatorComponets = models.map((model) => {
        return(
            <Terminator
            id = {model.id}
            name = {model.name}
            serialNumber ={model.serialNumber}
            />
        )
    });
    return(
        <div>
            {terminatorComponets}
        </div>
    )
}
export default TerminatorList;