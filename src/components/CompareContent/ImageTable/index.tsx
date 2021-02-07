import React, { useState } from 'react'
import { InformationDevicesProps } from '..';

import americanasPhonesPrice from '../../../services/americanasPhonesPrice.json'
import amazonPhonesPrice from '../../../services/amazonPhonesPrice.json'
import magaluPhonesPrice from '../../../services/magaluPhonesPrice.json'
import submarinoPhonesPrice from '../../../services/submarinoPhonesPrice.json'
import { Container, Figure } from './style';
import ButtonPrice from '../../ButtonPrice';

const ImageTable: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree}) => {

  const [classButtonAmazon, setClassButtonAmazon] = useState('hide');
  const [classButtonMagalu, setClassButtonMagalu] = useState('hide');
  const [classButtonSubmarino, setClassButtonSubmarino] = useState('hide');
  const [classButtonExtra, setClassButtonExtra] = useState('hide');
  const [classButtonAmazonTwo, setClassButtonAmazonTwo] = useState('hide');
  const [classButtonMagaluTwo, setClassButtonMagaluTwo] = useState('hide');
  const [classButtonSubmarinoTwo, setClassButtonSubmarinoTwo] = useState('hide');
  const [classButtonExtraTwo, setClassButtonExtraTwo] = useState('hide');
  const [classButtonAmazonThree, setClassButtonAmazonThree] = useState('hide');
  const [classButtonMagaluThree, setClassButtonMagaluThree] = useState('hide');
  const [classButtonSubmarinoThree, setClassButtonSubmarinoThree] = useState('hide');
  const [classButtonExtraThree, setClassButtonExtraThree] = useState('hide');


  function showPriceAmazon() {

    setClassButtonAmazon('');
    setClassButtonMagalu('hide');
    setClassButtonSubmarino('hide');
    setClassButtonExtra('hide');
  }
  function showPriceMagalu() {

    setClassButtonMagalu('');
    setClassButtonAmazon('hide');
    setClassButtonSubmarino('hide');
    setClassButtonExtra('hide');
  }
  function showPriceSubmarino() {

    setClassButtonSubmarino('');
    setClassButtonAmazon('hide');
    setClassButtonMagalu('hide');
    setClassButtonExtra('hide');
  }
  function showPriceExtra() {

    setClassButtonExtra('');
    setClassButtonAmazon('hide');
    setClassButtonMagalu('hide');
    setClassButtonSubmarino('hide');
  }
  function showPriceAmazonTwo() {

    setClassButtonAmazonTwo('');
    setClassButtonMagaluTwo('hide');
    setClassButtonSubmarinoTwo('hide');
    setClassButtonExtraTwo('hide');
  }
  function showPriceMagaluTwo() {

    setClassButtonMagaluTwo('');
    setClassButtonAmazonTwo('hide');
    setClassButtonSubmarinoTwo('hide');
    setClassButtonExtraTwo('hide');
  }
  function showPriceSubmarinoTwo() {

    setClassButtonSubmarinoTwo('');
    setClassButtonAmazonTwo('hide');
    setClassButtonMagaluTwo('hide');
    setClassButtonExtraTwo('hide');
  }
  function showPriceExtraTwo() {

    setClassButtonExtraTwo('');
    setClassButtonAmazonTwo('hide');
    setClassButtonMagaluTwo('hide');
    setClassButtonSubmarinoTwo('hide');
  }
  function showPriceAmazonThree() {

    setClassButtonAmazonThree('');
    setClassButtonMagaluThree('hide');
    setClassButtonSubmarinoThree('hide');
    setClassButtonExtraThree('hide');
  }
  function showPriceMagaluThree() {

    setClassButtonMagaluThree('');
    setClassButtonAmazonThree('hide');
    setClassButtonSubmarinoThree('hide');
    setClassButtonExtraThree('hide');
  }
  function showPriceSubmarinoThree() {

    setClassButtonSubmarinoThree('');
    setClassButtonAmazonThree('hide');
    setClassButtonMagaluThree('hide');
    setClassButtonExtraThree('hide');
  }
  function showPriceExtraThree() {

    setClassButtonExtraThree('');
    setClassButtonAmazonThree('hide');
    setClassButtonMagaluThree('hide');
    setClassButtonSubmarinoThree('hide');
  }

  return (

       <Container>
       <div className="image-column image-column-one">
         <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + deviceOne.page + '-bg.png)' }>
         <figure className={deviceOne.modelo ? "gallery-image " + deviceOne.modelo : "gallery-image" }>
         </figure>
         </Figure>
 
         <div className="row-price">
           <div className="price-nav">
             <ul className="price-nav-items">
               <li className="price-nav-item">
                 <ButtonPrice
                  name="AMAZON"
                  backgroundColor="#ff9000"
                  onClick={showPriceAmazon}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="MAGALU" 
                  backgroundColor="#f9d045" 
                  onClick={showPriceMagalu}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="SUBMARINO" 
                  backgroundColor="#00972d" 
                  onClick={showPriceSubmarino}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="AMERICANAS" 
                  backgroundColor="#ff0000" 
                  onClick={showPriceExtra}
                 />
               </li>
 
             </ul>
             <div className={"price-value price-value-amazon " + classButtonAmazon}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceOne.affiliate.link1}>Acessar a Loja da Amazon</a>
             </div>
 
             <div className={"price-value price-value-magalu " + classButtonMagalu}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceOne.affiliate.link2}>Acessar a Loja da Magazine Luiza</a>
             </div>
 
             <div className={"price-value price-value-submarino " + classButtonSubmarino}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceOne.affiliate.link3}>Acessar a Loja do Submarino</a>
             </div>
 
             <div className={"price-value price-value-extra " + classButtonExtra}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceOne.affiliate.link4}>Acessar a Loja do Americanas</a>
             </div>
 
           </div>
         </div>
 
       </div>
 
       <div className="image-column image-column-two">
         <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + deviceTwo.page + '-bg.png)' }>
         <figure className={deviceTwo.modelo ? "gallery-image " + deviceTwo.modelo : "gallery-image" }>
         </figure>
         </Figure>
 
         <div className="row-price">
           <div className="price-nav">
             <ul className="price-nav-items">
             <li className="price-nav-item">
                 <ButtonPrice
                  name="AMAZON"
                  backgroundColor="#ff9000"
                  onClick={showPriceAmazonTwo}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="MAGALU" 
                  backgroundColor="#f9d045" 
                  onClick={showPriceMagaluTwo}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="SUBMARINO" 
                  backgroundColor="#00972d" 
                  onClick={showPriceSubmarinoTwo}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="AMERICANAS" 
                  backgroundColor="#ff0000" 
                  onClick={showPriceExtraTwo}
                 />
               </li>
             </ul>
             <div className={"price-value price-value-amazon " + classButtonAmazonTwo}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceTwo.affiliate.link1}>Acessar a Loja da Amazon</a>
             </div>
 
             <div className={"price-value price-value-magalu " + classButtonMagaluTwo}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceTwo.affiliate.link2}>Acessar a Loja da Magazine Luiza</a>
             </div>
 
             <div className={"price-value price-value-submarino " + classButtonSubmarinoTwo}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceTwo.affiliate.link3}>Acessar a Loja do Submarino</a>
             </div>
 
             <div className={"price-value price-value-extra " + classButtonExtraTwo}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceTwo.affiliate.link4}>Acessar a Loja do Americanas</a>
             </div>
 
           </div>
         </div>
 
       </div>
 
       <div className="image-column image-column-three">
         <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + deviceThree.page + '-bg.png)' }>
         <figure className={deviceThree.modelo ? "gallery-image " + deviceThree.modelo : "gallery-image" }>
         </figure>
         </Figure>
 
         <div className="row-price">
           <div className="price-nav">
             <ul className="price-nav-items">
             <li className="price-nav-item">
                 <ButtonPrice
                  name="AMAZON"
                  backgroundColor="#ff9000"
                  onClick={showPriceAmazonThree}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="MAGALU" 
                  backgroundColor="#f9d045" 
                  onClick={showPriceMagaluThree}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="SUBMARINO" 
                  backgroundColor="#00972d" 
                  onClick={showPriceSubmarinoThree}
                 />
               </li>
               <li className="price-nav-item">
                 <ButtonPrice 
                  name="AMERICANAS" 
                  backgroundColor="#ff0000" 
                  onClick={showPriceExtraThree}
                 />
               </li>
             </ul>
             <div className={"price-value price-value-amazon " + classButtonAmazonThree}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceThree.affiliate.link1}>Acessar a Loja da Amazon</a>
             </div>
 
             <div className={"price-value price-value-magalu " + classButtonMagaluThree}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceThree.affiliate.link2}>Acessar a Loja da Magazine Luiza</a>
             </div>
 
             <div className={"price-value price-value-submarino " + classButtonSubmarinoThree}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceThree.affiliate.link3}>Acessar a Loja do Submarino</a>
             </div>
 
             <div className={"price-value price-value-extra " + classButtonExtraThree}>
               {/* <h1>Sem preço no momento</h1>  */}
               <a target="_blank" href={deviceThree.affiliate.link4}>Acessar a Loja do Americanas</a>
             </div>
 
           </div>
         </div>
       </div>
     </Container>

  )
}

export default ImageTable