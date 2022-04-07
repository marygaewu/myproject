//mjs file
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);



const NETWORK = process.env["REACH_CONNECTOR_MODE"];

const getAddress = acc => NETWORK.includes("ALGO") 
  ? acc.networkAccount.addr
  : acc.networkAccount.address;

  const view = async (f, ...args) => {
    const result = await f(...args)
    return result[0] === "Some" ? result[1] : null;
  } 
  
  const fmtDetails = async (views) => {
    const name = await view(views.name);
    const owner =  await view(views.owner);
    // const DOB =  await view(views.DOB);
    // const certificates = await view(views.certificate)
    // const isAvailable = await view(views.isAvailable);
  
  
    return `Details:\n\tStudent Name: ${name}\n\t` +
    `Owner: ${owner} (${findKey(addresses, owner)})\n\t` 
    // `Student DOB: ${DOB} \n\t` + 
    // `certificates: ${addresses, certificates}\n\t `
    // `Is Available: ${isAvailable}`
  }



  let addresses = {};


const startingBalance = stdlib.parseCurrency(100);
const [ accAdmin, accAdminAPI, accStudent1, student2, student3, organization1, organization2 ] =
    await stdlib.newTestAccounts(5, startingBalance);


const ctcAdmin = accAdmin.contract(backend);
const ctcStudent1 = accStudent1.contract(backend);
const ctcAdminAPI= accAdminAPI.contract(backend, ctcAdmin.getInfo());







const runUsers = async () => {
  
  try { 
    //const register = await ctcStudent1.apis.Admin.register(getAddress(ctcStudent1));
    const result = await ctcAdminAPI.apis.Admin.addStudent(getAddress(ctcStudent1));
    console.log("Call succeed, result:", result);
   // console.log("Call succeed, result:", register);
    console.log(getAddress());
   
  }
   catch (e) {
    console.error("Error while calling AdminAPI.addstudent", e);
    process.exit(-1);
   }
  
}



await Promise.all([
  backend.Admin(ctcAdmin, {
    allowUsers: () => {
      console.log("The admin adds student");
    },
    confirmDeploy: async () => {
      //testing the API
      await runUsers();
    }
  }),
]);

main().then(() => {
console.log("Goodbye, Alice and Bob!");
process.exit(0);
}).catch((e) => {
console.log("Error:", e);
process.exit(-1);
});