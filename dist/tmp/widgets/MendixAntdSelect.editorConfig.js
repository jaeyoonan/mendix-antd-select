'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, '__esModule', {
  value: true
});
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var dist = {};
var common$2 = {};
Object.defineProperty(common$2, "__esModule", {
  value: true
});
common$2.ensure = void 0;
function ensure(arg) {
  if (arg == null) {
    throw new Error("Did not expect an argument to be undefined");
  }
  return arg;
}
common$2.ensure = ensure;
var common$1 = {};
Object.defineProperty(common$1, "__esModule", {
  value: true
});
common$1.extractStyles = common$1.mergeNativeStyles = void 0;
function mergeNativeStyles(defaultStyle, overrideStyles) {
  var styles = [defaultStyle].concat(_toConsumableArray(overrideStyles.filter(function (object) {
    return object !== undefined;
  })));
  return Object.keys(defaultStyle).reduce(function (flattened, currentKey) {
    var styleItems = styles.map(function (object) {
      return object[currentKey];
    });
    return Object.assign(Object.assign({}, flattened), _defineProperty({}, currentKey, flattenObjects(styleItems)));
  }, {});
}
common$1.mergeNativeStyles = mergeNativeStyles;
function flattenObjects(objects) {
  return objects.reduce(function (merged, object) {
    return Object.assign(Object.assign({}, merged), object);
  }, {});
}
function extractStyles(source, extractionKeys) {
  if (!source) {
    return [{}, {}];
  }
  return Object.entries(source).reduce(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 2),
      extracted = _ref3[0],
      rest = _ref3[1];
    var _ref4 = _slicedToArray(_ref2, 2),
      key = _ref4[0],
      value = _ref4[1];
    if (extractionKeys.includes(key)) {
      extracted[key] = value;
    } else {
      rest[key] = value;
    }
    return [extracted, rest];
  }, [{}, {}]);
}
common$1.extractStyles = extractStyles;
var common = {};
Object.defineProperty(common, "__esModule", {
  value: true
});
common.parseInlineStyle = void 0;
function parseInlineStyle() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  try {
    return style.split(";").reduce(function (styleObject, line) {
      var pair = line.split(":");
      if (pair.length === 2) {
        var name = pair[0].trim().replace(/(-.)/g, function (match) {
          return match[1].toUpperCase();
        });
        styleObject[name] = pair[1].trim();
      }
      return styleObject;
    }, {});
  } catch (_) {
    return {};
  }
}
common.parseInlineStyle = parseInlineStyle;
var typings = {};
var PageEditor = {};
Object.defineProperty(PageEditor, "__esModule", {
  value: true
});
(function (exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  __exportStar(PageEditor, exports);
})(typings);
var utils = {};
var PageEditorUtils = {};
Object.defineProperty(PageEditorUtils, "__esModule", {
  value: true
});
PageEditorUtils.moveProperty = PageEditorUtils.transformGroupsIntoTabs = PageEditorUtils.changePropertyIn = PageEditorUtils.hideNestedPropertiesIn = PageEditorUtils.hidePropertiesIn = PageEditorUtils.hidePropertyIn = void 0;
function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(function (_, index, container) {
    return container.splice(index, 1);
  }, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
PageEditorUtils.hidePropertyIn = hidePropertyIn;
function hidePropertiesIn(propertyGroups, _value, keys) {
  keys.forEach(function (key) {
    return modifyProperty(function (_, index, container) {
      return container.splice(index, 1);
    }, propertyGroups, key, undefined, undefined);
  });
}
PageEditorUtils.hidePropertiesIn = hidePropertiesIn;
function hideNestedPropertiesIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKeys) {
  nestedPropKeys.forEach(function (nestedKey) {
    return hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedKey);
  });
}
PageEditorUtils.hideNestedPropertiesIn = hideNestedPropertiesIn;
function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
PageEditorUtils.changePropertyIn = changePropertyIn;
function transformGroupsIntoTabs(properties) {
  var groups = [];
  properties.forEach(function (property) {
    if (property.propertyGroups) {
      groups.push.apply(groups, _toConsumableArray(property.propertyGroups));
      property.propertyGroups = [];
    }
  });
  properties.push.apply(properties, groups);
}
PageEditorUtils.transformGroupsIntoTabs = transformGroupsIntoTabs;
function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
  propertyGroups.forEach(function (propGroup) {
    var _a;
    if (propGroup.propertyGroups) {
      modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
    }
    (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach(function (prop, index, array) {
      if (prop.key === key) {
        if (nestedPropIndex === undefined || nestedPropKey === undefined) {
          modify(prop, index, array);
        } else if (prop.objects) {
          modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
        } else if (prop.properties) {
          modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
        }
      }
    });
  });
}
function moveProperty(fromIndex, toIndex, properties) {
  if (fromIndex >= 0 && toIndex >= 0 && fromIndex < properties.length && toIndex < properties.length && fromIndex !== toIndex) {
    properties.splice.apply(properties, [toIndex, 0].concat(_toConsumableArray(properties.splice(fromIndex, 1))));
  }
}
PageEditorUtils.moveProperty = moveProperty;
(function (exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  __exportStar(PageEditorUtils, exports);
})(utils);
(function (exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  __exportStar(common$2, exports);
  __exportStar(common$1, exports);
  __exportStar(common, exports);
  __exportStar(typings, exports);
  __exportStar(utils, exports);
})(dist);
function getProperties(_values, defaultProperties /*, target: Platform*/) {
  // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
  /* Example
  if (values.myProperty === "custom") {
      delete defaultProperties.properties.myOtherProperty;
  }
  */
  var enableMultiSelect = _values.enableMultiSelect,
    showSearch = _values.showSearch;
  enableMultiSelect ? dist.hidePropertyIn(defaultProperties, _values, "singleSelectAssociation") : dist.hidePropertyIn(defaultProperties, _values, "multiSelectAssociation");
  if (!showSearch) dist.hidePropertiesIn(defaultProperties, _values, ["filterType"]);
  return defaultProperties;
}
// export function check(_values: MendixAntdDropdownPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Add errors to the above array to throw errors in Studio and Studio Pro.
//     /* Example
//     if (values.myProperty !== "custom") {
//         errors.push({
//             property: `myProperty`,
//             message: `The value of 'myProperty' is different of 'custom'.`,
//             url: "https://github.com/myrepo/mywidget"
//         });
//     }
//     */
//     return errors;
// }
// export function getPreview(values: MendixAntdDropdownPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     }
// }
// export function getCustomCaption(values: MendixAntdDropdownPreviewProps, platform: Platform): string {
//     return "MendixAntdDropdown";
// }

exports.getProperties = getProperties;
