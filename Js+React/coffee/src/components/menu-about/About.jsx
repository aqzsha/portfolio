import './About.scss'
import Lines from '../two-lines/Lines';
import Image from '../../assets/cup-with-coffee.png'


const About = (props) =>{
    // const {text, subtext, color} = props;
    const text = 'About Us';
    const color = 'black';
    const {subtext, img, alt} = props;
    return(
        <div className={`about ${img===''? '' : 'wide_min'}`}> 
            {/* <div className='about__img'>
                <img src={Image} alt={alt} />
            </div> */}
            <div className='about__main'>
                <div className="about__text">{text}</div>
                <Lines color={color}/>
                <div className={`about__subtext ${img===''? 'wide' : ''}`}>{subtext}</div>
            </div>
        </div>
    )
}

export default About