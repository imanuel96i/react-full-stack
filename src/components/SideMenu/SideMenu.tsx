import { useState, useEffect } from 'react';
import '../css/SideMenu.sass'
import SideMenuCategory from './SideMenuCategory';

type Props = {
    menuState: boolean
}

function SideMenu({ menuState }: Props) {

    const [classMainContainerSideMenu, setClassMainContainerSideMenu] = useState(
        "MainContainerSideMenu unclicked"
      );

    useEffect(() => {
        if(menuState) setClassMainContainerSideMenu("MainContainerSideMenu clicked")
        else setClassMainContainerSideMenu("MainContainerSideMenu unclicked")
    }, [menuState])

    return (
        <div className={classMainContainerSideMenu}>
            <SideMenuCategory />
            <SideMenuCategory />
            <SideMenuCategory />
            <SideMenuCategory />
        </div>
    );
}

export default SideMenu;