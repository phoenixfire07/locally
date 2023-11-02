const defaultApp = {
  selectedItem: null,
  items: [],
};

function appReducer(app, action) {
  switch (action.type) {
    case "select-item": {
      return {
        ...app,
        selectedItem: action.item,
      };
    }
    case "set-items": {
      return {
        ...app,
        items: action.items,
      };
    }
    default:
      return app;
  }
}

export { appReducer, defaultApp };
