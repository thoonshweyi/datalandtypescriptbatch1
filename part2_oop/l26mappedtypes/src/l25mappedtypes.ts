// => Mapped Types 
// => Indexed Access Type

type Student = {
     name: string;
     age: number;
}

type Staff = Student["name"]; // string


// => Index Signature
type People = {
     [k:string] : string;
}

const Employee:People = {
     name: "aye aye",
     gender: "female",
     city: "mandalay"
}

// => Map Type 
// Syntax 
// type MappedType<T> = {
//      [Key in keyof T]: T[Key];
// }

// exe1
type Original = {
     name: string;
     age: number;
}

type Copied = {
     [Key in keyof Original]: Original[Key]
}

// exe 2 (Mapped type to make all properties optional)
type Person = {
     name: string;
     age: number;
}

type Optional<T> = {
     [Pskey in keyof T] ?: T[Pskey];
}

type OptionalPerson = Optional<Person>
// Expected: [name?:string; age?:number]

// exe2  (Make all Readonly Properties)
type ReadonlyType<T> = {
     readonly [Pskey in keyof T] : T[Pskey];
}
type ReadonlyPerson = ReadonlyType<Person>
// Expected: [readonly name:string; readonly age:number]

// 16MP