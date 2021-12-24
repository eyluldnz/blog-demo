import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import {useState} from 'react';

export default function Home() {

    const location=useLocation();  //bulunduğumuz yeri tutuyor
    const navigate=useNavigate() //nereye yönlendireceğimizi belirtir.
    const urlParam=new URLSearchParams(location.search);

    const [q, setQ] = useState(urlParam.get('q'))

    function formHandler(e) {
        e.preventDefault();
        navigate(`/post?q=${e.target.q.value}`);
    }

    return (
      <>
        <form onSubmit={formHandler}>
          <div className="mb-3">
            <label htmlFor="search" className="form-label">
              Search Post
            </label>
            <input type="search" className="form-control" name="q" id="search" defaultValue={q} />
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    )
}

export {Home};
