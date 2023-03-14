import React from "react";
import styled from 'styled-components';


function Footer() {
  return (
    <FooterContainer>
      <CopyText>&copy; 2023 My Website</CopyText>
      <LinkText href="#">Terms of Use</LinkText>
      <LinkText href="#">Privacy Policy</LinkText>
      <BoldLinkText href="#">Contact</BoldLinkText>
    </FooterContainer>
  );
}

export default Footer;

/* Footer CSS */

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #b6dbdf;
  color: #181918;
  font-size: 14px;
  padding: 20px;
`;

 const CopyText = styled.span`
  font-size: 14px;
  color: #999;
`;

const LinkText = styled.a`
  font-size: 14px;
  color: #999;
  text-decoration: none;
`;

const BoldLinkText = styled(LinkText)`
  font-weight: bold;
  color: #fff;
`;


