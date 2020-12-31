import styled from 'styled-components'

import appleIcon from '../../../assets/images/icons/apple-icon.png'
import androidIcon from '../../../assets/images/icons/android-icon.png'
import faceId from '../../../assets/images/icons/face-id.png'
import touchId from '../../../assets/images/icons/touch-id.png'
import batteryIcon from '../../../assets/images/icons/battery.png'
import wave1Icon from '../../../assets/images/icons/wave-1.png'
import wave2Icon from '../../../assets/images/icons/wave-2.png'
import wave4Icon from '../../../assets/images/icons/wave-4.png'
import wave6Icon from '../../../assets/images/icons/wave-6.png'

import chipa12 from '../../../assets/images/icons/chipa12.png'
import chipa13 from '../../../assets/images/icons/chipa13.png'
import chipa14 from '../../../assets/images/icons/chipa14.png'
import chip730 from '../../../assets/images/icons/chip730.png'


export const SummaryContainer = styled.div`

margin-top: 100px;

div.compare-row {
  display: grid;
  grid-template-columns: 1fr 1fr;

  padding-bottom: 48px;
  margin: 6px 0;

}

div.compare-column.compare-column-three {
  display: none;
}

div.compare-column {
  padding: 0 10px;
  text-align: center;
}

div.compare-row div.compare-column strong {
  display: block;
}

div.compare-row div.compare-column p {
    text-align: center ;
}

figure.icon-badge.display {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 110px;
}

p.text-bold {
    font-weight: 700;
}

p.text-bold-title {
    font-size: 4.4rem;
    font-weight: 900;
    color: black;
}

p.text-bold-title-camera {
    font-size: 3rem;
    font-weight: 900;
    color: black;
}

/* ------------------------------------------------------------------------------------------------- */
/* ICON SYSTEM */
div.compare-column.compare-column-one figure.image-icon-system {
    background-image: url(${appleIcon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
div.compare-column.compare-column-two figure.image-icon-system {
    background-image: url(${appleIcon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
div.compare-column.compare-column-three figure.image-icon-system {
    background-image: url(${androidIcon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}

/* ICON ANDROID */
div.compare-column.compare-column-one figure.image-icon-system.Android {
    background-image: url(${androidIcon});
}
div.compare-column.compare-column-two figure.image-icon-system.Android {
    background-image: url(${androidIcon});
}
div.compare-column.compare-column-three figure.image-icon-system.Android {
    background-image: url(${androidIcon});
}

/* ICON APPLE */
div.compare-column.compare-column-one figure.image-icon-system.iOS {
    background-image: url(${appleIcon});
}
div.compare-column.compare-column-two figure.image-icon-system.iOS {
    background-image: url(${appleIcon});
}
div.compare-column.compare-column-three figure.image-icon-system.iOS {
    background-image: url(${appleIcon});
}

/* --------------------------------------------------------------------------------------------------- */
/* ICON LOCK */
div.compare-column.compare-column-one figure.image-icon-lock {
    background-image: url(${faceId});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
div.compare-column.compare-column-two figure.image-icon-lock {
    background-image: url(${touchId});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
div.compare-column.compare-column-three figure.image-icon-lock {
    background-image: url(${touchId});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
/* ----------------------------------------------------------------------------------------------------------- */
/* ICON FACE-ID */
div.compare-column.compare-column-one figure.image-icon-lock.face-id {
    background-image: url(${faceId});
}
div.compare-column.compare-column-two figure.image-icon-lock.face-id {
    background-image: url(${faceId});
}
div.compare-column.compare-column-three figure.image-icon-lock.face-id {
    background-image: url(${faceId});
}

/* ICON TOUCH-ID */
div.compare-column.compare-column-one figure.image-icon-lock.touch-id {
    background-image: url(${touchId});
}
div.compare-column.compare-column-two figure.image-icon-lock.touch-id {
    background-image: url(${touchId});
}
div.compare-column.compare-column-three figure.image-icon-lock.touch-id {
    background-image: url(${touchId});
}

/* ----------------------------------------------------------------------------------------------------------- */
/* ICON BATTERY */
div.compare-column.compare-column-one figure.image-icon-battery {
    background-image: url(${batteryIcon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
}
div.compare-column.compare-column-two figure.image-icon-battery {
    background-image: url(${batteryIcon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
}
div.compare-column.compare-column-three figure.image-icon-battery {
    background-image: url(${batteryIcon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
}

/* --------------------------------------------------------------------------------------------------------- */
/* ICON WAVE */
div.compare-column.compare-column-one figure.image-icon-wave {
    background-image: url(${wave4Icon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
div.compare-column.compare-column-two figure.image-icon-wave {
    background-image: url(${wave1Icon});
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}
div.compare-column.compare-column-three figure.image-icon-wave {
    /* background-image: url(${wave1Icon}); */
    width: 78px;
    height: 78px;
    margin: auto auto 15px;
    transition: all ease-in 0.15s;
}

div.compare-column.compare-column-one figure.image-icon-wave.wave-none {
    background-image: initial;
}
div.compare-column.compare-column-two figure.image-icon-wave.wave-none {
    background-image: initial;
}
div.compare-column.compare-column-three figure.image-icon-wave.wave-none {
    background-image: initial;
}

div.compare-column.compare-column-one figure.image-icon-wave.wave-1 {
    background-image: url(${wave1Icon});
}
div.compare-column.compare-column-two figure.image-icon-wave.wave-1 {
    background-image: url(${wave1Icon});
}
div.compare-column.compare-column-three figure.image-icon-wave.wave-1 {
    background-image: url(${wave1Icon});
}

div.compare-column.compare-column-one figure.image-icon-wave.wave-2 {
    background-image: url(${wave2Icon});
}
div.compare-column.compare-column-two figure.image-icon-wave.wave-2 {
    background-image: url(${wave2Icon});
}
div.compare-column.compare-column-three figure.image-icon-wave.wave-2 {
    background-image: url(${wave2Icon});
}

div.compare-column.compare-column-one figure.image-icon-wave.wave-4 {
    background-image: url(${wave4Icon});
}
div.compare-column.compare-column-two figure.image-icon-wave.wave-4 {
    background-image: url(${wave4Icon});
}
div.compare-column.compare-column-three figure.image-icon-wave.wave-4 {
    background-image: url(${wave4Icon});
}

div.compare-column.compare-column-one figure.image-icon-wave.wave-6 {
    background-image: url(${wave6Icon});
}
div.compare-column.compare-column-two figure.image-icon-wave.wave-6 {
    background-image: url(${wave6Icon});
}
div.compare-column.compare-column-three figure.image-icon-wave.wave-6 {
    background-image: url(${wave6Icon});
}

@media (min-width: 700px) {
    figure.icon-badge.display {
        height: auto;
    }

    div.compare-row {
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    div.compare-column.compare-column-three {
        display: initial;
    }

    p.text-bold-title-camera {
        font-size: 3.6rem;
    }

    p.text-bold-title {
        font-size: 6rem;
    }
    
}

@media (max-width: 360px) {
    figure.icon-badge.display {
        height: 170px;
    }
}

`

export const IconChip = styled.div`
    figure.image-icon-chip {
        width: 78px;
        height: 78px;
        margin: auto auto 15px;
    }
    figure.image-icon-chip.chipa12 {
        background: url(${chipa12})
    }

    figure.image-icon-chip.chipa13 {
        background: url(${chipa13})
    }

    figure.image-icon-chip.chipa14 {
        background: url(${chipa14})
    }

    figure.image-icon-chip.chip730 {
        background: url(${chip730})
    }

`