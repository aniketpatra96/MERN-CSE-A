// 21BCSE30 | ANIKET PATRA

async function addStudent(studentData) {
  try {
    const response = await axios.post(
      "http://localhost:3000/students",
      studentData
    );
    if(response.status === 201){
      alert("Student added successfully!");
    }
  } catch (error) {
    console.error("Error adding student:", error);
  }
}

async function displayStudents() {
  try {
    const response = await axios.get("http://localhost:3000/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
}

async function getStudent(id) {
  try {
    const response = await axios.get(`http://localhost:3000/students/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching student", error);
  }
}

async function updateStudent(id, updatedData) {
  try {
    const response = await axios.put(
      `http://localhost:3000/students/${id}`,
      updatedData
    );
    if (response.status === 200) {
      alert("Student updated successfully!");
    } else {
      throw new Error("Error in updating the Student...");
    }
  } catch (error) {
    console.error("Error updating student:", error);
  }
}

async function deleteStudent(id) {
  try {
    const response = await axios.delete(`http://localhost:3000/students/${id}`);
    alert("Student deleted successfully!");
  } catch (error) {
    console.error("Error deleting student:", error);
  }
}
