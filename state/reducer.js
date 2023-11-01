const defaultApp = {
  selectedItemId: null,
};

function appReducer(app, action) {
  switch (action.type) {
    case "select-item": {
      return {
        ...app,
        selectedItem: action.item,
      };
    }
    default:
      return app;
  }
}

export { appReducer, defaultApp };
