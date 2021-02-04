import React from 'react';
import Loader from './Loader';
import useAxiosAlteration from '../Hooks/HttpAlteration';
import NewsFeedActionCard from './NewsFeedActionCard';

function ApiAlteration(props) {
  const url = '<API_URL>';

  let content = null;

  let cardType = props.cardtype;

  // console.log(JSON.stringify(props));

  let newsResponse = useAxiosAlteration(url, props.method, props.payload);

  if (newsResponse.error) {
    content = <p>
      { newsResponse.data.Status }
      </p>
  }

  if (newsResponse.loading) {
    content = <Loader></Loader>
  }

  if (newsResponse.data) {
    if (newsResponse.data.Count > 0) {
      // console.log(JSON.stringify(newsResponse.data.Result));
      if (cardType === "NewsFeedActionCard") {
        content = (
          newsResponse.data.Result.map((newsResponse, key) =>
            <div key = {key}>
              <NewsFeedActionCard
                newssResponse = {newsResponse}
              />
            </div>
          )
        );
      }
      // else {
      //   content = (
      //     <div className = "border mb-4 rounded overflow-hidden">
      //       <div className = "p-3">
      //         <h3 className = "font-bold text-xl mb-3">
      //           Display Card Not Implemented
      //         </h3>
      //       </div>
      //     </div>
      //   );
      // }
    }
    else {
      content = (
        <div className = "border mb-4 rounded overflow-hidden">
          <div className = "p-3">
            <h3 className = "font-bold text-xl mb-3">
              No data found
            </h3>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default ApiAlteration;