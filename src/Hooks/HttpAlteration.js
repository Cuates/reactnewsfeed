import { useEffect, useState } from 'react';
import axios from 'axios';

function useAxiosAlteration(url, method, payload) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false
    });

    const config = {
      method: method,
      url: url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      },
      data: [payload]
    };

    axios(
      config
    )
      .then(response => {
        setRequest({
          loading: false,
          data: response.data,
          error: false
        });

        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        setRequest({
          loading: false,
          data: error,
          error: true
        });

        console.log(error);
    });
  }, [url, method, payload]);

  return request;
}

export default useAxiosAlteration;