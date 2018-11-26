import * as selectors from '../selectors';

const state = {
  destination: {
    list: [
      { id: 0, name: 'destination 1', currencies: [0, 1] },
      { id: 1, name: 'destination 2', currencies: [2] },
      { id: 2, name: 'destination 3', currencies: [0, 1, 2] }
    ],
    found: [1, 2],
    search: 'abc'
  },
  payment: {
    loading: true,
    list: [
      { id: 0, name: 'payment 1' },
      { id: 1, name: 'payment 2' },
      { id: 2, name: 'payment 3' }
    ]
  },
  order: {
    destination: 1,
    payment: 2,
    departing: true
  }
};

describe('store/selectors', () => {

  describe('getAvailableCurrencies', () => {
    it('returns the available currencies objects', () => {
      const currencies = selectors.getAvailableCurrencies(state);
      expect(currencies).toEqual(null); // TODO
    });

    it('returns null if no destination was selected', () => {
      const currencies = selectors.getAvailableCurrencies({
        ...state,
        order: {}
      });
      expect(currencies).toEqual(null);
    });
  });

  describe('isPaymentLoading', () => {
    it('returns the loading flag for the payment', () => {
      const isLoading = selectors.isPaymentLoading(state);
      expect(isLoading).toBe(true);
    });
  });

  describe('getOrder', () => {
    it('returns order with full objects', () => {
      const order = selectors.getOrder(state);
      expect(order).toEqual({
        destination: null, // TODO
        payment: { id: 2, name: 'payment 3' }
      });
    });
  });

  describe('hasTripStarted', () => {
    it('returns the trip started flag', () => {
      const hasStarted = selectors.hasTripStarted(state);
      expect(hasStarted).toBe(true);
    });
  });
});
