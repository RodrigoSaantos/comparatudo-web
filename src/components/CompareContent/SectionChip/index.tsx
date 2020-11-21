import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionChip: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  return (
    <div className="section-chip">
      <SectionTitle 
        title={title}
      />

      <SectionRows 
        labelOne={deviceOne.length === 0 ? [data[0].chipset] : deviceOne.map(one => {return one.chipset})}
        labelTwo={deviceTwo.length === 0 ? [data[1].chipset] : deviceTwo.map(two => {return two.chipset})}
        labelThree={deviceThree.length === 0 ? [data[2].chipset] : deviceThree.map(three => {return three.chipset})}      
      />

      <SectionRows 
        labelOne={deviceOne.length === 0 ? [data[0].chipsetFeatures] : deviceOne.map(one => {return one.chipsetFeatures})}
        labelTwo={deviceTwo.length === 0 ? [data[1].chipsetFeatures] : deviceTwo.map(two => {return two.chipsetFeatures})}
        labelThree={deviceThree.length === 0 ? [data[2].chipsetFeatures] : deviceThree.map(three => {return three.chipsetFeatures})}      
      />

    </div>
  )
};

export default SectionChip;