import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3E3E3E;
  box-shadow: -10px 0px 30px black;
  color: white;
  width: 340px;
  height: 230px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  position: absolute;
  cursor: pointer;
  transform: ${props => props.isSelected ? 'scale(1.5)': ''};
  :hover {
    scale: 1.05;
  }

  transition: scale 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  ::-webkit-scrollbar-track {
    background-color: #DFDFDF;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #A7A7A7;
    border-radius: 10px;
    width: 2px;
  }
`

export const ColorTag = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: #E98641;
  bottom: 25px;
  left: 25px;
  border-radius: 50%;
`

export const Content = styled.div`
  font-size: ${props => props.fontSize+'px'};
  margin: auto;
`