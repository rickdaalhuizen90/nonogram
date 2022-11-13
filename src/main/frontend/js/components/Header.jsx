import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1(`
    font-size: 3rem;
    color: red;
`);

class Header extends React.Component {
  render() {
    return <Title>Hello, {this.props.name}</Title>;
  }
}

export default Header;