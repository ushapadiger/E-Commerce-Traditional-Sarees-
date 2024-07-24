let username=document.querySelector("#name");
let email=document.querySelector("#email");
let phone=document.querySelector('#phone');
let pincode=document.querySelector('#pincode');
let form=document.querySelector('form');
form.addEventListener('submit',event=>
{
    event.preventDefault();
    validate();
});
function validate()
{
    let name_valid=true;
    let pattern=/^[a-zA-Z]+$/;
    let name_value=username.value.trim();
    if(name_value=="")
    {
        setError(username,"name is required");
        name_valid=false;
    }
else if (name_value.length<2)
{
    setError(username,"name should be atleast lentgh 2");
    name_valid=false;
}

else if(!pattern.test(name_value))
    {
        setError(username,"pattern does not matched");
        name_valid=false;
    }
    else{
        setSuccess(username);
        name_valid=true;
    }
    let email_value=email.value.trim();
    let email_valid=true;
    let email_pattern=/^[a-zA-Z]+[0-9]*@gmail.com$/;
    if(email_value==''){
        setError(email,"Email is required");
        email_valid=false;
    }
    else if(!email_pattern.test(email_value)){
        setError(email,"Check your email pattern once");
        email_valid=false;
    }
    else{
        setSuccess(email);
        email_valid=true;
    }
    let phone_value=phone.value.trim();
    let phone_valid=true;
    let phone_pattern=/^[0-9]{10}$/;
    if(phone_value==''){
        setError(phone,"Phone number is required");
        phone_valid=false;
    }
    else if(!phone_pattern.test(phone_value)){
        setError(phone,"Phone number should contain only ten digits only");
        phone_valid=false;
    }
    else{
        setSuccess(phone);
        phone_valid=true;
    }
    let pincode_num=pincode.value.trim();
    let pincode_valid=true;
    let pattern2=/^[1-9]{1}[0-9]{5}$/;
    if(pincode_num==""){
        setError(pincode,"pincode is required");
        pincode_valid=false;
    }
    else if(!pattern2.test(pincode_num)){
        setError(pincode,"Length should be 6");
        pincode_valid=false;
    }
    else{
        setSuccess(pincode);
        pincode_valid=true;
    }
    if(name_valid && email_valid && phone_valid && pincode_valid)  
    {
        const s=Object.getPrototypeOf(form).submit;
        s.call(form);
    }
      
}
function setError(input,msg)
{
    const parent=input.parentElement;
     const small=parent.querySelector('small');
     small.innerText=msg;
     small.style.color="red";
}
function setSuccess(input)
{
    const parent=input.parentElement;
    const small=parent.querySelector('small');
    small.style.visibility="hidden";
}
