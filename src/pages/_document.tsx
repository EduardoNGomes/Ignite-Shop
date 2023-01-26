import { getCssText } from '@/styles'
import {Html, Head, Main, NextScript} from 'next/document'

export default function Documentation() {
  return(
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

        <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}} />
      </Head>

      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}