import MyForm from "../components/MyForm";
import { useNavigate, useParams } from "react-router-dom";
import studentService from "../service/StudentService";
import { useEffect, useState } from "react";
import atob from "atob";

const UpdateStudent = () => {
  let { id } = useParams();
  id = atob(id);
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await studentService.getStudentDetailsByRoll({ value: id });
      if(!res.status){
        navigate("/updatestudentdetails");
      }
      const studentInfo = res.data.studentInfo[0];
      const studentAcademicInfo = res.data.studentAcademicInfo[0];
      setData({
        rollno: studentInfo.rollno,
        name: studentInfo.name,
        email: studentInfo.email,
        mobile: studentInfo.mobile,
        city: studentInfo.address.city,
        state: studentInfo.address.state,
        pin: studentInfo.address.pin,
        program: studentAcademicInfo.program,
        branch: studentAcademicInfo.branch,
        cgpa: studentAcademicInfo.cgpa,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (data != null) {
    return <MyForm type="Update" data={data} />;
  }
};

export default UpdateStudent;
