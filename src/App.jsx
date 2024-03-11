
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hej from './components/Hej'
import Main from './components/Main'
import Unav from './components/Navigation'

function App() {


  return (
    <>
      <Unav/>
      <Hej navn="Nina" alder="26"/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
