import React from 'react'
import { Link } from 'react-router-dom'

function Root() {
    return (<>
        <div >
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}> main</Link>
                    </li>
                    <li>
                        <Link to={`/home`}> home</Link>
                    </li>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Root