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
        labelOne={deviceOne.length === 0 ? [data[0].videoResolution] : deviceOne.map(one => { return one.videoResolution })}
        labelTwo={deviceTwo.length === 0 ? [data[1].videoResolution] : deviceTwo.map(two => { return two.videoResolution })}
        labelThree={deviceThree.length === 0 ? [data[2].videoResolution] : deviceThree.map(three => { return three.videoResolution })}
      />

      {deviceOne.map(one => { return one.videoStabilizationOptical.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.length === 0 ? [data[0].videoStabilizationOptical] : deviceOne.map(one => { return one.videoStabilizationOptical })}
          labelTwo={deviceTwo.length === 0 ? [data[1].videoStabilizationOptical] : deviceTwo.map(two => { return two.videoStabilizationOptical })}
          labelThree={deviceThree.length === 0 ? [data[2].videoStabilizationOptical] : deviceThree.map(three => { return three.videoStabilizationOptical })}
        />
        : deviceTwo.map(two => { return two.videoZoomFeatures.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.length === 0 ? [data[0].videoStabilizationOptical] : deviceOne.map(one => { return one.videoStabilizationOptical })}
            labelTwo={deviceTwo.length === 0 ? [data[1].videoStabilizationOptical] : deviceTwo.map(two => { return two.videoStabilizationOptical })}
            labelThree={deviceThree.length === 0 ? [data[2].videoStabilizationOptical] : deviceThree.map(three => { return three.videoStabilizationOptical })}
          />

          : deviceThree.map(three => { return three.videoZoomFeatures.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.length === 0 ? [data[0].videoStabilizationOptical] : deviceOne.map(one => { return one.videoStabilizationOptical })}
              labelTwo={deviceTwo.length === 0 ? [data[1].videoStabilizationOptical] : deviceTwo.map(two => { return two.videoStabilizationOptical })}
              labelThree={deviceThree.length === 0 ? [data[2].videoStabilizationOptical] : deviceThree.map(three => { return three.videoStabilizationOptical })}
            />
            : ''}

      {deviceOne.map(one => { return one.videoZoom.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.length === 0 ? [data[0].videoZoom] : deviceOne.map(one => { return one.videoZoom })}
          labelTwo={deviceTwo.length === 0 ? [data[1].videoZoom] : deviceTwo.map(two => { return two.videoZoom })}
          labelThree={deviceThree.length === 0 ? [data[2].videoZoom] : deviceThree.map(three => { return three.videoZoom })}
        />
        : deviceTwo.map(two => { return two.videoZoom.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.length === 0 ? [data[0].videoZoom] : deviceOne.map(one => { return one.videoZoom })}
            labelTwo={deviceTwo.length === 0 ? [data[1].videoZoom] : deviceTwo.map(two => { return two.videoZoom })}
            labelThree={deviceThree.length === 0 ? [data[2].videoZoom] : deviceThree.map(three => { return three.videoZoom })}
          />

          : deviceThree.map(three => { return three.videoZoom.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.length === 0 ? [data[0].videoZoom] : deviceOne.map(one => { return one.videoZoom })}
              labelTwo={deviceTwo.length === 0 ? [data[1].videoZoom] : deviceTwo.map(two => { return two.videoZoom })}
              labelThree={deviceThree.length === 0 ? [data[2].videoZoom] : deviceThree.map(three => { return three.videoZoom })}
            />
            : ''}

      {deviceOne.map(one => { return one.videoZoomFeatures.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.map(one => { return one.videoZoomFeatures })}
          labelTwo={deviceTwo.map(two => { return two.videoZoomFeatures })}
          labelThree={deviceThree.map(three => { return three.videoZoomFeatures })}
        />
        : deviceTwo.map(two => { return two.videoZoomFeatures.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.map(one => { return one.videoZoomFeatures })}
            labelTwo={deviceTwo.map(two => { return two.videoZoomFeatures })}
            labelThree={deviceThree.map(three => { return three.videoZoomFeatures })}
          />

          : deviceThree.map(three => { return three.videoZoomFeatures.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.map(one => { return one.videoZoomFeatures })}
              labelTwo={deviceTwo.map(two => { return two.videoZoomFeatures })}
              labelThree={deviceThree.map(three => { return three.videoZoomFeatures })}
            />
            : ''}



      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].videoSlowMotion] : deviceOne.map(one => { return one.videoSlowMotion })}
        labelTwo={deviceTwo.length === 0 ? [data[1].videoSlowMotion] : deviceTwo.map(two => { return two.videoSlowMotion })}
        labelThree={deviceThree.length === 0 ? [data[2].videoSlowMotion] : deviceThree.map(three => { return three.videoSlowMotion })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].videoFeatures] : deviceOne.map(one => { return one.videoFeatures })}
        labelTwo={deviceTwo.length === 0 ? [data[1].videoFeatures] : deviceTwo.map(two => { return two.videoFeatures })}
        labelThree={deviceThree.length === 0 ? [data[2].videoFeatures] : deviceThree.map(three => { return three.videoFeatures })}
      />

      {deviceOne.map(one => { return one.videoFeatures2.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.map(one => { return one.videoFeatures2 })}
          labelTwo={deviceTwo.map(two => { return two.videoFeatures2 })}
          labelThree={deviceThree.map(three => { return three.videoFeatures2 })}
        />
        : deviceTwo.map(two => { return two.videoFeatures2.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.map(one => { return one.videoFeatures2 })}
            labelTwo={deviceTwo.map(two => { return two.videoFeatures2 })}
            labelThree={deviceThree.map(three => { return three.videoFeatures2 })}
          />

          : deviceThree.map(three => { return three.videoFeatures2.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.map(one => { return one.videoFeatures2 })}
              labelTwo={deviceTwo.map(two => { return two.videoFeatures2 })}
              labelThree={deviceThree.map(three => { return three.videoFeatures2 })}
            />
            : ''}

      {deviceOne.map(one => { return one.videoFeatures3.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.map(one => { return one.videoFeatures3 })}
          labelTwo={deviceTwo.map(two => { return two.videoFeatures3 })}
          labelThree={deviceThree.map(three => { return three.videoFeatures3 })}
        />
        : deviceTwo.map(two => { return two.videoFeatures3.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.map(one => { return one.videoFeatures3 })}
            labelTwo={deviceTwo.map(two => { return two.videoFeatures3 })}
            labelThree={deviceThree.map(three => { return three.videoFeatures3 })}
          />

          : deviceThree.map(three => { return three.videoFeatures3.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.map(one => { return one.videoFeatures3 })}
              labelTwo={deviceTwo.map(two => { return two.videoFeatures3 })}
              labelThree={deviceThree.map(three => { return three.videoFeatures3 })}
            />
            : ''}

      {deviceOne.map(one => { return one.videoFeatures4.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.map(one => { return one.videoFeatures4 })}
          labelTwo={deviceTwo.map(two => { return two.videoFeatures4 })}
          labelThree={deviceThree.map(three => { return three.videoFeatures4 })}
        />
        : deviceTwo.map(two => { return two.videoFeatures4.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.map(one => { return one.videoFeatures4 })}
            labelTwo={deviceTwo.map(two => { return two.videoFeatures4 })}
            labelThree={deviceThree.map(three => { return three.videoFeatures4 })}
          />

          : deviceThree.map(three => { return three.videoFeatures4.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.map(one => { return one.videoFeatures4 })}
              labelTwo={deviceTwo.map(two => { return two.videoFeatures4 })}
              labelThree={deviceThree.map(three => { return three.videoFeatures4 })}
            />
            : ''}



    </div>
  )
};

export default SectionVideoRecording;