import {gql} from "graphql-tag";

export const GET_COURSE = gql`
    query getCourse($id: ID!) {
        course (id: $id) {
            id
            name
            description
            lessons {
                id
                name
                description
                content
                file_url
            }
        }
    }
`