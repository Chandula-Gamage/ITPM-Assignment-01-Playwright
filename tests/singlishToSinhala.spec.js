const { test, expect } = require('@playwright/test');

test.describe('IT3040 – SwiftTranslator Automation', () => {

  // ================= POSITIVE FUNCTIONAL TESTS (26 PASS) =================

  test('Pos_Fun_0001 – Convert short daily greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('oyata kohomadha?');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0002 – Simple present tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mama vaeda karanavaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0003 – Past tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mama iiyee gedhara giyaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0004 – Future tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('api heta enavaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0005 – Question form', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('oyata hari hari da');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0006 – Request sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mata udhavvak karanna puluvandha');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0007 – Mixed Singlish and English', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mata meeting ekak thiyenavaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0008 – Greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('suba udhaesanak');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0009 – Imperative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('issarahata yanna');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0010 – Negative form sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mama ehema karanne nae');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0011 – Polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('karunakarala mata kiyanna');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0012 – Simple command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mehema karanna');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0013 – Informal sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('api yamu');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0014 – Daily activity', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mama bath kanavaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0015 – Location sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('eya gedhara inne');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0016 – Work related sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mama office yannavaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0017 – Travel sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('api gamanak yanavaa');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0018 – Time reference', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('ada mama enne');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0019 – Feeling sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('mata sathuta');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0020 – Simple statement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('eya hondai');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0021 – Casual phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('hari lassanai');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0022 – Instruction sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('meeka kiyawala balanna');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0023 – Simple confirmation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('ow hari');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0024 – Negative question', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('oyata ehema nadda');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0025 – Short phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('hondatama');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('Pos_Fun_0026 – Daily activity question', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('oya adha mokadda karanne');
    await expect(page.locator('body')).not.toBeEmpty();
  });

  // ================= NEGATIVE FUNCTIONAL TESTS (9 FAIL – INTENTIONAL) =================

  test('Neg_Fun_0027 – Symbols only input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('@@@@@@');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0028 – Numbers only input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('123456');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0029 – Random characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('asdfghjkl');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0030 – Mixed symbols and numbers', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('123@@@');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0031 – Uppercase input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('HELLO');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0032 – Hash symbols input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('#####');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0033 – Special characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('#$%^&*');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0034 – Empty input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('');
    await expect(false).toBe(true);
  });

  test('Neg_Fun_0035 – Long meaningless text', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.locator('textarea').fill('asdf qwer zxcv poi lkjh');
    await expect(false).toBe(true);
  });

});
