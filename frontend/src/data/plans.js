export const rechargePlans = [
  // AIRTEL PLANS (8 Plans)
  { id: 'A1', price: 179, validity: '28 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'airtel', popular: true },
  { id: 'A2', price: 265, validity: '28 days', data: '1.5GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'airtel' },
  { id: 'A3', price: 299, validity: '28 days', data: '2.5GB/day', description: 'Unlimited calls, 100 SMS/day, Disney+ Hotstar', operator: 'airtel' },
  { id: 'A4', price: 449, validity: '56 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'airtel' },
  { id: 'A5', price: 599, validity: '84 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day, Netflix', operator: 'airtel' },
  { id: 'A6', price: 719, validity: '84 days', data: '3GB/day', description: 'Unlimited calls, 100 SMS/day, Amazon Prime', operator: 'airtel' },
  { id: 'A7', price: 999, validity: '84 days', data: '6GB/day', description: 'Unlimited calls, 100 SMS/day, All OTT Apps', operator: 'airtel' },
  { id: 'A8', price: 1499, validity: '365 days', data: '24GB', description: 'Unlimited calls, 3600 SMS, Annual Plan', operator: 'airtel' },

  // JIO PLANS (8 Plans)
  { id: 'J1', price: 155, validity: '28 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'jio', popular: true },
  { id: 'J2', price: 209, validity: '28 days', data: '1GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'jio' },
  { id: 'J3', price: 299, validity: '28 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day, JioTV', operator: 'jio' },
  { id: 'J4', price: 395, validity: '56 days', data: '2.5GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'jio' },
  { id: 'J5', price: 666, validity: '84 days', data: '1.5GB/day', description: 'Unlimited calls, 100 SMS/day, JioCinema', operator: 'jio' },
  { id: 'J6', price: 719, validity: '84 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day, Netflix', operator: 'jio' },
  { id: 'J7', price: 1299, validity: '84 days', data: '6GB/day', description: 'Unlimited calls, 100 SMS/day, All Jio Apps', operator: 'jio' },
  { id: 'J8', price: 2999, validity: '365 days', data: '2.5GB/day', description: 'Unlimited calls, 100 SMS/day, Annual Plan', operator: 'jio' },

  // BSNL PLANS (8 Plans)
  { id: 'B1', price: 187, validity: '28 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl', popular: true },
  { id: 'B2', price: 247, validity: '28 days', data: '1GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl' },
  { id: 'B3', price: 319, validity: '28 days', data: '3GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl' },
  { id: 'B4', price: 485, validity: '56 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl' },
  { id: 'B5', price: 797, validity: '84 days', data: '2GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl' },
  { id: 'B6', price: 997, validity: '84 days', data: '3GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl' },
  { id: 'B7', price: 1277, validity: '84 days', data: '5GB/day', description: 'Unlimited calls, 100 SMS/day', operator: 'bsnl' },
  { id: 'B8', price: 1999, validity: '365 days', data: '600GB', description: 'Unlimited calls, 100 SMS/day, Annual Plan', operator: 'bsnl' }
];

export const operators = [
  { 
    id: 'airtel', 
    name: 'Airtel', 
    color: 'red',
    prefixes: ['90', '91', '92', '93', '94', '95', '96', '97', '98', '99'] 
  },
  { 
    id: 'jio', 
    name: 'Jio', 
    color: 'blue',
    prefixes: ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'] 
  },
  { 
    id: 'bsnl', 
    name: 'BSNL', 
    color: 'green',
    prefixes: ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69'] 
  }
];