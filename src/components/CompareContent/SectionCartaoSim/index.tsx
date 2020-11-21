import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionCartaoSim: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-cartao-sim">

      <SectionTitle 
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cardSIM] : deviceOne.map(one => { return one.cardSIM })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cardSIM] : deviceTwo.map(two => { return two.cardSIM })}
        labelThree={deviceThree.length === 0 ? [data[2].cardSIM] : deviceThree.map(three => { return three.cardSIM })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cardSIMFeatures] : deviceOne.map(one => { return one.cardSIMFeatures })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cardSIMFeatures] : deviceTwo.map(two => { return two.cardSIMFeatures })}
        labelThree={deviceThree.length === 0 ? [data[2].cardSIMFeatures] : deviceThree.map(three => { return three.cardSIMFeatures })}
      />
      
    </div>
  )
};

export default SectionCartaoSim;