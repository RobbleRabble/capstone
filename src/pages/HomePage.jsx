import React, { useState, useEffect } from 'react'
// import HelloWorld from '../components/HelloWorld'
import Sinkhole from '../components/Sinkhole'
// import ShowProfile from '../components/ShowProfile'
// import axios from 'axios'

// import items from '../data/grocery-items.json'

const HomePage = () => {
  // const [sinkholes, setSinkholes] = useState([])
  // const [searchFilter, setSearchFilter] = useState('')

  // const getAllSinkholes = async () => {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1'
  //   )
  //   console.log(response.data)
  //   setTvShows(response.data)
  // }

  // useEffect(() => {
  //   console.log('try-a random')
  //   getARandom()
  // }, [])

  // const updateSearchFilter = (e) => {
  //   setSearchFilter(e.target.value)
  //   console.log(e.target.value)
  // }

  return (
    <main>
      <header>
        <h1>Welcome to Karst-tographer</h1>
        <p>Made by Rob K</p>
        <input
          type="search"
          placeholder="search your list"
          // onChange={updateSearchFilter}
        />
        <nav></nav>
      </header>
      <h3>Map here</h3>
      <img src="../images/florida_sinkhole_map.png" />

      <ul class="featured-sinkhole"></ul>
      <li>Picture</li>
      <li>facts</li>
      <li>math</li>
      <li>responding party</li>
      <ul class="list-of-sinkholes"></ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </main>
  )
}

export default HomePage

//   // console.log('Will this work?')
//   return show.name.toLowerCase().includes(searchFilter.toLowerCase())
// })
// .map((show, index) => {
//   return (
//     <Show
//       key={show.id}
//       id={show.id}
//       name={show.name}
//       poster_path={show.poster_path}
//       popularity={show.popularity}
//       overview={show.overview}
//       vote_average={show.vote_average}
//       vote_count={show.vote_count}
//     />
//   )
// })}
