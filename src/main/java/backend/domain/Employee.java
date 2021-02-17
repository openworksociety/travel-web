package backend.domain;
import backend.annotations.PrimaryKey;
import lombok.Data;
import lombok.ToString;

@Data @ToString
public class Employee implements InterfaceDomain {

    private String name;
    @PrimaryKey
    private int id;
    private String department;
}
