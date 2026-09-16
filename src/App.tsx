import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Activities } from "./pages/Activities"
import { Animals } from "./pages/Animals"
import { Blog } from "./pages/Blog"
import { BlogPost } from "./pages/BlogPost"
import { Connect } from "./pages/Connect"
import { Home } from "./pages/Home"
import { Plants } from "./pages/Plants"
import { Story } from "./pages/Story"
import { Visit } from "./pages/Visit"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "")

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
