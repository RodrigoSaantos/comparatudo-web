import Head from 'next/head'
import { Container, Grid } from '../styles/pages/home'
import NavBar from '../components/NavBar'
import PageHeader from '../components/PageHeader'
import Link from 'next/link'
import Footer from '../components/Footer'
import { GetStaticProps } from 'next'

import smartphoneImage from '../assets/images/home/smartphones.png'
import { useRouter } from 'next/router'
import api from '../services/api'

const Home = ({allDevices}) => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Compare Tudo! - Celulares, Tablets, Computadores e muito mais!</title>
        <link rel="cononical" href={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="cononical" />
        <meta name="lomadee-verification" content="22789181" />

        <meta name="description" content="Compare todos os celulares, tablets, computadores e muito mais!" key="description" />
        <meta property='og:title' content="Compare Tudo! - Celulares, Tablets, Computadores e muito mais!" key="og:title" />
        <meta property='og:type' content='website' key="og:type" />
        <meta property="og:description" content="Compare todos os celulares, tablets, computadores e muito mais!" key="og:description" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="og:url" />
      </Head>

      <main>

        <NavBar />
        <PageHeader
          title='Smartphones'
          subtitle='Compare todos os modelos'
          link=''

          backgroundStyle='var(--color-background)'
          widthStyle='100%'
          heightStyle='450px'
          textSubtitleStyle='var(--color-text-base)'
          linkStyle='var(--color-secondary)'

           backgroundUrl={'url(' + smartphoneImage + ')'}
        >
          <Link href='/compare/smartphones'>
            <a><span>Venha conferir</span><span> &gt;</span></a>
          </Link>
          
          <figure>
            
          </figure>
        </PageHeader>

        <Grid>

        <PageHeader
          title='Computadores'
          subtitle='Compare todos os modelos'
          link=''

          backgroundStyle='var(--color-background)'
          widthStyle='100%'
          heightStyle='500px'
          textSubtitleStyle='var(--color-text-base)'
          linkStyle='var(--color-secondary)'
        >
          <Link href='/compare/smartphones'>
            <a><span>Venha conferir</span><span> &gt;</span></a>
          </Link>
        </PageHeader>

        <PageHeader
          title="TV's"
          subtitle='Compare todos os modelos'
          link=''

          backgroundStyle='var(--color-background)'
          widthStyle='100%'
          heightStyle='500px'
          textSubtitleStyle='var(--color-text-base)'
          linkStyle='var(--color-secondary)'
        >
          <Link href='/compare/smartphones'>
            <a><span>Venha conferir</span><span> &gt;</span></a>
          </Link>
        </PageHeader>

        </Grid>


      </main>

      <Footer data={allDevices}/>

    </Container>
  )
}

export default Home

export const getStaticProps:GetStaticProps = async () => {

  const response = await api.get(`smartphones/search?search=`)

  const data = await response.data

  return {
    props: {
      allDevices: data,
    },
    revalidate: 10
  }
}