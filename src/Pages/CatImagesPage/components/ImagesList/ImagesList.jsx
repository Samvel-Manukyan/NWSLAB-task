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
                imagesListData.map((item, index) => {
                    const {url} = item;
                    return(
                        <div
                            key={index}
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
