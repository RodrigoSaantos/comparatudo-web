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
      labelOne={deviceOne.resistance.wave}
      labelTwo={deviceTwo.resistance.wave}
      labelThree={deviceThree.resistance.wave}      
      />

    </div>
  )
};

export default SectionResistance;