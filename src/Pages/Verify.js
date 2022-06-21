import React from "react";

import { useState , useEffect} from "react";

function Verify() {

    const [code, setCode] = useState([]);
    const link = window.location.href
    const after_ = link.substring(link.indexOf('=') + 1);
    

    const { error, loading, data } = useQuery(LOAD_ANIME_DETAIL, {
        variables: {
          mediaId: parseInt(id),
        },
      });


  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setCode(after_);
          //   window.location.href = "#"
        //   window.location.href =
        //     "https://anilist.co/api/v2/oauth/token";
          //   navigate('/home');
        }}
      >
        {" "}
        Click here
      </button>
      {after_}
    </div>
  );
}

export default Verify;
