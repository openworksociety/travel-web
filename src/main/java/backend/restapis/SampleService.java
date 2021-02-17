package backend.restapis;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("sampleservice1")
public class SampleService {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        return "this is sample service 1!";
    }
}
