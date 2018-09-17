/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (var i = 0; i < preferences.length; i++) {
     let SpichoneeA = i + 1;
     let SpichoneeB = preferences[SpichoneeA - 1];
     let SpichoneeC = preferences[SpichoneeB - 1];
     let SpichoneeCLoves = preferences[SpichoneeC - 1];
     if (SpichoneeA === SpichoneeCLoves) {
        count++;
     }
  }
  return Math.floor(count/3);
};
