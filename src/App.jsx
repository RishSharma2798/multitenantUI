
import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Table from './components/Table'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {

  return (
    <UserContextProvider>
    <h1>408 - DataTable</h1>
    <Table/>
    </UserContextProvider>
  )
}

export default App
