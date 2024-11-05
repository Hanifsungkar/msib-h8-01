import { Outlet, Link, useNavigate } from "react-router-dom";

function MainLayout() {
  let navigate = useNavigate()

  const showDashboard = () => {
    if (localStorage.getItem("access_token")) {
      return <Link to="/dashboard">Dashboard</Link>
    }
  }

  const login = () => {
    localStorage.setItem("access_token", "123qweasd")
    navigate("/dashboard")
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    navigate("/")
  }

  return (
    <div>
      <nav style={{ display: 'flex', gap: '16px'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        { showDashboard() }
        {
          localStorage.getItem("access_token")
          &&
          <button onClick={() => logout()}>Logout</button>
        }
        {
          !localStorage.getItem("access_token")
          &&
          <button onClick={() => login()}>Login</button>
        }
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout