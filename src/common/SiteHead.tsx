import React from 'react'
import {Head} from 'react-static'

export default function SiteHead() {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>สมัครเข้าค่าย Junior Webmaster Camp XI</title>

      <meta
        name="description"
        content="พบกันเร็ว ๆ นี้ กับค่าย Junior Webmaster Camp ค่ายทำเว็บของเด็ก ม.ปลาย ปีที่ 10"
      />

      <meta property="og:url" content="https://registration.jwc.in.th" />

      <meta
        property="og:title"
        content="สมัครเข้าค่าย Junior Webmaster Camp XI"
      />

      <meta
        property="og:description"
        content="พบกันเร็ว ๆ นี้ กับค่าย Junior Webmaster Camp ค่ายทำเว็บของเด็ก ม.ปลาย ปีที่ 10"
      />

      <meta
        property="og:image"
        content="http://www.jwc.in.th/assets/img/og.jpg"
      />

      <meta
        property="article:author"
        content="https://www.facebook.com/jwcth"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Kanit:300,400"
        rel="stylesheet"
      />
    </Head>
  )
}
