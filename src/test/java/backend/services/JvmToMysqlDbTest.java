package backend.services;

import backend.domain.Employee;
import org.junit.Test;

import static org.junit.Assert.*;

public class JvmToMysqlDbTest {

    @Test
    public void getCols() {
        String sql=JvmToMysqlDb.getCols(Employee.class);
        assertEquals("name text,\n" +
                " id int,\n" +
                " department text",sql);
    }

    @Test
    public void getDropTableStatement() {
        String sql=JvmToMysqlDb.getDropTableStatement(Employee.class);
        assertEquals("drop table if exists employee",sql);
    }

    @Test
    public void getCreateTableStatement() {
        String sql=JvmToMysqlDb.getCreateTableStatement(Employee.class);
        assertEquals("create table employee(\n" +
                "name text,\n" +
                " id int,\n" +
                " department text,\n" +
                "    PRIMARY KEY(id)\n" +
                "\n" +
                ")",sql);
    }

    @Test
    public void getPrimaryKeyColumns() {
        String sql=JvmToMysqlDb.getPrimaryKeyColumns(Employee.class);
        assertEquals(",\n" +
                "    PRIMARY KEY(id)\n",sql);
    }
}