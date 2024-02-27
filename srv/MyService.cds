using { anil.cds } from '../db/CDSViews';


service MyService @(path : 'MyService') {

    function panther(name:String(20)) returns String;
    entity ProductOrderSet as projection on cds.CDSViews.ProductOrders;

}