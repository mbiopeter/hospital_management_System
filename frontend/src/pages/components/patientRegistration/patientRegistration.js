import './css/patientRegistration.css';
import {FaSearch,FaUserAlt,FaRegHandPointUp,FaSave,FaEllipsisV,FaCheckDouble} from "react-icons/fa";
import SearchPatient from '../modals/PatientRegistration/SearchPatient';
import PatientPhotoModal from '../modals/PatientRegistration/PatientPhoto';
import PatientNavigation from '../modals/PatientRegistration/PatientNavigation';
import { useState } from 'react';
const PatientRegistration = ({expand}) => {
    const [SearchPatientPop,SetSearchPatientPop] = useState(false);
    const toggleSearchPatient = () => {
        SetSearchPatientPop(!SearchPatientPop);
    }
    const [PatientPhoto,setPatientPhoto] = useState(false);
    const togglePatientPhotoModal = () => {
        setPatientPhoto(!PatientPhoto);
    }
    const [PatientNav,setPatientNav] = useState(false);
    const togglePatientNavigation = () => {
        setPatientNav(!PatientNav);
    }
    const HidePatientNav = () => {
        setPatientNav(false);
    }
    return(
        <div style={(expand === false) ? {minWidth: '95%'} :null} className="PatientRegistrationContainer" onScroll={HidePatientNav}>
            <PatientPhotoModal PatientPhoto = {PatientPhoto}  togglePatientPhotoModal = {togglePatientPhotoModal}/>
            <SearchPatient SearchPatientPop = {SearchPatientPop} toggleSearchPatient = {toggleSearchPatient} />
           <div className="PatientRegistrationHeader">
                <span>Patient Registration</span>
                <div className="PatientRegistrationHeaderIconsContainer">
                    <div className="styleHeaderIcon">
                        <FaCheckDouble className = 'PatientRegistrationHeaderIcon' />
                    </div>
                    <div className="styleHeaderIcon">
                        <FaSave className = 'PatientRegistrationHeaderIcon' />
                    </div>
                    <div className="styleHeaderIcon">
                        <FaEllipsisV className = 'PatientRegistrationHeaderIcon' onClick={togglePatientNavigation}/>
                    </div>
                    <PatientNavigation PatientNav = {PatientNav}/>
                </div>
            </div> 
            <form>
                <div className="PatientRegistrationInner">

                    <div className="PatientRegistrationInnerOne">
                        <div className="PatientRegistrationInnerOneCol">
                            <div className="PatientRegistrationInnerOneSubCol">
                                <label htmlFor='RegNo'>Registration Number</label>
                                <input type="text" readOnly placeholder='Reg No.' id='RegNo'/>
                                <div className="PatientRegistrationInnerOneSubColIconContainer">
                                    <div className="PatientRegistrationInnerOneSubColIcon">
                                        <FaSearch className='PatientRegistrationInnerOneSubActualColIcon' onClick={toggleSearchPatient}/>
                                    </div>
                                    <div className="PatientRegistrationInnerOneSubColIcon">
                                        <FaRegHandPointUp className='PatientRegistrationInnerOneSubActualColIcon'/>
                                    </div>
                                </div>
                            </div>
                            <div className="PatientRegistrationInnerOneSubCol DeskTopPatientDetails">
                                <span>Personal Details</span>
                            </div>
                        </div>
                        <div className="PatientRegistrationInnerOneCol">
                            <div className="PatientRegistrationInnerOneSubCol">
                                <label htmlFor="RegDate">Reg. Date</label>
                                <input type="Date" style={{width:'60%',borderLeft:'1px solid rgb(153, 148, 148)',backgroundColor:'rgb(223, 223, 250)'}}/>
                            </div>
                        </div>
                        <div className="PatientRegistrationInnerOneCol" >
                            <div className="PatientRegistrationInnerOneSubCol" style={{height: '100%'}}>
                                <div className="PatientRegistrationInnerOneFinalCol" style={{flexWrap: 'wrap'}}>
                                    <div className="alignItems" style={{width:'100%', height:'50%', display:'flex',alignItems:'center'}}>
                                        <input  type="CheckBox" id='NewBorn'/>
                                        <label htmlFor="NewBorn">Newborn</label>
                                    </div>
                                    <div className="alignItems" style={{width:'100%', height:'50%'}}>

                                    </div>
                                </div>
                                <div className="PatientRegistrationInnerOneFinalCol" style={{justifyContent:'flex-end'}}>
                                    <div className="PatientImageContainer" onClick={togglePatientPhotoModal}>
                                        <FaUserAlt style={{cursor:'pointer'}} className='PatientImage' />
                                    </div>
                                </div>
                            </div>
                            <div className="PatientRegistrationInnerOneSubCol mobilePatientDetails">
                                    <span>Personal Details</span>
                            </div>
                        </div>
                    </div>

                    <div className="PatientRegistrationInnerTwo">
                        <div className="PatientRegistrationInnerTwoCol">
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="FirsttName">First Name</label>
                                <input type="text" id='FirsttName' placeholder='Patient Name' style={{borderLeft:'5px solid #000'}} />
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="dob">DOB</label>
                                <input type="date" id='dob'  style={{borderLeft:'5px solid #000'}}/>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Marital">Marital Status</label>
                                <select  id="Marital">
                                    <option value="" selected>Select</option>
                                    <option value="Maried">Maried</option>
                                    <option value="Single">Single</option>
                                </select>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Education">Edu Level</label>
                                <select  id="Education">
                                    <option value="" selected>Select</option>
                                    <option value="Maried">Degree</option>
                                    <option value="Single">Masters</option>
                                    <option value="Single">Doctrate</option>
                                    <option value="Single">Profesor</option>
                                </select>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Email">Email Address</label>
                                <input type="Email" id='Email' placeholder='Email Address' />
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl DeskTopPatientDetails">
                                <span>Home Address</span>
                            </div>
                        </div>

                        <div className="PatientRegistrationInnerTwoCol">
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="MiddleName">Middle Name</label>
                                <input type="text" id='MiddleName' placeholder='Middle Name' />
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label >Age(Y-M-D)</label>
                                <div className="AgeContainer">
                                    <input type="text" placeholder='Years' readOnly style={{borderLeft:'5px solid #000'}}/>
                                    <input type="text" placeholder='Months' readOnly style={{borderLeft:'5px solid #000'}}/>
                                    <input type="text" placeholder='Days' readOnly style={{borderLeft:'5px solid #000'}}/>
                                </div>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Occupation">Occupation</label>
                                <select  id="Occupation">
                                    <option value="" selected>Select</option>
                                    <option value="Employed">Employed</option>
                                    <option value="Not Employed">Not Employed</option>
                                </select>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Religion">Religion</label>
                                <select  id="Religion" style={{borderLeft:'5px solid #000'}}>
                                    <option value="" selected>Select</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="IDNumber">ID Number</label>
                                <input type="text" id='IDNumber' placeholder='ID Number' style={{borderLeft:'5px solid #000'}}/>
                            </div>                         
                        </div>


                        <div className="PatientRegistrationInnerTwoCol">
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="LastName">Last Name</label>
                                <input type="text" id='LastName' placeholder='Last Name' style={{borderLeft:'5px solid #000'}}/>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Gender">Gender</label>
                                <select  id="Gender" style={{borderLeft:'5px solid #000'}}>
                                    <option value="" selected>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="Languange">Languange</label>
                                <select  id="Languange">
                                    <option value="" selected>Select</option>
                                    <option value="English">English</option>
                                    <option value="Kiswahili">Kiswahili</option>
                                    <option value="French">French</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="PatientRegistrationInnerTwoColFormControl">
                                <label htmlFor="citize">Citizen</label>
                                <select  id="citize" >
                                    <option value="" selected>Select</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="India">India</option>
                                </select>
                            </div>
                                <div className="PatientRegistrationInnerTwoColFormControl MobilePatientDetails">
                                <span>Home Address</span>
                            </div>
                        </div>
                    </div>



                    <div className="PatientRegistrationInnerThree">
                        <div className="PatientRegistrationInnerThreeCol">
                            <div className="PatientRegistrationInnerThreeColFormControl">
                                <label htmlFor="Address">Address</label>
                                <input type="text" placeholder='Address' id='Address' style={{borderLeft:'5px solid #000'}} />
                            </div>
                            <div className="PatientRegistrationInnerThreeColFormControl">
                                <label htmlFor="Country">Country</label>
                                <input type="text" placeholder='Country' id='Country' style={{backgroundColor:'rgb(223, 223, 250)'}} />
                            </div>
                            <div className="PatientRegistrationInnerThreeColFormControl DeskTopPatientDetails">
                                <span>Next Of Kin</span>
                            </div>
                        </div>
                        <div className="PatientRegistrationInnerThreeCol">
                            <div className="PatientRegistrationInnerThreeColFormControl">
                                <label htmlFor="County">County</label>
                                <input type="text" placeholder='County' id='County' />
                            </div>
                            <div className="PatientRegistrationInnerThreeColFormControl">
                                <label htmlFor="Code">Code</label>
                                <input type="text" placeholder='Code' id='Code' />
                            </div>
                        </div>
                        <div className="PatientRegistrationInnerThreeCol">
                            <div className="PatientRegistrationInnerThreeColFormControl">
                                <label htmlFor="City">City</label>
                                <input type="text" placeholder='City' id='City' style={{backgroundColor:'rgb(223, 223, 250)'}} />
                            </div>
                            <div className="PatientRegistrationInnerThreeColFormControl">
                                <label htmlFor="Telephone">Telephone</label>
                                <input type="text" placeholder='Telephone' id='Telephone' style={{borderLeft:'5px solid #000'}}/>
                            </div>
                            <div className="PatientRegistrationInnerThreeColFormControl MobilePatientDetails">
                                <span>Next Of Kin</span>
                            </div>
                        </div>
                    </div>


                    <div className="PatientRegistrationInnerFour">
                        <div className="PatientRegistrationInnerFourCol">
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="NextOfKinName">Next Of Kin Name</label>
                                <input type="text" placeholder='Next Of Kin Name' id='NextOfKinName'/>                                                              
                            </div>
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="Address">Address</label>
                                <input type="text" placeholder='Address' id='Address' />                                
                            </div>
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="Country">Country</label>
                                <input type="text" placeholder='Country' id='Country' style={{backgroundColor:'rgb(223, 223, 250)'}}/>  
                            </div>
                            <div className="PatientRegistrationInnerFourColFormControl DesktopPatientDetails">
                                <span>Payer Information</span>
                            </div>
                        </div>
                        <div className="PatientRegistrationInnerFourCol">
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="Relation">Relation</label>
                                <select  id="Relation">
                                    <option value="" selected>Select</option>
                                    <option value="Maried">Mother</option>
                                    <option value="Single">Father</option>
                                    <option value="Single">Sibling</option>
                                    <option value="Single">Relative</option>
                                    <option value="Single">Husband</option>
                                    <option value="Single">Others</option>
                                </select>                               
                            </div>
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="Code">Code</label>
                                <input type="text" placeholder='Code' id='Code' />  
                            </div>
                        </div>
                        <div className="PatientRegistrationInnerFourCol">
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="Telephone">Telephone</label>
                                <input type="text" placeholder='Telephone' id='Telephone'/>                                                              
                            </div>
                            <div className="PatientRegistrationInnerFourColFormControl">
                                <label htmlFor="City">City</label>
                                <input type="text" placeholder='City' id='City' style={{backgroundColor:'rgb(223, 223, 250)'}}/>  
                            </div>
                            <div className="PatientRegistrationInnerFourColFormControl MobilePatientDetails">
                                <span>Payer Information</span>
                            </div>
                        </div>
                    </div>


                    <div className="PatientRegistrationInnerFive">
                        <div className="PatientRegistrationInnerFiveCol">
                            <div className="PatientRegistrationInnerFiveColFormControl">
                                <label htmlFor="Payer">Payer</label>
                                <select  id="Payer" style={{borderLeft:'5px solid #000'}}>
                                    <option value="" selected>Select</option>
                                    <option value="Private Cash" selected>Private Cash</option>
                                    <option value="Insuarance" selected>Insuarance</option>
                                    <option value="Bank" selected>Bank</option>
                                </select> 
                            </div>
                            <div className="PatientRegistrationInnerFiveColFormControl">
                                <label htmlFor="Sponser">Sponser</label>
                                <select  id="Payer" style={{borderLeft:'5px solid #000'}}>
                                    <option value="" selected>Select</option>
                                    <option value="Private Cash" selected>Private Cash</option>
                                    <option value="Insuarance" selected>Insuarance</option>
                                    <option value="Bank" selected>Bank</option>
                                </select>  
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default PatientRegistration;