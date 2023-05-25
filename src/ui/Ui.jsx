import { Container, Space, Arrow } from "./UiStyles"
import arrow from './arrow.svg'
import { useRef, useLayoutEffect, useState } from "react"

const Ui = ({screenSize}) => {

  const containerRef = useRef()
  const [uiPosition, setUiPosition] = useState({x: 0, y: 0})
  
  useLayoutEffect(() => {
    setUiPosition({
      x: screenSize/2 - containerRef.current.clientWidth/2,
      y: (innerHeight*2/3) + containerRef.current.clientHeight/2
    })
  },[])

  return (
    <Container uiPosition={uiPosition} ref={containerRef}>
      <Space>Flip</Space>
      <Arrow direction='left'>
        <img src={arrow} alt="arrow" width={25}/>
      </Arrow>
      <Arrow direction='right'>
        <img src={arrow} alt="arrow" width={25}/>
      </Arrow>
    </Container>
  )
}

export default Ui