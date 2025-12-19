import { describe, expect, test } from "@jest/globals";
import { sum } from "../index";

describe("Testing Sum Function", ()=>{
    it(" should addes 1 + 3 = 4", ()=>{
        expect(sum(1,2)).toBe(3);
    })
})