import React, { Component } from "react";
import TerminatorList from "./components/terminator-list/terminator-list.componet";
//import { models } from "./models";
import SearchBox from "./components/searchbox/searchbox.component";
import './App.css';

class App extends Component {
    constructor(){
        //console.log('constructor')
        super();
        this.state = {
//            models: models,
              models: [],
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //console.log(filteredModels);
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => this.setState({ models:users }))
    }
    render(){
        //console.log('render')
        const filteredModels = this.state.models.filter((model) => {
            return(model.name
            .toLowerCase()
            .includes(this.state.searchfield.toLowerCase()) )
        })
        return(
            <div className="tc">
                <h1>Terminátor modellek</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <TerminatorList models={filteredModels} />
            </div>
        );
    }
}
// const App = () => {
//     return(
//         <div className="tc">
//             <h1>Terminátor modellek</h1>
//             <SearchBox />
//             <TerminatorList models={models} />
//         </div>

//     );
// }
export default App;