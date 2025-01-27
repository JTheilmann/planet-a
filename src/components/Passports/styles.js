import React from "react";
import { Flex, Text, Icon } from "rimble-ui";
import styled, { keyframes, css } from "styled-components";
import passportPattern from '../../assets/papyrus.png';

export const Container = styled(Flex).attrs(() => ({
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  mb: 3,
  pt: 3,
  pb: 4,
  borderBottom: "1px solid #DFDFDF",
  width: "100%"
}))`
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
`;

const jump = keyframes`
  5% {
    transform: scale3d(1.05, 1.1, 1);
  }
  8% {
    transform: scale3d(1.05, 1.05, 1);
  }
  20% {
    transform: scale3d(0.95, 0.95, 1);
  }
  0%, 30%, 100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const PassportCover = styled(Flex).attrs(({ shortName }) => ({
  flexDirection: "column",
  bg: `passport${shortName}`,
  m:2,
  px: 3,
  py: 2,
  height: 4,
  justifyContent: "space-between"
}))`
  border-radius: 4px 8px 8px 4px;
  box-shadow: inset -1px 0 rgba(255, 255, 255, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  border: 2px solid #333;

  @supports (background-blend-mode: color-burn) {
    background-repeat: no-repeat;
    background-blend-mode: color-burn;
    /*  Background made by Olivia Harmon, 
     *  https://www.toptal.com/designers/subtlepatterns/papyrus-pattern/
     */
    background-image: url(${passportPattern});
  }
  
  animation: ${({ single }) => single ? css`${jump} 2.5s infinite linear` : 'none'};
  `;

export const PassportLabel = styled(Text).attrs(() => ({
  color: "white",
  fontSize: 0,
  textAlign: "center"
}))`
  text-transform: uppercase;
`;

export const PassportCountry = styled(Text).attrs(() => ({
  color: "white",
  fontSize: 4,
  fontWeight: 4,
  textAlign: "center"
}))``;

export const PassportName = styled(Text).attrs(() => ({
  color: "white",
  fontSize: 2,
  fontWeight: 2,
  textAlign: "center",
  opacity: 0.5
}))``;

const IconContainer = styled(Flex).attrs(() => ({
  bg: "#eee",
  p: 1
}))`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  border-radius: 30px;
`;

export const IconClose = ({ onClick }) => {
  return (
    <IconContainer onClick={onClick}>
      <Icon name="Close" color="#aaa" />
    </IconContainer>
  );
};

export const Loading = styled(Text).attrs(()=>({
  fontSize: 2,
  color: "silver"
}))``;
