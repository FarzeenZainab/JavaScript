const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',

    address: {
      line1: 'westwish st',
      line2: 'Karachi pk',
    },

    city: 'wallas',
    state: 'WX',
  },
};

const product = {
  id: 12,
  productName: 'Shoes',
  productSKU: '12-ASD',
  quantity: 22,
  categories: [],
  tags: [],
  variation: {},
};

// object destructuring
const { id: userId, email: userEmail, personalInfo: userInfo } = user;
const { name, city, state } = userInfo;
// const { line1, line2 } = user.personalInfo.address;
const { address } = userInfo;
// console.log(address);
// console.log(name, city, state);

// const { password = 'required' } = user;
// console.log(password);

let { line1, line2 } = address;
console.log(`Original: ${line1} and ${line2}`);

let tempt = line1;
line1 = line2;
line2 = tempt;
console.log(`Switched: ${line1} and ${line2}`);
