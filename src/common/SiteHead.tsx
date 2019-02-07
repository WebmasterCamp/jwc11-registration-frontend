import React from 'react'
import {Head} from 'react-static'

export default function SiteHead() {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>สมัครเข้าค่าย Young Creator's Camp</title>

      <meta
        name="description"
        content="พบกันเร็ว ๆ นี้ กับค่าย Young Creator's Camp"
      />

      <meta property="og:url" content="https://registration.jwc.in.th" />

      <meta property="og:title" content="สมัครเข้าค่าย Young Creator's Camp" />

      <meta
        property="og:description"
        content="พบกันเร็ว ๆ นี้ กับค่าย Young Creator's Camp"
      />

      <meta
        property="og:image"
        content="https://join.ycc.in.th/assets/img/og.jpg"
      />

      <meta
        property="article:author"
        content="https://www.facebook.com/ycccamp"
      />
    </Head>
  )
}
