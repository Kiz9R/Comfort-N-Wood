// domain/.netlify/functions/hello
const items = [
  {
    id: 1,
    name: "blank",
  },
  {
    id: 2,
    name: "retro",
  },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
