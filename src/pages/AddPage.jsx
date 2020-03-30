import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
const AddPage = () => {
  // state ={
  //   firstNameInputField:''
  // }
  // const [firstName, setFirstName] = useState('')
  // const firstNameChangedEvent = e => {
  //   // this.setState({
  //   //   firstNameInputField: e.target.value,
  //   // })
  //   const fn = e.target.value
  //   setFirstName(fn)
  // }

  const [newSinkhole, setSinkHole] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleInputChange = (e) => {
    const fieldToUpdate = e.target.formation
    const value = e.target.value
    console.log(fieldToUpdate, value)

    // now that we hvae the name and value
    // go the employee in state, and update the key of the field with the new value
    setSinkHole((prevSinkhole) => {
      console.log('before the update', prevEmployee)
      prevSinkhole[fieldToUpdate] = value
      console.log('after', prevSinkhole)
      return prevSinkhole
    })
  }

  const sendSinkholeToApi = async (e) => {
    e.preventDefault()
    const resp = await axios.post('', formation)
    console.log(resp)
    if (resp.status === 200) {
      // redirect page to the home
      // BONUS can we diplay a success message
      setShouldRedirect(true)
    } else {
      //display an error message
    }
  }

  if (shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { who: formation },
        }}
      />
    )
  } else {
    return (
      <>
        <div>
          <header>Report a new Sinkhole</header>
        </div>
        <main>
          <form onSubmit={sendSinkholeToApi}>
            <section>
              <p>First Name</p>
              {/*  onChange={firstNameChangedEvent} */}
              <input
                type="text"
                name="Formation"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <p>How deep is the depression?</p>
              <input type="text" name="lastName" onChange={handleInputChange} />
            </section>

            <section>
              <p>What County is it in?</p>
              <input type="text" name="jobTitle" onChange={handleInputChange} />
            </section>
            <section>
              <p>Person of contact?</p>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <p>When did you see it</p>
              <input
                type="text"
                name="sinkhole appearance"
                onChange={handleInputChange}
              />
            </section>
            <button>Report Sinkhole</button>
          </form>
        </main>
      </>
    )
  }
}
export default AddPage
