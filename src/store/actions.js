export const FIND_PAYMENT = {
  REQUEST: 'payment/FIND/REQUEST',
  SUCCESS: 'payment/FIND/SUCCESS',
  FAILURE: 'payment/FIND/FAILURE'
};

export const SET_DESTINATION = 'order/SET_DESTINATION';
export const SET_PAYMENT = 'order/SET_PAYMENT';
export const SUBMIT = 'order/SUBMIT';

export function setPayment(paymentId) {
  return {
    type: SET_PAYMENT,
    paymentId
  };
}

export function startTrip() {
  return {
    type: SUBMIT
  };
}
