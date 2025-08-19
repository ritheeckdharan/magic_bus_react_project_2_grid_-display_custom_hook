import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Display from './components/Display'

import 'bootstrap/dist/css/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display />
  </StrictMode>,
)
