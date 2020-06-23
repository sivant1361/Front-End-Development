class employee1
{
    empcode:number;
    empname:string;

    constructor(code:number,name:string)
    {
        this.empcode=code;
        this.empname=name;
    }

    display=()=>console.log(this.empcode+" "+this.empname);
}

let emp1=new employee1(4,"sivant");
emp1.display();