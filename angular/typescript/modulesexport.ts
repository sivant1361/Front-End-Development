export let age:number=20;
export class employee
{
    empcode:number;
    empname:string;

    constructor(name:string,code:number)
    {
        this.empname=name;
        this.empcode=code;
    }

    displayemployee()
    {
        console.log("Employee Code:"+this.empcode+",Employee Name:"+this.empname);
    }
}

let companyname:string="XYZ";