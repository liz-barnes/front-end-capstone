// import React, { Component } from 'react';

// export default class MyNavbar extends Component {
//     state = {};

//     render() {
//       return (
//         <h1>Navbar</h1>
//       );
//     }
// }

import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import SearchInput from '../SearchInput';

export default function MyNavbar(props) {
  const history = useHistory();
  const logMeOut = (e) => {
    e.preventDefault();
    history.push('/');
    firebase.auth().signOut();
  };
  const { user } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return user && (
    <div>
      <Navbar expand='md' className='justify-content-between'>
        <Link className="navbar-brand" to='/'>Adventure Planner</Link>
        <NavbarToggler className='fa fa-fw fa-user user-icon' onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            {/* <NavItem>
              <Link className="nav-link" to='/parks'>Parks</Link>
            </NavItem> */}
            {/* <NavItem>
              <Link className="nav-link" to='/hikes'>
                Hikes
              </Link>
            </NavItem> */}
          </Nav>
          {
            user
            && <>
              <UncontrolledDropdown>
              {/* <a href="#"><i class="fa fa-fw fa-user"></i> Login</a> */}
              <DropdownToggle className='fa fa-fw fa-user user-icon' aria-hidden='true'>
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                {user?.displayName}
                </DropdownItem>
                <DropdownItem>
                  <Link className="dropdown-link" to='/my-trips'>
                    <p className="my-trips-btn">My Trips</p>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <div
                    className='nav-link logout-btn'
                    onClick={(e) => logMeOut(e)}
                  >
                    Logout
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </>
          }
        </Collapse>
      </Navbar>
    </div>
  );
}
