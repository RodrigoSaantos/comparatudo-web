import DatasheetRow from '../DatasheetRow';
import americanasPhonesPrice from '../../services/americanasPhonesPrice.json'
import amazonPhonesPrice from '../../services/amazonPhonesPrice.json'
import magaluPhonesPrice from '../../services/magaluPhonesPrice.json'
import submarinoPhonesPrice from '../../services/submarinoPhonesPrice.json'
import {Container} from './style'
import { DatasheetDeviceProps } from '../../pages/smartphones/[page]';

interface DataProps {
  data: DatasheetDeviceProps;
}


const Datasheet: React.FC<DataProps> = ({data}) => {

  const figure = data.modelo as unknown
    
  return (

    <Container>

    <DatasheetRow
      title="Especificações"

      figure={true}

      figureUrl={'url(/assets/images/smartphones/colors/' + data.page + '.png)' }

    />

    <DatasheetRow
      title="Preço"
      line1Strong='Amazon'
      line1String={data.affiliate.link1 ? <a href={data.affiliate.link1} target="_blank">Acessar loja</a> : 'Loja indisponível'}
      line2Strong='Magazine Luiza'
      line2String={data.affiliate.link2 ? <a href={data.affiliate.link2} target="_blank">Acessar loja</a> : 'Loja indisponível'}
      line3Strong='Submarino'
      line3String={data.affiliate.link3 ? <a href={data.affiliate.link3} target="_blank">Acessar loja</a> : 'Loja indisponível'}
      line4Strong='Americanas'
      line4String={data.affiliate.link4 ? <a href={data.affiliate.link4} target="_blank">Acessar loja</a> : 'Loja indisponível'}


    />

    <DatasheetRow
      title="Capacidade"

      line1Strong="Armazenamento"
      line1={data.capacity.armazenamento}
      line2Strong="Memória (RAM)"
      line2={data.capacity.memoriaRam}
      line3Strong="Memória Expansível"
      line3={data.capacity.memoriaExpansivel}

    />

    <DatasheetRow
      title="Tela"

      line1Strong="Tecnologia"
      line1={data.display.summary}

      line2Strong="Tipo"
      line2={data.display.type}

      line3Strong="Dimensão Diagonal"
      line3={data.display.polegada}
      
      line4={data.display.HDR}
      
      line5={data.display.resolution}
      
      line6Strong="Características"
      line6={data.display.features}
      
      line7={data.display.features2}
      
      line8={data.display.features3}
      
      line9={data.display.features4}
      
      line10={data.display.features5}
      
      line11={data.display.features6} 

      line12={data.display.features7} 

      line13={data.display.features8} 

      line14={data.display.features9} 

      line15={data.display.features10} 

    />

    <DatasheetRow
      title="Tamanho e peso"

      line1Strong="Altura"
      line1={data.measurements.height}

      line2Strong="Largura"
      line2={data.measurements.width}

      line3Strong="Espessura"
      line3={data.measurements.espessura}

      line4Strong="Peso"
      line4={data.measurements.peso}

    />

    <DatasheetRow 
      title="Resistência à água, respingos e poeira"

      line1={data.resistance.wave}

    />

    <DatasheetRow 
      title="Chip"

      line1={data.chip.chipset}
      
      line2={data.chip.features}

    />

    <DatasheetRow 
      title="Câmera"

      line1={data.camera.mp}
      
      line2={data.camera.opening}

      line3={data.camera.estabilization}

      line4={data.camera.zoom}

      line5={data.camera.flash}

      line6={data.camera.modos}

      line7={data.camera.features}

    />

    <DatasheetRow
      title="Gravação de vídeo"

      line1={data.video_recording.resolution}
      
      line2={data.video_recording.estabilization}

      line3={data.video_recording.zoom}

      line4={data.video_recording.slowMotion}

      line5={data.video_recording.features}

      line6={data.video_recording.features2}

      line7={data.video_recording.features3}

      line8={data.video_recording.features4}

      line9={data.video_recording.features5}

    />

    <DatasheetRow
      title="Câmera frontal"

      line1={data.front_camera.mp}
      
      line2={data.front_camera.opening}

      line3={data.front_camera.flash}

      line4={data.front_camera.modos}

      line5={data.front_camera.features}

      line6={data.front_camera.features2}

      line7={data.front_camera.features3}

      line9={data.front_camera.features4}

      line10={data.front_camera.features5}

      line11={data.front_camera.features6}

      line12={data.front_camera.features7}

      line13={data.front_camera.features8}

      line14={data.front_camera.features9}

      line15={data.front_camera.features10}

    />

    <DatasheetRow
      title="Rede celular e Conexões sem fio"

      line1={data.connection.dataTransmition}
      
      line2={data.connection.wifi}

      line3={data.connection.bluetooth}

      line4={data.connection.gps}

      line5={data.connection.nfc}

      line6={data.connection.features}

      line7={data.connection.features2}

      line9={data.connection.features3}

      line10={data.connection.features4}

      line11={data.connection.features5}

    />

    <DatasheetRow
      title="Autenticação segura"

      line1={data.authentication.summary}
      
      line2={data.authentication.features}

    />

    <DatasheetRow
      title="Reprodução de áudio"

      line1={data.audio_play_back.features}
      
      line2={data.audio_play_back.features2}

      line3={data.audio_play_back.features3}

      line4={data.audio_play_back.features4}

      line5={data.audio_play_back.features5}

    />

    <DatasheetRow
      title="Reprodução de vídeo"

      line1={data.video_play_back.features}
      
      line2={data.video_play_back.features2}
      
      line3={data.video_play_back.features3}
      
      line4={data.video_play_back.features4}
      
      line5={data.video_play_back.features5}
      
    />

    <DatasheetRow
      title="Energia e bateria"

      line1Strong="Reprodução de vídeo"
      line1={data.battery.reproductionVideo}
      
      line2={data.battery.reproductionVideo2}

      line3Strong="Reprodução de áudio"
      line3={data.battery.reproductionAudio}

      line4Strong="Carregamento rápido"
      line4={data.battery.chargingFast}

      line5Strong="Capacidade de Bateria"
      line5={data.battery.capacity}

      line6={data.battery.capacity2}

      line7={data.battery.charge}
      
      line8={data.battery.features}
      
      line9={data.battery.features2}
      
      line10={data.battery.features3}
      
      line11={data.battery.features4}
      
      line12={data.battery.features5}
      
    />

    <DatasheetRow
      title="Cartão SIM"

      line1={data.card_sim.features}
      
      line2={data.card_sim.features2}
      
      line3={data.card_sim.features3}
      
      line4={data.card_sim.features4}
      
      line5={data.card_sim.features5}
      
    />

    </Container>

  )
}

export default Datasheet