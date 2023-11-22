import '../ClinicalOthers.css';
import './Diagnosis.css';
import {FaTimes,FaSave} from "react-icons/fa";
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
const Diagnosis = ({expand}) => {
    return(
        <div className="ClinicalOthersContainer" style={(expand === false) ? {minWidth: '95%'} :null}>
            <div className="ClinicalOthersContainerHeader">
                <div className="ClinicalOthersContainerHeaderOne">
                    <span>Patient Visits</span>
                </div>
                <div className="ClinicalOthersContainerHeaderTwo">
                    <span className='ClinicalOthersContainerHeaderTwoHeaders'>RegNo:</span>
                    <span className='ClinicalOthersContainerHeaderTwoLabel'>166</span>
                    <span className='ClinicalOthersContainerHeaderTwoHeaders'>Name:</span>
                    <span className='ClinicalOthersContainerHeaderTwoLabel'>Mbio Peter</span>
                    <span className='ClinicalOthersContainerHeaderTwoHeaders'>Gender/Age:</span>
                    <span className='ClinicalOthersContainerHeaderTwoLabel'>Male/22Y</span>
                </div>
            </div>
            <div className="ClinicalOthersContainerInner">
                <PatientClinicalManagement  />
                <div className="ClinicalOthersContainerInnerMainContainer">
                    <RightOtherNav/>
                    <div className="DiagnosisContainer">
                        <div className="DiagnosisContainerHeader">
                            <span>Diagnosis</span>
                            <div className='IconsContainer'>
                                <div className="IconsContainerDisplay">
                                    <span>+</span>
                                </div>
                                <div className="IconsContainerDisplay">
                                    <FaSave className='SaveDiagnosisIcon'/>
                                </div>
                                
                            </div>
                        </div>
                        <div className="DiagnosisContainerHeaderBody">
                            <div className="DiagnosisContainerHeaderBodyCol">
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="Attendance">Attendance</label>
                                    <input type="text" />
                                </div>
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="Type">Type</label>
                                    <input type="text" />
                                </div>
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="Diagnosis">Diagnosis</label>
                                    <input type="text" />
                                </div>
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="Status">Status</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="DiagnosisContainerHeaderBodyCol" style={{marginLeft:'30px'}}>
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="Category">Category</label>
                                    <input type="text" />
                                </div>
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="ICD-10">ICD-10</label>
                                    <input type="text" />
                                </div>
                                <div className="DiagnosisContainerHeaderBodyColFormControl">
                                    <label htmlFor="Effect">Effect</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="DiagnosisContainerDisplayTable">
                            <table>
                                <thead>
                                    <tr>
                                        <td>SN</td>
                                        <td>Attendance</td>
                                        <td>Type</td>
                                        <td>Diagnosis</td>
                                        <td>status</td>
                                        <td>Category</td>
                                        <td>ICD-10</td>
                                        <td>Effect</td>
                                        <td>Doctor</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SN</td>
                                        <td>Attendance</td>
                                        <td>Type</td>
                                        <td>Diagnosis</td>
                                        <td>status</td>
                                        <td>Category</td>
                                        <td>ICD-10</td>
                                        <td>Effect</td>
                                        <td>Doctor</td>
                                        <td>
                                            <FaTimes className='DiagnosisContainerDisplayTableRemoveIcon'/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Diagnosis;