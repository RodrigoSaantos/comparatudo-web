import React from 'react'

import { InformationDevicesProps } from '../index'
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionDisplay: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title }) => {

  return (
    <div className="section-display">
      <SectionTitle 
        title={title}
      />

      <SectionRows 
        labelStrongOne="Tecnologia"
        labelOne={deviceOne.display.summary}
        labelStrongTwo="Tecnologia"
        labelTwo={deviceTwo.display.summary}
        labelStrongThree="Tecnologia"
        labelThree={deviceThree.display.summary}      
      />

      <SectionRows 
        labelStrongOne="Tipo"
        labelOne={deviceOne.display.type}
        labelStrongTwo="Tipo"
        labelTwo={deviceTwo.display.type}
        labelStrongThree="Tipo"
        labelThree={deviceThree.display.type}      
      />

      <SectionRows 
        labelStrongOne="Dimensão Diagonal"
        labelOne={deviceOne.display.polegada}
        labelStrongTwo="Dimensão Diagonal"
        labelTwo={deviceTwo.display.polegada}
        labelStrongThree="Dimensão Diagonal"
        labelThree={deviceThree.display.polegada}      
      />

      <SectionRows 
        labelStrongOne="Dimensão Diagonal"
        labelOne={deviceOne.display.HDR}
        labelStrongTwo="Dimensão Diagonal"
        labelTwo={deviceTwo.display.HDR}
        labelStrongThree="Dimensão Diagonal"
        labelThree={deviceThree.display.HDR}      
      />

      <SectionRows 
        labelOne={deviceOne.display.resolution}
        labelTwo={deviceTwo.display.resolution}
        labelThree={deviceThree.display.resolution}      
      />

      <SectionRows 
        labelStrongOne="Características"
        labelOne={deviceOne.display.features}
        labelStrongTwo="Características"
        labelTwo={deviceTwo.display.features}
        labelStrongThree="Características"
        labelThree={deviceThree.display.features}      
      />

      {deviceOne.display.features2 ? 
      <SectionRows
        labelOne={deviceOne.display.features2}
        labelTwo={deviceTwo.display.features2}
        labelThree={deviceThree.display.features2}      
      />
      : deviceTwo.display.features2 ?
      <SectionRows
        labelOne={deviceOne.display.features2}
        labelTwo={deviceTwo.display.features2}
        labelThree={deviceThree.display.features2}      
      />

      : deviceThree.display.features2 ?
      <SectionRows
        labelOne={deviceOne.display.features2}
        labelTwo={deviceTwo.display.features2}
        labelThree={deviceThree.display.features2}      
      />
      : '' }

      {deviceOne.display.features3 ? 
      <SectionRows
        labelOne={deviceOne.display.features3}
        labelTwo={deviceTwo.display.features3}
        labelThree={deviceThree.display.features3}      
      />
      : deviceTwo.display.features3 ?
      <SectionRows
        labelOne={deviceOne.display.features3}
        labelTwo={deviceTwo.display.features3}
        labelThree={deviceThree.display.features3}      
      />

      : deviceThree.display.features3 ?
      <SectionRows
        labelOne={deviceOne.display.features3}
        labelTwo={deviceTwo.display.features3}
        labelThree={deviceThree.display.features3}      
      />
      : '' }

      {deviceOne.display.features4 ? 
      <SectionRows
        labelOne={deviceOne.display.features4}
        labelTwo={deviceTwo.display.features4}
        labelThree={deviceThree.display.features4}      
      />
      : deviceTwo.display.features4 ?
      <SectionRows
        labelOne={deviceOne.display.features4}
        labelTwo={deviceTwo.display.features4}
        labelThree={deviceThree.display.features4}      
      />

      : deviceThree.display.features4 ?
      <SectionRows
        labelOne={deviceOne.display.features4}
        labelTwo={deviceTwo.display.features4}
        labelThree={deviceThree.display.features4}      
      />
      : '' }

      {deviceOne.display.features5 ? 
      <SectionRows
        labelOne={deviceOne.display.features5}
        labelTwo={deviceTwo.display.features5}
        labelThree={deviceThree.display.features5}      
      />
      : deviceTwo.display.features5 ?
      <SectionRows
        labelOne={deviceOne.display.features5}
        labelTwo={deviceTwo.display.features5}
        labelThree={deviceThree.display.features5}      
      />

      : deviceThree.display.features5 ?
      <SectionRows
        labelOne={deviceOne.display.features5}
        labelTwo={deviceTwo.display.features5}
        labelThree={deviceThree.display.features5}      
      />
      : '' }

      {deviceOne.display.features6 ? 
      <SectionRows
        labelOne={deviceOne.display.features6}
        labelTwo={deviceTwo.display.features6}
        labelThree={deviceThree.display.features6}      
      />
      : deviceTwo.display.features6 ?
      <SectionRows
        labelOne={deviceOne.display.features6}
        labelTwo={deviceTwo.display.features6}
        labelThree={deviceThree.display.features6}      
      />

      : deviceThree.display.features6 ?
      <SectionRows
        labelOne={deviceOne.display.features6}
        labelTwo={deviceTwo.display.features6}
        labelThree={deviceThree.display.features6}      
      />
      : '' }

    </div>
  )
};

export default SectionDisplay;