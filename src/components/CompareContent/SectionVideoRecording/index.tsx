import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionVideoRecording: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-video-recording">
      <SectionTitle
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.video_recording.resolution}
        labelTwo={deviceTwo.video_recording.resolution}
        labelThree={deviceThree.video_recording.resolution}
      />

      {deviceOne.video_recording.estabilization ?
        <SectionRows
          labelOne={deviceOne.video_recording.estabilization}
          labelTwo={deviceTwo.video_recording.estabilization}
          labelThree={deviceThree.video_recording.estabilization}
        />
        : deviceTwo.video_recording.estabilization ?
          <SectionRows
            labelOne={deviceOne.video_recording.estabilization}
            labelTwo={deviceTwo.video_recording.estabilization}
            labelThree={deviceThree.video_recording.estabilization}
          />

          : deviceThree.video_recording.estabilization ?
            <SectionRows
              labelOne={deviceOne.video_recording.estabilization}
              labelTwo={deviceTwo.video_recording.estabilization}
              labelThree={deviceThree.video_recording.estabilization}
            />
            : ''}

      {deviceOne.video_recording.zoom ?
        <SectionRows
          labelOne={deviceOne.video_recording.zoom}
          labelTwo={deviceTwo.video_recording.zoom}
          labelThree={deviceThree.video_recording.zoom}
        />
        : deviceTwo.video_recording.zoom ?
          <SectionRows
            labelOne={deviceOne.video_recording.zoom}
            labelTwo={deviceTwo.video_recording.zoom}
            labelThree={deviceThree.video_recording.zoom}
          />

          : deviceThree.video_recording.zoom ?
            <SectionRows
              labelOne={deviceOne.video_recording.zoom}
              labelTwo={deviceTwo.video_recording.zoom}
              labelThree={deviceThree.video_recording.zoom}
            />
            : ''}

      <SectionRows
        labelOne={deviceOne.video_recording.slowMotion}
        labelTwo={deviceTwo.video_recording.slowMotion}
        labelThree={deviceThree.video_recording.slowMotion}
      />

      <SectionRows
        labelOne={deviceOne.video_recording.features}
        labelTwo={deviceTwo.video_recording.features}
        labelThree={deviceThree.video_recording.features}
      />

      {deviceOne.video_recording.features2 ?
        <SectionRows
          labelOne={deviceOne.video_recording.features2}
          labelTwo={deviceTwo.video_recording.features2}
          labelThree={deviceThree.video_recording.features2}
        />
        : deviceTwo.video_recording.features2 ?
          <SectionRows
            labelOne={deviceOne.video_recording.features2}
            labelTwo={deviceTwo.video_recording.features2}
            labelThree={deviceThree.video_recording.features2}
          />

          : deviceThree.video_recording.features2?
            <SectionRows
              labelOne={deviceOne.video_recording.features2}
              labelTwo={deviceTwo.video_recording.features2}
              labelThree={deviceThree.video_recording.features2}
            />
            : ''}

      {deviceOne.video_recording.features3 ?
        <SectionRows
          labelOne={deviceOne.video_recording.features3}
          labelTwo={deviceTwo.video_recording.features3}
          labelThree={deviceThree.video_recording.features3}
        />
        : deviceTwo.video_recording.features3 ?
          <SectionRows
            labelOne={deviceOne.video_recording.features3}
            labelTwo={deviceTwo.video_recording.features3}
            labelThree={deviceThree.video_recording.features3}
          />

          : deviceThree.video_recording.features3 ?
            <SectionRows
              labelOne={deviceOne.video_recording.features3}
              labelTwo={deviceTwo.video_recording.features3}
              labelThree={deviceThree.video_recording.features3}
            />
            : ''}

      {deviceOne.video_recording.features4 ?
        <SectionRows
          labelOne={deviceOne.video_recording.features4}
          labelTwo={deviceTwo.video_recording.features4}
          labelThree={deviceThree.video_recording.features4}
        />
        : deviceTwo.video_recording.features4 ?
          <SectionRows
            labelOne={deviceOne.video_recording.features4}
            labelTwo={deviceTwo.video_recording.features4}
            labelThree={deviceThree.video_recording.features4}
          />

          : deviceThree.video_recording.features4 ?
            <SectionRows
              labelOne={deviceOne.video_recording.features4}
              labelTwo={deviceTwo.video_recording.features4}
              labelThree={deviceThree.video_recording.features4}
            />
            : ''}

      {deviceOne.video_recording.features5 ?
        <SectionRows
          labelOne={deviceOne.video_recording.features5}
          labelTwo={deviceTwo.video_recording.features5}
          labelThree={deviceThree.video_recording.features5}
        />
        : deviceTwo.video_recording.features5 ?
          <SectionRows
            labelOne={deviceOne.video_recording.features5}
            labelTwo={deviceTwo.video_recording.features5}
            labelThree={deviceThree.video_recording.features5}
          />

          : deviceThree.video_recording.features5 ?
            <SectionRows
              labelOne={deviceOne.video_recording.features5}
              labelTwo={deviceTwo.video_recording.features5}
              labelThree={deviceThree.video_recording.features5}
            />
            : ''}

    </div>
  )
};

export default SectionVideoRecording;