using { anildb.master as master, anildb.trans as transcation  } from '../db/demo';


service MyService {

    entity StudentSet as projection on master.student;
    entity StandardSet as projection on master.standards;
    entity BookSet as projection on master.books;
    entity BookRentalSet as projection on transcation.rentals;

}