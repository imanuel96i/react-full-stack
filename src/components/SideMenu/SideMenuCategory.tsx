import { SlArrowRight, SlTag } from "react-icons/sl";
import { NavLink as Link } from 'react-router-dom';

function SideMenuCategory() {
    return (
        <div className="CategoryItemSideMenu">
            <Link to='/' className="CategoryItemSideMenuLink">
                <div className="CategoryIcon">
                    <SlTag style={{ marginRight: "10px" }}/>
                    <p >Ropa</p>
                </div>
                <SlArrowRight />
            </Link>
        </div>
    );
}

export default SideMenuCategory;