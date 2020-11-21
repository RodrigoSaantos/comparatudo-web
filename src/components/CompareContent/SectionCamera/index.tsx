import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionCamera: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-camera">
      <SectionTitle
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraBackFull] : deviceOne.map(one => { return one.cameraBackFull })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackFull] : deviceTwo.map(two => { return two.cameraBackFull })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraBackFull] : deviceThree.map(three => { return three.cameraBackFull })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraBackOpenig] : deviceOne.map(one => { return one.cameraBackOpenig })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackOpenig] : deviceTwo.map(two => { return two.cameraBackOpenig })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraBackOpenig] : deviceThree.map(three => { return three.cameraBackOpenig })}
      />

      {deviceOne.map(one => { return one.cameraBackEstabilizationOpitical.length }) >= [1] ?
        <SectionRows
          labelOne={deviceOne.length === 0 ? [data[0].cameraBackEstabilizationOpitical] : deviceOne.map(one => { return one.cameraBackEstabilizationOpitical })}
          labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackEstabilizationOpitical] : deviceTwo.map(two => { return two.cameraBackEstabilizationOpitical })}
          labelThree={deviceThree.length === 0 ? [data[2].cameraBackEstabilizationOpitical] : deviceThree.map(three => { return three.cameraBackEstabilizationOpitical })}
        />
        : deviceTwo.map(two => { return two.cameraBackEstabilizationOpitical.length }) >= [1] ?
          <SectionRows
            labelOne={deviceOne.length === 0 ? [data[0].cameraBackEstabilizationOpitical] : deviceOne.map(one => { return one.cameraBackEstabilizationOpitical })}
            labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackEstabilizationOpitical] : deviceTwo.map(two => { return two.cameraBackEstabilizationOpitical })}
            labelThree={deviceThree.length === 0 ? [data[2].cameraBackEstabilizationOpitical] : deviceThree.map(three => { return three.cameraBackEstabilizationOpitical })}
          />

          : deviceThree.map(three => { return three.cameraBackEstabilizationOpitical.length }) >= [1] ?
            <SectionRows
              labelOne={deviceOne.length === 0 ? [data[0].cameraBackEstabilizationOpitical] : deviceOne.map(one => { return one.cameraBackEstabilizationOpitical })}
              labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackEstabilizationOpitical] : deviceTwo.map(two => { return two.cameraBackEstabilizationOpitical })}
              labelThree={deviceThree.length === 0 ? [data[2].cameraBackEstabilizationOpitical] : deviceThree.map(three => { return three.cameraBackEstabilizationOpitical })}
            />
            : ''}

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraBackZoom] : deviceOne.map(one => { return one.cameraBackZoom })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackZoom] : deviceTwo.map(two => { return two.cameraBackZoom })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraBackZoom] : deviceThree.map(three => { return three.cameraBackZoom })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraBackFlash] : deviceOne.map(one => { return one.cameraBackFlash })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackFlash] : deviceTwo.map(two => { return two.cameraBackFlash })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraBackFlash] : deviceThree.map(three => { return three.cameraBackFlash })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraBackModos] : deviceOne.map(one => { return one.cameraBackModos })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackModos] : deviceTwo.map(two => { return two.cameraBackModos })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraBackModos] : deviceThree.map(three => { return three.cameraBackModos })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraBackFeatures] : deviceOne.map(one => { return one.cameraBackFeatures })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraBackFeatures] : deviceTwo.map(two => { return two.cameraBackFeatures })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraBackFeatures] : deviceThree.map(three => { return three.cameraBackFeatures })}
      />

    </div>
  )
};

export default SectionCamera;