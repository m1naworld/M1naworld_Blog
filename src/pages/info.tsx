import React, {FunctionComponent} from "react";
import { graphql } from "gatsby";
import Text from "components/Text";

type InfoPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string
                description: string
                author: string
            }
        }
    }
}

const InfoPage: FunctionComponent<InfoPageProps> = ({
    data: {
        site: {
            siteMetadata: { title, description, author},
        },
    }
}) => {
        return (<div>
        <Text text = {title} />
        <Text text = {description} />
        <Text text = {author} />
    </div>)
}


export default InfoPage


// gatsby에서는 기본적으로 pages 폴더 내부의 파일과 gatsby api를 통해 
// 생성해주는 페이지의 템플릿 파일에서만 query 정의가 가능 
// 일반적인 컴포넌트에서는 변수로서 정의가 불가능하고, StaticQuery 라는 기능을 통해 정의가 가능

export const metadataQuery = graphql `
{
    site {
        siteMetadata{
            title
            description
            author 
        }
    }
} `;

// 변수에 쿼리를 담아주고, 이를 export 해주면 gatsby 내부적으로 요청을 보냄
// 그럼 보낸 요청에 대한 응답으로 데이터를 props로 전달해줌 

// 쿼리 반환 겨과 값에 따라 props 타입을 지정.