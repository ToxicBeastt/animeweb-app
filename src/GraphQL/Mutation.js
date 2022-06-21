import { gql } from "@apollo/client";

export const SAVE_LIST_ACTIVITY = gql`
mutation Mutation($mediaId: Int, $status: MediaListStatus) {
    SaveMediaListEntry(mediaId: $mediaId, status: $status) {
      id
      userId
      mediaId
    }
  }
`