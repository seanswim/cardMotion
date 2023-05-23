import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3E3E3E;
  box-shadow: -10px 0px 30px black;
  color: white;
  width: 325px;
  height: 400px;
  border-radius: 20px;
  margin: 20px;
  padding: 40px;
  box-sizing: border-box;
  position: absolute;
  cursor: pointer;

  :hover {
    scale: 1.05;
  }

  transition: scale 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const ColorTag = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: #E98641;
  bottom: 40px;
  left: 40px;
  border-radius: 50%;
`