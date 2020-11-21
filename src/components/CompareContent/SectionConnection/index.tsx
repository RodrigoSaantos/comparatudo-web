import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionConnection: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-conection">
      <SectionTitle 
        title={title}
      />
      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].dataTransmition] : deviceOne.map(one => {return one.dataTransmition})}
        labelTwo={deviceTwo.length === 0 ? [data[1].dataTransmition] : deviceTwo.map(two => {return two.dataTransmition})}
        labelThree={deviceThree.length === 0 ? [data[2].dataTransmition] : deviceThree.map(three => {return three.dataTransmition})}      
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].wifi] : deviceOne.map(one => {return one.wifi})}
        labelTwo={deviceTwo.length === 0 ? [data[1].wifi] : deviceTwo.map(two => {return two.wifi})}
        labelThree={deviceThree.length === 0 ? [data[2].wifi] : deviceThree.map(three => {return three.wifi})}      
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].bluetooth] : deviceOne.map(one => {return one.bluetooth})}
        labelTwo={deviceTwo.length === 0 ? [data[1].bluetooth] : deviceTwo.map(two => {return two.bluetooth})}
        labelThree={deviceThree.length === 0 ? [data[2].bluetooth] : deviceThree.map(three => {return three.bluetooth})}      
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].gps] : deviceOne.map(one => {return one.gps})}
        labelTwo={deviceTwo.length === 0 ? [data[1].gps] : deviceTwo.map(two => {return two.gps})}
        labelThree={deviceThree.length === 0 ? [data[2].gps] : deviceThree.map(three => {return three.gps})}      
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].nfc] : deviceOne.map(one => {return one.nfc})}
        labelTwo={deviceTwo.length === 0 ? [data[1].nfc] : deviceTwo.map(two => {return two.nfc})}
        labelThree={deviceThree.length === 0 ? [data[2].nfc] : deviceThree.map(three => {return three.nfc})}      
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].conectionFeatures] : deviceOne.map(one => {return one.conectionFeatures})}
        labelTwo={deviceTwo.length === 0 ? [data[1].conectionFeatures] : deviceTwo.map(two => {return two.conectionFeatures})}
        labelThree={deviceThree.length === 0 ? [data[2].conectionFeatures] : deviceThree.map(three => {return three.conectionFeatures})}      
      />

      {deviceOne.map(one => {return one.conectionFeatures2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures2})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures2})}      
      />
      : deviceTwo.map(two => {return two.conectionFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures2})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures2})}      
      />

      : deviceThree.map(three => {return three.conectionFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures2})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures2})}      
      />
      : '' }

      {deviceOne.map(one => {return one.conectionFeatures3.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures3})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures3})}      
      />
      : deviceTwo.map(two => {return two.conectionFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures3})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures3})}      
      />

      : deviceThree.map(three => {return three.conectionFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures3})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures3})}      
      />
      : '' }

      {deviceOne.map(one => {return one.conectionFeatures4.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures4})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures4})}      
      />
      : deviceTwo.map(two => {return two.conectionFeatures4.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures4})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures4})}      
      />

      : deviceThree.map(three => {return three.conectionFeatures4.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures4})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures4})}      
      />
      : '' }

      {deviceOne.map(one => {return one.conectionFeatures5.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures5})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures5})}      
      />
      : deviceTwo.map(two => {return two.conectionFeatures5.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures5})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures5})}      
      />

      : deviceThree.map(three => {return three.conectionFeatures5.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.conectionFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.conectionFeatures5})}
        labelThree={deviceThree.map(three => {return three.conectionFeatures5})}      
      />
      : '' }



    </div>
  )
};

export default SectionConnection;