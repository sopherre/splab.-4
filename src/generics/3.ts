/**
 * クラスの型定義
 * classのジェネリクス利用
 */

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;

  constructor(private readonly _name: string) {}

  get name() {
    console.log(`my name is ${this._name}`);
    return this._name;
  }
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createAnimalInstance<A extends Animal>(c: new (name: string) => A): A {
  return new c("animal");
}

createAnimalInstance(Lion).keeper.nametag;
createAnimalInstance(Lion).name;
createAnimalInstance(Bee).keeper.hasMask;
