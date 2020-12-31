import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionChip: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  return (
    <div className="section-chip">
      <SectionTitle 
        title={title}
      />

      <SectionRows 
        labelOne={deviceOne.chip.chipset}
        labelTwo={deviceTwo.chip.chipset}
        labelThree={deviceThree.chip.chipset}      
      />

      <SectionRows 
        labelOne={deviceOne.chip.features}
        labelTwo={deviceTwo.chip.features}
        labelThree={deviceThree.chip.features}      
      />

    </div>
  )
};

export default SectionChip;