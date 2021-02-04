import React from 'react';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';
import NewsFeedActionCard from '../Components/NewsFeedActionCard';

function ApiExtract(props) {
  const url = '<API_URL>';

  let content = null;

  let cardType = props.cardtype;

  let newsResponse = useAxiosGet(url, props.method, props.newssearch);

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
      if (cardType === "NewsFeedActionCard") {
        content = (
          <NewsFeedActionCard
            newssResponse = {newsResponse.data.Result}
          />
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

export default ApiExtract;