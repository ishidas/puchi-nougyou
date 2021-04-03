import * as React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ leading, title, chapter, linkSrc }) => {
  let [ doc, setDocument ] = React.useState(null)
  React.useEffect(() => {
      if (window) {
          setDocument(window.document)
      }
  }, [setDocument])

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
          <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={linkSrc} alt="Man with soil in his hands by Gabriel Jimenez on unsplash" />
          </div>
          <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{chapter}</div>
              {!doc ? null : <Link to="/blog1" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</Link>}
              <p className="mt-2 text-gray-500">{leading}</p>
          </div>
      </div>
    </div>
  )
}

export default BlogCard