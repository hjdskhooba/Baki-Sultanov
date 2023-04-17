import { Route } from "react-router-dom"
import { Main } from "./pages/Main/Main"
import { Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"

function App() {
 return(
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Main/>}/>
    </Route>
  </Routes>
  )
}
 
export default App
