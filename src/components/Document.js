const title = `สมัครเข้าค่าย Young Creator's Camp #ค่ายเด็กกล้าสร้าง`
const description = `พบกันเร็วๆ นี้ กับค่าย Young Creator's Camp ที่ท้าให้น้องๆ มาสร้าง Web หรือ App ภายในเวลาสามวัน`

export function Document(props) {
  const {Html, Head, Body, children, siteData, renderMeta} = props

  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="manifest" href="/manifest.json" />

        <title>{title}</title>

        <meta name="description" content={description} />

        <meta property="og:url" content="https://join.ycc.in.th" />

        <meta property="og:title" content={title} />

        <meta property="og:description" content={description} />

        <meta
          property="og:image"
          content="https://join.ycc.in.th/images/og.png"
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/ycccamp"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
