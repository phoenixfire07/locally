const handleItemSelected = (dispatch, item) => {
  dispatch({
    type: "select-item",
    item: item,
  });
};

const fetchInitialState = (dispatch) => {
  fetch("https://storage.googleapis.com/locally_seattle_images/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-cache",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      dispatch({
        type: "set-initial-state",
        items: json.mapItems,
        creators: json.creators,
      });
    });
};

export { handleItemSelected, fetchInitialState };
