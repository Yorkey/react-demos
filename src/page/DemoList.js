/**
 * Created by TOPFEEL on 2017/6/27.
 */
import React, {Component} from 'react';
import {NavBar, Icon, Button, List} from 'antd-mobile';
import {
    Link
} from 'react-router-dom';
import '../css/page/DemoList.css';

const Item = List.Item;
const Brief = Item.Brief;

class DemoList extends Component {
    render() {

        return (
            <div className="App">
                <NavBar mode="light" iconName={false}>
                    DemoList
                </NavBar>
                <List className="my-list">
                    <Item arrow="horizontal"><Link className="link-list" to="/signPage">签名板</Link></Item>
                    <Item arrow="horizontal"><Link className="link-list" to="/signPanel">Demo2</Link></Item>
                    <Item arrow="horizontal"><Link className="link-list" to="/signPanel">Demo3</Link></Item>
                    <Item arrow="horizontal"><Link className="link-list" to="/signPanel">Demo4</Link></Item>
                </List>
            </div>
        );
    }
}

export default DemoList;