import './css/sideNav.css';
import { FaHouse,FaRegCalendarPlus,FaRegAddressBook,FaWheelchairMove,FaHeartCircleXmark,FaGhost,FaEyeDropper,FaCashRegister,FaCarOn,FaTruckArrowRight,FaRegNoteSticky,FaRegPenToSquare,FaVialCircleCheck,FaVials,FaVectorSquare,FaUserNurse,FaUpRightFromSquare,FaUserGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdGroupOff, MdPostAdd, MdDewPoint,MdOutlineContentPasteSearch, MdCreditCard, MdLocalGroceryStore,MdOutlineBuild,MdOutlineComputer,MdOutlineOutbound,MdOutlinePersonPin,MdOutlineEscalatorWarning,MdViewDay } from "react-icons/md";
import React, { useState, useEffect } from 'react';

const SideNav = ({expand, toggleExpand,ActivateHover,hover,ToggleMobileSize,toggleMobile}) => {

    return(
        <div className="sideNavContainer" onDoubleClick={toggleExpand} style={(expand === false) ? {width: '5%',transition: '0.3s linear'}:(toggleMobile === true ) ? {display: 'none'}:null}>
        <div className="MobileToggle">
            <MdViewDay onClick = {ToggleMobileSize} className='MobileToggleIcon' />
        </div>
            <ul>
                <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
                    <li onClick={ActivateHover} style={(hover === 'Dashboard') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaHouse className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Dashboard</span></li> 
                </Link>
                <Link to="/Appointment" style={{ textDecoration: 'none' }}>   
                    <li onClick={ActivateHover} style={(hover === 'Appointment') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaRegCalendarPlus className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Appointment</span></li>    
                </Link> 
                <Link to="/PatientRegistration" style={{ textDecoration: 'none' }}>           
                    <li onClick={ActivateHover} style={(hover === 'Patient Registration') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaRegAddressBook className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Patient Registration</span></li>  
                </Link> 
                <Link to="/ClinicalManagemnt" style={{ textDecoration: 'none' }}>           
                    <li onClick={ActivateHover} style={(hover === 'Clinical Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaWheelchairMove className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Clinical Management</span></li>  
                </Link>    
                <Link to="/Emergency" style={{ textDecoration: 'none' }}>          
                    <li onClick={ActivateHover} style={(hover === 'Emergency') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaHeartCircleXmark className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Emergency</span></li>   
                </Link> 
                <Link to="/ProcedureRoom" style={{ textDecoration: 'none' }}>            
                    <li onClick={ActivateHover} style={(hover === 'Procedure Room') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaGhost className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Procedure Room</span></li> 
                </Link>
                <Link to="/OperationTheatre" style={{ textDecoration: 'none' }}>               
                    <li onClick={ActivateHover} style={(hover === 'Operation Theatre') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaEyeDropper className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Operation Theatre</span></li>  
                </Link>
                <Link to="/InpatientManagment" style={{ textDecoration: 'none' }}>              
                    <li onClick={ActivateHover} style={(hover === 'Inpatient Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaUserGear className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Inpatient Management</span></li>
                </Link>   
                <Link to="/Nurse" style={{ textDecoration: 'none' }}>             
                    <li onClick={ActivateHover} style={(hover === 'Nurse Station') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaUserNurse className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Nurse Station</span></li> 
                </Link>
                <Link to="/Billind_collection" style={{ textDecoration: 'none' }}>               
                    <li onClick={ActivateHover} style={(hover === 'Billing and collection') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaCashRegister className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Billing and collection</span></li>
                </Link>  
                <Link to="/Insuarance_eclaim" style={{ textDecoration: 'none' }}>             
                    <li onClick={ActivateHover} style={(hover === 'Insuarance and eClaim') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaUpRightFromSquare className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Insuarance and eClaim</span></li> 
                </Link>
                <Link to="/Laboratory" style={{ textDecoration: 'none' }}>               
                    <li onClick={ActivateHover} style={(hover === 'Laboratory') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaVials className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Laboratory</span></li> 
                </Link>
                <Link to="/BloodBank" style={{ textDecoration: 'none' }}>               
                    <li onClick={ActivateHover} style={(hover === 'BloodBank') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaVialCircleCheck className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>BloodBank</span></li> 
                </Link>
                <Link to="/Radiology" style={{ textDecoration: 'none' }}>               
                    <li onClick={ActivateHover} style={(hover === 'Radiology') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaVectorSquare className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Radiology</span></li>   
                </Link>
                <Link to="/Stockmanagement" style={{ textDecoration: 'none' }}> 
                    <li onClick={ActivateHover} style={(hover === 'Stock Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaRegPenToSquare className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Stock Management</span></li>
                </Link> 
                <Link to="/Reports" style={{ textDecoration: 'none' }}>             
                    <li onClick={ActivateHover} style={(hover === 'Reports') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaRegNoteSticky className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Reports</span></li> 
                </Link>
                <Link to="/Laundary" style={{ textDecoration: 'none' }}> 
                    <li onClick={ActivateHover} style={(hover === 'Laundary') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaTruckArrowRight className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Laundary</span></li> 
                </Link>
                <Link to="/AmbulanceManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Ambulance Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><FaCarOn className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Ambulance Management</span></li>
                </Link>   
                <Link to="/OutPatientManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'OutPatient Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdGroupOff className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>OutPatient Management</span></li>
                </Link>   
                <Link to="/EMR" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'EMR') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdPostAdd className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>EMR</span></li>
                </Link>  
                <Link to="/PharmacyManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Pharmacy Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdDewPoint className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Pharmacy Management</span></li>
                </Link>   
                <Link to="/ExpensesManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Expenses Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlineContentPasteSearch className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Expenses Management</span></li>
                </Link> 
                <Link to="/HR_Payroll" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'HR and Payroll') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdCreditCard className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>HR and Payroll</span></li>
                </Link>   
                <Link to="/Inventory_purchase" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Inventory and purchase') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdLocalGroceryStore className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Inventory and purchase</span></li>
                </Link> 
                <Link to="/UserManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'User Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlinePersonPin className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>User Management</span></li>
                </Link>   
                <Link to="/Word_BedManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Word and Bed Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlineBuild className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Word and Bed Management</span></li>
                </Link>  
                <Link to="/AssetBedManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Asset Management') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlinePersonPin className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Asset Management</span></li>
                </Link>              
                <Link to="/Queue_WaitingManagement" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Queue and Waiting') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlineEscalatorWarning className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Queue and Waiting </span></li>
                </Link>              
                <Link to="/Telemedicine" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'Telemedicine') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlineComputer className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>Telemedicine</span></li>
                </Link>              
                <Link to="/FeedBack" style={{ textDecoration: 'none' }}>     
                    <li onClick={ActivateHover} style={(hover === 'FeedBack') ? {backgroundColor: '#6F00FF',color: '#fff'}: null}><MdOutlineOutbound className='SideNavIcon' style={(expand === false) ? {fontSize: '30px'}: null}/> <span style={(expand === false) ? {display: 'none'}: null}>FeedBack</span></li>
                </Link>              
            </ul>
        </div>
    )
}
export default SideNav;