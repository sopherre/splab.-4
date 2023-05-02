function identity<Type>(arg: Type): Type {
  return arg;
}

interface GenericIdentityFn1 {
  <Type>(arg: Type): Type;
}

const func1: GenericIdentityFn1 = identity;

interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}

const func2: GenericIdentityFn2<Number> = identity;
