import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionAudioPlayBack: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  return (
    <div className="section-audio-playback">

      <SectionTitle 
        title={title}
      />
      
      <SectionRows 
        labelOne={deviceOne.length === 0 ? [data[0].audioPlay] : deviceOne.map(one => {return one.audioPlay})}
        labelTwo={deviceTwo.length === 0 ? [data[1].audioPlay] : deviceTwo.map(two => {return two.audioPlay})}
        labelThree={deviceThree.length === 0 ? [data[2].audioPlay] : deviceThree.map(three => {return three.audioPlay})}      
      />

      {deviceOne.map(one => {return one.audioPlayFeatures.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures})}      
      />
      : deviceTwo.map(two => {return two.audioPlayFeatures.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures})}      
      />

      : deviceThree.map(three => {return three.audioPlayFeatures.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures})}      
      />
      : '' }

      {deviceOne.map(one => {return one.audioPlayFeatures2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures2})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures2})}      
      />
      : deviceTwo.map(two => {return two.audioPlayFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures2})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures2})}      
      />

      : deviceThree.map(three => {return three.audioPlayFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures2})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures2})}      
      />
      : '' }

      {deviceOne.map(one => {return one.audioPlayFeatures3.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures3})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures3})}      
      />
      : deviceTwo.map(two => {return two.audioPlayFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures3})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures3})}      
      />

      : deviceThree.map(three => {return three.audioPlayFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.audioPlayFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.audioPlayFeatures3})}
        labelThree={deviceThree.map(three => {return three.audioPlayFeatures3})}      
      />
      : '' }



    </div>
  )
};

export default SectionAudioPlayBack;