import React, {FunctionComponent} from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import ProfileImage from "./ProfileImage";

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
`

const SubTitle = styled.div `
    font-size: 20px;
    font-weight: 400;
`

const Title = styled.div `
    margin-top: 5px;
    font-size: 35px;
    font-weight: 700;
`
const Introduction: FunctionComponent = () => {
    return (
        <Background>
            <Wrapper>
                <ProfileImage />

                <div>
                    <SubTitle>Welcome to M1naWorld</SubTitle>
                    <Title>I'm Junior BACKEND Developer Mina</Title>
                </div>
            </Wrapper>
        </Background>
    )
}

export default Introduction