import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement=React.createElement('a',{'href':'www.google.com','target':'_blank'},"ClickMe")

createRoot(document.getElementById('root')).render(
 reactElement
)
