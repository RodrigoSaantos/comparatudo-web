import { useEffect, useState } from "react";
import americanasPhonesPrice from '../../services/americanasPhonesPrice.json'
import amazonPhonesPrice from '../../services/amazonPhonesPrice.json'
import magaluPhonesPrice from '../../services/magaluPhonesPrice.json'
import submarinoPhonesPrice from '../../services/submarinoPhonesPrice.json'


import { Container } from "./style";
import { DatasheetDeviceProps } from "../../pages/smartphones/[page]";


interface NavTopProps {
  title: string
  data: DatasheetDeviceProps
}

const NavTop: React.FC<NavTopProps> = ({ title, data }) => {
  const [scrollPosition, setSrollPosition] = useState(0);

  const [classOn, setClassOn] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (scrollPosition >= 200) {
      setClassOn(true)
    } else if (scrollPosition < 200) {
      setClassOn(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

    // const amazon = amazonPhonesPrice[data.map(data => { return data.id - 1 })[0]].split('R$')
    // const magalu = magaluPhonesPrice[data.map(data => { return data.id - 1 })[0]].split('R$ ')
    // const submarino = submarinoPhonesPrice[data.map(data => { return data.id - 1 })[0]].split('R$ ')
    // const americanas = americanasPhonesPrice[data.map(data => { return data.id - 1 })[0]].split('R$ ')
  
  function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }
    
  // const prices = [parseFloat(amazon[1]), parseFloat(magalu[1]), parseFloat(submarino[1]), parseFloat(americanas[1])]
  // const price = prices.sort(sortfunction)
  // const digitos = [amazon[1].replace('.', '').replace(',',''), magalu[1].replace('.', '').replace(',',''), submarino[1].replace('.', '').replace(',',''), americanas[1].replace('.', '').replace(',','')]
  // const digito = digitos.sort(sortfunction)
  // const subdigito = digito[0].substr(-2) 

  // const lowestPrice = "R$ " + price[0] + "," + subdigito
  const lowestPrice = "R$ ";

  return (

    <Container className={classOn && 'on'}>

      <div className="nav-top">
        <h2>{title}</h2>
        <div>
          <span>Menor preço</span>
          <button>{lowestPrice}</button>
        </div>
      </div>

    </Container>
  )
}

export default NavTop