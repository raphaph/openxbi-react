import { CardsMainContentOne, MainContainer, MainContentOne } from './styles'

export function Home() {
  return (
    <MainContainer>
      <MainContentOne>
        <h1>Intelligence applied to elements for BI</h1>
        <strong>
          We use custom elements with HTML and CSS incorporating variable DAX to{' '}
          <br />
          create an experience different from the ordinary.
        </strong>
        <CardsMainContentOne>
          <div>Card1</div>
          <div>Card2</div>
          <div>Card3</div>
        </CardsMainContentOne>
      </MainContentOne>
    </MainContainer>
  )
}
