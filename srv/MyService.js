const cds = require('@sap/cds');
const { employees } = cds.entities("anil.db.master");

module.exports = (srv) => {
    srv.on('panther', req => `Hello ${req.data.name}`);


    // Example for hardcoded data Handling
    
     srv.on('READ','ReadEmployeeSrv', async(req) => {
    //     return {
    //         "ID":"2232-1235",
    //         "nameFirst": "Jack"
    //     }
    // 

    // Calling Database and adding Extrta Logic

    const tx = await cds.tx(req);

   // Example 2: Read and manipulate data
        // var returndata = [];
        // var results = await tx.run(SELECT.from(employees).limit(5));
        // for (let i = 0; i < results.length; i++) {
        //     const element = results[i];
            
        //     element.nameMiddle = 'Kumar'
        //     returndata.push(element);
        // }
        // return returndata;

        ///Example 3: working with conditions
        var whereCondition = req.data;
        if(whereCondition.hasOwnProperty("ID")){
            return await tx.run(SELECT.from(employees).where(whereCondition));
        }else{
            return await tx.run(SELECT.from(employees).limit(2).where({
                "sex": 'F'
            }));
        }

        

    })
}