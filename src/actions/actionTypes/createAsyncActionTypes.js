export default function (typeIdentifier) {
  return {
    REQUEST: `${typeIdentifier}_REQUEST`,
    SUCCESS: `${typeIdentifier}_SUCCESS`,
    ERROR: `${typeIdentifier}_ERROR`,
  };
}
