// o arquivo index geralmente é a página home do next
import CompletedChalenges from "../components/CompletedChalenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* o Head do next serve para injetarmos coisas dentro do head final do html */}
      {/* isto pode ser feito em qualquer lugar da aplicação */}
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
