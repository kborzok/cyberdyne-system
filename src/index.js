//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from "./App";

//import TerminatorList from "./components/terminator-list/terminator-list.componet";

 import { createRoot } from 'react-dom/client';
 const container = document.getElementById('root');
 const root = createRoot(container); // createRoot(container!) if you use TypeScript
 //root.render(<TerminatorList models={models} />);
 root.render(<App />);
//ReactDOM.render(<App />,document.getElementById('root'));
