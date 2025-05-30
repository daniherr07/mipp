'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from 'next/navigation'
import { Suspense, useState} from 'react';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

function Search() {
  const searchParams = useSearchParams()
  const search = searchParams.get('nombre')
 
  return search
}

export default function Home() {
  const [open, setOpen] = useState(false)
  const { width, height } = useWindowSize()
  return (
    <Suspense fallback={<div>Cargando...</div>}> 
      <main className={styles.main}>
          {
            open &&     
              <Confetti
                width={width}
                height={height}
              />
          }

        <h1 className={styles.header}>Holaaa {Search()}</h1>
        <Image
          src="/cuh.png"
          width={200}
          height={200}
          alt="Gatoo"
          className={styles.image}

        />
        <div className={styles.button} onClick={() => setOpen(true)}>
          <p >Presioname</p>
        </div>

        {
          open && <PopUp />
        }
      </main>

    </Suspense>


  );
}

function PopUp() {
  

  return (
    <div className={styles.mainPopUp}>

      <Image
        src="/dogs.gif"
        width={250}
        height={350}
        alt="Gatoo"
        className={styles.imagePopUp}
      />
      <p className={styles.textPopUp}>Quiero agradecerte por todo el tiempo que hemos sido amigos. Espero que estes teniendo una convivencia muy bonita. Recuerda que siempre puedes contar conmigo para lo que sea</p>
    </div>
  );
}

