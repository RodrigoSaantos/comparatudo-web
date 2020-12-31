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
        labelOne={deviceOne.audio_play_back.features}
        labelTwo={deviceTwo.audio_play_back.features}
        labelThree={deviceThree.audio_play_back.features}      
      />

      {deviceOne.audio_play_back.features2 ? 
      <SectionRows
        labelOne={deviceOne.audio_play_back.features2}
        labelTwo={deviceTwo.audio_play_back.features2}
        labelThree={deviceThree.audio_play_back.features2}      
      />
      : deviceTwo.audio_play_back.features2 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features2}
        labelTwo={deviceTwo.audio_play_back.features2}
        labelThree={deviceThree.audio_play_back.features2}      
      />

      : deviceThree.audio_play_back.features2 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features2}
        labelTwo={deviceTwo.audio_play_back.features2}
        labelThree={deviceThree.audio_play_back.features2}      
      />
      : '' }

      {deviceOne.audio_play_back.features3 ? 
      <SectionRows
        labelOne={deviceOne.audio_play_back.features3}
        labelTwo={deviceTwo.audio_play_back.features3}
        labelThree={deviceThree.audio_play_back.features3}      
      />
      : deviceTwo.audio_play_back.features3 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features3}
        labelTwo={deviceTwo.audio_play_back.features3}
        labelThree={deviceThree.audio_play_back.features3}      
      />

      : deviceThree.audio_play_back.features3 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features3}
        labelTwo={deviceTwo.audio_play_back.features3}
        labelThree={deviceThree.audio_play_back.features3}      
      />
      : '' }

      {deviceOne.audio_play_back.features4 ? 
      <SectionRows
        labelOne={deviceOne.audio_play_back.features4}
        labelTwo={deviceTwo.audio_play_back.features4}
        labelThree={deviceThree.audio_play_back.features4}      
      />
      : deviceTwo.audio_play_back.features4 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features4}
        labelTwo={deviceTwo.audio_play_back.features4}
        labelThree={deviceThree.audio_play_back.features4}      
      />

      : deviceThree.audio_play_back.features4 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features4}
        labelTwo={deviceTwo.audio_play_back.features4}
        labelThree={deviceThree.audio_play_back.features4}      
      />
      : '' }

      {deviceOne.audio_play_back.features5 ? 
      <SectionRows
        labelOne={deviceOne.audio_play_back.features5}
        labelTwo={deviceTwo.audio_play_back.features5}
        labelThree={deviceThree.audio_play_back.features5}      
      />
      : deviceTwo.audio_play_back.features5 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features5}
        labelTwo={deviceTwo.audio_play_back.features5}
        labelThree={deviceThree.audio_play_back.features5}      
      />

      : deviceThree.audio_play_back.features5 ?
      <SectionRows
        labelOne={deviceOne.audio_play_back.features5}
        labelTwo={deviceTwo.audio_play_back.features5}
        labelThree={deviceThree.audio_play_back.features5}      
      />
      : '' }


    </div>
  )
};

export default SectionAudioPlayBack;