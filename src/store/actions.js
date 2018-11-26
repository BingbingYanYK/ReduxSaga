export const FIND_PAYMENT = {
  REQUEST: 'payment/FIND/REQUEST',
  SUCCESS: 'payment/FIND/SUCCESS',
  FAILURE: 'payment/FIND/FAILURE'
};

export const FIND_DESTINATION = {
  REQUEST: 'destination/FIND/REQUEST',
  SUCCESS: 'destination/FIND/SUCCESS',
  FAILURE: 'destination/FIND/FAILURE'
};

export const SET_DESTINATION = 'order/SET_DESTINATION';
export const SET_PAYMENT = 'order/SET_PAYMENT';
export const SUBMIT = 'order/SUBMIT';

export function searchDestination(text){
  return {
    type: FIND_DESTINATION.REQUEST,
    searchTerm: text
  }
}

export function setDestination(destinationId){
  return {
    type: SET_DESTINATION, 
    destinationId
  }
}
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
