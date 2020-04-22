import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default () => {
    const {name} = useParams();
    console.log(name);
    return (
        <div className={"home"}>
            <Link to={"/about"}>About</Link>
            <main>
                <h1>Hello {name ? name : 'world'}!</h1>
            </main>
        </div>
    );
}