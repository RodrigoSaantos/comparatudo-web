import { GetStaticPaths, GetStaticProps } from "next";
import  Head from "next/head";
import Datasheet from "../../components/Datasheet";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import NavTop from "../../components/NavTop";
import PageHeader from "../../components/PageHeader";
import amazonPhonesPrice from '../../services/amazonPhonesPrice.json'

import { useRouter } from 'next/router'

import { DatasheetProps } from "../../components/CompareContent";
import { api, apiHttp } from "../../services/api";

export interface DatasheetDeviceProps {
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

export interface DeviceDatasheetProps {
  deviceName: string
}

interface IDataProps {
  celular?: DatasheetDeviceProps;
  data?: DatasheetDeviceProps[];
}


function DatasheetLayout  ({ celular, data }: IDataProps) {

  const { isFallback } = useRouter()

  const router = useRouter()

  if( isFallback ) {
    return <p>carregando...</p>
  }
  
  const title = celular.name as unknown

  return (
    <div id={"page-" + celular.page}>
      <Head>
        <title key="title">{`${title} - Especificações`}</title>
        <link rel="cononical" href={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="cononical" />

        <meta name='Description' content={`${celular.name}. Armazenamento de ${celular.capacity.armazenamento}. ${celular.authentication.summary}. ${celular.battery.capacity}. ${celular.camera.summary}. ${celular.display.summary}. ${celular.display.polegada}. ${celular.video_recording.resolution}. `} key="description" />
        <meta property='og:type' content='website' key="og:type" />
        <meta property='og:title' content={`${celular.name} - Especificações`} key="og:title" />
        <meta property='og:description' content={`${celular.name}. Armazenamento de ${celular.capacity.armazenamento}. ${celular.authentication.summary}. ${celular.battery.capacity}. ${celular.camera.summary}. ${celular.display.summary}. ${celular.display.polegada}. ${celular.video_recording.resolution}. `} key="og:description" />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_URL_BASE + router.asPath } key="og:url" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_URL_BASE + `/assets/images/smartphones/colors/${celular.page}.png`} key="og:image" />
        

      </Head>

      <NavBar />

      <NavTop
        title={title as string}
        data={celular}
      />

      <PageHeader
        title={title as string}
      >
      </PageHeader>

      <main>
        <Datasheet
          data={celular}
        />
      </main>

      <Footer data={data} />

    </div>
  )
}

export default DatasheetLayout

export const getStaticPaths: GetStaticPaths = async () => {
  // const datasheet = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/search?search=`)
  const datasheet = await apiHttp.get(`smartphones/search?search=`)
  const iphone = await datasheet.data

  const paths = iphone.map((smartphone:DatasheetProps) => {
    return { params: { page: smartphone.page }}
  })


  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps:GetStaticProps = async (context) => {

  const { page } = context.params

  const response = await amazonPhonesPrice
  const datasheet = await apiHttp.get(`smartphones/search-page?search=${page}`)
  const allphones = await apiHttp.get(`smartphones/search?search=`)

  const data = await response
  const iphone = await datasheet.data
  const phones = await allphones.data

  return {
    props: {
      org: data,
      celular: iphone,
      data: phones,
    },
    revalidate: 10
  }
}