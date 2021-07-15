import React from 'react';
import NavBar from '../../components/NavBar';
import PageHeader from '../../components/PageHeader';
import CompareContent from '../../components/CompareContent';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../../components/Footer';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { api, apiHttp } from '../../services/api';


function Smartphones({ allDevices }) {
  const router = useRouter()
  
  return (
    <div id="page-compare-smartphones" >
      <Head>
        <title>Compare Os Smartphones!</title>
        <link rel="cononical" href={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="cononical" />
        <meta name="description" content="Compare todos os celulares, tablets, computadores e muito mais!" key="description" />
        <meta property="og:description" content="Compare todos os celulares, tablets, computadores e muito mais!" key="og:description" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="og:url" />
        <meta property='og:title' content="Compare Tudo! - Celulares, Tablets, Computadores e muito mais!" key="og:title" />
        <meta property='og:type' content='website' key="og:type" />
      </Head>

      <NavBar />
      <PageHeader
        title='Compare os modelos de Smartphones'
        linkStyle='var(--color-secondary)'
      >
        <Link href='/smartphones'>
          <a><span>Ver todos os modelos</span><span> &gt;</span></a>
        </Link>

      </PageHeader>
      <CompareContent  
        data={allDevices}
      />

      <Footer data={allDevices}/>

    </div>
  )
};

export default Smartphones;

export const getStaticProps:GetStaticProps = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HTTP}/search?search=`)
  const response = await apiHttp.get('smartphones/last-phones')

  const data = await response.data
  
  return {
    props: {
      allDevices: data,
    },
    revalidate: 10
  }
}