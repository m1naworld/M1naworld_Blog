import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import ProfileImage from 'components/Main/ProfileImage';
import { IGatsbyImageData } from "gatsby-plugin-image";


type IntroductionProps = {
    profileImage: IGatsbyImageData
}
const Background = styled.div `
    width: 100%;
    background-image: linear-gradient(to right, #9198e5, #e66465);
    color: #ffffff;
`

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 800px;
    height: 400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        padding: 0 20px;
    }
`

const SubTitle = styled.div `
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 768px){
        font-size: 15px;
    }
`

const Title = styled.div `
    margin-top: 5px;
    font-size: 35px;
    font-weight: 700;

    @media (max-width: 768px){
        font-size: 25px;
    }
`
const Introduction: FunctionComponent<IntroductionProps>
 = ({profileImage}) => {
    return (
        <Background>
            <Wrapper>
                <ProfileImage profileImage = {profileImage} />

                <div>
                    <SubTitle>Welcome to M1naWorld</SubTitle>
                    <Title>I'm Developer Mina</Title>
                </div>
            </Wrapper>
        </Background>
    )
}

export default Introduction