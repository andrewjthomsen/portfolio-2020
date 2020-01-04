import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

class Human {
    talk() {
        console.log("I am talking");
    }
}
class Index extends SuperComponent {
    static getInitialProps() {
        console.log("getInitialProps");
        return {};
    }
    constructor(props) {
    
        super(props);
    
        this.state = {
            title: 'I am Index Pge'
        }
    }
componentDidMount() {
console.log("componentDidMount says... I am also working");
}

componentDidUpdate() {
    console.log('componentDidUpdate is working here!')
}

componentWillUnmount() {
    console.log("componentWillUnmount");
}
updateTitle = () => {
    this.setState({title: 'Pow!'})
}
    render () {

        const {title} = this.state;
        // const title = this.state.title
   
        return (
            <BaseLayout>
             <h1>I am Index Page from Class Component</h1>
            <h2>{title}</h2>
            <button onClick={() => this.updateTitle()}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default Index;