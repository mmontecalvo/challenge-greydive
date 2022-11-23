import React from 'react';
import { Link } from 'react-router-dom';

function Home({clients}) {
    return (
        <div className="home">
            {
                clients.map((client) => {
                    return (
                        <Link to={"/" + client.cliente} key={client.cliente}>
                            <button className="home__btn">
                                <span>{client.cliente}</span>
                            </button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Home
