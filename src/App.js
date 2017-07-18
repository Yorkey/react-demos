import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {NavBar, Icon, Button, List} from 'antd-mobile';
import './App.css';
import DemoList from './page/DemoList';
import SignPage from './page/SignPage';

const Item = List.Item;
const Brief = Item.Brief;

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={DemoList}/>
                    <Route path="/signPage" component={SignPage}/>
                </div>
            </Router>
        );
    }
}

export default App;
