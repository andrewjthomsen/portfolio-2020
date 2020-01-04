import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

class Portfolio2 extends React.Component {
    render () {
      
        console.log(this.props);
        return (
            <BaseLayout>
            <h1>I am Portfolios Page from Class Component</h1>
            <h2>{this.props.router.query.title}</h2>
            </BaseLayout>
            
        )
    }
}

export default withRouter(Portfolio2);