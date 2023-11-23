import { useRef, useState, useEffect } from "react";

function App(props) {
  const studentName = useRef(null);
  const grade = useRef(null);

  // State to hold the form data
  const [forms, setForms] = useState([]);

  const handleChange = () => {
    setForms([...forms, {'name': studentName.current.value, 'grade': grade.current.value}]);
    studentName.current.value = '';
    grade.current.value = '';
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleChange();
    console.log(`kjn`);
  }

  const displayList = () => {
    return forms.map((row, index) => (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.grade}</td>
      </tr>
    ));
  }

  // const [tableData, setTableData] = useState(forms);

  // useEffect(() => {
  //   setTableData(displayList());
  // }, [forms])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // value={forms.name}
          // name="name"
          ref={studentName}
          placeholder="Name"
        />
        <input
          type="number"
          // value={forms.grade}
          // name="grade"
          ref={grade}
          placeholder="Grade"
        />
        <input type="submit" value="Submit Form" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {displayList()}
        </tbody>
      </table>
    </div>
  )
}

export default App;
