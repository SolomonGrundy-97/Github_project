import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';



const RepoDetails = () => {

  const { id } = useParams()
  const [details, setDetails] = useState({})
  const [branch, setBranch] = useState({})
  const [deployment, setDeployment] = useState({})

  useEffect(() => {
    fetch(`https://api.github.com/repos/SolomonGrundy-97/${id}`)
      .then((response) => (response.json()))
      .then((data) => {
        setDetails(data)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/repos/SolomonGrundy-97/${id}/branches`)
      .then((response) => (response.json()))
      .then((data) => {
        setBranch(data)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.github.com/repos/SolomonGrundy-97/${id}deployments`)
      .then((response) => (response.json()))
      .then((data) => {
        setDeployment(data)
      })
  }, [])

  return (

    <>
      <div className='bg-black text-white text-center'>
        <h3 className='text-success'>Repo details...</h3>

        <h5>Name: ${details.name}</h5>
        <h5>Descrih5tion: ${details.descrih5tion}</h5>
        <h5>Stars: ${details.stargazers_count}</h5>
        <h5>Watchers: ${details.watchers}</h5>
        <h5>Forks: ${details.forks}</h5>
        <h5>Branches: ${details.length}</h5>
        <h5>Language: ${details.language}</h5>
      </div>

      <div className='container'>
        <div className="container text-white bg-secondary rounded-4 p-3 w-fit-content">
          <p>Language: {details.language === null ? "none" : details.language}</p>
          <p>Live site: {deployment.length === 0 ? "none" :
            <a className='text-decoration-none text-danger'
              href={`hhtps://SolomonGrundy-97.github.io/${details.name}`}>
              SolomonGrundy-97.github.io/
              {details.name}
            </a>}
          </p>

          <p>
            <a className='text-decoration-none text-danger'
              href={`https://github.com/${details.full_name}`}>
              View on Github
            </a>
          </p>
        </div>
      </div>

      <div className='text-center mt-5 mb-5 '>
        <button className='btn bg-secondary text-white '>
          <Link href='/' />
          Home Page
        </button>
      </div>


      <Footer />
    </>
  )
}

export default RepoDetails
