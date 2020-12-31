import React from 'react'

import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionPowerBattery: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-power-battery">
      <SectionTitle 
        title={title}
      />

      <SectionRows
        labelStrongOne="Reprodução de vídeo"
        labelOne={deviceOne.battery.reproductionVideo}
        labelStrongTwo="Reprodução de vídeo"
        labelTwo={deviceTwo.battery.reproductionVideo}
        labelStrongThree="Reprodução de vídeo"
        labelThree={deviceThree.battery.reproductionVideo}
      />

      {deviceOne.battery.reproductionVideo2 ? 
      <SectionRows
        labelOne={deviceOne.battery.reproductionVideo2}
        labelTwo={deviceTwo.battery.reproductionVideo2}
        labelThree={deviceThree.battery.reproductionVideo2}      
      />
      : deviceTwo.battery.reproductionVideo2 ?
      <SectionRows
        labelOne={deviceOne.battery.reproductionVideo2}
        labelTwo={deviceTwo.battery.reproductionVideo2}
        labelThree={deviceThree.battery.reproductionVideo2}      
      />

      : deviceThree.battery.reproductionVideo2 ?
      <SectionRows
        labelOne={deviceOne.battery.reproductionVideo2}
        labelTwo={deviceTwo.battery.reproductionVideo2}
        labelThree={deviceThree.battery.reproductionVideo2}      
      />
      : '' }

      <SectionRows
        labelStrongOne="Reprodução de áudio"
        labelOne={deviceOne.battery.reproductionAudio}
        labelStrongTwo="Reprodução de áudio"
        labelTwo={deviceTwo.battery.reproductionAudio}
        labelStrongThree="Reprodução de áudio"
        labelThree={deviceThree.battery.reproductionAudio}
      />

      <SectionRows
        labelStrongOne="Carregamento rápido"
        labelOne={deviceOne.battery.chargingFast}
        labelStrongTwo="Carregamento rápido"
        labelTwo={deviceTwo.battery.chargingFast}
        labelStrongThree="Carregamento rápido"
        labelThree={deviceThree.battery.chargingFast}
      />

      <SectionRows
        labelStrongOne="Capacidade de Bateria"
        labelOne={deviceOne.battery.capacity}
        labelStrongTwo="Capacidade de Bateria"
        labelTwo={deviceTwo.battery.capacity}
        labelStrongThree="Capacidade de Bateria"
        labelThree={deviceThree.battery.capacity}
      />

      {deviceOne.battery.capacity2 ? 
      <SectionRows
        labelOne={deviceOne.battery.capacity2}
        labelTwo={deviceTwo.battery.capacity2}
        labelThree={deviceThree.battery.capacity2}      
      />
      : deviceTwo.battery.capacity2 ?
      <SectionRows
        labelOne={deviceOne.battery.capacity2}
        labelTwo={deviceTwo.battery.capacity2}
        labelThree={deviceThree.battery.capacity2}      
      />

      : deviceThree.battery.capacity2 ?
      <SectionRows
        labelOne={deviceOne.battery.capacity2}
        labelTwo={deviceTwo.battery.capacity2}
        labelThree={deviceThree.battery.capacity2}      
      />
      : '' }

      <SectionRows
        labelOne={deviceOne.battery.charge}
        labelTwo={deviceTwo.battery.charge}
        labelThree={deviceThree.battery.charge}
      />

      {deviceOne.battery.features ? 
      <SectionRows
        labelOne={deviceOne.battery.features}
        labelTwo={deviceTwo.battery.features}
        labelThree={deviceThree.battery.features}      
      />
      : deviceTwo.battery.features ?
      <SectionRows
        labelOne={deviceOne.battery.features}
        labelTwo={deviceTwo.battery.features}
        labelThree={deviceThree.battery.features}      
      />

      : deviceThree.battery.features ?
      <SectionRows
        labelOne={deviceOne.battery.features}
        labelTwo={deviceTwo.battery.features}
        labelThree={deviceThree.battery.features}      
      />
      : '' }

      {deviceOne.battery.features2 ? 
      <SectionRows
        labelOne={deviceOne.battery.features2}
        labelTwo={deviceTwo.battery.features2}
        labelThree={deviceThree.battery.features2}      
      />
      : deviceTwo.battery.features2 ?
      <SectionRows
        labelOne={deviceOne.battery.features2}
        labelTwo={deviceTwo.battery.features2}
        labelThree={deviceThree.battery.features2}      
      />

      : deviceThree.battery.features2 ?
      <SectionRows
        labelOne={deviceOne.battery.features2}
        labelTwo={deviceTwo.battery.features2}
        labelThree={deviceThree.battery.features2}      
      />
      : '' }

      {deviceOne.battery.features3 ? 
      <SectionRows
        labelOne={deviceOne.battery.features3}
        labelTwo={deviceTwo.battery.features3}
        labelThree={deviceThree.battery.features3}      
      />
      : deviceTwo.battery.features3 ?
      <SectionRows
        labelOne={deviceOne.battery.features3}
        labelTwo={deviceTwo.battery.features3}
        labelThree={deviceThree.battery.features3}      
      />

      : deviceThree.battery.features3 ?
      <SectionRows
        labelOne={deviceOne.battery.features3}
        labelTwo={deviceTwo.battery.features3}
        labelThree={deviceThree.battery.features3}      
      />
      : '' }

      {deviceOne.battery.features4 ? 
      <SectionRows
        labelOne={deviceOne.battery.features4}
        labelTwo={deviceTwo.battery.features4}
        labelThree={deviceThree.battery.features4}      
      />
      : deviceTwo.battery.features4 ?
      <SectionRows
        labelOne={deviceOne.battery.features4}
        labelTwo={deviceTwo.battery.features4}
        labelThree={deviceThree.battery.features4}      
      />

      : deviceThree.battery.features4 ?
      <SectionRows
        labelOne={deviceOne.battery.features4}
        labelTwo={deviceTwo.battery.features4}
        labelThree={deviceThree.battery.features4}      
      />
      : '' }

      {deviceOne.battery.features5 ? 
      <SectionRows
        labelOne={deviceOne.battery.features5}
        labelTwo={deviceTwo.battery.features5}
        labelThree={deviceThree.battery.features5}      
      />
      : deviceTwo.battery.features5 ?
      <SectionRows
        labelOne={deviceOne.battery.features5}
        labelTwo={deviceTwo.battery.features5}
        labelThree={deviceThree.battery.features5}      
      />

      : deviceThree.battery.features5 ?
      <SectionRows
        labelOne={deviceOne.battery.features5}
        labelTwo={deviceTwo.battery.features5}
        labelThree={deviceThree.battery.features5}      
      />
      : '' }



    </div>
  )
};

export default SectionPowerBattery;