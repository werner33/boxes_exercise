
// Tools
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, 

} from 'react-router-dom';
import './App.scss';

// Layouts
import DefaultLayout from './layout/DefaultLayout';

// Pages
import PokemonList from './pages/PokemonList';
import PokemonDetailView from './pages/PokemonDetailView';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route  path='/' element={<DefaultLayout/>}>
        <Route index element={<PokemonList/>}></Route>
        <Route path='/pokemon/:pokemonName' element={<PokemonDetailView/>}></Route>
      </Route>
    )
  )

  return (

    <RouterProvider router={router} />
   
  )
}

export default App;
