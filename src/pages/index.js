import * as React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../../components/Navigation'

// markup
const IndexPage = () => {
  let [ doc, setDocument ] = React.useState(null)
  React.useEffect(() => {
        if (window) {
          setDocument(window.document)
        }
    }, [setDocument])
  return (
        !doc ? <main></main> : <main className="text-gray-700"><Helmet>
        <meta charSet="utf-8" />
        <title>プチ農業</title>
      </Helmet>
      <Navigation />
      </main>
  )
}

export default IndexPage
