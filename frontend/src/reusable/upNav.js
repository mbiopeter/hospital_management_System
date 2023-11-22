import './css/upNav.css';
import logo from '../images/logo.png';
import hospital from '../images/hospital.png';
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt,FaCog } from 'react-icons/fa';
import {MdViewDay } from "react-icons/md";
const UpNav = ({toggleMobile,ToggleMobileSize,userName}) => {
    return(
        <div className="upNavContainer">
            <div className='UpNavToggleMoble' style={(toggleMobile === true) ? {display: 'block'} : (toggleMobile === false) ? {display: 'none'} : null}>
                <MdViewDay onClick={ToggleMobileSize} className='ExpandMobile'/>
            </div>
            <div className="logoContainer">
                <img src={logo} />
            </div>
            <div className="HeaderRightContainer">
                <div className="hospitalDetailsContainer">
                    <div className="HospitalLogoContainer">
                        <img src={hospital} alt="" />
                    </div>
                    <div className="HospitalNameContainer">
                        <span>Triciq Hospital</span>
                    </div>
                </div>
                <div className="UserDetailsContainer">
                    <span>{userName}</span>
                    <FaCircleUser className='HeaderRightMostIcons'/>
                    <FaCog className='HeaderRightMostIcons'/>
                    <FaSignOutAlt className='HeaderRightMostIcons'/>
                </div>
            </div>
        </div>
    )
}
export default UpNav;