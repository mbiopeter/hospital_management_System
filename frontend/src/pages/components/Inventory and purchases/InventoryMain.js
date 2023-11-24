import './InventoryMain.css';
import { OncounterSale } from './Pharmacy/OncounterSale';
import { InventoryNav } from './reusable/InventoryNav';
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