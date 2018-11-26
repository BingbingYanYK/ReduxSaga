import * as actions from '../actions';

describe('store/actions', () => {
  describe('#setPayment', () => {
    it('creates the correct action', () => {
      const action = actions.setPayment(0);
      expect(action).toMatchSnapshot();
    });
  });
  describe('#startTrip', () => {
    it('creates the correct action', () => {
      const action = actions.startTrip();
      expect(action).toMatchSnapshot();
    });
  });
});
