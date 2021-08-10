import React from 'react';
import { Form, Image, Input, Menu } from 'semantic-ui-react';
import './HeaderNav.scss';
import { Link, withRouter } from 'react-router-dom';
import { CameraVideo } from '@styled-icons/bootstrap/CameraVideo'
import { Grid3x3Gap } from '@styled-icons/bootstrap/Grid3x3Gap';
import { Notifications } from '@styled-icons/ionicons-outline/Notifications'


export class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }
  render() {
    return (
      // 1
      <Menu borderless className='top-menu' fixed='top'>
        {/* 2 */}
        <Menu.Item header className='logo'>
          <Link to='/'><h4 style={{ fontSize: '35px' }}>K-Tube</h4></Link>
        </Menu.Item>
        {/* 3 */}
        <Menu.Menu className='nav-container'>
          <Menu.Item className='search-input'>
            <Form onSubmit={this.onSubmit}>
              {/* 4 */}
              <Form.Field>
                <Input placeholder='Search' style={{padding:"5 0"}}
                  size='small'
                  value={this.state.query}
                  onChange={this.onInputChange}
                />
              </Form.Field>
            </Form>
          </Menu.Item>
          {/* 5 */}
          <Menu.Menu position='right'>
            <Menu.Item>
              {/* 6 */}
              {<CameraVideo style={{ height: "30px", width: "30px" }} />}
              {/* <Icon className='header-icon' name='video camera' size='large'/> */}
            </Menu.Item>
            <Menu.Item>
              {<Grid3x3Gap style={{ height: "30px", width: "30px" }} />}
              {/* <Icon className='header-icon' name='grid layout' size='large'/> */}
            </Menu.Item>
            <Menu.Item>
              {<Notifications style={{ height: "30px", width: "30px" }} />}
              {/* <Icon className='header-icon' name='chat' size='large'/> */}
            </Menu.Item>
            {/* 7*/}
            <Menu.Item name='avatar'>
              <Image src='https://via.placeholder.com/80x80' avatar />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
  onInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  onSubmit = () => {
    const escapedSearchQuery = encodeURI(this.state.query);
    this.props.history.push(`/results?search_query=${escapedSearchQuery}`);
  };
}

export default withRouter(HeaderNav);
