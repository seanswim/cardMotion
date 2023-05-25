import { Container, Wrapper, ColorTag, Content, ContentWrapper } from "./CardStyles"

const Card = ({front, back, isSelected, shownSide}) => {

  const fontSize = Math.max(80 - (front.length * 5), 30);

  return (
    <Container isSelected={isSelected} fontSize={fontSize} shownSide={shownSide}>
      <Wrapper side='front' shownSide={shownSide}>
        <ContentWrapper>
          <Content>
            {front}
          </Content>
        </ContentWrapper>
        <ColorTag />
      </Wrapper>
      <Wrapper side='back' shownSide={shownSide}>
        <ContentWrapper>
          <Content>
            {back}
          </Content>
        </ContentWrapper>
        <ColorTag />
      </Wrapper>
    </Container>
  )
}

export default Card