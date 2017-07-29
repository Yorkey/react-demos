/**
 * Created by TOPFEEL on 2017/6/27.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Icon, Button, List} from 'antd-mobile';
import {
    Link
} from 'react-router-dom';
import Header from '../component/Header';
import '../css/page/DemoList.css';

const Item = List.Item;
const Brief = Item.Brief;

class DemoList extends Component {

    static contextTypes = {
        router: PropTypes.shape({
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired
        }).isRequired
    }

    onListItemClick(path) {
        const { history } = this.context.router;
        history.push(path);
    }

    render() {

        return (
            <div className="App">
                <Header mode="light" iconName={false}>
                    DemoList
                </Header>
                <List className="my-list">
                    <Item arrow="horizontal" onClick={() => this.onListItemClick("/signPage")}>签名板</Item>
                    <Item arrow="horizontal" onClick={() => this.onListItemClick("/signPanel")}>Demo2</Item>
                    <Item arrow="horizontal" onClick={() => this.onListItemClick("/signPanel")}>Demo3</Item>
                    <Item arrow="horizontal" onClick={() => this.onListItemClick("/signPanel")}>Demo4</Item>
                </List>
            </div>
        );
    }
}

export default DemoList;