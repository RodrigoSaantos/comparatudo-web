import React, { useState, useEffect, FormEvent } from 'react';

import SectionSummary from './SectionSummary';
import ImageTable from './ImageTable';
import api from '../../services/api';
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
  modelo?: string;
  name?: string;
  company?: string;
  systemVersion?: string;
  month?: number;
  year?: number;
  page?: string;
  summary?: {
    display?: string;
    polegada?: string;
    system?: string;
    year?: number;
    structure?: string;
    camera?: string;
    cameraFront?: string;
    lock?: string;
    chip?: string;
    battery?: string;
    meters?: string;
    resistance?: string;
  },
  icon?: {
    system?: string;
    chip?: string;
    battery?: string;
    lock?: string;
    wave?: string;
  },
  image?: {
    compare?: string;
    colors?: string;
  },
  capacity?: {
    armazenamento?: string;
    memoriaRam?: string;
    memoriaExpansivel?: string;
  },
  display?: {
    summary?: string;
    polegada?: string;
    type?: string;
    HDR?: string;
    resolution?: string;
    block?: string;
    protection?: string;
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
    features6?: string;
    features7?: string;
    features8?: string;
    features9?: string;
    features10?: string;		
  },
  measurements?: {
    summary?: string;
    height?: string;
    width?: string;
    espessura?: string;
    peso?: string;
  },
  resistance?: {
    summary?: string;
    meters?: string;
    wave?: string;
  },
  chip?: {
    summary?: string;
    chipset?: string;
    features?: string;
  },
  camera?: {
    summary?: string;
    mp?: string;
    opening?: string;
    estabilization?: string;
    zoom?: string;
    flash?: string;
    modos?: string;
    features?: string;
  },
  video_recording?: {
    resolution?: string;
    estabilization?: string;
    zoom?: string;
    slowMotion?: string;
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
  },
  front_camera?: {
    summary?: string;
    mp?: string;
    opening?: string;
    flash?: string;
    modos?: string;
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
    features6?: string;
    features7?: string;
    features8?: string;
    features9?: string;
    features10?: string;
  },
  connection?: {
    dataTransmition?: string;
    wifi?: string;
    bluetooth?: string;
    gps?: string;
    nfc?: string;
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
  },
  authentication?: {
    summary?: string;
    features?: string;
  },
  audio_play_back?: {
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;	
  },
  video_play_back?: {
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
  },
  battery?: {
    summary?: string;
    reproductionVideo?: string;
    reproductionVideo2?: string;
    reproductionAudio?: string;
    chargingFast?: string;
    capacity?: string;
    capacity2?: string;
    charge?: string;
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
  },
  card_sim?: {
    features?: string;
    features2?: string;
    features3?: string;
    features4?: string;
    features5?: string;
  },
  affiliate?: {
    link1?: string;
    link2?: string;
    link3?: string;
    link4?: string;
    link5?: string;
    link6?: string;
    link7?: string;
    link8?: string;
    link9?: string;
    link10?: string;
  }
}

export interface DataProps extends DatasheetProps {
  data?: Array<DatasheetProps>
}

export interface InformationDevicesProps extends DatasheetProps, DataProps {
  title?: string;
  deviceOne?: DatasheetProps;
  deviceTwo?: DatasheetProps;
  deviceThree?: DatasheetProps;
}


const CompareContent: React.FC<DataProps> = ({ data }) => {

  const [device1, setDevice1] = useState(data[0].modelo)
  const [device2, setDevice2] = useState(data[1].modelo)
  const [device3, setDevice3] = useState(data[2].modelo)

  const [theOneDevices, setTheOneDevices] = useState<DatasheetProps>(data[0])
  const [theTwoDevices, setTheTwoDevices] = useState<DatasheetProps>(data[1])
  const [theThreeDevices, setTheThreeDevices] = useState<DatasheetProps>(data[2])


  const [listIphonesColumn1, setListIphonesColumn1] = useState([])
  const [listIphonesColumn2, setListIphonesColumn2] = useState([])
  const [listIphonesColumn3, setListIphonesColumn3] = useState([])

  const [listSamsungsColumn1, setListSamsungsColumn1] = useState([])
  const [listSamsungsColumn2, setListSamsungsColumn2] = useState([])
  const [listSamsungsColumn3, setListSamsungsColumn3] = useState([])


  useEffect(() => {
    api.get('smartphones/listiphone/column1', {
      params: {
        device2,
        device3,
      }
    }).then(response => {
      const iphones = response.data
      setListIphonesColumn1(iphones)
    })

    api.get('smartphones/listiphone/column2', {
      params: {
        device1,
        device3,
      }
    }).then(response => {
      const iphones = response.data
      setListIphonesColumn2(iphones)
    })

    api.get('smartphones/listiphone/column3', {
      params: {
        device1,
        device2,
      }
    }).then(response => {
      const iphones = response.data
      setListIphonesColumn3(iphones)
    })


  }, [device1, device2, device3])


  useEffect(() => {
    api.get('smartphones/listsamsung/column1', {
      params: {
        device2,
        device3,
      }
    }).then(response => {
      const samsung = response.data
      setListSamsungsColumn1(samsung)
    })

    api.get('smartphones/listsamsung/column2', {
      params: {
        device1,
        device3,
      }
    }).then(response => {
      const samsung = response.data
      setListSamsungsColumn2(samsung)
    })

    api.get('smartphones/listsamsung/column3', {
      params: {
        device1,
        device2,
      }
    }).then(response => {
      const samsung = response.data
      setListSamsungsColumn3(samsung)
    })


  }, [device1, device2, device3])

  useEffect(() => {
        api.get('smartphones/compare1', {
          params: {
            device1,
          }
        }).then(response => {
          const device = response.data

          setTheOneDevices(device);
        })

  }, [device1])

  useEffect(() => {

      api.get('smartphones/compare2', {
        params: {
          device2,
        }
      }).then(response => {
  
        const device = response.data
  
        setTheTwoDevices(device)
      })

  }, [device2])

  useEffect(() => {

      api.get('smartphones/compare3', {
        params: {
          device3,
        }
      }).then(response => {
  
        const device = response.data
  
        setTheThreeDevices(device)
      })

  }, [device3])

  useEffect(() => {
    api.get('smartphones/compare', {
      params: {
        device1,
        device2,
        device3,
      }
    }).then(response => {

      const deviceOne = response.data.deviceOne.name
      const deviceTwo = response.data.deviceTwo.name
      const deviceThree = response.data.deviceThree.name
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
                  {listIphonesColumn1.map((listIphone: ListPhone) => {
                    return (
                      <option key={listIphone.modelo} value={listIphone.modelo}>{listIphone.name}</option>
                    )
                  })}
                </optgroup>

                <optgroup label="Modelos de Galaxy">
                  {listSamsungsColumn1.map((listSamsung: ListPhone) => {
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
                  {listIphonesColumn2.map((listIphone: ListPhone) => {
                    return (
                      <option key={listIphone.modelo} value={listIphone.modelo}>{listIphone.name}</option>
                    )
                  })}
                </optgroup>

                <optgroup label="Modelos de Galaxy">
                  {listSamsungsColumn2.map((listSamsung: ListPhone) => {
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
                  {listIphonesColumn3.map((listIphone: ListPhone) => {
                    return (
                      <option key={listIphone.modelo} value={listIphone.modelo}>{listIphone.name}</option>
                    )
                  })}
                </optgroup>

                <optgroup label="Modelos de Galaxy">
                  {listSamsungsColumn3.map((listSamsung: ListPhone) => {
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
