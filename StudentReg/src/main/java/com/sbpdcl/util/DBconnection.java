package com.sbpdcl.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBconnection {

	static String url = "jdbc:mysql://localhost:3306/apurvadb";
	static String user = "root";
	static String password = "AS139@shreshth";

	public static Connection createConnection() throws SQLException {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Connection connection = DriverManager.getConnection(url, user, password);
		return connection;
	}

}