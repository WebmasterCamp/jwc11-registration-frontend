export function Document(props) {
  const {Html, Head, Body, children, siteData, renderMeta} = props

  return (
    <Html lang="th">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          href="/logo/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/logo/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/logo/favicon-128x128.png"
          sizes="128x128"
        />
        <link
          rel="icon"
          type="image/png"
          href="/logo/favicon-196x196.png"
          sizes="196x196"
        />
        <link rel="manifest" href="/manifest.json" />

        <title>สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง</title>

        <meta
          name="description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta name="image" content="https://join.ycc.in.th/images/og.png" />

        <meta
          itemProp="name"
          content="สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง"
        />

        <meta
          itemProp="description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta itemProp="image" content="https://join.ycc.in.th/images/og.png" />

        <meta name="twitter:card" content="summary" />

        <meta
          name="twitter:title"
          content="สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง"
        />

        <meta
          name="twitter:description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta name="twitter:site" content="@ycc_th" />
        <meta name="twitter:creator" content="@ycc_th" />

        <meta
          name="twitter:image:src"
          content="https://join.ycc.in.th/images/og.png"
        />

        <meta
          property="og:title"
          content="สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง"
        />

        <meta
          property="og:description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta
          property="og:image"
          content="https://join.ycc.in.th/images/og.png"
        />
        <meta property="og:url" content="https://join.ycc.in.th" />
        <meta property="og:site_name" content="Young Creator's Camp" />
        <meta property="og:locale" content="th_TH" />
        <meta property="fb:admins" content="100013664474455" />
        <meta property="fb:app_id" content="2314627122104275" />
        <meta property="og:type" content="website" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
