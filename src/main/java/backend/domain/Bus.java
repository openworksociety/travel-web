package backend.domain;

import backend.annotations.PrimaryKey;
import lombok.Data;
import lombok.ToString;

@Data @ToString
public class Bus implements InterfaceDomain{
    @PrimaryKey
    String busType;
    String busNumber;
    int seatCapacity;
}
