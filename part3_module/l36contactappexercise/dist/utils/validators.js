"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexObj = void 0;
exports.validateField = validateField;
exports.regexObj = {
    name: /^[a-zA-Z ]{3,30}$/, // only letter & space, 3 to 30 chars
    email: /^[\w.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, // email pattern \w = [a-zA-Z0-9_]
    phone: /^\d{10}$/ // 10 digit
};
function validateField(field, value) {
    const pattern = exports.regexObj[field];
    if (!pattern)
        return true;
    return pattern.test(value); // true or false
}
// 
// <input type="text" name="name" value="su su" />
// (regexObj as any)[field]
// We must read it in this order 👇
// 1️⃣ (regexObj as any)
// This part runs FIRST.
// It means:
// “Take regexObj and pretend it has NO rules.”
// So after this step, TypeScript thinks:
// python
// Copy code
// (regexObj as any)  →  ANYTHING is allowed
// No checking. No key rules.
// 2️⃣ [field]
// Now TypeScript sees this:
// ts
// Copy code
// (anything)[field]
// And it says:
// “If it’s any, then accessing any key is OK.”
// So:
// ts
// Copy code
// (any)[field]  // always allowed
