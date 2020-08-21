type transaction={
    desc:string,
    amount:string,
}

type context={
    transactions:transaction[],
    dispatch:any,
}

type action={
    data:transaction,
    type:string,
    delIndex:int,
}