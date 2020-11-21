import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PageHeader from '../components/PageHeader'
import api from '../services/api'
import { Div, Main } from '../styles/pages/smartphones'
import {useRouter} from 'next/router'
import { ChildreenSearch, Input, Line, SearchIcon, CreateElement } from '../styles/pages/search'
import { DataProps } from '../components/CompareContent'
import { GetStaticProps } from 'next'

function SearchPage({allDevices}) {
  const router = useRouter();   
  
  const [search, setSearch] = useState('')


  const [listPhones, setListPhones] = useState([])

  async function searchphones() {

    const response = await api.get('search?search='+ router.query.search);
    setListPhones(response.data)
    setSearch(router.query.search as string)
  }

  useEffect(() => { searchphones()  }, [router])

  const [createElement, setCreateElement] = useState(false)

  function searchOnFocus() {
    
    setCreateElement(true)
    document.querySelector('body')?.setAttribute('style', 'overflow:hidden')    
  }

  function searchOnFocusRemove() {
    setCreateElement(false)
    document.querySelector('body')?.removeAttribute('style')
  }

  return (
    <div id="page-search">
      <Head>
        <title>{router.query.search} - Compara Tudo!</title>
        <link rel="cononical" href={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="cononical" />

        <meta name="description" content="Resultados da pesquisa em Compara Tudo!" key="description" />
        <meta property='og:type' content='website' key="og:type" />
        <meta property="og:description" content="Resultados da pesquisa em Compara Tudo!" key="og:description" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL_BASE + router.asPath} key="og:url" />
        <meta name="robots" content="noindex, nofollow" />

      </Head>

      <NavBar 
        />

      <PageHeader
        title='Resultado da Pesquisa'
        linkStyle='var(--color-secondary)'
      >
        <ChildreenSearch className={createElement && 'search-on'}>
          <form action="/search">

          <Input 
            type='text' 
            name="search"
            value={search || ''}
            onBlur={searchOnFocusRemove}
            onFocus={searchOnFocus}
            onChange={(e) => {setSearch(e.target.value)}}
            className='input-header'
            autoComplete="off"

          />

          <SearchIcon type="submit">
            <span>Search</span>
          </SearchIcon>
          </form>
          
        </ChildreenSearch>
        

        <Line>
          
            {listPhones.length === 0 ? <span><strong>Nenhum</strong> Resultado encontrado</span>   : listPhones.length > 1 ? <span><strong>{listPhones.length}</strong>  Resultados encontrados </span> : <span><strong>{listPhones.length}</strong> Resultado encontrado  </span>             }

          
        </Line>

      </PageHeader>

      <Main>

          {listPhones.length === 0 ? 
          
          <div style={{height: '300px', textAlign: 'center', fontSize: '1.7rem', fontWeight: 'bolder', width: '90%', margin: 'auto'}}>Busque outro termo para ver mais resultados</div> : 
          
          <Div>{listPhones.map((listPhone: DataProps) => { return <Cards key={listPhone.modelo} phones={listPhone} />})}</Div> }

      </Main>

      <Footer data={allDevices} />

      {createElement && <CreateElement/>}

    </div>
  )
}

export default SearchPage

export const getStaticProps:GetStaticProps = async () => {

  const response = await api.get(`search?search=`)

  const data = await response.data

  return {
    props: {
      allDevices: data,
    },
    revalidate: 10
  }
}
