import fakeEmployees from "../mocks/employees";
import Table from "../Table"


export default {title : 'Table test passing props'};


export const standard= ()=> <Table employees={fakeEmployees}/>