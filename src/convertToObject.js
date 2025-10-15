'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  function formatPropertyString(propertyString) {
    const [key, value] = propertyString.split(':').map((s) => s.trim());

    if (!key || !value) {
      return null;
    }

    return { [key]: value };
  }

  const objectStrings = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => formatPropertyString(s))
    .filter(Boolean);

  const object = objectStrings.reduce(
    (obj, item) => Object.assign(obj, item),
    {},
  );

  return object;
}

module.exports = convertToObject;
