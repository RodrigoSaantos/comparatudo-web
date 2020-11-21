import React from 'react'

import { InformationDevicesProps } from '../index'
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionDisplay: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-display">
      <SectionTitle 
        title={title}
      />

      <SectionRows 
        labelStrongOne="Tecnologia"
        labelOne={deviceOne.length === 0 ? [data[0].display] : deviceOne.map(one => {return one.display})}
        labelStrongTwo="Tecnologia"
        labelTwo={deviceTwo.length === 0 ? [data[1].display] : deviceTwo.map(two => {return two.display})}
        labelStrongThree="Tecnologia"
        labelThree={deviceThree.length === 0 ? [data[2].display] : deviceThree.map(three => {return three.display})}      
      />

      <SectionRows 
        labelStrongOne="Tipo"
        labelOne={deviceOne.length === 0 ? [data[0].displayType] : deviceOne.map(one => {return one.displayType})}
        labelStrongTwo="Tipo"
        labelTwo={deviceTwo.length === 0 ? [data[1].displayType] : deviceTwo.map(two => {return two.displayType})}
        labelStrongThree="Tipo"
        labelThree={deviceThree.length === 0 ? [data[2].displayType] : deviceThree.map(three => {return three.displayType})}      
      />

      <SectionRows 
        labelStrongOne="Dimensão Diagonal"
        labelOne={deviceOne.length === 0 ? [data[0].polegada] : deviceOne.map(one => {return one.polegada})}
        labelStrongTwo="Dimensão Diagonal"
        labelTwo={deviceTwo.length === 0 ? [data[1].polegada] : deviceTwo.map(two => {return two.polegada})}
        labelStrongThree="Dimensão Diagonal"
        labelThree={deviceThree.length === 0 ? [data[2].polegada] : deviceThree.map(three => {return three.polegada})}      
      />

      <SectionRows 
        labelStrongOne="Dimensão Diagonal"
        labelOne={deviceOne.length === 0 ? [data[0].HDR] : deviceOne.map(one => {return one.HDR})}
        labelStrongTwo="Dimensão Diagonal"
        labelTwo={deviceTwo.length === 0 ? [data[1].HDR] : deviceTwo.map(two => {return two.HDR})}
        labelStrongThree="Dimensão Diagonal"
        labelThree={deviceThree.length === 0 ? [data[2].HDR] : deviceThree.map(three => {return three.HDR})}      
      />

      <SectionRows 
        labelOne={deviceOne.length === 0 ? [data[0].resolution] : deviceOne.map(one => {return one.resolution})}
        labelTwo={deviceTwo.length === 0 ? [data[1].resolution] : deviceTwo.map(two => {return two.resolution})}
        labelThree={deviceThree.length === 0 ? [data[2].resolution] : deviceThree.map(three => {return three.resolution})}      
      />

      <SectionRows 
        labelStrongOne="Características"
        labelOne={deviceOne.length === 0 ? [data[0].displayFeatures] : deviceOne.map(one => {return one.displayFeatures})}
        labelStrongTwo="Características"
        labelTwo={deviceTwo.length === 0 ? [data[1].displayFeatures] : deviceTwo.map(two => {return two.displayFeatures})}
        labelStrongThree="Características"
        labelThree={deviceThree.length === 0 ? [data[2].displayFeatures] : deviceThree.map(three => {return three.displayFeatures})}      
      />

      {deviceOne.map(one => {return one.displayFeatures2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures2})}
        labelThree={deviceThree.map(three => {return three.displayFeatures2})}      
      />
      : deviceTwo.map(two => {return two.displayFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures2})}
        labelThree={deviceThree.map(three => {return three.displayFeatures2})}      
      />

      : deviceThree.map(three => {return three.displayFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures2})}
        labelThree={deviceThree.map(three => {return three.displayFeatures2})}      
      />
      : '' }

      {deviceOne.map(one => {return one.displayFeatures3.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures3})}
        labelThree={deviceThree.map(three => {return three.displayFeatures3})}      
      />
      : deviceTwo.map(two => {return two.displayFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures3})}
        labelThree={deviceThree.map(three => {return three.displayFeatures3})}      
      />

      : deviceThree.map(three => {return three.displayFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures3})}
        labelThree={deviceThree.map(three => {return three.displayFeatures3})}      
      />
      : '' }

      {deviceOne.map(one => {return one.displayFeatures4.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures4})}
        labelThree={deviceThree.map(three => {return three.displayFeatures4})}      
      />
      : deviceTwo.map(two => {return two.displayFeatures4.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures4})}
        labelThree={deviceThree.map(three => {return three.displayFeatures4})}      
      />

      : deviceThree.map(three => {return three.displayFeatures4.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures4})}
        labelThree={deviceThree.map(three => {return three.displayFeatures4})}      
      />
      : '' }

      {deviceOne.map(one => {return one.displayFeatures5.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures5})}
        labelThree={deviceThree.map(three => {return three.displayFeatures5})}      
      />
      : deviceTwo.map(two => {return two.displayFeatures5.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures5})}
        labelThree={deviceThree.map(three => {return three.displayFeatures5})}      
      />

      : deviceThree.map(three => {return three.displayFeatures5.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures5})}
        labelThree={deviceThree.map(three => {return three.displayFeatures5})}      
      />
      : '' }

      {deviceOne.map(one => {return one.displayFeatures6.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures6})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures6})}
        labelThree={deviceThree.map(three => {return three.displayFeatures6})}      
      />
      : deviceTwo.map(two => {return two.displayFeatures6.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures6})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures6})}
        labelThree={deviceThree.map(three => {return three.displayFeatures6})}      
      />

      : deviceThree.map(three => {return three.displayFeatures6.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.displayFeatures6})}
        labelTwo={deviceTwo.map(two => {return two.displayFeatures6})}
        labelThree={deviceThree.map(three => {return three.displayFeatures6})}      
      />
      : '' }

    </div>
  )
};

export default SectionDisplay;