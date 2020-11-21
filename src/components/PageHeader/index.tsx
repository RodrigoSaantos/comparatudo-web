import Link from 'next/link';
import React from 'react';

import {HeaderHero, Icss} from './PageHeader'

interface IpageHeader extends Icss {
  title: string
  subtitle?: string
  link?: string
}



const PageHeader: React.FC<IpageHeader> = ({ title, subtitle, link, children, backgroundStyle, widthStyle, heightStyle, textSubtitleStyle, linkStyle, backgroundUrl }) => {
  return (

      <HeaderHero         
        backgroundStyle={backgroundStyle} 
        widthStyle={widthStyle}
        heightStyle={heightStyle}
        textSubtitleStyle={textSubtitleStyle}
        linkStyle={linkStyle}
        backgroundUrl={backgroundUrl}

      >

        <div>
          <h1>{title}</h1>
          <p>
            <a>{subtitle}</a>
          </p>
          {children}
        </div>

        

      </HeaderHero>

  )
}

export default PageHeader;