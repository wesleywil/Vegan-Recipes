import './App.css'

function App() {

  return (
    <div className='h-screen w-screen flex justify-center bg-[#e0d1b8]' >
      <div className='self-center p-4'>
        <div className='flex gap-2 text-[#070804] p-2'>
          <h1 className='self-center w-8 h-8 md:w-16 md:h-16  p-4 bg-[#358546] rounded-full'></h1>
          <h1 className='self-center text-4xl md:text-8xl font-bold'>Daily Vegan</h1>
          
        </div>
        <h1 className=' border-b-4 border-[#358546] '></h1>
        <div className='text-wrap text-center mt-2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className='flex justify-center gap-2 mt-4'>
            <button className='bg-[#358546] text-[#e0d1b8] hover:opacity-90 text-2xl px-2 py-1 rounded-xl transition duration-700 ease-in-out'>Recipes</button>
            <button className='bg-[#358546] text-[#e0d1b8] hover:opacity-90 text-2xl px-2 py-1 rounded-xl transition duration-700 ease-in-out'>Personal</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
