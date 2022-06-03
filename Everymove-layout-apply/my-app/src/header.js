import './header.css'

function Header(){
    return (
        <header className="header">
            <div className='cont'>
                <div ><a id='logo'>everymove</a></div>
                <nav id='topMenu'>
                    <ul>
                        <li className='menuLink'>
                            관리자
                        </li>
                        <li className='menuLink'>
                            이용자
                        </li>
                    </ul>
                </nav>
            </div>
            
            
        </header>
    )
}
export default Header;