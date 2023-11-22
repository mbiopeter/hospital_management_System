import UpNav from './reusable/upNav';
import SideNav from './reusable/sideNav';
import Main from './pages/components/dashboard/main';
import axios from 'axios';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import PatientRegistration from './pages/components/patientRegistration/patientRegistration'; 
import Billing from './pages/components/Billing/Billing';
import VisitDashBoard from './pages/components/ClinicalManagement/VisitDashBoard';
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
        console.log('clicked');
        console.log(name);
        if(name === 'Dashboard'){
            setHover('Dashboard');
        }
        if(name === 'Appointment'){
            setHover('Appointment');
        }
        if(name === 'Patient Registration'){
            setHover('Patient Registration');
        }
        if(name === 'Clinical Management'){
            setHover('Clinical Management');
        }
        if(name === 'Clinical Management'){
            setHover('Clinical Management');
        }
        if(name === 'Emergency'){
            setHover('Emergency');
        }
        if(name === 'Procedure Room'){
            setHover('Procedure Room');
        }
        if(name === 'Operation Theatre'){
            setHover('Operation Theatre');
        }
        if(name === 'Inpatient Management'){
            setHover('Inpatient Management');
        }
        if(name === 'Billing and collection'){
            setHover('Billing and collection');
        }
        if(name === 'Insuarance and eClaim'){
            setHover('Insuarance and eClaim');
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
        if(name === 'Stock Management'){
            setHover('Stock Management');
        }
        if(name === 'Reports'){
            setHover('Reports');
        }
        if(name === 'Laundary'){
            setHover('Laundary');
        }
        if(name === 'Ambulance Management'){
            setHover('Ambulance Management');
        }
        if(name === 'OutPatient Management'){
            setHover('OutPatient Management');
        }
        if(name === 'EMR'){
            setHover('EMR');
        }
        if(name === 'Pharmacy Management'){
            setHover('Pharmacy Management');
        }
        if(name === 'Expenses Management'){
            setHover('Expenses Management');
        }
        if(name === 'HR and Payroll'){
            setHover('HR and Payroll');
        }
        if(name === 'Inventory and purchase'){
            setHover('Inventory and purchase');
        }
        if(name === 'User Management'){
            setHover('User Management');
        }
        if(name === 'Word and Bed Management'){
            setHover('Word and Bed Management');
        }
        if(name === 'Asset Management'){
            setHover('Asset Management');
        }
        if(name === 'Queue and Waiting'){
            setHover('Queue and Waiting');
        }
        if(name === 'Telemedicine'){
            setHover('Telemedicine');
        }
        if(name === 'FeedBack'){
            setHover('FeedBack');
        }
    }   
    return(
        <div style={{width:'100%', height:'100%',display:'flex',flexWrap:'wrap'}}>
            <UpNav toggleExpand={toggleExpand} ToggleMobileSize={ToggleMobileSize} expand={expand} />
            <SideNav ActivateHover={ActivateHover} toggleExpand={toggleExpand} ToggleMobileSize={ToggleMobileSize} expand={expand} />

            <Routes>
                <Route path="/Dashboard" element={<Main expand={expand}  ActivateHover={ActivateHover} hover={hover}/>} />
                <Route path="/PatientRegistration" element={<PatientRegistration  expand={expand}/>} />
                <Route path="/Billind_collection" element={<Billing  expand={expand}/>} />
                <Route path="/ClinicalManagemnt" element={<VisitDashBoard  expand={expand}/>} />
                <Route path="/PatientVitals" element={<PatientVitals  expand={expand}/>} />
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