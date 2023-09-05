import { Button, Table } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Employees() {
  const [employees, setEmployees] = useState([])
  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();
 

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      setEmployees(json.data);
    })
  }, []);

  const addEmployee = () => {
    const idRegex = /^[0-9]*$/;
    const nameRegex = /^[a-zA-üõöäÜÕÖÄ  -]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (idRef.current.value === "") {
      toast.error("ID is required, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (idRegex.test(idRef.current.value) === false) {
      toast.error("ID must contain only numbers, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (firstNameRef.current.value === "") {
      toast.error("Name is required, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (!nameRegex.test(firstNameRef.current.value)) {
      toast.error("Name must contain only letters, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (emailRef.current.value === "") {
      toast.error("Email is required, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Invalid email format, can't add!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }
    if (avatarRef.current.value === "") {
      toast.error("Avatar is required, cant add ",{
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return
    }


    const newEmployee = {
      "id": idRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "email": emailRef.current.value,
      "avatar": avatarRef.current.value
    }
    employees.push(newEmployee);
    setEmployees(employees.slice());
    
  }

  const deleteEmployee = (index) => {
    employees.splice(index, 1)
    setEmployees(employees.slice())
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
            <td>{employee.id} </td>
            <td>{employee.first_name} {employee.last_name}</td>
            <td>{employee.email}</td>
            <td><img src={employee.avatar} alt=""/></td>
            <td><button onClick={() => deleteEmployee(index)} type="button" variant="danger">Delete</button></td>
            </tr>
          ))}
        

        <tr className="input-row">
          <td><input ref={idRef} type="text" placeholder="ID" className="form-control"/></td>
          <td><input ref={firstNameRef} type="text" placeholder="First name" className="form-control"/>
              <input ref={lastNameRef} type="text"  placeholder="Last name" className="form-control"/></td>
          <td><input ref={emailRef} type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="text" placeholder="Avatar" className="form-control"/></td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>
      </Table>
      <ToastContainer />
    </div>

  </div>)
}

export default Employees;