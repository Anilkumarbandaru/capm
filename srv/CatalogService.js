module.exports = cds.service.impl(async function () {

    const { POs } = this.entities

    this.on('boost', async (req) => {
        console.log("Boosted");
        // return {
        //     "NODE_KEY":"DUMMY"
        // }

        try {

            const ID = req.params[0];
            // Start a db transaction
            const tx = cds.tx(req);
            // CDS Query Language - Communicate to DB in Agnostic Manner (Never writing regular sql statements)
            await tx.update(POs).with({
                GROSS_AMOUNT: { '+=': 20000 }
            }).where(ID);
        } catch (error) {
            return "Error" + error.toString();
        }
    });

    this.on('largestOrder', async (req) => {
        console.log("Largest Order amoung all POs");
        // return {
        //     "NODE_KEY":"DUMMY"
        // }

        try {

            // return {
            //     "NODE_KEY": "Largest Order",
            //     "GROSS_AMOUNT":99999.54
            // }

             // Start a db transaction
             const tx = cds.tx(req);
             //Read the PO with highest gross amount
             // Read orders desc by gross amount and get first recordd

             const recordData = tx.read(POs).orderBy({
                GROSS_AMOUNT: 'desc'
             }).limit(1)

             return recordData;
            
        } catch (error) {
            return "Error" + error.toString();
        }
    })
})