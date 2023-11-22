import { useState } from 'react';
import '../ClinicalOthers.css';
import './CurrentMedication.css'
import PatientClinicalManagement from './patientClinicalManagementNav';
import RightOtherNav from './RightOtherNav';
import $ from 'jquery';

const CurrentMedication = ({expand}) => {
    const [CurrentMedication,SetCurrentMedication] = useState(true);
    const [PreviousMedication,SetPreviousMedication] = useState(false);
    const [ToggleStrike,SetToggleStrike] = useState(false)
    const HandleCurrentMedication = () => {
        SetCurrentMedication(true);
        SetPreviousMedication(false);
    }
    const HandlePreviousMedication = () => {
        SetPreviousMedication(true);
        SetCurrentMedication(false);
    }
    $(".stopMed").click(function(){
        SetToggleStrike(!ToggleStrike);
    });
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
                        <div className="CurrentMedicationDisplay">
                            <div className="CurrentMedicationDisplayHeader">
                                <div className="CurrentMedicationDisplayHeaderLabel">
                                    <span style={(CurrentMedication === false) ? {display:'none'}:null}>Current Medication</span>
                                    <span style={(PreviousMedication === false) ? {display:'none'}:null}>Previous Medication</span>
                                </div>
                                <div className="CurrentMedicationDisplayHeaderRadioCheck">
                                    <form>
                                        <input type="radio" checked = {CurrentMedication} id='CurrentMedication'onClick={HandleCurrentMedication}/>
                                        <label htmlFor="CurrentMedication">Current Medication</label>
                                        <input checked = {PreviousMedication} type="radio" id='PreviousMedication' onClick={HandlePreviousMedication}/>
                                        <label htmlFor="PreviousMedication">Previous Medication</label>
                                    </form>
                                </div>
                            </div>
                            <div className="CurrentMedicationDisplayBody">
                                <table style={(CurrentMedication === false) ? {display:'none'}: null}>
                                    <thead>
                                        <tr>
                                            <td>Medicine</td>
                                            <td>Dosage</td>
                                            <td>Frequency</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Prescribed Date</td>
                                            <td>Visit Date</td>
                                            <td>Stop</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                            <td>
                                                <div className="stopMed"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                            <td>
                                                <div className="stopMed"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                            <td>
                                                <div className="stopMed"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                            <td>
                                                <div className="stopMed"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table style={(PreviousMedication === false) ? {display:'none'}: null}>
                                    <thead>
                                        <tr>
                                            <td>Medicine</td>
                                            <td>Dosage</td>
                                            <td>Frequency</td>
                                            <td>Food Relation</td>
                                            <td>Route</td>
                                            <td>Prescribed Date</td>
                                            <td>Visit Date</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                        </tr>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                        </tr>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
                                        </tr>
                                        <tr>
                                            <td>Panadol</td>
                                            <td>4 Tablets</td>
                                            <td>2 times a day</td>
                                            <td>After Lunch</td>
                                            <td>Oral</td>
                                            <td>11/11/2023</td>
                                            <td>11/11/2023</td>
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
export default CurrentMedication;