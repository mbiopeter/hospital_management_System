import './PatientPhoto.css';
import {FaTimes,FaUserAlt,FaSignOutAlt } from "react-icons/fa";
const PatientPhotoModal = ({PatientPhoto,togglePatientPhotoModal}) => {
    return((PatientPhoto === true) ? (
        <div>
            <div className="PatientPhotoModalOverlayer" onClick={togglePatientPhotoModal}>

            </div>
            <div className="PatientPhotoModalContainer">
                <div className="PatientPhotoModalContainerHeader">
                    <FaTimes className='closeIcon' onClick={togglePatientPhotoModal}/>
                </div>
                <div className="PatientPhotoModalContainerBody">
                    <FaUserAlt className='PatientPhotoModalContainerBodyIcon'/>
                </div>
                <div className="PatientPhotoModalContainerIcons">
                    <form>
                        <div className="photoColOne">
                            <FaSignOutAlt className='CameraIcon'/>
                            <input type="file" />
                        </div>
                        <button className='SubmitPatientPhoto'>OK</button>
                    </form>
                </div>
            </div>
        </div>
    ):null)
}
export default PatientPhotoModal;