import Sidebar from '../../Sidebar/index';
import {Outlet} from 'react-router-dom';

import classes from './index.module.scss';

const Layout = () => {
    return(
        <div className={classes['layout']}>
            <Sidebar/>

            <Outlet/>
        </div>
    );
};

export default Layout;
