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
        labelOne={deviceOne.length === 0 ? [data[0].batteryReproductionVideo] : deviceOne.map(one => { return one.batteryReproductionVideo })}
        labelStrongTwo="Reprodução de vídeo"
        labelTwo={deviceTwo.length === 0 ? [data[1].batteryReproductionVideo] : deviceTwo.map(two => { return two.batteryReproductionVideo })}
        labelStrongThree="Reprodução de vídeo"
        labelThree={deviceThree.length === 0 ? [data[2].batteryReproductionVideo] : deviceThree.map(three => { return three.batteryReproductionVideo })}
      />

      {deviceOne.map(one => {return one.batteryReproductionVideo2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryReproductionVideo2})}
        labelTwo={deviceTwo.map(two => {return two.batteryReproductionVideo2})}
        labelThree={deviceThree.map(three => {return three.batteryReproductionVideo2})}      
      />
      : deviceTwo.map(two => {return two.batteryReproductionVideo2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryReproductionVideo2})}
        labelTwo={deviceTwo.map(two => {return two.batteryReproductionVideo2})}
        labelThree={deviceThree.map(three => {return three.batteryReproductionVideo2})}      
      />

      : deviceThree.map(three => {return three.batteryReproductionVideo2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryReproductionVideo2})}
        labelTwo={deviceTwo.map(two => {return two.batteryReproductionVideo2})}
        labelThree={deviceThree.map(three => {return three.batteryReproductionVideo2})}      
      />
      : '' }

      <SectionRows
        labelStrongOne="Reprodução de áudio"
        labelOne={deviceOne.length === 0 ? [data[0].batteryReproductionAudio] : deviceOne.map(one => { return one.batteryReproductionAudio })}
        labelStrongTwo="Reprodução de áudio"
        labelTwo={deviceTwo.length === 0 ? [data[1].batteryReproductionAudio] : deviceTwo.map(two => { return two.batteryReproductionAudio })}
        labelStrongThree="Reprodução de áudio"
        labelThree={deviceThree.length === 0 ? [data[2].batteryReproductionAudio] : deviceThree.map(three => { return three.batteryReproductionAudio })}
      />

      <SectionRows
        labelStrongOne="Carregamento rápido"
        labelOne={deviceOne.length === 0 ? [data[0].batteryChargingFast] : deviceOne.map(one => { return one.batteryChargingFast })}
        labelStrongTwo="Carregamento rápido"
        labelTwo={deviceTwo.length === 0 ? [data[1].batteryChargingFast] : deviceTwo.map(two => { return two.batteryChargingFast })}
        labelStrongThree="Carregamento rápido"
        labelThree={deviceThree.length === 0 ? [data[2].batteryChargingFast] : deviceThree.map(three => { return three.batteryChargingFast })}
      />

      <SectionRows
        labelStrongOne="Capacidade de Bateria"
        labelOne={deviceOne.length === 0 ? [data[0].batteryCapacity] : deviceOne.map(one => { return one.batteryCapacity })}
        labelStrongTwo="Capacidade de Bateria"
        labelTwo={deviceTwo.length === 0 ? [data[1].batteryCapacity] : deviceTwo.map(two => { return two.batteryCapacity })}
        labelStrongThree="Capacidade de Bateria"
        labelThree={deviceThree.length === 0 ? [data[2].batteryCapacity] : deviceThree.map(three => { return three.batteryCapacity })}
      />

      {deviceOne.map(one => {return one.batteryCapacity2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryCapacity2})}
        labelTwo={deviceTwo.map(two => {return two.batteryCapacity2})}
        labelThree={deviceThree.map(three => {return three.batteryCapacity2})}      
      />
      : deviceTwo.map(two => {return two.batteryCapacity2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryCapacity2})}
        labelTwo={deviceTwo.map(two => {return two.batteryCapacity2})}
        labelThree={deviceThree.map(three => {return three.batteryCapacity2})}      
      />

      : deviceThree.map(three => {return three.batteryCapacity2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryCapacity2})}
        labelTwo={deviceTwo.map(two => {return two.batteryCapacity2})}
        labelThree={deviceThree.map(three => {return three.batteryCapacity2})}      
      />
      : '' }

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].batteryCharge] : deviceOne.map(one => { return one.batteryCharge })}
        labelTwo={deviceTwo.length === 0 ? [data[1].batteryCharge] : deviceTwo.map(two => { return two.batteryCharge })}
        labelThree={deviceThree.length === 0 ? [data[2].batteryCharge] : deviceThree.map(three => { return three.batteryCharge })}
      />

      {deviceOne.map(one => {return one.batteryFeatures.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures})}      
      />
      : deviceTwo.map(two => {return two.batteryFeatures.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures})}      
      />

      : deviceThree.map(three => {return three.batteryFeatures.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures})}      
      />
      : '' }

      {deviceOne.map(one => {return one.batteryFeatures2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures2})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures2})}      
      />
      : deviceTwo.map(two => {return two.batteryFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures2})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures2})}      
      />

      : deviceThree.map(three => {return three.batteryFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures2})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures2})}      
      />
      : '' }

      {deviceOne.map(one => {return one.batteryFeatures3.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures3})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures3})}      
      />
      : deviceTwo.map(two => {return two.batteryFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures3})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures3})}      
      />

      : deviceThree.map(three => {return three.batteryFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.batteryFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.batteryFeatures3})}
        labelThree={deviceThree.map(three => {return three.batteryFeatures3})}      
      />
      : '' }


    </div>
  )
};

export default SectionPowerBattery;