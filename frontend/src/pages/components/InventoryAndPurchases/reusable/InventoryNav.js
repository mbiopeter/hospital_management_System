import { useState } from 'react';
import { Link } from "react-router-dom";
import './InventoryNav.css';
import { FaAngleRight ,FaAngleDown,FaAngleDoubleRight  } from "react-icons/fa";
export const InventoryNav = () => {
    const [Pharmacy,SetPharmacy] = useState(false);
    const HandleEpandPharmacy = () => {
        SetPharmacy(!Pharmacy);
    }
    const [Cafeteria,SetCafeteria] = useState(false);
    const HandleEpandCafeteria = () => {
        SetCafeteria(!Cafeteria);
    }
    const [Medical,SetMedical] = useState(false);
    const HandleEpandMedical = () => {
        SetMedical(!Medical);
    }
    const [Gifts,SetGifts] = useState(false);
    const HandleEpandGifts = () => {
        SetGifts(!Gifts);
    }
    return(
        <div className="InventoryNavContainer">
            <div className="InventoryNavContainerListContainer">
                <div className="InventoryNavContainerListContainerMain" onClick={HandleEpandPharmacy} style={(Pharmacy === false) ? {borderBottom:'0'}: null}>
                    <span><FaAngleDown style={(Pharmacy === false) ? {display:'none'}: {}} className='InventoryNavMainIcon'/> <FaAngleRight style={(Pharmacy === false) ? {}: {display:'none'}} className='InventoryNavMainIcon'/>Pharmacy Store</span>
                </div>
                <div className="InventoryNavContainerListContainerAfterClick" style={(Pharmacy === false) ? {height:'0',display:'none'}: null}>
                    <ul>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Patient Medicine</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Medicine Production</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Medicine Verification</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Medicine Storage</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Monitoring Stock Level</li>
                    </ul>
                </div>
            </div>

            <div className="InventoryNavContainerListContainer">
                <div className="InventoryNavContainerListContainerMain" onClick={HandleEpandCafeteria} style={(Cafeteria === false) ? {borderBottom:'0'}: null}>
                    <span><FaAngleDown style={(Cafeteria === false) ? {display:'none'}: {}} className='InventoryNavMainIcon'/> <FaAngleRight style={(Cafeteria === false) ? {}: {display:'none'}} className='InventoryNavMainIcon'/>Cafeteria Store</span>
                </div>
                <div className="InventoryNavContainerListContainerAfterClick" style={(Cafeteria === false) ? {height:'0',display:'none'}: null}>
                    <ul>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                    </ul>
                </div>
            </div>

            <div className="InventoryNavContainerListContainer">
                <div className="InventoryNavContainerListContainerMain" onClick={HandleEpandMedical} style={(Medical === false) ? {borderBottom:'0'}: null}>
                    <span><FaAngleDown style={(Medical === false) ? {display:'none'}: {}} className='InventoryNavMainIcon'/> <FaAngleRight style={(Medical === false) ? {}: {display:'none'}} className='InventoryNavMainIcon'/>Medical Equipments Store</span>
                </div>
                <div className="InventoryNavContainerListContainerAfterClick" style={(Medical === false) ? {height:'0',display:'none'}: null}>
                    <ul>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                    </ul>
                </div>
            </div>

            <div className="InventoryNavContainerListContainer">
                <div className="InventoryNavContainerListContainerMain" onClick={HandleEpandGifts} style={(Gifts === false) ? {borderBottom:'0'}: null}>
                    <span><FaAngleDown style={(Gifts === false) ? {display:'none'}: {}} className='InventoryNavMainIcon'/> <FaAngleRight style={(Gifts === false) ? {}: {display:'none'}} className='InventoryNavMainIcon'/>Gifts Shop</span>
                </div>
                <div className="InventoryNavContainerListContainerAfterClick" style={(Gifts === false) ? {height:'0',display:'none'}: null}>
                    <ul>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                        <li><FaAngleDoubleRight className='InventoryNavContainerListContainerAfterClickIcon'/>Oncounter Sale</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}