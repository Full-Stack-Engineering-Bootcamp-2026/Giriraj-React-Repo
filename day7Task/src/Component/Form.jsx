import React,{useState} from "react";
const Form=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:""
    });
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({
            ...formData,[name]:value
        });
    };
    const validate=()=>{
        let newErrors={};
        if(!formData.name.trim()){
            newErrors.name="Name is required";
        }
        if(!formData.email.trim()){
            newErrors.email="Email is required";
        }
        return newErrors;
    };
    const handleSubmit=(e)=>{
        e.preventFefault();
        const validationErrors=validate();
        if(Object.keys(validationErrors).length>0)
        {
            setErrors(validationErrors);
        }
        else{
            setErrors({});
            console.log("Form Data:",formData);
            setFormData({
                name:"",
                email:""
            });
        }
    };
    return(
        <div style={{padding:"20px"}}>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label><br/>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        </div>
        <div>
            <label>Email:</label><br/>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        </div>
       <button type="submit" style={{marginTop:"10px"}}>Submit</button>
        </form>
        </div>
    );
};
export default Form;