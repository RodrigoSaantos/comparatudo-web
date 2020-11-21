import DatasheetRow from '../DatasheetRow';
import americanasPhonesPrice from '../../services/americanasPhonesPrice.json'
import amazonPhonesPrice from '../../services/amazonPhonesPrice.json'
import magaluPhonesPrice from '../../services/magaluPhonesPrice.json'
import submarinoPhonesPrice from '../../services/submarinoPhonesPrice.json'
import {Container} from './style'
import { DataProps } from '../CompareContent';


const Datasheet: React.FC<DataProps> = ({data}) => {

  const figure = data.map(data => {return data.modelo}) as unknown
    
  return (

    <Container>

    <DatasheetRow
      title="Especificações"

      figure={true}

      figureUrl={'url(/assets/images/smartphones/colors/' + data.map(data => {return data.page}) + '.png)' }

    />

    <DatasheetRow
      title="Preço"

      line1Strong='Amazon'
      line1String={amazonPhonesPrice[data.map(data => {return  data.id -1})[0]]}
      line2Strong='Magazine Luiza'
      line2String={magaluPhonesPrice[data.map(data => {return  data.id -1})[0]]}
      line3Strong='Submarino'
      line3String={submarinoPhonesPrice[data.map(data => {return  data.id -1})[0]]}
      line4Strong='Americanas'
      line4String={americanasPhonesPrice[data.map(data => {return  data.id -1})[0]]}


    />

    <DatasheetRow
      title="Capacidade"

      line1Strong="Armazenamento"
      line1={data.map(data => {return data.armazenamento})}
      line2Strong="Memória (RAM)"
      line2={data.map(data => {return data.memoriaRam})}
      line3Strong="Memória Expansível"
      line3={data.map(data => {return data.memoriaExpansivel})}

    />

    <DatasheetRow
      title="Tela"

      line1Strong="Tecnologia"
      line1={data.map(data => {return data.display})}

      line2Strong="Tipo"
      line2={data.map(data => {return data.displayType})}

      line3Strong="Dimensão Diagonal"
      line3={data.map(data => {return data.polegada})}
      
      line4={data.map(data => {return data.HDR})}
      
      line5={data.map(data => {return data.resolution})}
      
      line6Strong="Características"
      line6={data.map(data => {return data.displayFeatures})}
      
      line7={data.map(data => {return data.displayFeatures2})}
      
      line8={data.map(data => {return data.displayFeatures3})}
      
      line9={data.map(data => {return data.displayFeatures4})}
      
      line10={data.map(data => {return data.displayFeatures5})}
      
      line11={data.map(data => {return data.displayFeatures6})}  

    />

    <DatasheetRow
      title="Tamanho e peso"

      line1Strong="Altura"
      line1={data.map(data => {return data.height})}

      line2Strong="Largura"
      line2={data.map(data => {return data.width})}

      line3Strong="Espessura"
      line3={data.map(data => {return data.espessura})}

      line4Strong="Peso"
      line4={data.map(data => {return data.peso})}

    />

    <DatasheetRow 
      title="Resistência à água, respingos e poeira"

      line1={data.map(data => {return data.resistance})}

    />

    <DatasheetRow 
      title="Chip"

      line1={data.map(data => {return data.chipset})}
      
      line2={data.map(data => {return data.chipsetFeatures})}

    />

    <DatasheetRow 
      title="Câmera"

      line1={data.map(data => {return data.cameraBackFull})}
      
      line2={data.map(data => {return data.cameraBackOpenig})}

      line3={data.map(data => {return data.cameraBackEstabilizationOpitical})}

      line4={data.map(data => {return data.cameraBackZoom})}

      line5={data.map(data => {return data.cameraBackFlash})}

      line6={data.map(data => {return data.cameraBackModos})}

      line7={data.map(data => {return data.cameraBackFeatures})}

    />

    <DatasheetRow
      title="Gravação de vídeo"

      line1={data.map(data => {return data.videoResolution})}
      
      line2={data.map(data => {return data.videoStabilizationOptical})}

      line3={data.map(data => {return data.videoZoom})}

      line4={data.map(data => {return data.videoZoomFeatures})}

      line5={data.map(data => {return data.videoSlowMotion})}

      line6={data.map(data => {return data.videoFeatures})}

      line7={data.map(data => {return data.videoFeatures2})}

      line9={data.map(data => {return data.videoFeatures3})}

      line10={data.map(data => {return data.videoFeatures4})}

    />

    <DatasheetRow
      title="Câmera frontal"

      line1={data.map(data => {return data.cameraFrontMP})}
      
      line2={data.map(data => {return data.cameraFrontOpening})}

      line3={data.map(data => {return data.cameraFrontFlash})}

      line4={data.map(data => {return data.cameraFrontModos})}

      line5={data.map(data => {return data.cameraFrontFeatures})}

      line6={data.map(data => {return data.cameraFrontFeatures2})}

      line7={data.map(data => {return data.cameraFrontFeatures3})}

      line9={data.map(data => {return data.cameraFrontFeatures4})}

      line10={data.map(data => {return data.cameraFrontFeatures5})}

      line11={data.map(data => {return data.cameraFrontFeatures6})}

      line12={data.map(data => {return data.cameraFrontFeatures7})}

      line13={data.map(data => {return data.cameraFrontFeatures8})}

    />

    <DatasheetRow
      title="Rede celular e Cdataxões sem fio"

      line1={data.map(data => {return data.dataTransmition})}
      
      line2={data.map(data => {return data.wifi})}

      line3={data.map(data => {return data.bluetooth})}

      line4={data.map(data => {return data.gps})}

      line5={data.map(data => {return data.nfc})}

      line6={data.map(data => {return data.conectionFeatures})}

      line7={data.map(data => {return data.conectionFeatures2})}

      line9={data.map(data => {return data.conectionFeatures3})}

      line10={data.map(data => {return data.conectionFeatures4})}

      line11={data.map(data => {return data.conectionFeatures5})}

    />

    <DatasheetRow
      title="Autenticação segura"

      line1={data.map(data => {return data.authentication})}
      
      line2={data.map(data => {return data.authenticationFeatures})}

    />

    <DatasheetRow
      title="Reprodução de áudio"

      line1={data.map(data => {return data.audioPlay})}
      
      line2={data.map(data => {return data.audioPlayFeatures})}

      line3={data.map(data => {return data.audioPlayFeatures2})}

      line4={data.map(data => {return data.audioPlayFeatures3})}

    />

    <DatasheetRow
      title="Reprodução de vídeo"

      line1={data.map(data => {return data.videoPlayback})}
      
    />

    <DatasheetRow
      title="Energia e bateria"

      line1Strong="Reprodução de vídeo"
      line1={data.map(data => {return data.batteryReproductionVideo})}
      
      line2={data.map(data => {return data.batteryReproductionVideo2})}

      line3Strong="Reprodução de áudio"
      line3={data.map(data => {return data.batteryReproductionAudio})}

      line4Strong="Carregamento rápido"
      line4={data.map(data => {return data.batteryChargingFast})}

      line5Strong="Capacidade de Bateria"
      line5={data.map(data => {return data.batteryCapacity})}

      line6={data.map(data => {return data.batteryCapacity2})}

      line7={data.map(data => {return data.batteryCharge})}
      
      line8={data.map(data => {return data.batteryFeatures})}
      
      line9={data.map(data => {return data.batteryFeatures2})}
      
      line10={data.map(data => {return data.batteryFeatures3})}
      
    />

    <DatasheetRow
      title="Cartão SIM"

      line1={data.map(data => {return data.cardSIM})}
      
      line2={data.map(data => {return data.cardSIMFeatures})}
      
    />

    </Container>

  )
}

export default Datasheet