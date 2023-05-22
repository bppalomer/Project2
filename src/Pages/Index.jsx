import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Recipe from './Recipe'
import Home from './Home'
import Aboutus from './Aboutus'
import Nopage from './Nopage'



function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Index