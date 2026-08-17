import React, { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setData((prev) => ({
            ...prev, [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    }

  return (
    <div>
        <h1>FORM</h1>
        <form onSubmit={submit}>
            <h2>Name : 
                <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} value={data.name} />
            </h2><br />
            <h2>Email : 
                <input type="email" placeholder='Enter your email' name='email' onChange={handleChange} value={data.email} />
            </h2><br />
            <h2>Password : 
                <input type="password" placeholder='Enter Password' name='password' onChange={handleChange} value={data.password} />
            </h2><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form;