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
        labelOne={deviceOne.camera.mp}
        labelTwo={deviceTwo.camera.mp}
        labelThree={deviceThree.camera.mp}
      />

      <SectionRows
        labelOne={deviceOne.camera.opening}
        labelTwo={deviceTwo.camera.opening}
        labelThree={deviceThree.camera.opening}
      />

      {deviceOne.camera.estabilization ?
        <SectionRows
          labelOne={deviceOne.camera.estabilization}
          labelTwo={deviceTwo.camera.estabilization}
          labelThree={deviceThree.camera.estabilization}
        />
        : deviceTwo.camera.estabilization ?
          <SectionRows
            labelOne={deviceOne.camera.estabilization}
            labelTwo={deviceTwo.camera.estabilization}
            labelThree={deviceThree.camera.estabilization}
          />

          : deviceThree.camera.estabilization ?
            <SectionRows
              labelOne={deviceOne.camera.estabilization}
              labelTwo={deviceTwo.camera.estabilization}
              labelThree={deviceThree.camera.estabilization}
            />
            : ''}

      <SectionRows
        labelOne={deviceOne.camera.zoom}
        labelTwo={deviceTwo.camera.zoom}
        labelThree={deviceThree.camera.zoom}
      />

      <SectionRows
        labelOne={deviceOne.camera.flash}
        labelTwo={deviceTwo.camera.flash}
        labelThree={deviceThree.camera.flash}
      />

      <SectionRows
        labelOne={deviceOne.camera.modos}
        labelTwo={deviceTwo.camera.modos}
        labelThree={deviceThree.camera.modos}
      />

      <SectionRows
        labelOne={deviceOne.camera.features}
        labelTwo={deviceTwo.camera.features}
        labelThree={deviceThree.camera.features}
      />

    </div>
  )
};

export default SectionCamera;