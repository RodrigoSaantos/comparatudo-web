import Head from 'next/head'
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PageHeader from '../components/PageHeader'
import api from '../services/api'
import { Div, Main } from '../styles/pages/smartphones'
import Search from '../components/Search'
import { GetStaticProps } from 'next'
import { DataProps } from '../components/CompareContent'
import { useRouter } from 'next/router'

const Smartphones = ({allDevices}) => {

  const [search, setSearch] = useState('')


  const [listPhones, setListPhones] = useState(allDevices)

  useEffect(() => {

    api.get('allphones').then(response => {

      const total = response.data
      setListPhones(total)
    })

  }, [])

  useEffect(() => {

    api.get('search', {
      params: {
        search
      }
    }).then(response => {

      const total = response.data
      setListPhones(total)
    })

  }, [search])

  async function searchphones( e: FormEvent) {

    e.preventDefault()

    const response = await api.get('search', {
      params: {
          search
      }
  });

    setListPhones(response.data)
    
  }

  const router = useRouter()

  return (
    <div id="page-smartphones">
      <Head>
        <title>Smartphones</title>
        <link rel="cononical" href={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} />
        <meta name="description" content="Compare todos os celulares, tablets, computadores e muito mais!" />
        <meta property="og:description" content="Compare todos os celulares, tablets, computadores e muito mais!" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} />
      </Head>

      <NavBar />

      <PageHeader
        title='Todos os modelos de Smartphones'
        linkStyle='var(--color-secondary)'
      >
        <Link href='/compare/smartphones'>
          <a><span>Compare os modelos</span><span> &gt;</span></a>
        </Link>
      </PageHeader>
      
      <form onSubmit={searchphones}>
      <Search
        name="search"
        placeholder="Pesquise os celulares aqui"
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
      />
      </form>

      <Main>
        <Div>
        {listPhones.map((listPhone: DataProps) => {
          return <Cards key={listPhone.modelo} phones={listPhone} />
        })}

        </Div>

      </Main>

      <Footer data={allDevices} />
    </div>
  )
}

export default Smartphones

export const getStaticProps:GetStaticProps = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BASE}/search?search=`)
  const response = await api.get('search?search=')

  const data = await response.data
  return {
    props: {
      allDevices: data,
    },
    revalidate: 10
  }
}