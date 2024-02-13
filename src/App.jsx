
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//
function App(){
  const saludo = "Bienvenidos"
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={saludo}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={saludo}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>NOT FOUNT</h1>}/>
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;