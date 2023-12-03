import './HeaderMain.scss'
import Lines from '../two-lines/Lines'

const HeaderMain = (props) =>{
    const color = 'white'
    return(
        <div className='headerMain__main'>
            <div className='headerMain__main-text'>
                Everything You Love About Coffee
            </div>
            <Lines color={color}/>
            <div className="headerMain__main-subtitle">
                <div className="headerMain__main-subtitle">
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                </div>
            </div>
            <button className="headerMain__btn">More</button>
        </div>
    )
}

export default HeaderMain