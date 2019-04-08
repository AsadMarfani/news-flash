import React, { Component } from 'react';
import { List, Skeleton, Icon, Avatar, Switch, Spin, Pagination, Row, Col, } from 'antd';
import NewsCard from './NewsCard';
import axios from 'axios';
import { FETCH_NEWS_URL, INTERNAL_SERVER_URL } from '../constants';

const antIcon = <Icon type="loading" style={{ fontSize: 40 }} spin />;
const PAGE_SIZE = 8;
export default class NewsList extends Component {
    state = {
        loading: true,
        news: {
            pageNumber: 1,
            articles: []
        },
        newsList: [],
        pageNumber: 1,
        fetchdPageNumbers: [],
        totalResults: 0
    }
    componentDidMount() {
        const { pageNumber } = this.state;
        const URL = `${FETCH_NEWS_URL}&pageSize=${PAGE_SIZE}&page=${pageNumber}`;
        axios.get(URL).then(response => {
            console.log(response.data);
            const { articles, totalResults } = response.data;
            this.setState({
                loading: false,
                news: {
                    pageNumber,
                    articles
                },
                newsList: [{
                    pageNumber,
                    articles
                }],
                totalResults,

                fetchdPageNumbers: [pageNumber]
            });
        }).catch(error => console.log(error))
    }

    onChange = (checked) => {
        this.setState({ loading: !checked });
    }
    handleChange = (page, pageSize) => {
        const { fetchdPageNumbers, newsList } = this.state;
        for (let index = 0; index < newsList.length; index++) {
            if (newsList[index].pageNumber === page) {
                this.setState({
                    news: newsList[index],
                    pageNumber: page,
                });
                return;
            }
        }
        this.setState({
            loading: true
        });
        const URL = `${FETCH_NEWS_URL}&pageSize=${PAGE_SIZE}&page=${page}`;
        axios.get(URL).then(response => {
            console.log(response.data);
            const { articles, totalResults } = response.data;
            this.setState({
                loading: false,
                news: {
                    pageNumber: page,
                    articles
                },
                newsList: [...this.state.newsList, {
                    pageNumber: page,
                    articles
                }],
                pageNumber: page,
                totalResults,
                fetchdPageNumbers: [...fetchdPageNumbers, page]
            });
        }).catch(error => console.log(error))
    }

    render() {
        const { loading } = this.state;
        return (
            <Row style={{ padding: '6%' }}>
                {this.state.loading ?
                    <div style = {{textAlign: 'center'}}>
                        <Spin indicator={antIcon} />
                    </div> :
                    <div>
                        <Row>
                            <Col>
                                <List
                                    itemLayout='vertical'
                                    size="large"
                                    dataSource={this.state.news.articles}
                                    renderItem={item =>
                                        <List.Item
                                            key={item.publishedAt}
                                            extra={!loading && <img width={272} height={160} alt="logo" src={item.urlToImage} />}
                                        >
                                            <List.Item.Meta
                                                title={<a href={item.url}>{item.title}</a>}
                                                description={item.description}
                                            />
                                        </List.Item>
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Pagination
                                    size="small"
                                    current={this.state.pageNumber}
                                    defaultCurrent={1}
                                    defaultPageSize={PAGE_SIZE}
                                    onChange={this.handleChange}
                                    total={this.state.totalResults}
                                />
                            </Col>
                        </Row>
                    </div>
                }
            </Row>
        )
    }
} 