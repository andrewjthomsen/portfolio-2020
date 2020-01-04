import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperComponent from "../components/SuperComponent";
import axios from "axios";

class Index extends SuperComponent {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const userData = response.data;
      console.log(response);
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4] };
  }
  constructor(props) {
    super(props);

    this.state = {
      title: "I am Index Pge"
    };
  }
  componentDidMount() {
    console.log("componentDidMount says... I am also working");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is working here!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  updateTitle = () => {
    this.setState({ title: "Pow!" });
  };
  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;

    return (
      <BaseLayout>
        <h1>I am Index Page from Class Component</h1>
        <h2>{title}</h2>
        <button onClick={() => this.updateTitle()}>Change Title</button>
      </BaseLayout>
    );
  }
}

export default Index;
