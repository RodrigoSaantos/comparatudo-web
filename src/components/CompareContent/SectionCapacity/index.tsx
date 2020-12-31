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
        labelOne={deviceOne.capacity.armazenamento}
        labelStrongTwo="Armazenamento"
        labelTwo={deviceTwo.capacity.armazenamento}
        labelStrongThree="Armazenamento"
        labelThree={deviceThree.capacity.armazenamento}      
      />
      <SectionRows
        labelStrongOne="Memória (RAM)"
        labelOne={deviceOne.capacity.memoriaRam}  
        labelStrongTwo="Memória (RAM)"
        labelTwo={deviceTwo.capacity.memoriaRam}  
        labelStrongThree="Memória (RAM)"
        labelThree={deviceThree.capacity.memoriaRam}     
      />
      <SectionRows
        labelStrongOne="Memória Expansível"
        labelOne={deviceOne.capacity.memoriaExpansivel}  
        labelStrongTwo="Memória Expansível"
        labelTwo={deviceTwo.capacity.memoriaExpansivel} 
        labelStrongThree="Memória Expansível"
        labelThree={deviceThree.capacity.memoriaExpansivel} 
      />

    </div>

  )
};

export default SectionCapacity;