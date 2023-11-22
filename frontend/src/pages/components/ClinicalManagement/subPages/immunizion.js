import './immunization.css';
import PatientClinicalManagement from './components/patientClinicalManagementNav';
import {FaSave} from "react-icons/fa";
import { useState } from 'react';
const Immunization = ({expand}) => {
    const [vitalHeader,SetVitalHeader] = useState('Vitals');
    const [AllergiesStatus,SetAllergiesStatus] = useState(false);
    const [ImmunizationStatus,SetImmunizationStatus] = useState(false);
    const Vitals = () => {
        SetVitalHeader('Vitals');
    }
    const immunization = () => {
        SetVitalHeader('Immunization');
    }
    const ToggleAllergies = () => {
        SetAllergiesStatus(!AllergiesStatus);
        SetImmunizationStatus(false);
    }
    const ToggleImmunization = () => {
        SetImmunizationStatus(!ImmunizationStatus);
        SetAllergiesStatus(false);
    }
    return(
        <div className='immunizationMainConatiner' style={(expand === false) ? {minWidth: '95%'} :null}>
            <div className="immunizationMainConatinerHeader">
                <span>Allergies/Immunization</span>
                <div className="immunizationMainConatinerHeaderIconContainer">
                    <FaSave className='immunizationMainConatinerHeaderIconContainerIcon'/>
                </div>
            </div>
            <div className="immunizationMainConatinerInner">
                <PatientClinicalManagement vitalHeader = {vitalHeader} Vitals = {Vitals} immunization = {immunization}/>


                <div className="immunizationMainConatinerInnerAllergies">
                    <div className="immunizationMainConatinerInnerAllergiesController">
                        <div className="controllerToggle">
                            <span onClick={ToggleAllergies} style={(AllergiesStatus) === false  ? {display:'none'}: {display:'block'}}>-</span>
                            <span onClick={ToggleAllergies} style={(AllergiesStatus) === true  ? {display:'none'}: {display:'block'}}>+</span>
                        </div>
                        <div className="controllerLabel">
                            <span>Allergies</span>
                        </div>
                    </div>
                </div>
                <div className="immunizationMainConatinerInnerAllergiesBody" style={(AllergiesStatus === false) ? {height: 0}: null}>
                    <div className="immunizationMainConatinerInnerAllergiesBodyInputs">
                        <div className="immunizationMainConatinerInnerAllergiesBodyFormControl">
                            <label htmlFor="AllergyType">Allergy Type</label>
                            <input style={{borderLeft:'5px solid #000'}} type="text" id='AllergyType' />
                        </div>
                        <div className="immunizationMainConatinerInnerAllergiesBodyFormControl">
                            <label htmlFor="AllergyType">Allergen</label>
                            <input type="text" id='AllergyType' />
                        </div>
                        <div className="immunizationMainConatinerInnerAllergiesBodyFormControl">
                            <label htmlFor="AllergyType">Reaction</label>
                            <input type="text" id='AllergyType' />
                        </div>
                    </div>
                    <div className="immunizationMainConatinerInnerAllergiesBodyTableDisplay">
                        <table>
                            <thead>
                                <td>SN</td>
                                <td>Allergy Type</td>
                                <td>Allergen</td>
                                <td>Reaction</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="immunizationMainConatinerInnerAllergies">
                    <div className="immunizationMainConatinerInnerAllergiesController">
                        <div className="controllerToggle">
                            <span onClick={ToggleImmunization} style={(ImmunizationStatus) === false  ? {display:'none'}: {display:'block'}}>-</span>
                            <span onClick={ToggleImmunization} style={(ImmunizationStatus) === true  ? {display:'none'}: {display:'block'}}>+</span>
                        </div>
                        <div className="controllerLabel">
                            <span>Immunization</span>
                        </div>
                    </div>
                </div>
                <div className="immunizationMainConatinerInnerAllergiesBody" style={(ImmunizationStatus === false) ? {height: 0}: null}>
                    <div className="immunizationMainConatinerInnerAllergiesBodyInputs" style={{display:'flex',justifyContent:'flex-start'}}>
                        <div className="immunizationMainConatinerInnerAllergiesBodyFormControl" style={{marginRight:'10%'}}>
                            <label htmlFor="ImmunizationType">Immunization</label>
                            <input style={{borderLeft:'5px solid #000'}} type="text" id='ImmunizationType' />
                        </div>
                        <div className="immunizationMainConatinerInnerAllergiesBodyFormControl">
                            <label htmlFor="DateGiven">Date Given</label>
                            <input type="date" style={{borderLeft:'5px solid #000'}} id='DateGiven' />
                        </div>
                    </div>
                    <div className="immunizationMainConatinerInnerAllergiesBodyTableDisplay">
                        <table>
                            <thead>
                                <td>SN</td>
                                <td>Allergy Type</td>
                                <td>Allergen</td>
                                <td>Reaction</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                    <td>haemophilia</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Immunization