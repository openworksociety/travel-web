package backend.domain;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Emp implements InterfacePerson {
    String busNumber, firstName, lastName, type;
}
