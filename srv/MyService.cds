using { anil.cds } from '../db/CDSViews';
using { anil.db.master } from '../db/data-model';


service MyService @(path : 'MyService') {

    function panther(name:String(20)) returns String;
   entity ProductOrdersSet as projection on cds.CDSViews.ProductOrders{
        *,
        PO_ORDERS
    };

    entity ReadEmployeeSrv as projection on master.employees;
}