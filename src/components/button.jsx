import styled from "styled-components";

const ButtonComponent = styled.button`
  margin-top: 5rem;
  width: 100%;
  padding: 10px 0px;
  font-family: "Source Code Pro";
  border-radius: 6px;

  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  background-color: transparent;
  border: 2px solid #36006b;
  position: relative;

  &:hover {
    cursor: pointer;
    transition: 1s;
    background-color: #36006b;
    border: none;
  }
`;

export default ButtonComponent;
