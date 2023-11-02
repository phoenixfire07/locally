const handleItemSelected = (dispatch, item) => {
  dispatch({
    type: "select-item",
    item: item,
  });
};

const fetchItems = (dispatch) => {
  fetch("https://storage.googleapis.com/locally_seattle_images/test.json", {
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
        type: "set-items",
        items: json.items,
      });
    });
};

export { handleItemSelected, fetchItems };
