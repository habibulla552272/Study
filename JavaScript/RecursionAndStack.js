function pow(x,n){
    let result =1;

    for(let i=0;i<=n;i++){
        result *=x;
        console.log( `${result} and ${x}`);
        
    }
    return result;
}

pow(2,3); 
// answear == 16

function pow2(x,n){
    if(n==1){
        
        return x;
    }else{
        return x * pow2(x,n-1);
        
    }
}

console.log(pow2(2,3));

function pow3(x,n){
    return (n==1) ? x : (x* (pow3(x,n-1)))
}

console.log(pow3(2,3));

let company={
    sales:[{
        name:'john',
        salary:1000
    },
    {
        name:'alice',
        salary:1600
    }
],
development:{

    sites:[{
        name:'peter',
        salary:2000
    },{
        name:'alex',
        salary:1800
    }

    ],
    internals:[
        {
            name:'jack',
            salary:1300
        }
    ]
}

}

function sumSalaries(development){
    if(Array.isArray(development)){
        return development.reduce((prev,curr) => prev+curr.salary,0)

    }else{
        let sum=0;
        for(let subdep of Object.values(development)){
            sum += sumSalaries(subdep)
        }
        return sum;
    }
}

console.log(sumSalaries(company));
