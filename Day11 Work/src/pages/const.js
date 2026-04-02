const options=[
    {label:"Very tasty",value:"tasty"},
    {label:"Very delicious",value:"delicious"}
]

const myFunction=(options,selected)=>{
    if(!selected)
        return "Nothing selected";

    return selected.label; 
}
myFunction(options,null);
myFunction(options,options[1]);