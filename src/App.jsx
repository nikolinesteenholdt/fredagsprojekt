import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './komponenter/Navigation'
import Forside from './sider/Forside'
import Kontakt from './sider/Kontakt'
import Omos from './sider/Omos'
import Produkt from './sider/Produkt'


function App() {

  return (

    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="omos" element={<Omos />} />
        <Route path="produkt" element={<Produkt />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="*" element={<Navigate to ="/" />} /> 
      </Routes>
    
    </>
  )
}

export default App
