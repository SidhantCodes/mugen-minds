import { Landing, Footer, ContactUs, Features } from "../components"

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className="font-marcellus text-[#FFB6B6] text-[32px] mb-14">MugenMinds</h1>
      <Landing />
      <Features />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default Home
