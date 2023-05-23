import Card from './card/Card';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useLayoutEffect, useState } from 'react';

const Container = styled.div`
  position: absolute;
`

function App() {

  const [cardList, setCardList] = useState(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'])
  const [width, setWidth] = useState(innerWidth)

  useLayoutEffect(() => {

    const resizeListener = () => {
      setWidth(innerWidth)
    }
    window.addEventListener('resize', resizeListener)

    const gap = width/cardList.length/4
    cardList.forEach((el, i) => {
      gsap.to(`.${el}`, 
        {
          x: gap * i, 
          duration: 0.21 * i,
          ease: 'expo',
        })
    })

    return window.removeEventListener('reset', resizeListener)
  },[innerWidth])

  return (
    <Container>
      {cardList.map((el, i) => (
        <div className={el} key={el}><Card /></div>
      ))}
    </Container>
  )
}

export default App
