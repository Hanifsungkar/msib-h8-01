import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '16px'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout