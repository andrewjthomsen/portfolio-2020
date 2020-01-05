import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio2 extends React.Component {

    static getInitialProps({query}) {
       const portfolioId = query.id;
            let portfolio2 = {};
       try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio2 = response.data;
       } catch(err) {
           console.error(err);
       }
        return {portfolio2};
    }

    render () {
      const {portfolio2} = this.props;
    //   const portfolio2 = this.props.portfolio2;
        console.log(this.props);
        return (
            <BaseLayout>
            <h1>{portfolio2.title}</h1>
            <p>BODY:{portfolio2.body}</p>
            <p>ID:{portfolio2.id}</p>
            </BaseLayout>
            
        )
    }
}

export default withRouter(Portfolio2);