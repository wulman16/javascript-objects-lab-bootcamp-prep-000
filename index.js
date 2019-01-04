var recipes = {};

function updateObjectWithKeyAndValue(object, k, value) {
  var newObject = Object.assign(object, { [k]: value });
  return newObject;
}