type InferFirstArg<T> = T extends (firstArg: infer U) => void
  ? U extends object
    ? U
    : never
  : never;

function runTransaction(transaction: {
    fromTo: [string, string]
}): void {

}

// error, supertype string[] in not assignable to turple [string, string]
// runTransaction(transaction);

const transaction: InferFirstArg<typeof runTransaction> = {
  fromTo: ['1', '2']
}

// now transaction expects an inferred type of runTransaction's first argument
runTransaction(transaction);
