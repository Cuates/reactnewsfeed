import React, { useState } from 'react';
import ApiAlteration from '../Components/ApiAlteration';

function NewsFeedActionCard(props) {
  // console.log("props: " + JSON.stringify(props));
  // console.log("props.newssResponse: " + JSON.stringify(props.newssResponse));

  // if (props.newssResponse[0]['Status']) {
  //   console.log("props.newssResponse[0]['Status']: " + props.newssResponse[0]['Status']);
  //   if (props.newssResponse[0]['Status'] && props.newssResponse[0]['Message']) {
  //     alert (props.newssResponse[0]['Status'] + ": " + props.newssResponse[0]['Message']);
  //   }
  // }
  // else {
  //   console.log("props.newssResponse[0]['Status']: Does not exist");
  // }

  // Hook for use reducer which utilizes use state
  const [callApiAlteration, setCallApiAlteration] = useState({contentResponse: '', newList: props.newssResponse});

  function handleAlteration(title, imageurl, feedurl, actualurl, publishdate, method, cardType) {
    // console.log("props.newssResponse[0]['Status']: " + (props.newssResponse[0]['Status'] ? 'Exists' : 'Does not exists'));
    // console.log("props.newssResponse.indexOf('Status'): " + props.newssResponse.indexOf('Status') > -1);

    // if (props.newssResponse[0]['Status'] === "Success") {
    //   console.log("props.newssResponse[0]['Status']: " + props.newssResponse[0]['Status']);
    // }

    // if (props.newssResponse[0].Status === "Success") {
    //   console.log('Status is success')
    // }

    // console.log("newListResponse: " + JSON.stringify(callApiAlteration.newList));

    const contentResponse = (<ApiAlteration
      method = {
        method
      }
      carType = {
        cardType
      }
      payload = {{
        title: title,
        imageurl: imageurl,
        feedurl: feedurl,
        actualurl: actualurl,
        publishdate: publishdate
      }} />);

    // Set new list without element
    const newList = callApiAlteration.newList.filter((item) => item.title !== title);

    // Set state with new list
    setCallApiAlteration({contentResponse: contentResponse, newList: newList});

    // console.log("props.newssResponse[0]: " + JSON.stringify(props.newssResponse[0]));

    // console.log("callApiAlteration: " + JSON.stringify(callApiAlteration));
  }

  // Set content variable
  let content = (
    <div>
      {callApiAlteration.newList.length > 0 &&
      callApiAlteration.newList.map((newsResponse, key) =>
        <div key = {key} id={key}>
          <div className = "border mb-4 rounded overflow-hidden bg-gray-700 text-yellow-100">
            <div className = "p-3">
              <div className="flex justify-center items-center">
                {
                  newsResponse.imageurl ? <img src = { newsResponse.imageurl } alt = { newsResponse.title } width = "600px" height = "600" /> : ""
                }
              </div>
              <div className = "font-bold mb-3 break-words text-center">
                { newsResponse.title }
              </div>
              <div className="flex flex-wrap">
                <div className="flex flex-auto">
                  <a href={`${newsResponse.feedurl}`} target="_blank" rel="noopener noreferrer" className="bg-blue-500 mr-10 rounded text-white p-2 flex justify-center w-full">
                    View
                  </a>
                </div>
                <div className="flex flex-auto">
                  <button type="button" id="delete" className="bg-red-500 rounded text-white p-2 flex justify-center w-full"
                    onClick={() => handleAlteration(newsResponse.title, "", "", "", "", "delete", 'NewsFeedActionCard')}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {callApiAlteration.contentResponse}
    </div>
  );

  return (
    <div>
      {content}
    </div>
  );
}

export default NewsFeedActionCard;