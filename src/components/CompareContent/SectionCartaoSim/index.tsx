import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionCartaoSim: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-cartao-sim">

      <SectionTitle 
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.card_sim.features}
        labelTwo={deviceTwo.card_sim.features}
        labelThree={deviceThree.card_sim.features}
      />

      {deviceOne.card_sim.features2 ? 
        <SectionRows
          labelOne={deviceOne.card_sim.features2}
          labelTwo={deviceTwo.card_sim.features2}
          labelThree={deviceThree.card_sim.features2}      
        />
        : deviceTwo.card_sim.features2 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features2}
          labelTwo={deviceTwo.card_sim.features2}
          labelThree={deviceThree.card_sim.features2}      
        />

        : deviceThree.card_sim.features2 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features2}
          labelTwo={deviceTwo.card_sim.features2}
          labelThree={deviceThree.card_sim.features2}      
        />
      : '' }

      {deviceOne.card_sim.features3 ? 
        <SectionRows
          labelOne={deviceOne.card_sim.features3}
          labelTwo={deviceTwo.card_sim.features3}
          labelThree={deviceThree.card_sim.features3}      
        />
        : deviceTwo.card_sim.features3 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features3}
          labelTwo={deviceTwo.card_sim.features3}
          labelThree={deviceThree.card_sim.features3}      
        />

        : deviceThree.card_sim.features3 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features3}
          labelTwo={deviceTwo.card_sim.features3}
          labelThree={deviceThree.card_sim.features3}      
        />
      : '' }

      {deviceOne.card_sim.features4 ? 
        <SectionRows
          labelOne={deviceOne.card_sim.features4}
          labelTwo={deviceTwo.card_sim.features4}
          labelThree={deviceThree.card_sim.features4}      
        />
        : deviceTwo.card_sim.features4 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features4}
          labelTwo={deviceTwo.card_sim.features4}
          labelThree={deviceThree.card_sim.features4}      
        />

        : deviceThree.card_sim.features4 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features4}
          labelTwo={deviceTwo.card_sim.features4}
          labelThree={deviceThree.card_sim.features4}      
        />
      : '' }

      {deviceOne.card_sim.features5 ? 
        <SectionRows
          labelOne={deviceOne.card_sim.features5}
          labelTwo={deviceTwo.card_sim.features5}
          labelThree={deviceThree.card_sim.features5}      
        />
        : deviceTwo.card_sim.features5 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features5}
          labelTwo={deviceTwo.card_sim.features5}
          labelThree={deviceThree.card_sim.features5}      
        />

        : deviceThree.card_sim.features5 ?
        <SectionRows
          labelOne={deviceOne.card_sim.features5}
          labelTwo={deviceTwo.card_sim.features5}
          labelThree={deviceThree.card_sim.features5}      
        />
      : '' }

      
    </div>
  )
};

export default SectionCartaoSim;