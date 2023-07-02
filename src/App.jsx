import { HeroVideo, Categories, InfoSection, Blog, Footer, Header } from './components'

function App() {
  return (
    <div className='flex flex-col gap-6'>
      <Header />
      <div className='px-4 lg:px-36 flex flex-col gap-12'>
        <HeroVideo />
        <Categories />
      </div>
      <div className='flex flex-col gap-6 mt-16'>
        <InfoSection />
        <Blog />
      </div>
      <Footer />
    </div>
  )
}

export default App
