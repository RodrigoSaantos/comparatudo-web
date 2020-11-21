import React from 'react'

import SectionRows from '../../SectionRows'
import {InformationDevicesProps} from '../index'
import SectionTitle from '../SectionTitle';

const SectionCapacity: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  return (
    <div className="section-capacity">
      <SectionTitle 
        title={title}
      />
            
      <SectionRows
        labelStrongOne="Armazenamento"
        labelOne={deviceOne.length === 0 ? [data[0].armazenamento] : deviceOne.map(one => {return one.armazenamento})}
        labelStrongTwo="Armazenamento"
        labelTwo={deviceTwo.length === 0 ? [data[1].armazenamento] : deviceTwo.map(two => {return two.armazenamento})}
        labelStrongThree="Armazenamento"
        labelThree={deviceThree.length === 0 ? [data[2].armazenamento] : deviceThree.map(three => {return three.armazenamento})}      
      />
      <SectionRows
        labelStrongOne="Memória (RAM)"
        labelOne={deviceOne.length === 0 ? [data[0].memoriaRam] : deviceOne.map(one => {return one.memoriaRam})}  
        labelStrongTwo="Memória (RAM)"
        labelTwo={deviceTwo.length === 0 ? [data[1].memoriaRam] : deviceTwo.map(two => {return two.memoriaRam})}  
        labelStrongThree="Memória (RAM)"
        labelThree={deviceThree.length === 0 ? [data[2].memoriaRam] : deviceThree.map(three => {return three.memoriaRam})}     
      />
      <SectionRows
        labelStrongOne="Memória Expansível"
        labelOne={deviceOne.length === 0 ? [data[0].memoriaExpansivel] : deviceOne.map(one => {return one.memoriaExpansivel})}  
        labelStrongTwo="Memória Expansível"
        labelTwo={deviceTwo.length === 0 ? [data[1].memoriaExpansivel] : deviceTwo.map(two => {return two.memoriaExpansivel})} 
        labelStrongThree="Memória Expansível"
        labelThree={deviceThree.length === 0 ? [data[2].memoriaExpansivel] : deviceThree.map(three => {return three.memoriaExpansivel})} 
      />

    </div>

  )
};

export default SectionCapacity;