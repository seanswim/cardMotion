import Card from './card/Card';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useEffect, useLayoutEffect, useState } from 'react';
import _ from 'lodash';
import Ui from './ui/Ui';
import { cardList as _cardList } from './data';

const Container = styled.div`
  position: absolute;
`

function App() {

  const [cardList, setCardList] = useState(_cardList)
  const [width, setWidth] = useState(innerWidth);
  const [idx, setIdx] = useState(cardList.length-1);
  const [action, setAction] = useState();
  const [shownside, setShownside] = useState('front');

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      setShownside((prev) => {
        if (prev === 'front') return 'back'
        if (prev === 'back') return 'front'
      })
    }

    if (e.key === 'ArrowLeft') {
      if (idx === cardList.length -1) return
      setShownside('front')
      setIdx((prev) => prev+1)
      setAction('backward')
    }

    if (e.key === 'ArrowRight') {
      if (idx === 0) return
      setShownside('front')
      setIdx((prev) => prev-1)
      setAction('forward')
    }
  }

  useEffect(() => {

    window.addEventListener('keydown', handleKeyDown)

    const gap = width/cardList.length/4
    const element = document.querySelector(`.${cardList[idx].id}`)
    const offsetWidth = element.children[0].offsetWidth
    const offsetHeight = element.children[0].offsetHeight

    if (action === 'forward') {
      gsap.to(`.${cardList[idx].id}`, 
        {
          x: innerWidth / 2 - offsetWidth / 2,
          y: innerHeight / 2 - offsetHeight / 2,
          duration: 0.5,
          ease: 'expo',
        }
      )
      gsap.to(`.${cardList[idx+1].id}`, 
        {
          x: innerWidth - offsetWidth - (gap * (cardList.length - 1 - (idx+1))),
          y: innerHeight - offsetHeight,
          duration: 0.5,
          ease: 'expo',
        }
      )
    }

    if (action === 'backward') {
      gsap.to(`.${cardList[idx].id}`, 
        {
          x: innerWidth / 2 - offsetWidth / 2,
          y: innerHeight / 2 - offsetHeight / 2,
          duration: 0.5,
          ease: 'expo',
        }
      )
      gsap.to(`.${cardList[idx-1].id}`, 
        {
          x: gap * (idx-1), 
          y: 0,
          duration: 0.5,
          ease: 'expo',
        }
      )
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  },[idx])

  useLayoutEffect(() => {
    const resizeListener = () => setWidth(innerWidth)
    window.addEventListener('resize', resizeListener)

    const gap = width/cardList.length/4
    cardList.forEach((el, i) => {
      if (cardList[idx].id === el.id) {
        const element = document.querySelector(`.${el.id}`)
        const offsetWidth = element.children[0].offsetWidth
        const offsetHeight = element.children[0].offsetHeight
        gsap.to(`.${el.id}`, 
          {
            x: innerWidth/2 - offsetWidth / 2,
            y: innerHeight/2 - offsetHeight / 2,
            duration: 0.21 * i,
            ease: 'expo',
          }
        )
      } else {
        gsap.to(`.${el.id}`, 
          {
            x: gap * i, 
            duration: 0.21 * i,
            ease: 'expo',
          }
        )
      }
    })

    return () => window.removeEventListener('reset', resizeListener)
  },[innerWidth])

  return (
    <Container>
      {cardList.map((el, i) => (
        <div 
          className={`${el.id}`} 
          key={el.id}
        >
          <Card  
            isSelected={i === idx}
            front={el.front}
            back={el.back}
            shownSide={ i === idx ? shownside : 'front'}
          />
        </div>
      ))}
      <Ui screenSize={width} />
    </Container>
  )
}

export default App
