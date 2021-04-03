import * as React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../../components/Navigation'
import ParallaxContainer from '../../components/ParallaxContainer'
import Broccoli from '../images/foodism360-Gwak7T9evEk-unsplash.jpg'

// markup
const IndexPage = () => {
  let [ doc, setDocument ] = React.useState(null)
  React.useEffect(() => {
        if (window) {
          setDocument(window.document)
        }
    }, [setDocument])
  return (
        !doc ? <main></main> : <ParallaxContainer image={Broccoli} imageAlt='Broccolies in light green background'>
          <main className="text-gray-900">
            <Helmet>
              <meta charSet="utf-8" />
              <title>プチ農業</title>
            </Helmet>
            <Navigation />
          </main>
      </ParallaxContainer>
  )
}

export default IndexPage
