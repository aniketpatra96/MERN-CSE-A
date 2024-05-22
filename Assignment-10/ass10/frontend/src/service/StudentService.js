import axios from "axios";

class StudentService {
  constructor() {
    this.api = import.meta.env.VITE_URL;
  }
  async getStudentDetails() {
    try {
      const res = await axios.get(`${this.api}/allstudentinfos/`);
      return { status: true, data: res.data };
    } catch (error) {
      return { status: false, data: error };
    }
  }
  async addStudentDetails(studentDetails) {
    try {
      const res = await axios.post(
        `${this.api}/allstudentinfos/`,
        studentDetails,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return { status: true, data: res.data };
    } catch (error) {
      console.error(error?.response?.data?.message);
      return { status: false, data: error };
    }
  }
  async getStudentDetailsByRoll(rollNo) {
    rollNo = parseInt(rollNo.value);
    try {
      const res = await axios.get(
        `http://localhost:5000/allstudentinfos/${rollNo}`
      );
      if (
        res.data.studentInfo.length > 0 &&
        res.data.studentAcademicInfo.length > 0
      ) {
        return { status: true, data: res.data };
      } else {
        return { status: false, data: "Student Data Not Availaible!!" };
      }
    } catch (error) {
      return { status: false, data: error };
    }
  }
  async updateStudentDetailsByRoll(StudentDetails, rollNo) {
    rollNo = parseInt(rollNo);
    try {
      const res = await axios.put(
        `http://localhost:5000/allstudentinfos/${rollNo}`,
        StudentDetails,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return { status: true, data: res.data };
    } catch (error) {
      return { status: false, data: error };
    }
  }
  async deleteStudentDetailsByRoll(rollNo) {
    rollNo = parseInt(rollNo.value);
    try {
      const res = await axios.delete(
        `http://localhost:5000/allstudentinfos/${rollNo}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return { status: true, data: res.data };
    } catch (error) {
      return { status: false, data: error };
    }
  }
}

const studentService = new StudentService();
export default studentService;
