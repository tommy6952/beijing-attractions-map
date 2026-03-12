import React, { useState } from 'react'
import Map from './components/Map'
import Sidebar from './components/Sidebar'
import './App.css'

export default function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null)

  return (
    <div className="app">
      <Sidebar 
        selectedAttraction={selectedAttraction} 
        onSelectAttraction={setSelectedAttraction}
      />
      <Map 
        selectedAttraction={selectedAttraction} 
        onSelectAttraction={setSelectedAttraction}
      />
    </div>
  )
}
