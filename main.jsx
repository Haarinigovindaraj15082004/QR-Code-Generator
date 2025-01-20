import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Qrcode.css'
import { Qrcode } from './Qrcode'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Qrcode/>
  </StrictMode>,
)
