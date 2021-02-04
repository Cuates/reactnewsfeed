import { useEffect, useState } from 'react';
import axios from 'axios';

function useAxiosGet(url, method, params) {
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
      params: params,
      data: {}
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
      })
      .catch((error) => {
        setRequest({
          loading: false,
          data: error,
          error: true
        });
        console.log(error);
    });
  }, [url, method, params]);

  return request;
}

export default useAxiosGet;