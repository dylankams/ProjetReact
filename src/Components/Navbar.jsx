import React from "react";
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src="/img/logo.png" alt="Logo" />
      </Logo>
      <Search>
        <input type="text" placeholder="Recherche" />
      </Search>
      <Icons>
        <Icon>
          <img src="/img/shopping-cart.png" alt="panier" title="panier"/>
        </Icon>
        <Icon>
          <img src="/img/profil.png" alt="profil" title="profil"/>
        </Icon>
        <Icon>
          {/* <img src="/img/sign-in.png" alt="profil" title="profil"/> */}
        </Icon>
      </Icons>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b6dbdf;
`;

const Logo = styled.div`
  img {
    width: 100px;
    left: 100px;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    border: 1 #0c0c0c;
    padding: 5px;
    margin-left: 10px;
  }
`;

const Icons = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 50px;
    margin-left: 10px;
    margin-right: 10px;
    right: 100px;
  }

  i {
    font-size: 30px;
    color: #555;
    margin-left: 10px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;


