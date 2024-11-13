
import Banner from './components/Banner/Banner'
import Community from './components/Banner/Community'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Subscribe from './components/Subscribe/Subscribe'


const App = () => {
  return (
    <main className=' overflow-x-hidden bg-white text-dark'>
      
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Community />
      <Footer />
    </main>
  )
}

export default App
