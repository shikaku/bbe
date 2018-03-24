const consts = {
  SET_BLOCKS_BY_HEIGHT: 'BLOCK:SET_BLOCKS_BY_HEIGHT',
};

const actions = {
  setBlocksByHeight: (blocks, heights) => ({type: consts.SET_BLOCKS_BY_HEIGHT, blocks, heights}),
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case consts.SET_BLOCKS_BY_HEIGHT:
      const { blocks, heights } = action;
      return heights.reduce((obj, height, idx) => {
        obj[height] = blocks[idx];
        return obj;
      }, {...state})
    default:
      return state;
  }
}

export {
  consts,
  actions,
  reducer,
}
