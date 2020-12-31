import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionAuthentication: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  return (
    <div className="section-authentication">
      <SectionTitle 
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.authentication.summary}
        labelTwo={deviceTwo.authentication.summary}
        labelThree={deviceThree.authentication.summary}            
      />

      <SectionRows
        labelOne={deviceOne.authentication.features}
        labelTwo={deviceTwo.authentication.features}
        labelThree={deviceThree.authentication.features}            
      />

    </div>
  )
};

export default SectionAuthentication;