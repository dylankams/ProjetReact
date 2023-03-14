import React from "react";
import styled from 'styled-components';

function Main() {
  return (
    <Body>
      <Sidebar>
        <UnorderedList>
          <ListItem className="has-submenu">
            <Submenu>
              <Link href="#">
                <img src="/img/icone-gestion.png" alt="icone" />
                Gestion
              </Link>
              <ul>
                <ListItem>
                  <Link href="#">Gestion des produits</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Gestion des utilisateurs</Link>
                </ListItem>
              </ul>
            </Submenu>
          </ListItem>
        </UnorderedList>
      </Sidebar>
      <Content>
        <h1>Contenu de la page</h1>
        <p>Texte de la page.</p>
      </Content>
    </Body>
  );
}

export default Main;

/* Main Css */
const Body = styled.div`
  display: flex;
  height: 100vh;
  background-color: #daeaf3;
`;

const Sidebar = styled.div`
  background-color: #666b6c;
  color: #fff;
  padding: 20px;
  width: 250px;

  a img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Submenu = styled.div`
  position: relative;

  .fas {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
  }

  ul {
    display: none;
  }

  &:hover > ul {
    display: block;
  }

  li:hover {
    background-color: #a8dadc;
  }

  i.fas.fa-chevron-right {
    margin-left: auto;
    display: block;
    transition: transform 0.2s ease-in-out;
  }

  &.active i.fas.fa-chevron-right {
    transform: rotate(90deg);
  }
`;

const Content = styled.div`
  h1 {
    color: black;
  }

  p {
    color: black;
  }
`;