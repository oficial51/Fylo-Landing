import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Promo from './components/Promo'
import StayProductive from './components/StayProductive'
import Testimonials from './components/Testimonials'
import NotifyMe from './components/NotifyMe'
import Footer from './components/Footer'

function App() {

  return (
    <main className='bg-[#181F2B] -z-40 items-center h-full'>
      <Navbar></Navbar>
      <Intro></Intro>
      <Promo></Promo>
      <StayProductive></StayProductive>
      <Testimonials></Testimonials>
      <NotifyMe></NotifyMe>
      <Footer></Footer>


    </main>
  )
}

export default App
