import { HeroVideo, Categories, InfoSection } from './components'

function App() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='px-4 flex flex-col gap-6'>
        <HeroVideo />
        <Categories />
      </div>
      <div className='flex flex-col gap-6'>
        <InfoSection />
      </div>
    </div>
  )
}

export default App
