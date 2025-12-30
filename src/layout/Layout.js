import { Outlet } from "react-router-dom"
import Footer from "../section/common/Footer"
import Header from "../section/common/Header"

const Layout = () => {
  return (
    <div className="all-wrap">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout