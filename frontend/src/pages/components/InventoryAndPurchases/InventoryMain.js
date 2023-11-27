import './InventoryMain.css';
import { InventoryNav } from './reusable/InventoryNav';
import {OncounterSale} from './PharmacyComponents/OncounterSale';
export const InventoryMain =({expand}) => {
    return(
        <div  style={(expand === false) ? {minWidth: '95%'} :null} className="InventoryMainContainer">
            <div className="InventoryMainContainerHeader">
                <span>Inventory and Purchases</span>
            </div>
            <div className="InventoryMainContainerInner">
                <InventoryNav /> 
                <OncounterSale />
            </div>
        </div>
    )
}