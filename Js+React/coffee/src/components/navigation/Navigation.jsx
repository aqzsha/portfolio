import './Navigation.scss'
import Logo from '../../assets/icon/coffee-beans-white-border.svg'


const Navigation = () =>{
    return(
        <div className='nagivation'>
            <button className='navigation__logo'>
                <img src={Logo} alt="logo coffee beans" className="navigation__logo-img"/>
                <div className='navigation__logo-text' >Coffee house</div>
            </button>
            <button className='navigation__logo'>
                <div className='navigation__logo-text' >Our coffee</div>
            </button>
            <button className='navigation__logo'>
                <div className='navigation__logo-text' >For your pleasure</div>
            </button>
        </div>
    )
}
export default Navigation