import React from 'react'

const Form = (props) => {

    const { update, values, submit } = props


    const onChange = (e) => {
        const { name, value } = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
      }

    return (
        <div>
            <p>Create New User </p>
            <form onSubmit={onSubmit}>
                <label>Name:  
                    <input 
                    name='name' 
                    type='text'
                    placeholder='Type Name'
                    onChange={onChange}
                    value={values.name}
                    /><br/>
                </label>

                <label>Email: 
                    <input 
                    name='email' 
                    type='email'
                    placeholder='Type Email'
                    onChange={onChange}
                    value={values.email}
                    /><br/>
                </label>

                <label>Password:
                    <input 
                    name='password' 
                    type='password'
                    placeholder='Type Password'
                    onChange={onChange}
                    value={values.password}
                    /><br/>
                </label>

                <label>Terms of Service:
                    <input 
                    name='termsOfService' 
                    type='checkbox'
                    onChange={onChange}
                    // value={values.termsOfService}
                    /><br/>
                </label>
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form