import React, { useState, useEffect, FormEvent } from 'react';

import SectionSummary from './SectionSummary';
import ImageTable from './ImageTable';
import api from '../../services/api';
import { GetStaticProps } from 'next';
import SectionCapacity from './SectionCapacity';
import SectionDisplay from './SectionDisplay';
import SectionMeasurements from './SectionMeasurements';
import SectionResistance from './SectionResistance';
import SectionChip from './SectionChip';
import SectionCamera from './SectionCamera';
import SectionVideoRecording from './SectionVideoRecording';
import SectionFrontCamera from './SectionFrontCamera';
import SectionConnection from './SectionConnection';
import SectionAuthentication from './SectionAuthentication';
import SectionAudioPlayBack from './SectionAudioPlayBack';
import SectionVideoPlayBack from './SectionVideoPlayBack';
import SectionPowerBattery from './SectionPowerBattery';
import SectionCartaoSim from './SectionCartaoSim';
import { Container } from './style';

interface ListPhone {
  name: string;
  modelo: string;
}

export interface DatasheetProps {
  HDR?: string;
  armazenamento?: string;
  audioPlay?: string;
  audioPlayFeatures?: string;
  audioPlayFeatures2?: string;
  audioPlayFeatures3?: string;
  authentication?: string;
  authenticationFeatures?: string;
  battery?: string;
  batteryCapacity?: string;
  batteryCapacity2?: string;
  batteryCharge?: string;
  batteryChargingFast?: string;
  batteryFeatures?: string;
  batteryFeatures2?: string;
  batteryFeatures3?: string;
  batteryReproductionAudio?: string;
  batteryReproductionVideo?: string;
  batteryReproductionVideo2?: string;
  block?: string;
  bluetooth?: string;
  cameraBack?: string;
  cameraBackEstabilizationOpitical?: string;
  cameraBackFeatures?: string;
  cameraBackFlash?: string;
  cameraBackFull?: string;
  cameraBackModos?: string;
  cameraBackOpenig?: string;
  cameraBackZoom?: string;
  cameraFront?: string;
  cameraFrontFeatures?: string;
  cameraFrontFeatures2?: string;
  cameraFrontFeatures3?: string;
  cameraFrontFeatures4?: string;
  cameraFrontFeatures5?: string;
  cameraFrontFeatures6?: string;
  cameraFrontFeatures7?: string;
  cameraFrontFeatures8?: string;
  cameraFrontFlash?: string;
  cameraFrontMP?: string;
  cameraFrontModos?: string;
  cameraFrontOpening?: string;
  cardSIM?: string;
  cardSIMFeatures?: string;
  chip?: string;
  chipset?: string;
  chipsetFeatures?: string;
  company?: string;
  conectionFeatures?: string;
  conectionFeatures2?: string;
  conectionFeatures3?: string;
  conectionFeatures4?: string;
  conectionFeatures5?: string;
  dataTransmition?: string;
  display?: string;
  displayFeatures?: string;
  displayFeatures2?: string;
  displayFeatures3?: string;
  displayFeatures4?: string;
  displayFeatures5?: string;
  displayFeatures6?: string;
  displayType?: string;
  espessura?: string;
  gps?: string;
  height?: string;
  iconBattery?: string;
  iconCameraBack?: string;
  iconChip?: string;
  iconLock?: string;
  iconSystem?: string;
  iconWave?: string;
  id?: number;
  linkAffiliate1?: string;
  linkAffiliate2?: string;
  linkAffiliate3?: string;
  linkAffiliate4?: string;
  linkAffiliate5?: string;
  linkAffiliate6?: string;
  linkAffiliate7?: string;
  linkAffiliate8?: string;
  linkAffiliate9?: string;
  linkAffiliate10?: string;
  memoriaExpansivel?: string;
  memoriaRam?: string;
  modelo?: string;
  name?: string;
  nfc?: string;
  page?: string;
  peso?: string;
  polegada?: string;
  resistance?: string;
  resolution?: string;
  structure?: string;
  systemVersion?: string;
  videoFeatures?: string;
  videoFeatures2?: string;
  videoFeatures3?: string;
  videoFeatures4?: string;
  videoPlayback?: string;
  videoResolution?: string;
  videoSlowMotion?: string;
  videoStabilizationOptical?: string;
  videoZoom?: string;
  videoZoomFeatures?: string;
  wave?: string;
  waveMeters?: string;
  width?: string;
  wifi?: string;
  year?: number;
}

export interface DataProps extends DatasheetProps {
  data?: Array<DatasheetProps>
}

export interface InformationDevicesProps extends DatasheetProps, DataProps {
  title?: string
  deviceOne?: Array<DatasheetProps>
  deviceTwo?: Array<DatasheetProps>
  deviceThree?: Array<DatasheetProps>
}


const CompareContent: React.FC<DataProps> = ({ data }) => {

  const [device1, setDevice1] = useState(data[0].modelo)
  const [device2, setDevice2] = useState(data[1].modelo)
  const [device3, setDevice3] = useState(data[2].modelo)

  const [theOneDevices, setTheOneDevices] = useState([])
  const [theTwoDevices, setTheTwoDevices] = useState([])
  const [theThreeDevices, setTheThreeDevices] = useState([])


  const [listIphones, setListIphones] = useState([])

  useEffect(() => {
    api.get('listiphone').then(response => {

      const iphones = response.data
      setListIphones(iphones)

    })
  }, [])

  const [listSamsungs, setListSamsungs] = useState([])

  useEffect(() => {
    api.get('listsamsung').then(response => {

      const samsung = response.data
      setListSamsungs(samsung)

    })
  }, [])

  useEffect(() => {

    api.get('compare1', {
      params: {
        device1,
      }
    }).then(response => {

      const total = response.data

      setTheOneDevices(total)

    })

  }, [device1])

  useEffect(() => {

    api.get('compare2', {
      params: {
        device2,
      }
    }).then(response => {

      const total = response.data

      setTheTwoDevices(total)
    })

  }, [device2])

  useEffect(() => {

    api.get('compare3', {
      params: {
        device3,
      }
    }).then(response => {

      const total = response.data

      setTheThreeDevices(total)
    })

  }, [device3])

  useEffect(() => {
    api.get('compare', {
      params: {
        device1,
        device2,
        device3,
      }
    }).then(response => {

      const deviceOne = response.data.deviceOne[0].name
      const deviceTwo = response.data.deviceTwo[0].name
      const deviceThree = response.data.deviceThree[0].name
      if (document.querySelector('#selector-three').clientWidth > 0) {

        document.querySelector('head title').innerHTML = ` ${deviceOne} vs ${deviceTwo} vs ${deviceThree} `
      } else {
        document.querySelector('head title').innerHTML = ` ${deviceOne} vs ${deviceTwo}`
      }
    })

  }, [device1, device2, device3])

  async function handleChangePhones(e: FormEvent) {
    e.preventDefault()
  }

  return (

    <Container>

      <div className="select-content">
        <div className="selector-table">

          <form name="form" id="form" className="selector-element" onSubmit={handleChangePhones}>
            <div className="select-column">
              <select className="selector-dropdown"
                name="device1"
                id="selector-one"
                defaultValue=""
                onChange={(e) => {
                  setDevice1(e.target.value)
                }}
              >
                <option value="" disabled hidden>{data[0].name} </option>
                <optgroup label="Modelos de iPhone">
                  {listIphones.map((listIphone: ListPhone) => {
                    return (
                      <option key={listIphone.modelo} value={listIphone.modelo}>{listIphone.name}</option>
                    )
                  })}
                </optgroup>

                <optgroup label="Modelos de Galaxy">
                  {listSamsungs.map((listSamsung: ListPhone) => {
                    return (
                      <option key={listSamsung.modelo} value={listSamsung.modelo}>{listSamsung.name}</option>
                    )
                  })}
                </optgroup>
              </select>
            </div>

            <div className="select-column">
              <select
                className="selector-dropdown"
                name="device2"
                id="selector-two"
                defaultValue=""
                onChange={(e) => {
                  setDevice2(e.target.value)

                }}
              >
                <option value="" disabled hidden>{data[1].name}</option>

                <optgroup label="Modelos de iPhone">
                  {listIphones.map((listIphone: ListPhone) => {
                    return (
                      <option key={listIphone.modelo} value={listIphone.modelo}>{listIphone.name}</option>
                    )
                  })}
                </optgroup>

                <optgroup label="Modelos de Galaxy">
                  {listSamsungs.map((listSamsung: ListPhone) => {
                    return (
                      <option key={listSamsung.modelo} value={listSamsung.modelo}>{listSamsung.name}</option>
                    )
                  })}
                </optgroup>

              </select>
            </div>

            <div className="select-column">
              <select
                className="selector-dropdown"
                name="device3"
                id="selector-three"
                defaultValue=""
                onChange={(e) => {
                  setDevice3(e.target.value)

                }}
              >
                <option value="" disabled hidden>{data[2].name}</option>

                <optgroup label="Modelos de iPhone">
                  {listIphones.map((listIphone: ListPhone) => {
                    return (
                      <option key={listIphone.modelo} value={listIphone.modelo}>{listIphone.name}</option>
                    )
                  })}
                </optgroup>

                <optgroup label="Modelos de Galaxy">
                  {listSamsungs.map((listSamsung: ListPhone) => {
                    return (
                      <option key={listSamsung.modelo} value={listSamsung.modelo}>{listSamsung.name}</option>
                    )
                  })}
                </optgroup>

              </select>

            </div>

            <input type="submit" hidden />

          </form>

        </div>

        <div className="compare-table-grid">

          <ImageTable
            deviceOne={theOneDevices}
            deviceTwo={theTwoDevices}
            deviceThree={theThreeDevices}
          />

          <SectionSummary
            title='Resumo'
            deviceOne={theOneDevices}
            deviceTwo={theTwoDevices}
            deviceThree={theThreeDevices}
            data={data}
          />

          <SectionCapacity 
          title="Capacidade"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionDisplay 
          title="Tela"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionMeasurements
          title="Tamanho e peso"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionResistance
          title="Resistência à água, respingos e poeira"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionChip
          title="Chip"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionCamera
          title="Câmera"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionVideoRecording
          title="Gravação de vídeo"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionFrontCamera
          title="Câmera frontal"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionConnection
          title="Rede celular e Conexões sem fio"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionAuthentication
          title="Autenticação segura"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionAudioPlayBack
          title="Reprodução de áudio"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionVideoPlayBack
          title="Reprodução de vídeo"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionPowerBattery
          title="Energia e bateria"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

          <SectionCartaoSim
          title="Cartão SIM"
          deviceOne={theOneDevices}
          deviceTwo={theTwoDevices}
          deviceThree={theThreeDevices}
          data={data}
          />

        </div>

      </div>

    </Container>


  )

};

export default CompareContent;
