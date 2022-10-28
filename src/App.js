import React from "react";
import TerminatorList from "./components/terminator-list/terminator-list.componet";
import { models } from "./models";
import SearchBox from "./components/searchbox/searchbox.component";

const App = () => {
    return(
        <div className="tc">
            <h1>Terminátor modellek</h1>
            <SearchBox />
            <TerminatorList models={models} />
        </div>

    );
}
export default App;