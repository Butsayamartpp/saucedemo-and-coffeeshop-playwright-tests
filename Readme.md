# Automated Testing with Playwright

โปรเจกต์ Automated Test โดยใช้ **Playwright + TypeScript** สำหรับการทดสอบเว็บไซต์ตาม Test Cases ที่กำหนด

## 🛒 SauceDemo

Website: https://www.saucedemo.com/

### Test Cases

| Test Case  | รายละเอียด                              | Result   |
| ---------- | --------------------------------------- | -------- |
| TC-CKO-001 | Verify Checkout button functionality    | ✅ Passed |
| TC-CKO-002 | Register in Checkout using valid inputs | ✅ Passed |
| TC-CKO-012 | Verify Finish button functionality      | ✅ Passed |

**Result: 9/9 Tests Passed**
ทดสอบบน Chromium, Firefox และ WebKit

---

## ☕ Coffee Shop Testing

Website: https://seleniumbase.io/coffee/

### Test Cases

| Test Case  | รายละเอียด                                         | Result   |
| ---------- | -------------------------------------------------- | -------- |
| Coffee_001 | Buy Cafe Latte 1 unit → Total $16.00               | ✅ Passed |
| Coffee_002 | Buy Mocha + Flat White + Cappuccino → Total $45.00 | ✅ Passed |
| Coffee_003 | Buy Americano 2 units → Total $14.00               | ✅ Passed |

**Result: 9/9 Tests Passed**
ทดสอบบน Chromium, Firefox และ WebKit

---

## 🧪 Test Result

```text
SauceDemo   : 9/9 Passed ✅
Coffee Shop : 9/9 Passed ✅
Total       : 18/18 Passed ✅
```

## 🛠️ Tools

* Playwright
* TypeScript
* Node.js
* Git / GitHub
* Chromium / Firefox / WebKit

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run SauceDemo:

```bash
npx playwright test tests/checkout.spec.ts
```

Run Coffee Shop:

```bash
npx playwright test tests/coffee-shop.spec.ts
```

View HTML Report:

```bash
npx playwright show-report
```
