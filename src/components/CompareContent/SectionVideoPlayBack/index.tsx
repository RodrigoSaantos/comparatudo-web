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
        labelOne={deviceOne.video_play_back.features}
        labelTwo={deviceTwo.video_play_back.features}
        labelThree={deviceThree.video_play_back.features}
      />

    {deviceOne.video_play_back.features2 ? 
      <SectionRows
        labelOne={deviceOne.video_play_back.features2}
        labelTwo={deviceTwo.video_play_back.features2}
        labelThree={deviceThree.video_play_back.features2}      
      />
      : deviceTwo.video_play_back.features2 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features2}
        labelTwo={deviceTwo.video_play_back.features2}
        labelThree={deviceThree.video_play_back.features2}      
      />

      : deviceThree.video_play_back.features2 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features2}
        labelTwo={deviceTwo.video_play_back.features2}
        labelThree={deviceThree.video_play_back.features2}      
      />
      : '' }

    {deviceOne.video_play_back.features3 ? 
      <SectionRows
        labelOne={deviceOne.video_play_back.features3}
        labelTwo={deviceTwo.video_play_back.features3}
        labelThree={deviceThree.video_play_back.features3}      
      />
      : deviceTwo.video_play_back.features3 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features3}
        labelTwo={deviceTwo.video_play_back.features3}
        labelThree={deviceThree.video_play_back.features3}      
      />

      : deviceThree.video_play_back.features3 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features3}
        labelTwo={deviceTwo.video_play_back.features3}
        labelThree={deviceThree.video_play_back.features3}      
      />
      : '' }

    {deviceOne.video_play_back.features4 ? 
      <SectionRows
        labelOne={deviceOne.video_play_back.features4}
        labelTwo={deviceTwo.video_play_back.features4}
        labelThree={deviceThree.video_play_back.features4}      
      />
      : deviceTwo.video_play_back.features4 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features4}
        labelTwo={deviceTwo.video_play_back.features4}
        labelThree={deviceThree.video_play_back.features4}      
      />

      : deviceThree.video_play_back.features4 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features4}
        labelTwo={deviceTwo.video_play_back.features4}
        labelThree={deviceThree.video_play_back.features4}      
      />
      : '' }

    {deviceOne.video_play_back.features5 ? 
      <SectionRows
        labelOne={deviceOne.video_play_back.features5}
        labelTwo={deviceTwo.video_play_back.features5}
        labelThree={deviceThree.video_play_back.features5}      
      />
      : deviceTwo.video_play_back.features5 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features5}
        labelTwo={deviceTwo.video_play_back.features5}
        labelThree={deviceThree.video_play_back.features5}      
      />

      : deviceThree.video_play_back.features5 ?
      <SectionRows
        labelOne={deviceOne.video_play_back.features5}
        labelTwo={deviceTwo.video_play_back.features5}
        labelThree={deviceThree.video_play_back.features5}      
      />
      : '' }


    </div>
  )
};

export default SectionVideoPlayBack;