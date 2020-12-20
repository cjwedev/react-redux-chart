
export const VAT_START = 'VAT/FEED.START';
export const VAT_ERROR = 'VAT/FEED.ERROR';
export const VAT_DONE = 'VAT/FEED.DONE';

export function feedRates(condition) {
  return {
    type: VAT_START,
    payload: condition
  }
}
