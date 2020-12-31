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
              {deviceOne.summary.display}
              </p>
              <p className="text-bold-title">
              {deviceOne.summary.polegada}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="icon-badge display">
              <p className="text-bold">
              {deviceTwo.summary.display}
              </p>
              <p className="text-bold-title">
              {deviceTwo.summary.polegada}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="icon-badge display">
              <p className="text-bold">
              {deviceThree.summary.display}
              </p>
              <p className="text-bold-title">
              {deviceThree.summary.polegada}
              </p>
            </figure>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.icon.system ? "image-icon-system " + deviceOne.icon.system : "image-icon-system" }>
            </figure>
            <p className="text-bold">
            {deviceOne.summary.system}<br />
            {deviceOne.summary.year}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.icon.system ? "image-icon-system " + deviceTwo.icon.system : "image-icon-system" }>
            </figure>
            <p className="text-bold">
            {deviceTwo.summary.system} <br/>
            {deviceTwo.summary.year}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.icon.system ? "image-icon-system " + deviceThree.icon.system : "image-icon-system" }>
            </figure>
            <p className="text-bold">
            {deviceThree.summary.system} <br/>
            {deviceThree.summary.year}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className="icon-badge">
              <p className="text-bold">
              {deviceOne.summary.structure}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="icon-badge">
              <p className="text-bold">
              {deviceTwo.summary.structure}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="icon-badge">
              <p className="text-bold">
              {deviceThree.summary.structure}
              </p>
            </figure>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.modelo ? "image-icon-camera " + deviceOne.modelo : "image-icon-camera" }>
            </figure>
            <p className="text-bold">
            {deviceOne.summary.camera}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.modelo ? "image-icon-camera " + deviceTwo.modelo : "image-icon-camera" }>
            </figure>
            <p className="text-bold">
            {deviceTwo.summary.camera}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.modelo ? "image-icon-camera " + deviceThree.modelo : "image-icon-camera" }>
            </figure>
            <p className="text-bold">
            {deviceThree.summary.camera}
              
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
              {deviceOne.summary.cameraFront}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="icon-badge">
              <p className="text-bold-title-camera">
                Câmera Frontal
              </p>
              <p className="text-bold">
              {deviceTwo.summary.cameraFront}
              </p>
            </figure>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="icon-badge">
              <p className="text-bold-title-camera">
                Câmera Frontal
              </p>
              <p className="text-bold">
              {deviceThree.summary.cameraFront}
              </p>
            </figure>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.icon.lock ? "image-icon-lock " + deviceOne.icon.lock : "image-icon-lock" }>
            </figure>
            <p className="text-bold">
            {deviceOne.summary.lock}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.icon.lock ? "image-icon-lock " + deviceTwo.icon.lock : "image-icon-lock" }>
            </figure>
            <p className="text-bold">
            {deviceTwo.summary.lock}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.icon.lock ? "image-icon-lock " + deviceThree.icon.lock : "image-icon-lock" }>
            </figure>
            <p className="text-bold">
            {deviceThree.summary.lock}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <IconChip>
            <figure className={deviceOne.icon.chip ? "image-icon-chip " + deviceOne.icon.chip : "image-icon-chip" }>
            </figure>
            </IconChip>
            <p className="text-bold">
            {deviceOne.summary.chip}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <IconChip>
            <figure className={deviceTwo.icon.chip ? "image-icon-chip " + deviceTwo.icon.chip : "image-icon-chip" }>
            </figure>
            </IconChip>
            <p className="text-bold">
            {deviceTwo.summary.chip}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <IconChip>
            <figure className={deviceThree.icon.chip ? "image-icon-chip " + deviceThree.icon.chip : "image-icon-chip" }>
            </figure>
            </IconChip>
            <p className="text-bold">
            {deviceThree.summary.chip}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className="image-icon-battery">
            </figure>
            <p className="text-bold">
            {deviceOne.summary.battery}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className="image-icon-battery">
            </figure>
            <p className="text-bold">
            {deviceTwo.summary.battery}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className="image-icon-battery">
            </figure>
            <p className="text-bold">
            {deviceThree.summary.battery}
            </p>
          </div>
        </div>

        <div className="compare-row">
          <div className="compare-column compare-column-one">
            <figure className={deviceOne.icon.wave ? "image-icon-wave " + deviceOne.icon.wave : "image-icon-wave" }>
            </figure>
            <p className="text-bold-title">
            {deviceOne.summary.meters}
            </p>
            <p className="text-bold">
            {deviceOne.summary.resistance}
            </p>
          </div>
          <div className="compare-column compare-column-two">
            <figure className={deviceTwo.icon.wave ? "image-icon-wave " + deviceTwo.icon.wave : "image-icon-wave" }>
            </figure>
            <p className="text-bold-title">
            {deviceTwo.summary.meters}
            </p>
            <p className="text-bold">
            {deviceTwo.summary.resistance}
            </p>
          </div>
          <div className="compare-column compare-column-three">
            <figure className={deviceThree.icon.wave ? "image-icon-wave " + deviceThree.icon.wave : "image-icon-wave" }>
            </figure>
            <p className="text-bold-title">
            {deviceThree.summary.meters}
            </p>
            <p className="text-bold">
            {deviceThree.summary.resistance}
            </p>
          </div>
        </div>

      </div>
    </SummaryContainer>

  )
};

export default SectionSummary;