const { 
  FIREBASE_API_KEY,
  DB_URL,
  FIREBASE_PROJECT_ID
} = process.env
module.exports = {
  siteMetadata: {
    title: 'puchi-nougyou',
  },
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-sass', 
  {
    resolve: "gatsby-plugin-firebase",
    options: {
      credentials: {
        apiKey: FIREBASE_API_KEY,
        authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
        databaseURL: DB_URL,
        projectId: FIREBASE_PROJECT_ID
      }
    }
  }
]
}
