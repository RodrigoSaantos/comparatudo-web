import React from 'react'

import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionMeasurements: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-measurements">
      <SectionTitle 
        title={title}
      />

      <SectionRows 
        labelStrongOne="Altura"
        labelOne={deviceOne.length === 0 ? [data[0].height] : deviceOne.map(one => {return one.height})}
        labelStrongTwo="Altura"
        labelTwo={deviceTwo.length === 0 ? [data[1].height] : deviceTwo.map(two => {return two.height})}
        labelStrongThree="Altura"
        labelThree={deviceThree.length === 0 ? [data[2].height] : deviceThree.map(three => {return three.height})}      
      />

      <SectionRows 
        labelStrongOne="Largura"
        labelOne={deviceOne.length === 0 ? [data[0].width] : deviceOne.map(one => {return one.width})}
        labelStrongTwo="Largura"
        labelTwo={deviceTwo.length === 0 ? [data[1].width] : deviceTwo.map(two => {return two.width})}
        labelStrongThree="Largura"
        labelThree={deviceThree.length === 0 ? [data[2].width] : deviceThree.map(three => {return three.width})}      
      />
      
      <SectionRows 
        labelStrongOne="Espessura"
        labelOne={deviceOne.length === 0 ? [data[0].espessura] : deviceOne.map(one => {return one.espessura})}
        labelStrongTwo="Espessura"
        labelTwo={deviceTwo.length === 0 ? [data[1].espessura] : deviceTwo.map(two => {return two.espessura})}
        labelStrongThree="Espessura"
        labelThree={deviceThree.length === 0 ? [data[2].espessura] : deviceThree.map(three => {return three.espessura})}      
      />

      <SectionRows 
        labelStrongOne="Peso"
        labelOne={deviceOne.length === 0 ? [data[0].peso] : deviceOne.map(one => {return one.peso})}
        labelStrongTwo="Peso"
        labelTwo={deviceTwo.length === 0 ? [data[1].peso] : deviceTwo.map(two => {return two.peso})}
        labelStrongThree="Peso"
        labelThree={deviceThree.length === 0 ? [data[2].peso] : deviceThree.map(three => {return three.peso})}      
      />

    </div>
  )
};

export default SectionMeasurements;