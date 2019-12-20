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
        {this.state.title}
      </div>
    )
  }
}

export default Page;