package com.sbpdcl.services;

import com.sbpdcl.bean.Student;
import com.sbpdcl.dao.StudentDAO;

public class StudentService {

	private StudentDAO Dao = new StudentDAO();

	public boolean registerStudent(Student student1) {
		return Dao.registerStudent(student1);
	}

	public boolean loginStudent(String email , String password) {
		return Dao.loginStudent(email, password);
	}
}