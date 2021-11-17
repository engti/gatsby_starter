import* as React from "react"
import { Link } from "gatsby"

const HomePage = () => {
  return(
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby</h1>
      <p>I'm making a gatsby site</p>
      <Link to="/about">
        About Page 
      </Link>
    </main>
  )  
}

export default HomePage