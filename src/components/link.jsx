import styled from "styled-components";

const LinkComponent = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Source Code Pro";
  color: #36006b;

  &:hover {
    color: #510999;
    transition: all 0.3s ease-in-out;
    text-decoration: underline;
  }
`;

export default LinkComponent;
