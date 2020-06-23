class employee
{
    empcode:number;
    empname:string;

    constructor(code:number,name:string)
    {
        this.empcode=code;
        this.empname=name;
    }

    getsalary():number
    {
        return 10000;
    }
}

let emp=new employee(4,"sivant");
let salary=emp.getsalary();
console.log("Name",emp.empname,"\nCode",emp.empcode,"\nSalary=",salary);
