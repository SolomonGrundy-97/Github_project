import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Image404 from '../img/404img.jpg';
import Footer from './Footer';

const Page404 = () => {

  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h1>Oops!</h1>
      <p className='text-danger'>{error.status}</p>
      <p className='text-danger'>{error.statusText}</p>

      <div className='d-grid
       justify-content-center
       align-content-center
        mb-5'>

        <div className='container shadow-lg'>
          <img src={Image404}
            alt="404image"
            className='img-fluid'
          />

        </div>
        <div className='container text-center     mt-3'>
          <button className='bg-secondary border-2px-solid-black
           border border-black'>
            <Link to='/' className=' text-decoration-none text-white'>
              Home page
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Page404
