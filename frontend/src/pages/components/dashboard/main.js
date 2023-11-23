import { useEffect } from 'react';
import './css/main.css'
import { FaRegCalendarPlus,FaRegAddressBook,FaWheelchairMove,FaHeartCircleXmark,FaGhost,FaEyeDropper,FaCashRegister,FaCarOn,FaTruckArrowRight,FaRegNoteSticky,FaRegPenToSquare,FaVialCircleCheck,FaVials,FaVectorSquare,FaUserNurse,FaUpRightFromSquare,FaUserGear } from "react-icons/fa6";
import { MdGroupOff, MdPostAdd, MdDewPoint,MdOutlineContentPasteSearch, MdCreditCard, MdLocalGroceryStore,MdOutlineBuild,MdOutlineComputer,MdOutlineOutbound,MdOutlinePersonPin,MdOutlineEscalatorWarning } from "react-icons/md";
import { Link } from "react-router-dom";

const Main = ({expand,ActivateHover}) => {
    return(
        <div style={(expand === false) ? {maxWidth: '95%'} :null} className="DashboardMain">
            <div  className="DashboardMainHeader">
                <span>Dashboard</span>
            </div>

           <div className="DashBoardMainInner">
                <Link to="/Appointment" style={{ textDecoration: 'none' }}>
                    <div id='Appointment'  className="dashBoardNavContainer">
                        <div className="dashBoardIcon">
                            <FaRegCalendarPlus onClick={ActivateHover}className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Appointment</span>
                        </div>
                    </div>
                </Link>
                <Link to="/PatientRegistration" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}   className="dashBoardIcon" >
                            <FaRegAddressBook  className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Patient Registration</span>
                        </div>
                    </div>
                </Link>
                <Link to="/ClinicalManagemnt" style={{ textDecoration: 'none' }}> 
                    <div className="dashBoardNavContainer">
                        <div  onClick={ActivateHover} className="dashBoardIcon">
                            <FaWheelchairMove className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span  onClick={ActivateHover} >Clinical Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Emergency" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}   className="dashBoardIcon">
                            <FaHeartCircleXmark className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Emergency</span>
                        </div>
                    </div>
                </Link> 
                <Link to="/ProcedureRoom" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <FaGhost className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Procedure Room</span>
                        </div>
                    </div>
                </Link>
                <Link to="/OperationTheatre" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaEyeDropper className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Operation Theatre</span>
                        </div>
                    </div>
                </Link>
                <Link to="/InpatientManagment" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <FaUserGear className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Inpatient Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Nurse" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaUserNurse className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Nurse Station</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Billind_collection" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaCashRegister className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Billing and collection</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Insuarance_eclaim" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <FaUpRightFromSquare className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Insuarance and eClaim</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Laboratory" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaVials className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Laboratory</span>
                        </div>
                    </div>
                </Link>
                <Link to="/BloodBank" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <FaVialCircleCheck className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Blood Bank</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Radiology" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaVectorSquare className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Radiology</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Stockmanagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaRegPenToSquare className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Stock management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Reports" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaRegNoteSticky className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Hmis Reports</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Laundary" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaTruckArrowRight className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Laundary</span>
                        </div>
                    </div>
                </Link>
                <Link to="/AmbulanceManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <FaCarOn className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >Ambulance Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/OutPatientManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdGroupOff className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>OutPatient Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/EMR" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <MdPostAdd className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}  >EMR</span>
                        </div>
                    </div>
                </Link>
                <Link to="/PharmacyManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdDewPoint className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Pharmacy Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/ExpensesManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlineContentPasteSearch className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Expenses Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/HR_Payroll" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover}  className="dashBoardIcon">
                            <MdCreditCard className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover} >HR and Payroll</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Inventory_purchase" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdLocalGroceryStore className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Inventory and purchase</span>
                        </div>
                    </div>
                </Link>
                <Link to="/UserManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlinePersonPin className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>User Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Word_BedManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlineBuild className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Word and Bed Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/AssetBedManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlinePersonPin className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Asset Management</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Queue_WaitingManagement" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlineEscalatorWarning className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Queue and Waiting</span>
                        </div>
                    </div>
                </Link>
                <Link to="/Telemedicine" style={{ textDecoration: 'none' }}>
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlineComputer className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>Telemedicine</span>
                        </div>
                    </div>
                </Link>
                 <Link to="/FeedBack" style={{ textDecoration: 'none' }}>                  
                    <div className="dashBoardNavContainer">
                        <div onClick={ActivateHover} className="dashBoardIcon">
                            <MdOutlineOutbound className='dashBoardActualIcon'/>
                        </div>
                        <div className="IconName">
                            <span onClick={ActivateHover}>FeedBack</span>
                        </div>
                    </div>
                </Link> 

            </div>
        </div>
    )
}
export default  Main;