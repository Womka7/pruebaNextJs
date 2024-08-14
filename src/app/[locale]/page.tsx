'use client'

import Image from "next/image";
import Link from 'next/link';
import Icon from "../components/Icon";
import Button from "../components/Button";
import { useTranslations } from "next-intl";

export default function Home() {
  
  const t = useTranslations("Home");

  return (
    <main >

    
      <h1>{t("text")}</h1>

      <Link href="/home">
        Go to Home Page
      </Link> <br />

      <Link href="/admin">
        Go to Admin Page
      </Link>
      <div> Componentes</div>
{/* 
      function handledAccept() {
        console.log("Clicked");
      } */}

      <Button label="Click Me" onClick={() => console.log('Clicked')} />
    </main>
  );
}
