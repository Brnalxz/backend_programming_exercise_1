// BRANDON ALEXANDER JAYADI
// 535230088

for(let x = 2; x <= 1000; x++)
{
    let prima = true;

    for(let z = 2; z * z <= 1000; z++)
    {
        if(x % z === 0)
        {
            prima = false;
            break;
        }
    }

    if(prima){
        console.log(x);
    }

}





