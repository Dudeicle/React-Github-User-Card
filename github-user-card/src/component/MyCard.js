import React from 'react'
import styled from 'styled-components'

const MyCardContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const CardStyle = styled.div`
  display: flex;
  width: 80%;
  margin: 5%;
  padding: 5%;
  border: 15px solid lightblue;
  box-shadow: 10px 5px 10px -5px teal;
`;
const ImgStyle = styled.img`
  border: 2px solid black;
  box-shadow: 9px 5px 3px -2px black;
  margin-top: 2%;
`;
const InfoContainerStyle = styled.div`
  margin-left: 4%;
`;
const NameStyle = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
`;
const InfoStyle = styled.div`
  font-size: 2rem;
  text-align: left;
`;
const SpanStyle = styled.span`
  font-weight: bold;
`;
const LinkStyle = styled.a`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  color: green;
`;

class MyCard extends React.Component {

    render(){
        return(
          <MyCardContainerStyle>

              

            <CardStyle>
                <ImgStyle src={this.props.user.avatar_url}></ImgStyle>
                
                <InfoContainerStyle>

                    <NameStyle>
                        {this.props.user.login}
                    </NameStyle>
                    
                    <InfoStyle>
                        <SpanStyle>Bio: </SpanStyle>{this.props.user.bio}

                        <br></br>

                        <SpanStyle>Location: </SpanStyle>{this.props.user.location}

                        <br></br>

                        <SpanStyle>Joined On: </SpanStyle>{this.props.user.created_at}

                    </InfoStyle>
        
                    <LinkStyle href={this.props.user.html_url}>Link To Profile</LinkStyle>
                </InfoContainerStyle>    
            </CardStyle>

          </MyCardContainerStyle>
        )
    }
  
  }
  
  export default MyCard