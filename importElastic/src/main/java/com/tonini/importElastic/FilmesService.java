package com.tonini.importElastic;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/list")
@Produces({ MediaType.APPLICATION_JSON + ";charset=utf-8" })
public class FilmesService {
 
	@GET
	@Path("/filmes")
	public String sayHello() {
		return "Filme 1";
    }
}