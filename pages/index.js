import React from 'react';
import Header from '../components/shared/Header';
class Index extends React.Component {

    render () {
        return (
            <div>
             <h1>I am Index Page from Class Component</h1>
                <Header title={"I'm a header component"}>
                <h1>I am header subtitle</h1>
                    <h1>See Me Now</h1>
                </Header>
            </div>
        )
    }
}

export default Index;