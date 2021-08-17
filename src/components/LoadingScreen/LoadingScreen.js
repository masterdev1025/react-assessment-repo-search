import React from "react";
import LoadingOverlay from "react-loading-overlay";
import styled, { css } from "styled-components";
import './LoadingScreen.css';
const DarkBackground = styled.div`
  display: none;
  position: fixed; 
  z-index: 999; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4); 
  align-items:center;
  justify-content:center;
  ${props =>
        props.disappear &&
        css`
      display: flex; 
    `}
`;

function LoadingScreen(props) {
    return (
        <DarkBackground disappear={props.loading}>
            <LoadingOverlay
                active={true}
                spinner={true}
                text={props.text}
            >
            </LoadingOverlay>
        </DarkBackground>
    )
}

export default LoadingScreen;