package com.travel.service.config;

import java.util.Map;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Configuration
public class JerseyServlet extends ResourceConfig{

	@Resource
	private ApplicationContext context;

	@PostConstruct
	public void postConstruct() {
		for (final Map.Entry<String, Object> entry : context.getBeansWithAnnotation(Service.class)
				.entrySet()) {
			register(entry.getValue());
		}
	}
}
