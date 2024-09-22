import "./App.css"
import { useState, useEffect } from "react";
import getArticles from "./utils/getArticles";
import WebTitle from "./components/WebTitle";
import Articles from "./components/Articles"
import LimitArticles from "./components/LimitArticles"
import LostArticles from "./components/LostArticles"
import Layout from "./components/Layout";

const App = () => {
  const [articles, setArticles] = useState("")
  const [count, setCount] = useState(1)

  useEffect(() => {
    getArticles(count).then(result => setArticles(result))
  }, [count])

  const nextArticles = () => {
    setCount(count + 1)
  }
  const prevArticles = (e) => {
    console.log(e)
    setCount(count - 1)
  }

  if (count === 0) return <LostArticles />

  return (
    <Layout>
      <Articles title={articles.title} desc={articles.body} />
    </Layout>
  )
}

export default App;