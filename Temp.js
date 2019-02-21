var arr=[
{
    "day":"Monday",
    "Temperature":16
},
{
    "day":"Tuesday",
    "Temperature":14
},
{
    "day":"Wednesday",
    "Temperature":20
},
{
    "day":"Thursday",
    "Temperature":18
},
{
    "day":"Friday",
    "Temperature":11
},
{
    "day":"Saturday",
    "Temperature":9
}];
function insert(arr1)
{
    arr.push(arr1);
    console.log("Value has been inserted");
}

function get_min()
{
    var a=arr[0].Temperature;
    for(let i=0;i<arr.length;i++)
    {
     if(arr[i].Temperature<a)
     {
         a=arr[i].Temperature;
     }
    }
    return a;
}

function get_max()
{
    var b=arr[0].Temperature;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].Temperature>b)
        {
            b=arr[i].Temperature;
        }
    }
    return b;
}

function mean()
{
    var sum=0;
    var average;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i].Temperature;
    }
    average=sum/arr.length;
    return average;
}

function mode()
{
    var maxValue = 0;
    var maxCount = 0;
    for (let i = 0; i < arr.length; i++) 
        {
            var count = 0;
            for (let j = 0; j < arr.length; j++) 
            {
                if (arr[j].Temperature == arr[i].Temperature)
                    ++count;
            }
            if (count > maxCount) 
            {
                maxCount = count;
                maxValue = arr[i].Temperature;
            }
        }
 
        return maxValue;
}
insert({"day":"Sunday","Temperature":25});
var min=get_min();
console.log(min);
var max=get_max();
console.log(max);
var frequency=mode();
console.log(frequency);

