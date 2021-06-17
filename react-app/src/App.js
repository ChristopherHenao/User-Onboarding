import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import User from './components/User'
import axios from 'axios'



function App() {

  // made initial Form Values
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    termsOfService: null
  }

  // created state for users
  const [ users, setUsers ] = useState([])

  // created state for Form values
  const [ formValues, setFormValues ] = useState(initialFormValues)

  // created updateForm function that updates the state of formValues to what is input in the form
  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

    
    // axios.post('ttps://reqres.in/api/users', newUser)
    // .then(res => {
    //   console.log(res)
    // })
    
    setUsers([newUser, ...users])
    setFormValues(initialFormValues)
    
  }

  useEffect(() => {
    console.log(users)
  },[users])

  return (
    <div className="App">
      <Form 
      update={updateForm}
      values={formValues}
      submit={submitForm}
      />
      {users.map((user, idx) => {
        return <User key={idx} user={user}/>
      })}
    </div>
  );
}

export default App;
