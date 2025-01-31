
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)

  const bookmarksHandle = (blog) => {
    setBookmarks([...bookmarks, blog])
   

  }
  const readTimeHandle = (blog) => {
    if (bookmarks.length > 0) {
      setReadTime(readTime + blog.reading_time)
    }
    
    const remainingBlogs = bookmarks.filter(bookmark => bookmark.id !== blog.id)
    setBookmarks(remainingBlogs)
    
    
  }



  return (
    <div className='max-w-7xl mx-auto pl-10'>
      <Header></Header>
      <main className='md:flex'>
        <Blogs readTimeHandle={readTimeHandle} bookmarksHandle={bookmarksHandle}></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks} ></Bookmarks>

      </main>





    </div>
  )
}

export default App
