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
        labelOne={deviceOne.length === 0 ? [data[0].authentication] : deviceOne.map(one => {return one.authentication})}
        labelTwo={deviceTwo.length === 0 ? [data[1].authentication] : deviceTwo.map(two => {return two.authentication})}
        labelThree={deviceThree.length === 0 ? [data[2].authentication] : deviceThree.map(three => {return three.authentication})}            
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].authenticationFeatures] : deviceOne.map(one => {return one.authenticationFeatures})}
        labelTwo={deviceTwo.length === 0 ? [data[1].authenticationFeatures] : deviceTwo.map(two => {return two.authenticationFeatures})}
        labelThree={deviceThree.length === 0 ? [data[2].authenticationFeatures] : deviceThree.map(three => {return three.authenticationFeatures})}            
      />

    </div>
  )
};

export default SectionAuthentication;