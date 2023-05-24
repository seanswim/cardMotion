import { Container, Wrapper, ColorTag, Content } from "./CardStyles"

const Card = ({front, id, isSelected}) => {

  const fontSize = Math.max(80 - (front.length * 5), 30);

  return (
    <Container isSelected={isSelected}>
      <Wrapper>
        <Content fontSize={fontSize}>
          {front}
        </Content>
      </Wrapper>
      <ColorTag />
    </Container>
  )
}

export default Card