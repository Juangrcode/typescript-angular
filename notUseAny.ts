export {};

type SumParameter = string | number;
type SumReturnType = string | number;

function Sum(num1: SumParameter, num2: SumParameter): SumReturnType {
  // return Number(num1) + Number(num2);
  return String(num1) + num2;
}

interface Interface1 {
  prop1: number;
}

interface Interface2 {
  prop2: number;
}

type InterfaceMix = Interface1 | Interface2;

const interfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: 2,
};
