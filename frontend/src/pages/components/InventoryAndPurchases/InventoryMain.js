import './InventoryMain.css';
import { InventoryNav } from './reusable/InventoryNav';
import {OncounterSale} from './PharmacyComponents/OncounterSale';
import { useState } from 'react';
export const InventoryMain =({expand}) => {
    const [InventoryNavStatus, SetInventoryNavStatus] = useState('');
    const HandleInventoryNav = (event) => {
        const ActivePage = event.target.id;
        SetInventoryNavStatus(ActivePage);
    }
    return(
        <div  style={(expand === false) ? {minWidth: '95%'} :null} className="InventoryMainContainer">
            <div className="InventoryMainContainerHeader">
                <span>Inventory and Purchases</span>
            </div>
            <div className="InventoryMainContainerInner">
                <InventoryNav HandleInventoryNav = {HandleInventoryNav}/> 
                <OncounterSale InventoryNavStatus = {InventoryNavStatus}/>
            </div>
        </div>
    )
}