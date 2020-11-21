import React from 'react'

import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionVideoPlayBack: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-video-playback">
      <SectionTitle 
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].videoPlayback] : deviceOne.map(one => { return one.videoPlayback })}
        labelTwo={deviceTwo.length === 0 ? [data[1].videoPlayback] : deviceTwo.map(two => { return two.videoPlayback })}
        labelThree={deviceThree.length === 0 ? [data[2].videoPlayback] : deviceThree.map(three => { return three.videoPlayback })}
      />

    </div>
  )
};

export default SectionVideoPlayBack;