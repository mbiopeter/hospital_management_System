import '../ClinicalOthers.css';
import { Link } from 'react-router-dom';
const RightOtherNav = () => {
    return(
        <div className="ClinicalOthersContainerInnerMainContainerNav">
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/NurseAssesment">
                    <span>NURSE ASSESMENT</span>
                </Link>
            </div>
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/CurrentMedication">
                    <span>CURRENT MEDICATION</span>
                </Link>
            </div>
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/ComplainPresentation">
                    <span>COMPLAINT PRESENTATION</span>
                </Link>
            </div>
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/Diagnosis">
                    <span>DIAGNOSIS</span>
                </Link>
            </div>
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/Procedure">
                    <span>INVESTIGATION PROCEDURE</span>
                </Link>
            </div>
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/Prescription">
                    <span>MEDICINE PRESCRIPTION</span>
                </Link>
            </div>
            <div className="ClinicalOthersContainerInnerMainContainerNavList">
                <Link style={{textDecoration:'none'}} to="/ClinicalManagementOthers/Advice">
                    <span>ADVICE</span>
                </Link>
            </div>
        </div>
    )
}
export default RightOtherNav