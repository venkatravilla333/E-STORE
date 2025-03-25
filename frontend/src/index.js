


import reactDom from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

let root = reactDom.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)