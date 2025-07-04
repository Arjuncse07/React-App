import React, { useState,useMemo } from 'react';

const LoginFormFunctional = () => {
  // States to hold form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'age') setAge(value);
  };


  // use Memo to memoize validation error
  const validationErrors = useMemo( ()=> {
    const errors = {};
    if(!name) errors.name = 'Name is required';
    if(!email || !email.includes('@')) errors.email = 'Valid Email is not valid';
    if(!age || isNaN(age) || age <= 0) errors.age = 'Valid Age is required';
    return errors;
  }, [name, email, age]);




  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
if(Object.keys(validationErrors).length > 0){
  alert('Please fix the errors before submitting');
  return;
}

    // Setting submitted data (you can handle it further)
    setSubmittedData({ name, email, age });

    // Reset form fields
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
            style={{ padding: '8px', marginTop: '6px', width: '100%' }}
          />
          {validationErrors.name && <span style ={{ color: 'red', fontSize: '12px' }}>{validationErrors.name}</span>}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            style={{ padding: '8px', marginTop: '6px', width: '100%' }}
          />
          {validationErrors.email && <span style = {{ color: 'red', fontSize: '12px' }}>{validationErrors.email}</span>}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleInputChange}
            required
            style={{ padding: '8px', marginTop: '6px', width: '100%' }}
          />
          {validationErrors.age && <span style={{ color: 'red', fontSize: '12px' }}>{validationErrors.age}</span>}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#28a745',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '16px',
          }}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '24px' }}>
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginFormFunctional;
