import { Container, Wrapper, ColorTag } from "./CardStyles"

const Card = ({index}) => {
  return (
    <Container index={index}>
      <Wrapper>
        card
      </Wrapper>
      <ColorTag />
    </Container>
  )
}

export default Card