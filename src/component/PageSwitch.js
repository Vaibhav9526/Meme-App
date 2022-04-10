import React from 'react'
import { Link } from 'react-router-dom'

const PageSwitch = () => {
  return (
    <div className="PageSwitch">
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item"><Link className="page-link" to="/">Previous Page</Link></li>
            <li className="page-item"><Link className="page-link" to="/meme2">Next Page</Link></li>
        </ul>
    </nav>
</div>
  )
}

export default PageSwitch