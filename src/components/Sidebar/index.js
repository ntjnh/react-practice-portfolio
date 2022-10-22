import { Link } from 'react-router-dom'
import './index.scss'
import LogoN from '../../assets/images/logo-n.png'

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoN} alt='N' />
    </Link>
  </div>
)

export default Sidebar
