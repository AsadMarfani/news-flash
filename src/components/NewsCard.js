import React from 'react';
import { Card } from 'antd';
const NewsCard = (props) => {
    return (
        <Card title={props.title}>
            Card content
        </Card>
    );
}
export default NewsCard;