//Converting colors to proper format
function normalizeColor(hexCode) {
    return [((hexCode >> 16) & 255) / 255, ((hexCode >> 8) & 255) / 255, (255 & hexCode) / 255]
  }
  ;['SCREEN', 'LINEAR_LIGHT'].reduce(
    (hexCode, t, n) =>
      Object.assign(hexCode, {
        [t]: n
      }),
    {}
  )

  //Sets initial properties
  function setInitialProperty(object, propertyName, val) {
    return (
      propertyName in object
        ? Object.defineProperty(object, propertyName, {
            value: val,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (object[propertyName] = val),
      object
    )
  }

  export { normalizeColor, setInitialProperty }
