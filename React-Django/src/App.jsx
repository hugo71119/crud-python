import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Principal from './components/Principal'
import Layout from './layouts/Layout'
import VerTareas from './components/VerTareas';
import CrearTareas from './components/CrearTareas';
import Edicion from './components/Edicion';

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Principal/>} />
          <Route path='/vertareas' element={<VerTareas/>} />
          <Route path='/creartareas' element={<CrearTareas/>} />
          <Route path='/vertareas/:id' element={<CrearTareas/>} />
          <Route path='/editartarea/:id' element={<Edicion/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
