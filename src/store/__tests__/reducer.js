import { destination, payment, order } from '../reducer';

describe('store/reducer', () => {
  describe('#payment', () => {
    it('reduces a payment/FIND/REQUEST action', () => {
      const action = {
        type: 'payment/FIND/REQUEST',
        currencies: [0, 1]
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a payment/FIND/SUCCESS action', () => {
      const action = {
        type: 'payment/FIND/SUCCESS',
        list: [{ id: 0, name: 'test 1' }, { id: 1, name: 'test 2' }]
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a payment/FIND/FAILURE action', () => {
      const action = {
        type: 'payment/FIND/FAILURE',
        error: 'failure'
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces an unknown action', () => {
      const action = {
        type: 'UNKNOWN'
      };
      const state = payment(undefined, action);
      expect(state).toMatchSnapshot();});
  });

  describe('#order', () => {
    it('reduces a destination/SET action', () => {
      const action = {
        type: 'destination/SET',
        destinationId: 0
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a payment/SET action', () => {
      const action = {
        type: 'payment/SET',
        paymentId: 0
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces a order/SUBMIT action', () => {
      const action = {
        type: 'order/SUBMIT'
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();
    });

    it('reduces an unknown action', () => {
      const action = {
        type: 'UNKNOWN'
      };
      const state = order(undefined, action);
      expect(state).toMatchSnapshot();});
  });
});
