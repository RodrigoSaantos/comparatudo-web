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
        labelOne={deviceOne.measurements.height}
        labelStrongTwo="Altura"
        labelTwo={deviceTwo.measurements.height}
        labelStrongThree="Altura"
        labelThree={deviceThree.measurements.height}
      />

      <SectionRows 
        labelStrongOne="Largura"
        labelOne={deviceOne.measurements.width}
        labelStrongTwo="Largura"
        labelTwo={deviceTwo.measurements.width}
        labelStrongThree="Largura"
        labelThree={deviceThree.measurements.width}
      />
      
      <SectionRows 
        labelStrongOne="Espessura"
        labelOne={deviceOne.measurements.espessura}
        labelStrongTwo="Espessura"
        labelTwo={deviceTwo.measurements.espessura}
        labelStrongThree="Espessura"
        labelThree={deviceThree.measurements.espessura}
      />

      <SectionRows 
        labelStrongOne="Peso"
        labelOne={deviceOne.measurements.peso}
        labelStrongTwo="Peso"
        labelTwo={deviceTwo.measurements.peso}
        labelStrongThree="Peso"
        labelThree={deviceThree.measurements.peso}
      />

    </div>
  )
};

export default SectionMeasurements;