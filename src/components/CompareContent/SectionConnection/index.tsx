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
        labelOne={deviceOne.connection.dataTransmition}
        labelTwo={deviceTwo.connection.dataTransmition}
        labelThree={deviceThree.connection.dataTransmition}      
      />

      <SectionRows
        labelOne={deviceOne.connection.wifi}
        labelTwo={deviceTwo.connection.wifi}
        labelThree={deviceThree.connection.wifi}      
      />

      <SectionRows
        labelOne={deviceOne.connection.bluetooth}
        labelTwo={deviceTwo.connection.bluetooth}
        labelThree={deviceThree.connection.bluetooth}      
      />

      <SectionRows
        labelOne={deviceOne.connection.gps}
        labelTwo={deviceTwo.connection.gps}
        labelThree={deviceThree.connection.gps}      
      />

      <SectionRows
        labelOne={deviceOne.connection.nfc}
        labelTwo={deviceTwo.connection.nfc}
        labelThree={deviceThree.connection.nfc}      
      />

      <SectionRows
        labelOne={deviceOne.connection.features}
        labelTwo={deviceTwo.connection.features}
        labelThree={deviceThree.connection.features}      
      />

      {deviceOne.connection.features2 ? 
      <SectionRows
        labelOne={deviceOne.connection.features2}
        labelTwo={deviceTwo.connection.features2}
        labelThree={deviceThree.connection.features2}      
      />
      : deviceTwo.connection.features2 ?
      <SectionRows
        labelOne={deviceOne.connection.features2}
        labelTwo={deviceTwo.connection.features2}
        labelThree={deviceThree.connection.features2}      
      />

      : deviceThree.connection.features2 ?
      <SectionRows
        labelOne={deviceOne.connection.features2}
        labelTwo={deviceTwo.connection.features2}
        labelThree={deviceThree.connection.features2}      
      />
      : '' }

      {deviceOne.connection.features3 ? 
      <SectionRows
        labelOne={deviceOne.connection.features3}
        labelTwo={deviceTwo.connection.features3}
        labelThree={deviceThree.connection.features3}      
      />
      : deviceTwo.connection.features3 ?
      <SectionRows
        labelOne={deviceOne.connection.features3}
        labelTwo={deviceTwo.connection.features3}
        labelThree={deviceThree.connection.features3}      
      />

      : deviceThree.connection.features3 ?
      <SectionRows
        labelOne={deviceOne.connection.features3}
        labelTwo={deviceTwo.connection.features3}
        labelThree={deviceThree.connection.features3}      
      />
      : '' }

      {deviceOne.connection.features4 ? 
      <SectionRows
        labelOne={deviceOne.connection.features4}
        labelTwo={deviceTwo.connection.features4}
        labelThree={deviceThree.connection.features4}      
      />
      : deviceTwo.connection.features4 ?
      <SectionRows
        labelOne={deviceOne.connection.features4}
        labelTwo={deviceTwo.connection.features4}
        labelThree={deviceThree.connection.features4}      
      />

      : deviceThree.connection.features4 ?
      <SectionRows
        labelOne={deviceOne.connection.features4}
        labelTwo={deviceTwo.connection.features4}
        labelThree={deviceThree.connection.features4}      
      />
      : '' }

      {deviceOne.connection.features5 ? 
      <SectionRows
        labelOne={deviceOne.connection.features5}
        labelTwo={deviceTwo.connection.features5}
        labelThree={deviceThree.connection.features5}      
      />
      : deviceTwo.connection.features5 ?
      <SectionRows
        labelOne={deviceOne.connection.features5}
        labelTwo={deviceTwo.connection.features5}
        labelThree={deviceThree.connection.features5}      
      />

      : deviceThree.connection.features5 ?
      <SectionRows
        labelOne={deviceOne.connection.features5}
        labelTwo={deviceTwo.connection.features5}
        labelThree={deviceThree.connection.features5}      
      />
      : '' }

    </div>
  )
};

export default SectionConnection;