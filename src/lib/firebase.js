import { initializeApp } from 'firebase/app'
import { ref, set, getDatabase} from 'firebase/database'
import dotenv from 'dotenv'

dotenv.config()
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
const {
  FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID,
  DB_URL
} = process.env
// TODO: Replace the following with your app's Firebase project configuration
console.log('FIREBASE_PROJECT_ID', FIREBASE_PROJECT_ID)
const firebaseApp = initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  databaseURL: DB_URL,
});


export const writeBlogData = (blogId, title, content=[], tags=[], imgUrls=[]) => {
  // const db = getDatabase();
  // set(ref(db, 'blog/' + blogId), {
  //   title,
  //   content,
  //   imgUrls,
  //   tags,

  // });
}

// writeBlogData('abc123grt', 'hello world', ['mememe'], ['tag1', 'tag2'], ['https://image.example'])