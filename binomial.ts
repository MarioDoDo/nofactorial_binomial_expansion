const x = 2;
const y = 3;
const n = 4;

const binominal = (x: number, y: number, n: number): number => {
  console.time("binominal");
  let res = 0;
  for (let k = 0; k <= n; k++) {
    let step = 1;
    for (let a = 0; a < k; a++) {
      step *= (n - a) / (k - a);
    }
    step *= x ** (n - k) * y ** k;
    res += step;
  }
  return res;
};

const binominalString = (x: number, y: number, n: number): string => {
  console.time("binominalString");
  let res = "";
  for (let k = 0; k <= n; k++) {
    let coef = 1;
    for (let a = 0; a < k; a++) {
      coef *= (n - a) / (k - a);
    }
    res += `${coef !== (1 || 0) ? coef : ""}${
      n - k < 2 ? (n - k === 1 ? "x " : "") : "x^" + (n - k)
    }${
      k !== 0
        ? k === 1
          ? n - k !== 0
            ? "* y"
            : " y"
          : n - k !== 0
          ? "* y^" + k
          : "y^" + k
        : ""
    } ${n !== k ? "+" : ""} `;
  }
  return res;
};

console.log(binominal(x, y, n));
console.log(binominalString(x, y, n));

const benchmark = () => {
  for (let i = 0; i < 10; i++) {
    console.time("1n");
    binominal(x, y, 1);
    console.timeEnd("1n");

    console.time("10n");
    binominal(x, y, 10);
    console.timeEnd("10n");

    console.time("100n");
    binominal(x, y, 100);
    console.timeEnd("100n");

    console.time("1000n");
    binominal(x, y, 1000);
    console.timeEnd("1000n");

    console.time("1s");
    binominalString(x, y, 1);
    console.timeEnd("1s");

    console.time("10s");
    binominalString(x, y, 10);
    console.timeEnd("10s");

    console.time("100s");
    binominalString(x, y, 100);
    console.timeEnd("100s");

    console.time("1000s");
    binominalString(x, y, 1000);
    console.timeEnd("1000s");

    console.time("1000000s");
    binominalString(x, y, 100000);
    console.timeEnd("1000000s");
  }
};
