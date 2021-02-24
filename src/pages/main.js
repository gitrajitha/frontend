
import React, {  useState } from 'react';



function MainPage(props) {
    const [employees, setemployees] = useState([]);
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [organization, setorganization] = useState("");
    const [designation, setdesignation] = useState("");
    const [salary, setsalary] = useState("");
    const [status, setstatus] = useState("");

    const onSubmit=async()=>{
        const response=await fetch("http://13.90.37.56:5000/api/v1/employee",{
            method: "GET",
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        const employeeData=await response.json();
      setemployees(employeeData); 
  }


  const onDelete=async(id)=>{
    const response1=await fetch("http://13.90.37.56:5000/api/v1/employee/"+id,{
        method: "DELETE",
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }})
    const response=await fetch("http://13.90.37.56:5000/api/v1/employee",{
            method: "GET",
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
    const employeeData=await response.json();
  setemployees(employeeData); 
console.log(id);
}

  const  onFormSubmit=async()=>{
    let userData={
        first_name:fname,
        last_name:lname,
        email: email,
        phone: phone,
        organization:organization,
        designation: designation,
        salary: salary,
        status: status
    }
    
    const response=await fetch("http://40.76.54.249:5000/api/v1/employee1", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(userData)
    })
    if(response.status==201||response.status==200){
        onSubmit();
    }
    else{
      alert("user not created")
    }

  }
   
    return (
       

     
        <div>
            <h1 class="text-success">Employee Register Details.</h1>
            <div class="text-right">
            <button class="btn btn-primary" onClick={onSubmit}>View Employee</button> 
            </div>
          
           <br>
                </br> <br>
                </br> <br>
                </br>
           <table class="table">
            <thead>
                <tr>
                    
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Oraganization</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Delete</th>
                </tr>
         </thead>
            <tbody>
                {
                    employees.map(({id,first_name,last_name,email,phone,organization,designation,salary})=>
                    <tr key={id}>
                        
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>                                     
                        <td>{phone}</td>
                        <td>{organization}</td>
                        <td>{designation}</td>         
                        <td>{salary}</td>       
                        <td><button onClick={()=>onDelete(id)} class="btn btn-danger">DELETE</button></td>                           
                    </tr>
                    )
                }        
            </tbody>
            </table>
            <br></br><br></br><br></br><br></br><br></br>
            <h3 class="text-warning">Add Employee.</h3>
                
                <div className="card w-50 mx-auto text-left">
                    <form>
                        <div class="form-group">
                        <label for="fname">First Name:</label>
                        {/* <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"></input> */}
                        <input type="text" class="form-control" placeholder="Enter First Name" value={fname} onChange={(e)=>{setfname(e.target.value)}} autoComplete="fname" />
                        </div>

                        <div class="form-group">
                        <label for="lname">Last Name:</label>
                        {/* <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input> */}
                        <input type="text" class="form-control" placeholder="Enter Last Name" value={lname} onChange={(e)=>{setlname(e.target.value)}} autoComplete="lname" />

                        </div>

                        <div class="form-group">
                        <label for="email">Email:</label>
                        {/* <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email"></input> */}
                        <input type="email" class="form-control" placeholder="Enter Email" value={email} onChange={(e)=>{setemail(e.target.value)}} autoComplete="email" />

                        </div>

                        <div class="form-group">
                        <label for="phone">Phone No:</label>
                        {/* <input type="text" class="form-control" id="phone" placeholder="Enter Phone No" name="phone"></input> */}
                        <input type="text" class="form-control" placeholder="Phone No" value={phone} onChange={(e)=>{setphone(e.target.value)}} autoComplete="phone" />

                        </div>

                        <div class="form-group">
                        <label for="org">Organization:</label>
                        {/* <input type="text" class="form-control" id="org" placeholder="Enter Organization Name" name="org"></input> */}
                        <input type="text" class="form-control" placeholder="Enter Organization" value={organization} onChange={(e)=>{setorganization(e.target.value)}} autoComplete="organization" />

                        </div>

                        <div class="form-group">
                        <label for="des">Designation:</label>
                        {/* <input type="text" class="form-control" id="des" placeholder="Enter Designation Name" name="des"></input> */}
                        <input type="text" class="form-control" placeholder="Enter Designation" value={designation} onChange={(e)=>{setdesignation(e.target.value)}} autoComplete="designation" />

                        </div>

                        <div class="form-group">
                        <label for="sal">Salary:</label>
                        {/* <input type="text" class="form-control" id="sal" placeholder="Enter Salary" name="sal"></input> */}
                        <input type="text" class="form-control" placeholder="Enter salary" value={salary} onChange={(e)=>{setsalary(e.target.value)}} autoComplete="fname" />

                        </div>

                        <div class="form-group">
                        <label for="status">Status:</label>
                        {/* <input type="text" class="form-control" id="status" placeholder="Enter status" name="status"></input> */}
                        <input type="text" class="form-control" placeholder="Enter Status" value={status} onChange={(e)=>{setstatus(e.target.value)}} autoComplete="fname" />

                        </div>
                        <div  className="card w-50 mx-auto">
                            <button onClick={onFormSubmit} class="btn btn-success btn-lg " type="submit">Submit</button>
                        </div>
                        
                    </form>

                </div>

                <br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br>
    

        </div>
        
    );

}



export default MainPage;