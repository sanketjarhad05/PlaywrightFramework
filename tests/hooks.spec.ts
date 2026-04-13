import{test} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("beforeAll");
})

test.beforeEach(async()=>{
    console.log("beforeEach");
})

test("Test1", async()=>{
console.log("Test1");

})

test("Test 2", async()=>{
console.log("Test2");

})

test("Test 3", async()=>{
console.log("Test3");

})
test.afterEach(async()=>{
    console.log("afterEach");
})

test.afterAll(async()=>{
    console.log("afterAll");
})
