import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { models } from './models';

import TerminatorList from "./components/terminator-list/terminator-list.componet";

//import { createRoot } from 'react-dom/client';
//const container = document.getElementById('root');
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(<Hello />);

ReactDOM.render(
    <TerminatorList models={models}/>
,document.getElementById('root'));
