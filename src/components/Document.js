export function Document(props) {
  const {Html, Head, Body, children, siteData, renderMeta} = props

  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="manifest" href="/manifest.json" />

        <title>สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง</title>

        <meta
          name="description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta name="image" content="https://join.ycc.in.th/images/og.png" />

        <meta
          itemprop="name"
          content="สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง"
        />

        <meta
          itemprop="description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta itemprop="image" content="https://join.ycc.in.th/images/og.png" />

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
          name="og:title"
          content="สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง"
        />

        <meta
          name="og:description"
          content="พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน"
        />

        <meta name="og:image" content="https://join.ycc.in.th/images/og.png" />
        <meta name="og:url" content="https://join.ycc.in.th" />
        <meta name="og:site_name" content="Young Creator's Camp" />
        <meta name="og:locale" content="th_TH" />
        <meta name="fb:admins" content="100013664474455" />
        <meta name="fb:app_id" content="2314627122104275" />
        <meta name="og:type" content="website" />

        <meta
          property="article:author"
          content="https://www.facebook.com/ycccamp"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
