using { anil.db.master, anil.db.transaction } from '../db/data-model';

service CatalogService @(path:'CatalogService'){

    entity BusinessPartnerSet as projection on master.businesspartner;
    entity AddressSet as projection on master.address;
    entity EmploeeSet as projection on master.employees;
    entity ProductSet as projection on master.product;
    entity POs as projection on transaction.purchaseorder;
    entity POItems as projection on transaction.poitems;
}
