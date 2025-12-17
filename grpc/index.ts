
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { type ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import type { ProtoGrpcType } from './generated/a';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition)) as unknown as ProtoGrpcType;

const PERSONS = [
    {
        name: "harkirat",
        age: 45
    },
    {
      name: "raman",
      age: 45
    },
];

//@ts-ignore
function addPerson(call, callback) {
  console.log(call)
    let person = {
      name: call.request.name,
      age: call.request.age
    }
    PERSONS.push(person);
    callback(null, person)
}

function getPersonByName(call:any, callback:any){
    let name = call.request.name;
    let person = PERSONS.find(x=> x.name === name);
    callback(null, person);
}

const server = new grpc.Server();

server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson, getPersonByName:getPersonByName });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});