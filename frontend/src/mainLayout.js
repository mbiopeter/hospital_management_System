import UpNav from './reusable/upNav';
import SideNav from './reusable/sideNav';
import Main from './pages/components/dashboard/main';
import axios from 'axios';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import PatientRegistration from './pages/components/patientRegistration/patientRegistration'; 
import Billing from './pages/components/Billing/Billing';
import VisitDashBoard from './pages/components/ClinicalManagement/VisitDashBoard';
import History from './pages/components/ClinicalManagement/subPages/History';
import PatientVitals from './pages/components/ClinicalManagement/subPages/PatientVital';
import Immunization from './pages/components/ClinicalManagement/subPages/immunizion';
import ClinicalOthers from './pages/components/ClinicalManagement/subPages/ClinicalOthers';
import NurseAssesment from './pages/components/ClinicalManagement/subPages/components/NurseAssesment';
import CurrentMedication from './pages/components/ClinicalManagement/subPages/components/CurrentMedication';
import ComplainPresentation from './pages/components/ClinicalManagement/subPages/components/ComplainPresentation';
import Diagnosis from './pages/components/ClinicalManagement/subPages/components/Diagnosis';
import Procedure from './pages/components/ClinicalManagement/subPages/components/Procedure';
import Prescription from './pages/components/ClinicalManagement/subPages/components/Prescription';
import Advice from './pages/components/ClinicalManagement/subPages/components/Advice';
const MainLayout = () => {
    const [hover,setHover] = useState('Dashboard');
    const [expand,setExpand] = useState(true);
    const [toggleMobile, setToggleMobile] = useState();
    const toggleExpand = () => {
        setExpand(!expand);
        setToggleMobile('none');
        /* console.log('toggleExpand: '+expand); */
    }
    const ToggleMobileSize = () => {
        setToggleMobile(!toggleMobile);
        setExpand('none');
        /* console.log('ToggleMobileSize: '+toggleMobile); */
    } 
    const ActivateHover = (event) =>{
        var name = event.target.id;
        if(name === 'Dashboard'){
            setHover('Dashboard');
        }
        if(name === 'Appointment'){
            setHover('Appointment');
        }
        if(name === 'Patient_Registration'){
            setHover('Patient_Registration');
        }
        if(name === 'Clinical_Management'){
            setHover('Clinical_Management');
        }
        if(name === 'Emergency'){
            setHover('Emergency');
        }
        if(name === 'Procedure_Room'){
            setHover('Procedure_Room');
        }
        if(name === 'Operation_Theatre'){
            setHover('Operation_Theatre');
        }
        if(name === 'Inpatient_Management'){
            setHover('Inpatient_Management');
        }
        if(name === 'Nurse_Station'){
            setHover('Nurse_Station');
        }
        if(name === 'Billing_and_collection'){
            setHover('Billing_and_collection');
        }
        if(name === 'Insuarance_and_eClaim'){
            setHover('Insuarance_and_eClaim');
        }
        if(name === 'Laboratory'){
            setHover('Laboratory');
        }
        if(name === 'BloodBank'){
            setHover('BloodBank');
        }
        if(name === 'Radiology'){
            setHover('Radiology');
        }
        if(name === 'Stock_Management'){
            setHover('Stock_Management');
        }
        if(name === 'Reports'){
            setHover('Reports');
        }
        if(name === 'Laundary'){
            setHover('Laundary');
        }
        if(name === 'Ambulance_Management'){
            setHover('Ambulance_Management');
        }
        if(name === 'OutPatient_Management'){
            setHover('OutPatient_Management');
        }
        if(name === 'EMR'){
            setHover('EMR');
        }
        if(name === 'Pharmacy_Management'){
            setHover('Pharmacy_Management');
        }
        if(name === 'Expenses_Management'){
            setHover('Expenses_Management');
        }
        if(name === 'HR_and_Payroll'){
            setHover('HR_and_Payroll');
        }
        if(name === 'Inventory_and_purchase'){
            setHover('Inventory_and_purchase');
        }
        if(name === 'User_Management'){
            setHover('User_Management');
        }
        if(name === 'Word_and_Bed_Management'){
            setHover('Word_and_Bed_Management');
        }
        if(name === 'Asset_Management'){
            setHover('Asset_Management');
        }
        if(name === 'Queue_and_Waiting'){
            setHover('Queue_and_Waiting');
        }
        if(name === 'Telemedicine'){
            setHover('Telemedicine');
        }
        if(name === 'FeedBack'){
            setHover('FeedBack');
        }
    }   
    const navigate = useNavigate();
    const [name, setName] =useState('');
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8080/login/')
        .then(res => {
            if(res.data.valid){
                setName(res.data.Username)
            }
            else{
                navigate('/')
            }
        })
        .catch(err => console.log(err));
    }, [])
    return(
        <div style={{width:'100%', height:'100%',display:'flex',flexWrap:'wrap'}}>
            <UpNav name={name} toggleExpand={toggleExpand} ToggleMobileSize={ToggleMobileSize} expand={expand} />
            <SideNav hover={hover} ActivateHover={ActivateHover} toggleExpand={toggleExpand} ToggleMobileSize={ToggleMobileSize} expand={expand} />

            <Routes>
                <Route path="/Dashboard" element={<Main expand={expand}  ActivateHover={ActivateHover} hover={hover}/>} />
                <Route path="/PatientRegistration" element={<PatientRegistration  expand={expand}/>} />
                <Route path="/Billind_collection" element={<Billing  expand={expand}/>} />
                <Route path="/ClinicalManagemnt" element={<VisitDashBoard  expand={expand}/>} />
                <Route path="/PatientVitals" element={<PatientVitals  expand={expand}/>} />
                <Route path="/History" element={<History  expand={expand}/>} />
                <Route path="/immunization" element={<Immunization  expand={expand}/>} />
                <Route path="/ClinicalManagementOthers" element={<ClinicalOthers  expand={expand}/>} />
                <Route path="/ClinicalManagementOthers/NurseAssesment" element={<NurseAssesment  expand={expand}/>} />                
                <Route path="/ClinicalManagementOthers/CurrentMedication" element={<CurrentMedication  expand={expand}/>} />                
                <Route path="/ClinicalManagementOthers/ComplainPresentation" element={<ComplainPresentation  expand={expand}/>} />                
                <Route path="/ClinicalManagementOthers/Diagnosis" element={<Diagnosis  expand={expand}/>} />                
                <Route path="/ClinicalManagementOthers/Procedure" element={<Procedure  expand={expand}/>} />                
                <Route path="/ClinicalManagementOthers/Prescription" element={<Prescription  expand={expand}/>} />                
                <Route path="/ClinicalManagementOthers/Advice" element={<Advice  expand={expand}/>} />                
            </Routes>
        </div>
    )
}
export default MainLayout;