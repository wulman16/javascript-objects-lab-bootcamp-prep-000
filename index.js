var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, { [key]: value });
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}