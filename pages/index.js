import Head from 'next/head'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import PatientsList from '../components/PatientsList'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Doctor App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <InfoCard />
        <PatientsList />
      </main>
      
    </div>
  )
}
