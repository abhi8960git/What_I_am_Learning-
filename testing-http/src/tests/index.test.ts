import { app } from "../index";
import { describe,it, expect,test } from "@jest/globals";
import request from "supertest";


describe("POST /sum", ()=>{
    it("describes sum of all numbers", async()=>{
          const res = await request(app).post("/sum").send({
            a:1, b:8
          });
          expect(res.statusCode).toBe(200);
          expect(res.body.ans).toBe(9);
    })
})