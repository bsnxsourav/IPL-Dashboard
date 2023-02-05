package com.bsn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bsn.model.Match;
import com.bsn.service.MatchService;

@RestController
@CrossOrigin
public class MatchController {
	
	@Autowired
	private MatchService matchService;
	
	@RequestMapping("/match/{id}")
	public Match getMatch(@PathVariable Long id) {
		return matchService.test(id).get();
	}
}
