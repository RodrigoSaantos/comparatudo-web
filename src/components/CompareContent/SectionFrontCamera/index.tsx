import React from 'react'
import { InformationDevicesProps } from '..';
import SectionRows from '../../SectionRows';
import SectionTitle from '../SectionTitle';

const SectionFrontCamera: React.FC<InformationDevicesProps> = ({ deviceOne, deviceTwo, deviceThree, title, data }) => {
  return (
    <div className="section-front-camera">
      <SectionTitle 
        title={title}
      />

      <SectionRows
        labelOne={deviceOne.front_camera.mp}
        labelTwo={deviceTwo.front_camera.mp}
        labelThree={deviceThree.front_camera.mp}
      />

      <SectionRows
        labelOne={deviceOne.front_camera.opening}
        labelTwo={deviceTwo.front_camera.opening}
        labelThree={deviceThree.front_camera.opening}
      />

      <SectionRows
        labelOne={deviceOne.front_camera.flash}
        labelTwo={deviceTwo.front_camera.flash}
        labelThree={deviceThree.front_camera.flash}
      />

      <SectionRows
        labelOne={deviceOne.front_camera.modos}
        labelTwo={deviceTwo.front_camera.modos}
        labelThree={deviceThree.front_camera.modos}
      />

      <SectionRows
        labelOne={deviceOne.front_camera.features}
        labelTwo={deviceTwo.front_camera.features}
        labelThree={deviceThree.front_camera.features}
      />

      {deviceOne.front_camera.features2 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features2}
        labelTwo={deviceTwo.front_camera.features2}
        labelThree={deviceThree.front_camera.features2}      
      />
      : deviceTwo.front_camera.features2 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features2}
        labelTwo={deviceTwo.front_camera.features2}
        labelThree={deviceThree.front_camera.features2}      
      />

      : deviceThree.front_camera.features2 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features2}
        labelTwo={deviceTwo.front_camera.features2}
        labelThree={deviceThree.front_camera.features2}      
      />
      : '' }

      {deviceOne.front_camera.features3 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features3}
        labelTwo={deviceTwo.front_camera.features3}
        labelThree={deviceThree.front_camera.features3}      
      />
      : deviceTwo.front_camera.features3 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features3}
        labelTwo={deviceTwo.front_camera.features3}
        labelThree={deviceThree.front_camera.features3}      
      />

      : deviceThree.front_camera.features3 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features3}
        labelTwo={deviceTwo.front_camera.features3}
        labelThree={deviceThree.front_camera.features3}      
      />
      : '' }

      {deviceOne.front_camera.features4 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features4}
        labelTwo={deviceTwo.front_camera.features4}
        labelThree={deviceThree.front_camera.features4}      
      />
      : deviceTwo.front_camera.features4 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features4}
        labelTwo={deviceTwo.front_camera.features4}
        labelThree={deviceThree.front_camera.features4}      
      />

      : deviceThree.front_camera.features4 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features4}
        labelTwo={deviceTwo.front_camera.features4}
        labelThree={deviceThree.front_camera.features4}      
      />
      : '' }

      {deviceOne.front_camera.features5 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features5}
        labelTwo={deviceTwo.front_camera.features5}
        labelThree={deviceThree.front_camera.features5}      
      />
      : deviceTwo.front_camera.features5 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features5}
        labelTwo={deviceTwo.front_camera.features5}
        labelThree={deviceThree.front_camera.features5}      
      />

      : deviceThree.front_camera.features5 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features5}
        labelTwo={deviceTwo.front_camera.features5}
        labelThree={deviceThree.front_camera.features5}      
      />
      : '' }

      {deviceOne.front_camera.features6 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features6}
        labelTwo={deviceTwo.front_camera.features6}
        labelThree={deviceThree.front_camera.features6}      
      />
      : deviceTwo.front_camera.features6 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features6}
        labelTwo={deviceTwo.front_camera.features6}
        labelThree={deviceThree.front_camera.features6}      
      />

      : deviceThree.front_camera.features6 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features6}
        labelTwo={deviceTwo.front_camera.features6}
        labelThree={deviceThree.front_camera.features6}      
      />
      : '' }

      {deviceOne.front_camera.features7 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features7}
        labelTwo={deviceTwo.front_camera.features7}
        labelThree={deviceThree.front_camera.features7}      
      />
      : deviceTwo.front_camera.features7 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features7}
        labelTwo={deviceTwo.front_camera.features7}
        labelThree={deviceThree.front_camera.features7}      
      />

      : deviceThree.front_camera.features7 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features7}
        labelTwo={deviceTwo.front_camera.features7}
        labelThree={deviceThree.front_camera.features7}      
      />
      : '' }

      {deviceOne.front_camera.features8 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features8}
        labelTwo={deviceTwo.front_camera.features8}
        labelThree={deviceThree.front_camera.features8}      
      />
      : deviceTwo.front_camera.features8 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features8}
        labelTwo={deviceTwo.front_camera.features8}
        labelThree={deviceThree.front_camera.features8}      
      />

      : deviceThree.front_camera.features8 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features8}
        labelTwo={deviceTwo.front_camera.features8}
        labelThree={deviceThree.front_camera.features8}      
      />
      : '' }

      {deviceOne.front_camera.features9 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features9}
        labelTwo={deviceTwo.front_camera.features9}
        labelThree={deviceThree.front_camera.features9}      
      />
      : deviceTwo.front_camera.features9 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features9}
        labelTwo={deviceTwo.front_camera.features9}
        labelThree={deviceThree.front_camera.features9}      
      />

      : deviceThree.front_camera.features9 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features9}
        labelTwo={deviceTwo.front_camera.features9}
        labelThree={deviceThree.front_camera.features9}      
      />
      : '' }

      {deviceOne.front_camera.features10 ? 
      <SectionRows
        labelOne={deviceOne.front_camera.features10}
        labelTwo={deviceTwo.front_camera.features10}
        labelThree={deviceThree.front_camera.features10}      
      />
      : deviceTwo.front_camera.features10 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features10}
        labelTwo={deviceTwo.front_camera.features10}
        labelThree={deviceThree.front_camera.features10}      
      />

      : deviceThree.front_camera.features10 ?
      <SectionRows
        labelOne={deviceOne.front_camera.features10}
        labelTwo={deviceTwo.front_camera.features10}
        labelThree={deviceThree.front_camera.features10}      
      />
      : '' }

    </div>
  )
};

export default SectionFrontCamera;