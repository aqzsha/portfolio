import './Lines.scss'
import ImageWhite from '../../assets/icon/coffee-beans-white.svg'
import ImageBlack from '../../assets/icon/coffee-beans-black.svg'

const Lines = (props) =>{
    const {color} = props;
    return(
        <div className='line__logo'>
            <div className={`line__logo-line ${color==='white' ? 'white' : 'black'}`}></div>
            <div className="line__logo-img">
                <img src={color==='black' ? ImageBlack : ImageWhite} alt="coffee-beans" />
            </div>
            <div className={`line__logo-line ${color==='white' ? 'white' : 'black'}`}></div>
        </div>
    )
}

export default Lines;