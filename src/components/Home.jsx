import React from 'react'
const Home = ({setCity}) => {
  return (
    <div className="bg-white h-12 w-[420px] rounded-full flex items-center px-5 shadow-lg hover:shadow-xl transition">
  <span className="text-blue-500 mr-3">🌍</span>
  {/* <input
    type="text"
    placeholder="Search weather by city..."
    className="w-full outline-none text-gray-700 placeholder-gray-400"
  onChange={(e)=>setCity(e.target.value)} */}

  
  {/* /> */}
  <input
  className="w-full outline-none text-gray-700 placeholder-gray-400"
  placeholder='Enter city name'
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  }}
/>

</div>

  )
}

export default Home
