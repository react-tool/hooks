"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useToggle(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = (0, react_1.useState)(initialValue), value = _a[0], setValue = _a[1];
    var onToggle = (0, react_1.useCallback)(function () { return setValue(!value); }, [value]);
    return [value, onToggle, setValue];
}
exports.default = useToggle;
//# sourceMappingURL=useToggle.js.map