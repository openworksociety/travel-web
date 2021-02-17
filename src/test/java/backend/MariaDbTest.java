package backend;

import backend.domain.Bus;
import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;
import com.wix.mysql.EmbeddedMysql;
import com.wix.mysql.config.MysqldConfig;
import org.apache.ibatis.mapping.Environment;
import org.apache.ibatis.session.Configuration;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.apache.ibatis.transaction.TransactionFactory;
import org.apache.ibatis.transaction.jdbc.JdbcTransactionFactory;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import backend.domain.Employee;
import backend.mapper.InterfaceEmployeeMapper;
import backend.services.JvmToMysqlDb;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

import static com.wix.mysql.EmbeddedMysql.anEmbeddedMysql;
import static com.wix.mysql.config.MysqldConfig.aMysqldConfig;
import static com.wix.mysql.distribution.Version.v5_7_latest;
import static org.junit.Assert.assertEquals;

public class MariaDbTest {
    EmbeddedMysql mysqld;
    private static final String userName = "test_user", password = "", hostname = "localhost", port = "3306",
            databaseName = "test";

    @Before
    public void before() {
        startDb();
    }

    @After
    public void after() {
        mysqld.stop();// this is extra no required to be called explicitly though
    }

    @Test
    public void test() {

        MysqlDataSource ds = new MysqlDataSource();

        ds.setUrl(String.format("jdbc:mysql://%s:%s/%s", hostname, port, databaseName));
        ds.setUser(userName);
        ds.setPassword(password);

        TransactionFactory transactionFactory = new JdbcTransactionFactory();
        Environment environment = new Environment("development", transactionFactory, ds);
        Configuration configuration = new Configuration(environment);
        configuration.addMapper(backend.domain.Employee.class);

        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(configuration);
        sqlSessionFactory.getConfiguration().addMapper(InterfaceEmployeeMapper.class);

        Employee e = new Employee();
        e.setName("test");
        e.setId(1);
        e.setDepartment("IT");

        List<Employee> employeeList=null;
        try (SqlSession session = sqlSessionFactory.openSession()) {
            InterfaceEmployeeMapper interfaceEmployeeMapper = session.getMapper(InterfaceEmployeeMapper.class);
            interfaceEmployeeMapper.insert(e);
            employeeList= interfaceEmployeeMapper.selectAll();
            employeeList.forEach(System.out::println);
        }


        assert (employeeList!=null);
        assert (employeeList.size()==1);
        assertEquals(e, employeeList.get(0));
    }

    private void startDb() {
        MysqldConfig config = aMysqldConfig(v5_7_latest)
                .withPort(Integer.parseInt(port))
                .withUser(userName, password)
                .build();

        mysqld = anEmbeddedMysql(config)
                .addSchema(databaseName)
                .start();

        Connection conn = null;
        Statement stmt = null;
        try {
            //STEP 2: Register JDBC driver
            Class.forName("com.mysql.jdbc.Driver");

            //STEP 3: Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(String.format("jdbc:mysql://%s:%s/%s", hostname, port, databaseName),
                    userName, password);

            //STEP 4: Execute a query
            System.out.println("Creating statement...");
            stmt = conn.createStatement();
            stmt.execute(JvmToMysqlDb.getDropTableStatement(Employee.class));
            stmt.execute(JvmToMysqlDb.getCreateTableStatement(Employee.class));
            //stmt.execute(JvmToMysqlDb.getCreateTableStatement(Bus.class));
            conn.commit();
            stmt.close();
            conn.close();

        }
        catch (Exception ignored){

        }
        finally {

        }

    }
}
