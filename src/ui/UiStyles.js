import styled from "styled-components";

export const Container = styled.div`
  color: #585858;
  display: flex;
  gap: 16px;
  position: absolute;
  left: ${props => props.uiPosition.x + 'px'};
  top: ${props => props.uiPosition.y + 'px'};
  z-index: -1;
`

export const Space = styled.div`
  font-size: 18px;
  border-radius: 10px;
  border: 1.5px solid #585858;
  padding: 12px 120px;
`

export const Arrow = styled.div`
  border-radius: 10px;
  border: 1.5px solid #585858;
  width: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => props.direction === 'left' ? 'scaleX(-1)' : ''};
`