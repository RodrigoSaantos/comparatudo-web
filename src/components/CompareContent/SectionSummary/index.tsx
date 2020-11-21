import React from 'react'
import { InformationDevicesProps } from '..';
import SectionTitle from '../SectionTitle';
import { IconChip, SummaryContainer } from './style';

const SectionSummary: React.FC<InformationDevicesProps> = ({deviceOne, deviceTwo, deviceThree, title, data}) => {
  
  return (
    <SummaryContainer>

      <SectionTitle 
        title={title}
      />

      <div className="resumo-table">
        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className="icon-badge display">
              <p className="text-bold">
              {deviceOne.length === 0 ? [data[0].display] : deviceOne.map(one => {return one.display})}
              </p>
              <p className="text-bold-title">
              {deviceOne.length === 0 ? [data[0].polegada] : deviceOne.map(one => {return one.polegada})}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="icon-badge display">
              <p className="text-bold">
              {deviceTwo.length === 0 ? [data[1].display] : deviceTwo.map(two => {return two.display})}
              </p>
              <p className="text-bold-title">
              {deviceTwo.length === 0 ? [data[1].polegada] : deviceTwo.map(two => {return two.polegada})}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="icon-badge display">
              <p className="text-bold">
              {deviceThree.length === 0 ? [data[2].display] : deviceThree.map(three => {return three.display})}
              </p>
              <p className="text-bold-title">
              {deviceThree.length === 0 ? [data[2].polegada] : deviceThree.map(three => {return three.polegada})}
              </p>
            </figure>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.map(one => {return one.iconSystem})[0] ? "image-icon-system " + deviceOne.map(one => {return one.iconSystem})[0] : "image-icon-system" }>
            </figure>
            <p className="text-bold">
            {deviceOne.length === 0 ? [data[0].systemVersion] : deviceOne.map(one => {return one.systemVersion})}<br />
            {deviceOne.length === 0 ? [data[0].year] : deviceOne.map(one => {return one.year})}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.map(two => {return two.iconSystem})[0] ? "image-icon-system " + deviceTwo.map(two => {return two.iconSystem})[0] : "image-icon-system" }>
            </figure>
            <p className="text-bold">
            {deviceTwo.length === 0 ? [data[1].systemVersion] : deviceTwo.map(two => {return two.systemVersion})} <br/>
            {deviceTwo.length === 0 ? [data[1].year] : deviceTwo.map(two => {return two.year})}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.map(three => {return three.iconSystem})[0] ? "image-icon-system " + deviceThree.map(three => {return three.iconSystem})[0] : "image-icon-system" }>
            </figure>
            <p className="text-bold">
            {deviceThree.length === 0 ? [data[2].systemVersion] : deviceThree.map(three => {return three.systemVersion})} <br/>
            {deviceThree.length === 0 ? [data[2].year] : deviceThree.map(three => {return three.year})}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className="icon-badge">
              <p className="text-bold">
              {deviceOne.length === 0 ? [data[0].structure] : deviceOne.map(one => {return one.structure})}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="icon-badge">
              <p className="text-bold">
              {deviceTwo.length === 0 ? [data[1].structure] : deviceTwo.map(two => {return two.structure})}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="icon-badge">
              <p className="text-bold">
              {deviceThree.length === 0 ? [data[2].structure] : deviceThree.map(three => {return three.structure})}
              </p>
            </figure>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.map(one => {return one.modelo})[0] ? "image-icon-camera " + deviceOne.map(one => {return one.modelo})[0] : "image-icon-camera" }>
            </figure>
            <p className="text-bold">
            {deviceOne.length === 0 ? [data[0].cameraBack] : deviceOne.map(one => {return one.cameraBack})}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.map(two => {return two.modelo})[0] ? "image-icon-camera " + deviceTwo.map(two => {return two.modelo})[0] : "image-icon-camera" }>
            </figure>
            <p className="text-bold">
            {deviceTwo.length === 0 ? [data[1].cameraBack] : deviceTwo.map(two => {return two.cameraBack})}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.map(three => {return three.modelo})[0] ? "image-icon-camera " + deviceThree.map(three => {return three.modelo})[0] : "image-icon-camera" }>
            </figure>
            <p className="text-bold">
            {deviceThree.length === 0 ? [data[2].cameraBack] : deviceThree.map(three => {return three.cameraBack})}
              
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className="icon-badge">
              <p className="text-bold-title-camera">
                Câmera Frontal
              </p>
              <p className="text-bold">
              {deviceOne.length === 0 ? [data[0].cameraFront] : deviceOne.map(one => {return one.cameraFront})}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="icon-badge">
              <p className="text-bold-title-camera">
                Câmera Frontal
              </p>
              <p className="text-bold">
              {deviceTwo.length === 0 ? [data[1].cameraFront] : deviceTwo.map(two => {return two.cameraFront})}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="icon-badge">
              <p className="text-bold-title-camera">
                Câmera Frontal
              </p>
              <p className="text-bold">
              {deviceThree.length === 0 ? [data[2].cameraFront] : deviceThree.map(three => {return three.cameraFront})}
              </p>
            </figure>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.map(one => {return one.iconLock})[0] ? "image-icon-lock " + deviceOne.map(one => {return one.iconLock})[0] : "image-icon-lock" }>
            </figure>
            <p className="text-bold">
            {deviceOne.length === 0 ? [data[0].block] : deviceOne.map(one => {return one.block})}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.map(two => {return two.iconLock})[0] ? "image-icon-lock " + deviceTwo.map(two => {return two.iconLock})[0] : "image-icon-lock" }>
            </figure>
            <p className="text-bold">
            {deviceTwo.length === 0 ? [data[1].block] : deviceTwo.map(two => {return two.block})}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.map(three => {return three.iconLock})[0] ? "image-icon-lock " + deviceThree.map(three => {return three.iconLock})[0] : "image-icon-lock" }>
            </figure>
            <p className="text-bold">
            {deviceThree.length === 0 ? [data[2].block] : deviceThree.map(three => {return three.block})}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <IconChip>
            <figure className={deviceOne.map(one => {return one.iconChip})[0] ? "image-icon-chip " + deviceOne.map(one => {return one.iconChip})[0] : "image-icon-chip" }>
            </figure>
            </IconChip>
            <p className="text-bold">
            {deviceOne.length === 0 ? [data[0].chip] : deviceOne.map(one => {return one.chip})}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <IconChip>
            <figure className={deviceTwo.map(two => {return two.iconChip})[0] ? "image-icon-chip " + deviceTwo.map(two => {return two.iconChip})[0] : "image-icon-chip" }>
            </figure>
            </IconChip>
            <p className="text-bold">
            {deviceTwo.length === 0 ? [data[1].chip] : deviceTwo.map(two => {return two.chip})}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <IconChip>
            <figure className={deviceThree.map(three => {return three.iconChip})[0] ? "image-icon-chip " + deviceThree.map(three => {return three.iconChip})[0] : "image-icon-chip" }>
            </figure>
            </IconChip>
            <p className="text-bold">
            {deviceThree.length === 0 ? [data[2].chip] : deviceThree.map(three => {return three.chip})}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className="image-icon-battery">
            </figure>
            <p className="text-bold">
            {deviceOne.length === 0 ? [data[0].battery] : deviceOne.map(one => {return one.battery})}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="image-icon-battery">
            </figure>
            <p className="text-bold">
            {deviceTwo.length === 0 ? [data[1].battery] : deviceTwo.map(two => {return two.battery})}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="image-icon-battery">
            </figure>
            <p className="text-bold">
            {deviceThree.length === 0 ? [data[2].battery] : deviceThree.map(three => {return three.battery})}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.map(one => {return one.iconWave})[0] ? "image-icon-wave " + deviceOne.map(one => {return one.iconWave})[0] : "image-icon-wave" }>
            </figure>
            <p className="text-bold-title">
            {deviceOne.length === 0 ? [data[0].waveMeters] : deviceOne.map(one => {return one.waveMeters})}
            </p>
            <p className="text-bold">
            {deviceOne.length === 0 ? [data[0].wave] : deviceOne.map(one => {return one.wave})}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.map(two => {return two.iconWave})[0] ? "image-icon-wave " + deviceTwo.map(two => {return two.iconWave})[0] : "image-icon-wave" }>
            </figure>
            <p className="text-bold-title">
            {deviceTwo.length === 0 ? [data[1].waveMeters] : deviceTwo.map(two => {return two.waveMeters})}
            </p>
            <p className="text-bold">
            {deviceTwo.length === 0 ? [data[1].wave] : deviceTwo.map(two => {return two.wave})}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.map(three => {return three.iconWave})[0] ? "image-icon-wave " + deviceThree.map(three => {return three.iconWave})[0] : "image-icon-wave" }>
            </figure>
            <p className="text-bold-title">
            {deviceThree.length === 0 ? [data[2].waveMeters] : deviceThree.map(three => {return three.waveMeters})}
            </p>
            <p className="text-bold">
            {deviceThree.length === 0 ? [data[2].wave] : deviceThree.map(three => {return three.wave})}
            </p>
          </div>
        </div>

      </div>
    </SummaryContainer>

  )
};

export default SectionSummary;