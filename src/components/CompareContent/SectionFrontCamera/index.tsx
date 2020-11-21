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
        labelOne={deviceOne.length === 0 ? [data[0].cameraFrontMP] : deviceOne.map(one => { return one.cameraFrontMP })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraFrontMP] : deviceTwo.map(two => { return two.cameraFrontMP })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraFrontMP] : deviceThree.map(three => { return three.cameraFrontMP })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraFrontOpening] : deviceOne.map(one => { return one.cameraFrontOpening })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraFrontOpening] : deviceTwo.map(two => { return two.cameraFrontOpening })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraFrontOpening] : deviceThree.map(three => { return three.cameraFrontOpening })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraFrontFlash] : deviceOne.map(one => { return one.cameraFrontFlash })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraFrontFlash] : deviceTwo.map(two => { return two.cameraFrontFlash })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraFrontFlash] : deviceThree.map(three => { return three.cameraFrontFlash })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraFrontModos] : deviceOne.map(one => { return one.cameraFrontModos })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraFrontModos] : deviceTwo.map(two => { return two.cameraFrontModos })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraFrontModos] : deviceThree.map(three => { return three.cameraFrontModos })}
      />

      <SectionRows
        labelOne={deviceOne.length === 0 ? [data[0].cameraFrontFeatures] : deviceOne.map(one => { return one.cameraFrontFeatures })}
        labelTwo={deviceTwo.length === 0 ? [data[1].cameraFrontFeatures] : deviceTwo.map(two => { return two.cameraFrontFeatures })}
        labelThree={deviceThree.length === 0 ? [data[2].cameraFrontFeatures] : deviceThree.map(three => { return three.cameraFrontFeatures })}
      />

      {deviceOne.map(one => {return one.cameraFrontFeatures2.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures2})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures2})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures2})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures2})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures2.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures2})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures2})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures2})}      
      />
      : '' }

      {deviceOne.map(one => {return one.cameraFrontFeatures3.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures3})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures3})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures3})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures3})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures3.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures3})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures3})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures3})}      
      />
      : '' }

      {deviceOne.map(one => {return one.cameraFrontFeatures4.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures4})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures4})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures4.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures4})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures4})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures4.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures4})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures4})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures4})}      
      />
      : '' }

      {deviceOne.map(one => {return one.cameraFrontFeatures5.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures5})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures5})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures5.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures5})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures5})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures5.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures5})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures5})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures5})}      
      />
      : '' }

      {deviceOne.map(one => {return one.cameraFrontFeatures6.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures6})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures6})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures6})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures6.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures6})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures6})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures6})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures6.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures6})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures6})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures6})}      
      />
      : '' }

      {deviceOne.map(one => {return one.cameraFrontFeatures7.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures7})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures7})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures7})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures7.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures7})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures7})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures7})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures7.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures7})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures7})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures7})}      
      />
      : '' }

      {deviceOne.map(one => {return one.cameraFrontFeatures8.length}) >= [1] ? 
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures8})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures8})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures8})}      
      />
      : deviceTwo.map(two => {return two.cameraFrontFeatures8.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures8})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures8})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures8})}      
      />

      : deviceThree.map(three => {return three.cameraFrontFeatures8.length}) >= [1] ?
      <SectionRows
        labelOne={deviceOne.map(one => {return one.cameraFrontFeatures8})}
        labelTwo={deviceTwo.map(two => {return two.cameraFrontFeatures8})}
        labelThree={deviceThree.map(three => {return three.cameraFrontFeatures8})}      
      />
      : '' }



    </div>
  )
};

export default SectionFrontCamera;