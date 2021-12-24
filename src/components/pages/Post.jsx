import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Post(props) {

    const location = useLocation();  //bulunduğumuz yeri tutuyor
    const navigate = useNavigate() //nereye yönlendireceğimizi belirtir.
    const urlParam = new URLSearchParams(location.search);
    const [q, setQ] = useState(urlParam.get('q'));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        setTimeout(() => {
            fetch(URL).then(res => res.json()).then(json => {
                dataMapByParams(json);
                console.log(json)
            });
            setLoading(false);

        }, 5000)

    }, [])


    function formHandler(e) {
        e.preventDefault();
        setQ(e.target.q.value);
        navigate(`/post?q=${e.target.q.value}`);
    }

    function hasParams() {
        if (location.search.includes('?')) {
            return true;
        }
        else {
            return false;
        }

    }

    const dataMapByParams = (data) => {
        hasParams() ? setData(data.filter(item => item.title.includes(q))) : setData(data);
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
            <hr />

            {
                loading ? <h1>Yükleniyor</h1> : null
            }

            <div className="container">
                <div className="row">
                    {
                        data.map(item =>
                            <div className="col-md-3">
                                <div className="card">

                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.body}</p>
                                        <Link to={"/postDetail/"+item.id}>Detail</Link>
                                    </div>
                                </div>
                            </div>

                        )

                    }
                </div>
            </div>

        </>
    )
}

export { Post }