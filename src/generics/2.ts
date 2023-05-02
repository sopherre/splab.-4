/**
 * オブジェクトのジェネリクス利用
 */

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: "4" };

/**
 * aでアクセスすると number
 * dでアクセスすると string
 */
const property1 = getProperty(x, "a");

/**
 * ジェネリクスで型定義しておけば、
 * 利用するさいに型制限を改めてすることができる
 */

interface LimitType {
  a: string;
}

const property2 = getProperty<typeof x, keyof LimitType>(x, "a");
// getProperty(x, "m"); // error
