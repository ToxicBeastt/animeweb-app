import React from "react";

import { useState } from "react";

function Verify() {

    const [code, setCode] = useState([]);
    const link = window.location.href
    const after_ = link.substring(link.indexOf('=') + 1);
    var request = require('request');

    var options = {
      uri: 'https://anilist.co/api/v2/oauth/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      json:{
        'grant_type': 'authorization_code',
        'client_id': '8623',
        'client_secret': 'IxaGWVEIgVZ4NYvdIISrNnBg6MKRLloEcddDWmiC',
        'redirect_uri': 'http://localhost:3000/home',
        'code': 'after_'
      }
    };
    
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body.data);
      }
    });


  return (
    <div>
      {after_}
    </div>
  );
}

export default Verify;
