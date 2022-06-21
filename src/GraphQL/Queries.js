import { gql } from "@apollo/client";

export const LOAD_ANIME_LIST = gql`
query($page: Int, $perPage: Int)  {
    Page(page: $page, perPage: $perPage) {
      media {
        siteUrl
        title {
          english
          native
        }
        coverImage {  
          large
        }
        episodes
        id
      }
      pageInfo {
        currentPage
        lastPage
      }
    }
  }
`

export const LOAD_ANIME_DETAIL = gql`
query Page($mediaId: Int) {
  Page {
    media(id: $mediaId) {
      id
      title {
        english
        native
      }
      coverImage {  
        large
      }
      popularity
      episodes
      genres
      meanScore
      description
    }
  }
}
`
export const LOAD_AUTH = gql`
query Page($mediaId: Int) {
  Page {
    media(id: $mediaId) {
      id
      title {
        english
        native
      }
      coverImage {  
        large
      }
      popularity
      episodes
      genres
      meanScore
      description
    }
  }
}
`
