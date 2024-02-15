
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


//
function App(){
  const saludo = "Bienvenidos"
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={saludo}/>
    
    </>
    
  )
}

export default App;