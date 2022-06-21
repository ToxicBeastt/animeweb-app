import { useMutation } from "@apollo/client";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { SAVE_LIST_ACTIVITY } from "../GraphQL/Mutation";

function Login() {

    const client_id = 8623
  return (  
    <div>
        <a href= "https://anilist.co/api/v2/oauth/authorize?client_id=8623&response_type=code">Login with AniList</a>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();

          //   window.location.href = "#"
            window.location.href = "https://anilist.co/api/v2/oauth/authorize?client_id=8623&response_type=code";
          //   navigate('/home');
        }}
      >
        {" "}
        Click here
      </button>
    </div>
  );
}

export default Login;
