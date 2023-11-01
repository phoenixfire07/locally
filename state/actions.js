const handleItemSelected = (dispatch, item) => {
  dispatch({
    type: "select-item",
    item: item,
  });
};

export { handleItemSelected };
