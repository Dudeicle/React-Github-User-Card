import React from 'react'
import styled from 'styled-components'


const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 5%;
  border: 15px solid lightblue;
  box-shadow: 10px 5px 10px -5px teal;
`;

const ImgStyle = styled.img`
  border: 2px solid black;
  box-shadow: 9px 5px 3px -2px black;
  margin-top: 2%;
`;

const NameStyle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: green;
`;

class CardList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
      return(
        <CardStyle>
          <div>
            <ImgStyle src={this.props.photo}></ImgStyle>
          </div>

          <NameStyle>
            {this.props.username}
          </NameStyle>

          <div>
            <LinkStyle href={this.props.link}>Link To Profile</LinkStyle>
          </div>
        </CardStyle>
      )
  }

}

export default CardList