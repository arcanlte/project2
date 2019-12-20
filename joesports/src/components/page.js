import React, { Component } from 'react';
import DisplayNews from './displayNews';

class Page extends Component {

  componentDidMount(props) {
    const { title } = this.props.location;
    console.log(title)
  }


  render() {
    return (
      <div>
        <h1>test</h1>
        {this.props.location}
      </div>
    )
  }
}

export default Page;