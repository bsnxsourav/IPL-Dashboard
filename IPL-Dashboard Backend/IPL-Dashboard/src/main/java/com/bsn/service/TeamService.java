package com.bsn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsn.model.Team;
import com.bsn.repository.TeampRepository;

@Service
public class TeamService {
	
	@Autowired
	private TeampRepository teampRepository;
	
	@Autowired
	private MatchService matchService;
	
	public Iterable<Team> getAllTeams() {
		return teampRepository.findAll();
	}
	
	public Team getTeamByName(String name) {
		Team team = teampRepository.findByTeamName(name);
		team.setLastFourMatches(matchService.getLastFourMatches(name));	
		return team;
	}	
}
