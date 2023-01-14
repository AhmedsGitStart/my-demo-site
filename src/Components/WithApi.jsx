import './WithApi.css';
import { Form, Button, Table } from "react-bootstrap";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const ContactMeWith = () => {
    const [employeList, setEmployList] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [empId, setEmpId] = useState("");
    const onsubmit = (e) => {
      e.preventDefault();
      if (!isEdit) {
        setEmployList([...employeList, { id: uuid(), name: name, age: age }]);
      } else {
        const updatedList = employeList.map((obj) => {
          if (obj.id === empId) {
            return { id: empId, name: name, age: age };
          } else {
            return obj;
          }
        });
        setEmployList(updatedList);
        setIsEdit(false);
      }
      setName("");
      setAge("");
    };
    const deleteEmp = (id) => {
      const deleteEmp = employeList.filter((item) => item.id !== id);
      setEmployList(deleteEmp);
    };
    const editEmp = ({ id, name, age }) => {
      setName(name);
      setAge(age);
      setIsEdit(true);
      setEmpId(id);
    };
    return (
        <>
        <div className="contactme">
        <center><h1> Contact Me </h1></center>
        <div className="apifetch">
        <div className="form">
        <h1 id='first-head'>Enter Your Detail</h1>
        <Form onSubmit={onsubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isEdit ? "update" : "+ Add"}
          </Button>
        </Form>
      </div> {" "} <br />
      <div className="form">
        <h1>Read Your Details</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th> Name</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {employeList.map((value, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>
                    <Button
                      onClick={() => {
                        editEmp(value);
                      }}
                    >
                      edit
                    </Button>{" "}
                    <Button
                      onClick={() => {
                        deleteEmp(value.id);
                      }}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
        </div>
        </div>
        </>
    )
}