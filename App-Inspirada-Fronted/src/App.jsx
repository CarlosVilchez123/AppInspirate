import React from 'react'

import { Header } from './componentes/Header/Header'
import { Footer } from './componentes/Footer/Footer'
import { Home } from './paginas/Home/Home'

const App = () => {
  return (
      <div className="app">
        <Header />
            <Home/>
        <Footer />
      </div>
  );
}

export default App