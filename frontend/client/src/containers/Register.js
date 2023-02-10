import Layout from 'components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from 'features/user';


const Register = () => {
  const { registered, loading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const { first_name, last_name, email, password } = formData;

  const onSubmit = e => {
    e.preventDefault();

    dispatch(register({ first_name, last_name, email, password }));

  };

  if (registered) {
    return <Navigate to='/login' />;
  };

  return (
    <Layout title='Auth site | Register User' content='Register for the platform'>
      <h1>Register for an account</h1>
      <form className='mt-5'  >
        <div className='form-group'>
          <label htmlFor='first_name' className='form-label'>First name </label>
          <input
            className='form-control'
            type='text'
            name='first_name'
            onChange={onChange}
            value={first_name}
            required
          />
        </div>
        <div className='form-group mt3'>
          <label htmlFor='last_name' className='form-label'>last name </label>
          <input
            className='form-control'
            type='text'
            name='last_name'
            onChange={onChange}
            value={last_name}
            required
          />
        </div>
        <div className='form-group mt3'>
          <label htmlFor='email' className='form-label'>Email </label>
          <input
            className='form-control'
            type='email'
            name='email'
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className='form-group mt3'>
          <label htmlFor='password' className='form-label'>Password </label>
          <input
            className='form-control'
            type='password'
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        {
        loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
          :
          <button type='submit' onSubmit={onSubmit} className='btn btn-primary mt-4'>
            Register
          </button>
        }
      </form>
    </Layout>
  );
};

export default Register;
