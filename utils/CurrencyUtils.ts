const currencyCode = 'PKR';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: currencyCode,
});

export { currency };
