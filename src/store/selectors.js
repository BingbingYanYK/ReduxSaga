function getCurrencyById(id, state) {
  return state.payment.list.find(item => item.id === id);
}

export function getAvailableCurrencies(state) {
  const destination = null; // TODO
  if (!destination) return null;
  return destination.currencies.map(id => getCurrencyById(id, state));
}

export function isPaymentLoading(state) {
  return state.payment.loading
}

export function getOrder(state) {
  return {
    destination: null, // TODO
    payment: getCurrencyById(state.order.payment, state)
  }
}

export function hasTripStarted(state) {
  return state.order.departing
}