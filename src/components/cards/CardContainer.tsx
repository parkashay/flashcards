import { Card } from '../../types/types'
import FlashCard from './FlashCard'

interface CardContainerProps {
    cards: Card[]
}
const CardContainer = ({cards}: CardContainerProps) => {
  return (
  <section className='my-2 mx-3 lg:mx-12'>
    <h2>Recently uploaded:</h2>
      <div className='mx-2 w-full grid gap-3 md:grid-cols-2 lg:grid-cols-3 my-3 place-content-center'>
        {
            cards.map((card) => <FlashCard key={card.id} data={card.data} id={card.id} />)
        }
    </div>
  </section>
  )
}

export default CardContainer