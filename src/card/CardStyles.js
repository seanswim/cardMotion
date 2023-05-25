import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3E3E3E;
  color: white;
  width: 340px;
  height: 230px;
  border-radius: 20px;
  box-sizing: border-box;
  position: absolute;
  cursor: pointer;
  font-size: ${props => props.fontSize+'px'};
  transform: ${props => props.isSelected ? 'sc ale(1.5)': ''};
  :hover {
    scale: 1.05;
  }
  
  transform: ${props => props.shownSide === 'back' ? 'rotateY(180deg) scale(1.5)': ''};
  box-shadow: ${props => props.shownSide === 'back' ? '10px 0px 30px black': '-10px 0px 30px black'};

  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.5s ease;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  box-sizing: border-box;
  padding: 40px;
  position: absolute;
  backface-visibility: hidden;
  transform:  ${props => props.side === 'back' ? 'rotateY(180deg)' : ''}; 
`

export const ColorTag = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background-color: #E98641;
  bottom: 20px;
  left: 20px;
  border-radius: 50%;
`

export const ContentWrapper = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow-y: auto;
  
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

export const Content = styled.div`
  margin: auto;
`