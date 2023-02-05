package com.bsn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bsn.model.Match;
import com.bsn.model.Team;
import com.bsn.service.MatchService;
import com.bsn.service.TeamService;

@RestController
@CrossOrigin
public class TeamController {
	
	@Autowired
	private TeamService teamService;
	
	@Autowired
	private MatchService matchService;
	
	@RequestMapping("/teams")
	public Iterable<Team> teams() {
		return teamService.getAllTeams();
	}
	
	@RequestMapping("/teams/{name}")
	public Team team(@PathVariable String name) {
		return teamService.getTeamByName(name);
	}
	
	@RequestMapping("/teams/{name}/matches")
	public List<Match> getMatchesByTeamBetweenDates(@PathVariable String name, @RequestParam Integer year) {
		return matchService.getMatchesByTeamBetweenDates(name, year);
	}
	
}
