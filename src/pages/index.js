import * as React from 'react'
import { Helmet } from 'react-helmet'

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>プチ農業</title>
      </Helmet>
      <h1 className="text-red-300">
        初・ジャガイモを植えるの巻
      </h1>
      <p></p>
    </main>
  )
}

export default IndexPage
