import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import Aboutus from './Aboutus'
import Nopage from './Nopage'
import Porklists from './Porklists'
import Beeflists from "./BeefLists"
import Chickenlists from "./ChickenLists"
import Fishlists from "./FishLists"



function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/porklists" element={<Porklists />} />
          <Route path="/beeflists" element={<Beeflists />} />
          <Route path="/chickenlists" element={<Chickenlists />} />
          <Route path="/fishlists" element={<Fishlists />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Index