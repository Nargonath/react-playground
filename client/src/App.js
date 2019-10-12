import React from 'react';
import { Router, Link } from '@reach/router';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import logo from './logo.svg';
import { Home, Page1 } from './scenes';

const Root = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 10rem;
`;

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const NavList = styled.li`
  list-style-type: none;
`;

const whiteText = css`
  color: white;
`;

function App() {
  return (
    <Root>
      <Header>
        <Logo src={logo} alt="logo" />
        <nav className="nav">
          <ul>
            <NavList>
              <Link className={whiteText} to="/">
                Home
              </Link>
            </NavList>
            <NavList>
              <Link className={whiteText} to="/page1">
                Page1
              </Link>
            </NavList>
          </ul>
        </nav>
      </Header>
      <Router>
        <Home path="/"></Home>
        <Page1 path="/page1"></Page1>
      </Router>
    </Root>
  );
}

export default App;
