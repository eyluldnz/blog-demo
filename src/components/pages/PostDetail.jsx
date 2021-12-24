import React from 'react'
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PostDetail(props) {

    const params = useParams();
    const [q, setQ] = useState(params.id);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    const URL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        setTimeout(() => {
            fetch(URL + "/" + q).then(res => res.json()).then(json => {
                setData(json)
                console.log(json)
            });
            setLoading(false);

        }, 1000)

    }, [])

    return (
        <>

            <hr />

            {
                loading ? <h1>Yükleniyor</h1> : null
            }

            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.body}</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export { PostDetail }