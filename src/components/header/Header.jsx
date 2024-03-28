import './Header.css'
import HeaderImg from "../../images/6.avif"

const Header = () => {
  return (
    <div className='header'>
      <div className='img'>
        <div>
          <img src={HeaderImg} alt="" className="img-fluid" /> 
        </div>
        <div className='Overlay'></div>
      </div>
      <div className='Content'>
        <h6>
          {""}
          Why you Try Buy A Something <span>Cool</span> ?
        </h6>
        <button className='btn btn-primary'>Read More</button>
      </div>
    </div>
  )
}

export default Header
