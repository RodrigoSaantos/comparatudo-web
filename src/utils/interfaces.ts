export interface audio_play_backProps {
  features: string
  features2: string
  features3: string
  features4: string
  features5: string
}

export interface authenticationProps {
  features: string
  summary: string
}

export interface batteryProps {
  capacity: string
  capacity2: string
  charge: string
  chargingFast: string
  features: string
  features2: string
  features3: string
  features4: string
  features5: string
  reproductionAudio: string
  reproductionVideo: string
  reproductionVideo2: string
  summary: string
}

export interface cameraProps {
  estabilizationOptical: string
  features: string
  flash: string
  modos: string
  mp: string
  opening: string
  summary: string
  zoom: string
}

export interface capacityProps {
  armazenamento: string
  memoriaExpansivel: string
  memoriaRam: string
}

export interface cardSimProps {
  features: string
  features2: string
  features3: string
  features4: string
  features5: string
}

export interface chipProps {
  chipset: string
  features: string
}

export interface connectionProps {
  bluetooth: string
  dataTransmition: string
  features: string
  features2: string
  features3: string
  features4: string
  features5: string
  gps: string
  nfc: string
  wifi: string
}

export interface displayProps {
  HDR: string
  block: string
  displayType: string
  features: string
  features1: string
  features2: string
  features3: string
  features4: string
  features5: string
  features6: string
  polegada: string
  resolution: string
  summary: string
}

export interface frontCameraProps {
  features: string
  features2: string
  features3: string
  features4: string
  features5: string
  features6: string
  features7: string
  features8: string
  flash: string
  modos: string
  mp: string
  opening: string
  summary: string
}

export interface iconProps {
  battery: string
  chip: string
  lock: string
  system: string
  wave: string
}

export interface imageProps {
  colors: string
  compare: string
}

export interface linkAffiliateProps {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
}

export interface measurementsProps {
  espessura: string
  height: string
  peso: string
  structure: string
  width: string
}

export interface resistanceProps {
  summary: string
  wave: string
  waveMeters: string
}

export interface videoPlayBack {
  features: string
  features2: string
  features3: string
  features4: string
  features5: string
}

export interface videoRecording {
  estabilizationOptical: string
  features: string
  features2: string
  features3: string
  features4: string
  resolution: string
  slowMotion: string
  zoom: string
  zoomFeatures: string
}
export interface smartphone {
  id: Number
  modelo: string
  name: string
  company: string
  systemVersion: string
  year: Number
  page: string
}

export interface datasheetProps {
  audio_play_back?: Array<audio_play_backProps>,
  authentication?: Array<authenticationProps>,
  battery?: Array<batteryProps>
  camera?: Array<cameraProps>
  capacity?: Array<capacityProps>
  card_sim?: Array<cardSimProps>
  chip?: Array<chipProps>
  connection?: Array<connectionProps>
  display?: Array<displayProps>
  front_camera?: Array<frontCameraProps>
  icon?: Array<iconProps>
  image?: Array<imageProps>
  link_affiliate?: Array<linkAffiliateProps>
  measurements?: Array<measurementsProps>
  resistance?: Array<resistanceProps>
  video_play_back?: Array<videoPlayBack>
  video_recording?: Array<videoRecording>
  smartphone?: Array<smartphone>

}

export interface dataProps extends datasheetProps {
  data?: datasheetProps
}