import {useEffect, useRef} from 'react';

import classes from '../../styles/ImagesList.module.scss';

const ImagesList = ({imagesListData}) => {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({block: 'end'});
    }, [imagesListData]);

    return(
        <div className={classes['imagesList']}>
            {
                imagesListData.map((item) => {
                    const {url, id} = item;
                    return(
                        <div
                            key={id}
                            className={classes['imagesBlock']}
                        >
                            <img src={url} alt="image"/>
                        </div>
                    )
                })
            }

            <div ref={scrollRef}> </div>
        </div>
    );
};

export default ImagesList;
