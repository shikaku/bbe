import { fromJS, Map, merge } from 'immutable'

const consts = {
  SET_BLOCKS_BY_HEIGHT: 'BLOCK:SET_BLOCKS_BY_HEIGHT',
};

const actions = {
  setBlocksByHeight: (blocks, heights) => ({type: consts.SET_BLOCKS_BY_HEIGHT, blocks, heights}),
};

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case consts.SET_BLOCKS_BY_HEIGHT:
      const { blocks, heights } = action;
      return state.merge(
        fromJS(heights.reduce((obj, height, idx) => {
          obj[height] = blocks[idx];
          return obj;
        }, {}))
      )
    default:
      return state;
  }
}
export { consts, actions, reducer }
