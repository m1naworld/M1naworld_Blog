import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  "images/C96FEC46-58DC-4324-A01A-B28E214FED8D_1_102_o.jpeg"


const ProfileImageWrapper = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = () => {
    return <ProfileImageWrapper src = {PROFILE_IMAGE_LINK} alt ="Profile Image" />
}

// const ProfileImage: FunctionComponent =  () => {
//   return <StaticImage 
//   src= "../../images/848EBE45-857E-45E7-8784-40C292CE843E_1_105_c.png" 
//   alt="Profile Image"
//   width= {120}
//   height= {120}
//   margin-bottom = {30}
//   border-radius = {50}
// />
// }


export default ProfileImage
