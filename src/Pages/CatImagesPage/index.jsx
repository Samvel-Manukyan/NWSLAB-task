import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCatImagesData} from '../../store/common/CatImages/selectors';
import {useParams} from 'react-router-dom';

import {onCatImages} from '../../store/common/CatImages/thunks';
import ImagesList from './components/ImagesList/ImagesList';

import classes from './index.module.scss';

const CatImagesPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {data} = useSelector(selectCatImagesData);

    const [list, setList] = useState(data);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setList([...data, ...list]);
    }, [data]);

    useEffect(() => {
        setList([]);
    }, [id]);

    useEffect(() => {
        dispatch(onCatImages({limit, page, category_ids: id}))
    }, [id, page]);

    return(
        <div className={classes['catImages']}>
            <ImagesList
                imagesListData={list}
            />

            <div className={classes['button']}>
                <button
                    onClick={() => {
                        setPage(page + 1);
                    }}
                >
                    More images
                </button>
            </div>
        </div>
    );
};

export default CatImagesPage;
