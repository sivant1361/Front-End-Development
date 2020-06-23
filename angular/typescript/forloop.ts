let arr=[10,20,30,40];

for(var val of arr)
{
    val=val+10;
    console.log(val);
}

for(var val of arr)
{
    console.log(val);
}

for(var va in arr)
{
    console.log(va);
}