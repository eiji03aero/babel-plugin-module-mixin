const path = require('path');
const fs = require('fs');

const { parse } = require('@babel/parser');

const input = `
const d = {};
class D {
  include d;
}
`;

// const input = `
// 4 / 2
// `;

const result = parse(input);

fs.writeFileSync(path.resolve(__dirname, 'output.json'), JSON.stringify(result, null, 2));
