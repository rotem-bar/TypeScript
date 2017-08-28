/// <reference path='fourslash.ts' />

// Don't try to propagate property accessed variables back,
// or emit spurious returns when the value is clearly ignored

//// function fn() {
////     const x = { m: 1 };
////     /*a*/x.m = 3/*b*/;
//// }

goTo.select('a', 'b')
edit.applyRefactor({
    refactorName: "Extract Method",
    actionName: "scope_1",
    actionDescription: "Extract function into global scope",
});
verify.currentFileContentIs(`function fn() {
    const x = { m: 1 };
    newFunction(x);
}
function newFunction(x: { m: number; }) {
    x.m = 3;
}
`);
