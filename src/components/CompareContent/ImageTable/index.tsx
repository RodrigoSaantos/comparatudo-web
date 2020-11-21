import React, { useState } from 'react'
import { InformationDevicesProps } from '..';

import americanasPhonesPrice from '../../../services/americanasPhonesPrice.json'
import amazonPhonesPrice from '../../../services/amazonPhonesPrice.json'
import magaluPhonesPrice from '../../../services/magaluPhonesPrice.json'
import submarinoPhonesPrice from '../../../services/submarinoPhonesPrice.json'
import { Container, Figure } from './style';

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
        <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + deviceOne.map(one => {return one.page})[0] + '-bg.png)' }>
        <figure className={deviceOne.map(one => {return one.modelo})[0] ? "gallery-image " + deviceOne.map(one => {return one.modelo})[0] : "gallery-image" }>
        </figure>
        </Figure>

        <div className="row-price">
          <div className="price-nav">
            <ul className="price-nav-items">
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceAmazon}>
                  <figure>
                    <div className={"price-nav-text buttonname-amazon " + classButtonAmazon} >Amazon</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceMagalu}>
                  <figure>
                    <div className={"price-nav-text buttonname-magalu " + classButtonMagalu} >MagaLu</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceSubmarino}>
                  <figure>
                    <div className={"price-nav-text buttonname-submarino " + classButtonSubmarino}>Submarino</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceExtra}>
                  <figure>
                    <div className={"price-nav-text buttonname-extra " + classButtonExtra}>Extra</div>
                  </figure>
                </button>
              </li>

            </ul>
            <div className={"price-value price-value-amazon " + classButtonAmazon}>
              <h1>{amazonPhonesPrice[deviceOne.map(one => {return one.id -1})[0]]}</h1>
              <a target="_blank" href={deviceOne.map(one => {return one.linkAffiliate1})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-magalu " + classButtonMagalu}>
              <h1>{magaluPhonesPrice[deviceOne.map(one => {return one.id -1})[0]]}</h1>
              <a target="_blank" href={deviceOne.map(one => {return one.linkAffiliate2})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-submarino " + classButtonSubmarino}>
              <h1>{submarinoPhonesPrice[deviceOne.map(one => {return one.id -1})[0]]}</h1>
              <a target="_blank" href={deviceOne.map(one => {return one.linkAffiliate3})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-extra " + classButtonExtra}>
              <h1>{americanasPhonesPrice[deviceOne.map(one => {return one.id -1})[0]]}</h1>
              <a target="_blank" href={deviceOne.map(one => {return one.linkAffiliate4})[0]}>Acessar a Loja</a>
            </div>

          </div>
        </div>

      </div>

      <div className="image-column image-column-two">
        <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + deviceTwo.map(one => {return one.page})[0] + '-bg.png)' }>
        <figure className={deviceTwo.map(two => {return two.modelo})[0] ? "gallery-image " + deviceTwo.map(two => {return two.modelo})[0] : "gallery-image" }>
        </figure>
        </Figure>

        <div className="row-price">
          <div className="price-nav">
            <ul className="price-nav-items">
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceAmazonTwo}>
                  <figure>
                    <div className={"price-nav-text buttonname-amazon " + classButtonAmazonTwo} >Amazon</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceMagaluTwo}>
                  <figure>
                    <div className={"price-nav-text buttonname-magalu " + classButtonMagaluTwo} >MagaLu</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceSubmarinoTwo}>
                  <figure>
                    <div className={"price-nav-text buttonname-submarino " + classButtonSubmarinoTwo} >Submarino</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceExtraTwo}>
                  <figure>
                    <div className={"price-nav-text buttonname-extra " + classButtonExtraTwo}>Extra</div>
                  </figure>
                </button>
              </li>



            </ul>
            <div className={"price-value price-value-amazon " + classButtonAmazonTwo}>
              <h1>{amazonPhonesPrice[deviceTwo.map(two => {return two.id -1})[0]]}</h1>
              <a target="_blank" href={deviceTwo.map(two => {return two.linkAffiliate1})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-magalu " + classButtonMagaluTwo}>
              <h1>{magaluPhonesPrice[deviceTwo.map(two => {return two.id -1})[0]]}</h1>
              <a target="_blank" href={deviceTwo.map(two => {return two.linkAffiliate2})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-submarino " + classButtonSubmarinoTwo}>
              <h1>{submarinoPhonesPrice[deviceTwo.map(two => {return two.id -1})[0]]}</h1>
              <a target="_blank" href={deviceTwo.map(two => {return two.linkAffiliate3})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-extra " + classButtonExtraTwo}>
              <h1>{americanasPhonesPrice[deviceTwo.map(two => {return two.id -1})[0]]}</h1>
              <a target="_blank" href={deviceTwo.map(two => {return two.linkAffiliate4})[0]}>Acessar a Loja</a>
            </div>

          </div>
        </div>

      </div>

      <div className="image-column image-column-three">
        <Figure backgroundImage={'url(/assets/images/smartphones/compare/' + deviceThree.map(one => {return one.page})[0] + '-bg.png)' }>
        <figure className={deviceThree.map(three => {return three.modelo})[0] ? "gallery-image " + deviceThree.map(three => {return three.modelo})[0] : "gallery-image" }>
        </figure>
        </Figure>

        <div className="row-price">
          <div className="price-nav">
            <ul className="price-nav-items">
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceAmazonThree}>
                  <figure>
                    <div className={"price-nav-text buttonname-amazon " + classButtonAmazonThree} >Amazon</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceMagaluThree}>
                  <figure>
                    <div className={"price-nav-text buttonname-magalu " + classButtonMagaluThree} >MagaLu</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceSubmarinoThree}>
                  <figure>
                    <div className={"price-nav-text buttonname-submarino " + classButtonSubmarinoThree} >Submarino</div>
                  </figure>
                </button>
              </li>
              <li className="price-nav-item">
                <button className="price-nav-button" onClick={showPriceExtraThree}>
                  <figure>
                    <div className={"price-nav-text buttonname-extra " + classButtonExtraThree}>Extra</div>
                  </figure>
                </button>
              </li>



            </ul>
            <div className={"price-value price-value-amazon " + classButtonAmazonThree}>
              <h1>{amazonPhonesPrice[deviceThree.map(three => {return three.id -1})[0]]}</h1>
              <a target="_blank" href={deviceThree.map(three => {return three.linkAffiliate1})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-magalu " + classButtonMagaluThree}>
              <h1>{magaluPhonesPrice[deviceThree.map(three => {return three.id -1})[0]]}</h1>
              <a target="_blank" href={deviceThree.map(three => {return three.linkAffiliate2})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-submarino " + classButtonSubmarinoThree}>
              <h1>{submarinoPhonesPrice[deviceThree.map(three => {return three.id -1})[0]]}</h1>
              <a target="_blank" href={deviceThree.map(three => {return three.linkAffiliate3})[0]}>Acessar a Loja</a>
            </div>

            <div className={"price-value price-value-extra " + classButtonExtraThree}>
              <h1>{americanasPhonesPrice[deviceThree.map(three => {return three.id -1})[0]]}</h1>
              <a target="_blank" href={deviceThree.map(three => {return three.linkAffiliate4})[0]}>Acessar a Loja</a>
            </div>

          </div>
        </div>


      </div>

    </Container>


  )
}

export default ImageTable