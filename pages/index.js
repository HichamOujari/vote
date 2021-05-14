import Head from 'next/head'
import style from '../styles/Home.module.css'
import VoterInformation from "../componants/voterInformation"
import LocationImformation from "../componants/locationImformation"
import Calendar from "../componants/calendar"

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Welcome to Voter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={style.main}>
        <VoterInformation />
        <LocationImformation />
        <Calendar />
      </main>
    </div>
  )
}
