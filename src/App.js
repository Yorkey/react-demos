import React, { Component } from 'react';
import { NavBar, Icon, Button, Popover } from 'antd-mobile';
//import logo from './logo.svg';
import './App.css';

const Item = Popover.Item;

class App extends Component {
  render() {
      let offsetX = -10; // just for pc demo
      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
          offsetX = -26;
      }

    return (
      <div className="App">
          <NavBar leftContent="back"
                  mode="light"
                  onLeftClick={() => console.log('onLeftClick')}
                  rightContent={
                      <Popover mask
                               overlayClassName="fortest"
                               overlayStyle={{ color: 'currentColor' }}
                               visible={true}
                               overlay={[
                                   (<Item key="4" value="scan" icon={<Icon type="search" size="xs" />} data-seed="logId">扫一扫</Item>),
                                   (<Item key="5" value="special" icon={<Icon type="search" size="xs" />} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                                   (<Item key="6" value="button ct" icon={<Icon type="search" size="xs" />}>
                                       <span style={{ marginRight: 5 }}>帮助</span>
                                   </Item>),
                               ]}
                               align={{
                                   overflow: { adjustY: 0, adjustX: 0 },
                                   offset: [offsetX, 15],
                               }}
                               onVisibleChange={this.handleVisibleChange}
                               onSelect={this.onSelect}
                      >
                          <div style={{
                              height: '100%',
                              padding: '0 0.3rem',
                              marginRight: '-0.3rem',
                              display: 'flex',
                              alignItems: 'center',
                          }}
                          >
                              <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />
                              <Icon type="ellipsis" />
                          </div>
                      </Popover>
                  }
          >NavBar</NavBar>
          <Button className="btn" type="primary">primary button</Button>
          <Button className="btn" icon="check-circle-o">with icon</Button>
      </div>
    );
  }
}

export default App;
