const defaultApp = {
  selectedItem: null,
  items: [],
  creators: [],
  selectedCreator: null,
};

function appReducer(app, action) {
  switch (action.type) {
    case "select-item": {
      return {
        ...app,
        selectedItem: action.item,
      };
    }
    case "select-creator": {
      return {
        ...app,
        selectedCreator: action.creator,
      };
    }
    case "set-initial-state": {
      return {
        ...app,
        creators: action.creators,
        items: action.items,
      };
    }
    default:
      return app;
  }
}

export { appReducer, defaultApp };
