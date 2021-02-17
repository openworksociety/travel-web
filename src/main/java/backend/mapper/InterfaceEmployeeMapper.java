package backend.mapper;
import org.apache.ibatis.annotations.*;
import backend.domain.Employee;

import java.util.List;

public interface InterfaceEmployeeMapper extends InterfaceMyBatisMapper{

    @Select("select * form employee where id = #{id}")
    Employee selectOne(int id);

    @Select("select * from employee")
    List<Employee> selectAll();

/*
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "villageName", column = "name"),
            @Result(property = "district", column = "district")
    })
*/

    @Insert("insert into employee(name,id,department) values (#{name},#{id},#{department})")
    int insert(Employee e);
}
