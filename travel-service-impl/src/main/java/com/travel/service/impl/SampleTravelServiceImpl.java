package com.travel.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.travel.service.api.SampleTravelService;

@Service
@Transactional
public class SampleTravelServiceImpl implements SampleTravelService {

	@Override
	public String testMsg() {
		return "Helloo, This is sample text message for REST service";
	}

}
