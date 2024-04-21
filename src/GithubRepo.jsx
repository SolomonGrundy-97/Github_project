import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';



const GithubRepo = () => {

  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);



  // Fetching Repositories from my github...
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get('https://api.github.com/users/SolomonGrundy-97/repos');
        setRepos(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchRepos();
  }, []);

  if (error) {
    return <h4 className='text-danger mx-5'>Refresh: {error.message}</h4>
    
  }

  //pagination...
  const viewMore = () => {
    setCurrentPage(currentPage + 1)
  }

  //mapping and returning all the repos in a card... 
  const Reositories = repos.map((repo) => {
    return (

      <div className='bg-black'>
        <div className="card container bd_black" >
          <div className="card-body card_styling container text-center">
            <h2 className="card-title text-secondary mb-3" key={repo.id} >{repo.name}
            </h2>
            <Link to={`/repodetails/${repo.name}`}>
              <button type="button" className="btn btn-secondary">Explore more</button>
            </Link>
          </div>
        </div>
      </div>

    )
  })
  return (
    <>

      {/* search space... */}
      <div className='mb-4 mt-4'>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search Repo..." aria-label="Search Repos" aria-describedby="button-addon2"
          />
          <button className="btn btn-outline-secondary" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>


      <section className='repo_container'>
        {Reositories}
      </section>
      <div className='text-center mt-4 mb-2'>
        <button className='btn bg-secondary' type='button'
        onClick={viewMore}>
        See more
        </button>
      </div>

      <Footer />
    </>
  );
}


export default GithubRepo
