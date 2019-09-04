import { Plc } from './plc';


export class AppConstants{
    public url: string = 'http://localhost:8080/iLogger_war';

    public plc1: Plc = {
        ip:"192.168.0.100",
        slot:"0"
    };

    

}