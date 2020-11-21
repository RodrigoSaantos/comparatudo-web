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
import api from "../../services/api";

export interface DatasheetDeviceProps {
  datasheet: Array<{
    HDR: string;
    armazenamento: string;
    audioPlay: string;
    audioPlayFeatures: string;
    audioPlayFeatures2: string;
    audioPlayFeatures3: string;
    authentication: string;
    authenticationFeatures: string;
    battery: string;
    batteryCapacity: string;
    batteryCapacity2: string;
    batteryCharge: string;
    batteryChargingFast: string;
    batteryFeatures: string;
    batteryFeatures2: string;
    batteryFeatures3: string;
    batteryReproductionAudio: string;
    batteryReproductionVideo: string;
    batteryReproductionVideo2: string;
    block: string;
    bluetooth: string;
    cameraBack: string;
    cameraBackEstabilizationOpitical: string;
    cameraBackFeatures: string;
    cameraBackFlash: string;
    cameraBackFull: string;
    cameraBackModos: string;
    cameraBackOpenig: string;
    cameraBackZoom: string;
    cameraFront: string;
    cameraFrontFeatures: string;
    cameraFrontFeatures2: string;
    cameraFrontFeatures3: string;
    cameraFrontFeatures4: string;
    cameraFrontFeatures5: string;
    cameraFrontFeatures6: string;
    cameraFrontFeatures7: string;
    cameraFrontFeatures8: string;
    cameraFrontFlash: string;
    cameraFrontMP: string;
    cameraFrontModos: string;
    cameraFrontOpening: string;
    cardSIM: string;
    cardSIMFeatures: string;
    chip: string;
    chipset: string;
    chipsetFeatures: string;
    company: string;
    conectionFeatures: string;
    conectionFeatures2: string;
    conectionFeatures3: string;
    conectionFeatures4: string;
    conectionFeatures5: string;
    dataTransmition: string;
    display: string;
    displayFeatures: string;
    displayFeatures2: string;
    displayFeatures3: string;
    displayFeatures4: string;
    displayFeatures5: string;
    displayFeatures6: string;
    displayType: string;
    espessura: string;
    gps: string;
    height: string;
    iconBattery: string;
    iconCameraBack: string;
    iconChip: string;
    iconLock: string;
    iconSystem: string;
    iconWave: string;
    id: number;
    linkAffiliate1: string;
    linkAffiliate2: string;
    linkAffiliate3: string;
    linkAffiliate4: string;
    linkAffiliate5: string;
    linkAffiliate6: string;
    linkAffiliate7: string;
    linkAffiliate8: string;
    linkAffiliate9: string;
    linkAffiliate10: string;
    memoriaExpansivel: string;
    memoriaRam: string;
    modelo: string;
    name: string;
    nfc: string;
    peso: string;
    polegada: string;
    resistance: string;
    resolution: string;
    structure: string;
    systemVersion: string;
    videoFeatures: string;
    videoFeatures2: string;
    videoFeatures3: string;
    videoFeatures4: string;
    videoPlayback: string;
    videoResolution: string;
    videoSlowMotion: string;
    videoStabilizationOptical: string;
    videoZoom: string;
    videoZoomFeatures: string;
    wave: string;
    waveMeters: string;
    width: string;
    wifi: string;
    year: number;

  }>
}

export interface DeviceDatasheetProps {
  deviceName: string
}

function DatasheetLayout  ({ celular, data }) {

  const { isFallback } = useRouter()

  const router = useRouter()

  if( isFallback ) {
    return <p>carregando...</p>
  }
  
  const title = celular.map(data => {return data.name}) as unknown

  return (
    <div id={"page-" + celular[0].page}>
      <Head>
        <title key="title">{`${title} - Especificações`}</title>
        <link rel="cononical" href={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="cononical" />

        <meta name='Description' content={`${celular[0].name}. Armazenamento de ${celular[0].armazenamento}. ${celular[0].authenticationFeatures}. ${celular[0].batteryCapacity}. ${celular[0].cameraBackFull}. ${celular[0].display}. ${celular[0].polegada}. ${celular[0].videoResolution}. `} key="description" />
        <meta property='og:type' content='website' key="og:type" />
        <meta property='og:title' content={`${celular[0].name} - Especificações`} key="og:title" />
        <meta property='og:description' content={`${celular[0].name}. Armazenamento de ${celular[0].armazenamento}. ${celular[0].authenticationFeatures}. ${celular[0].batteryCapacity}. ${celular[0].cameraBackFull}. ${celular[0].display}. ${celular[0].polegada}. ${celular[0].videoResolution}. `} key="og:description" />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_URL_BASE + router.asPath } key="og:url" />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_URL_BASE + `/assets/images/smartphones/colors/${celular[0].page}.png`} key="og:image" />
        

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
  const datasheet = await api.get(`search?search=`)
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
  const datasheet = await api.get(`search-page?search=${page}`)
  const allphones = await api.get(`search?search=`)

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