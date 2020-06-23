class salesemployee extends employee
{
    private department:string;
    constructor(name:string,code:number,department:string)
    {
        super(code,name);
        this.department=department;
    }
}

let semp=new salesemployee("sivant",4,"sales");
