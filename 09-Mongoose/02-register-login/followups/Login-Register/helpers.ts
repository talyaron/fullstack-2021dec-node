// export multiples functions
// export function uid() {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };


// export a single function
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export default uid;