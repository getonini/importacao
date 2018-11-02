package com.tonini.importElastic;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hw")
@Produces({ MediaType.APPLICATION_JSON + ";charset=utf-8" })
public class HelloWorldService {
 
	@GET
	@Path("/hello")
	public String sayHello() {
		return "Hello World";
    }
}