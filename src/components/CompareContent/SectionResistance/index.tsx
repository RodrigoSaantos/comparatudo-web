import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionResistance: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  return (
    <div className="section-resistance">
      <SectionTitle 
        title={title}
      />

      <SectionRows
      labelOne={deviceOne.length === 0 ? [data[0].resistance] : deviceOne.map(one => {return one.resistance})}
      labelTwo={deviceTwo.length === 0 ? [data[1].resistance] : deviceTwo.map(two => {return two.resistance})}
      labelThree={deviceThree.length === 0 ? [data[2].resistance] : deviceThree.map(three => {return three.resistance})}      
      />

    </div>
  )
};

export default SectionResistance;