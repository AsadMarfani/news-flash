import React from 'react';
import { Card, Skeleton } from 'antd';
const NewsCard = (props) => {
    console.log('Props : ', props);
    return (
        // <Skeleton loading = {props.isLoading} active>
        <Card loading={props.isLoading}>
            {props.article.description}
        </Card>
        // </Skeleton>
    );
}
export default NewsCard;