import { Container } from './style'
import { Figure } from './figureStyle'
import Link from 'next/link'
import { DataProps } from '../CompareContent'

interface PhonesItemProps {
  phones: DataProps;
}


const Cards: React.FC<PhonesItemProps> = ({ phones }) => {

  return (

    <Container key={phones.modelo}>
      <Link href={"/smartphones/" + phones.page}>

        <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + phones.page + '-bg.png)'}>
          <a>
            <figure className={'card-img ' + phones.modelo}>
            </figure>
          </a>
        </Figure>

      </Link>

      <div>
        <span>
          {phones.name}
        </span>
        <Link href={"/smartphones/" + phones.page}>

          <button>
            <a>  Ficha técnica</a>
          </button>

        </Link>
      </div>
    </Container>
  )
}

export default Cards

