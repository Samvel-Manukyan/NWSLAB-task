import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCategoriesData} from '../store/common/Categories/selectors';
import {NavLink} from 'react-router-dom';

import {onCategories} from '../store/common/Categories/thunk';

import classes from './index.module.scss';

const Sidebar = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(selectCategoriesData);

    const setActive = ({isActive}) => ({
        color: isActive ? '#4cf661' : '',
        background: isActive ? '#0C6072' : ''
    });

    useEffect(() => {
        dispatch(onCategories());
    },[]);

    return(
        <div className={classes['sidebar']}>
            <div className={classes['sidebarContainer']}>
                {
                    data?.map(item => {
                        const {id, name} = item;
                        return(
                            <NavLink
                                key={id}
                                className={classes['navLink']}
                                style={setActive}
                                to={`/${id}/${name}`}
                            >
                                {name.toUpperCase()}
                            </NavLink>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;
