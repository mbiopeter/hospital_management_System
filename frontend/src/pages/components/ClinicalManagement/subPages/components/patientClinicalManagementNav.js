import { Link } from "react-router-dom";
import { FaHouse,FaRegCalendarPlus,FaRegAddressBook,FaWheelchairMove,FaHeartCircleXmark,FaGhost,FaEyeDropper,FaCashRegister,FaCarOn,FaTruckArrowRight,FaRegNoteSticky,FaRegPenToSquare,FaVialCircleCheck,FaVials,FaVectorSquare,FaUserNurse,FaUpRightFromSquare,FaUserGear } from "react-icons/fa6";
const PatientClinicalManagement = ({vitalHeader,Vitals,immunization}) => {
    return(
        <div className="PatientVitalsContainerInnerHeader">
            <div className="PatientVitalsContainerInnerHeaderButtons">
                <FaRegAddressBook className="PatientVitalsContainerInnerHeaderButtonsIcon"/>
                <span>Medical records</span>
            </div>
            <div className="PatientVitalsContainerInnerHeaderButtons">
                <Link to="/History" style={{textDecoration:'none'}} >
                    <FaRegAddressBook className="PatientVitalsContainerInnerHeaderButtonsIcon"/>
                    <span>History</span>
                </Link>
            </div>
            <div className="PatientVitalsContainerInnerHeaderButtons" onClick={Vitals} style={(vitalHeader === 'Vitals') ? {backgroundColor:'gold'}:null}>
                <Link to="/PatientVitals" style={{textDecoration:'none'}} >
                    <FaRegAddressBook className="PatientVitalsContainerInnerHeaderButtonsIcon"/>
                    <span>Vitals</span>
                </Link>
            </div>
            
                <div className="PatientVitalsContainerInnerHeaderButtons" onClick={immunization} style={(vitalHeader === 'Immunization') ? {backgroundColor:'gold'}:null}>
                    <Link to="/immunization" style={{textDecoration:'none'}} >
                        <FaRegAddressBook className="PatientVitalsContainerInnerHeaderButtonsIcon"/>
                        <span>Allergies/Immunization</span>
                    </Link>
                </div>
            <div className="PatientVitalsContainerInnerHeaderButtons">
                <Link to="/ClinicalManagementOthers" style={{textDecoration:'none'}} >
                    <FaRegAddressBook className="PatientVitalsContainerInnerHeaderButtonsIcon"/>
                    <span>Others</span>
                </Link>
            </div>
        </div>
    )
}
export default PatientClinicalManagement;