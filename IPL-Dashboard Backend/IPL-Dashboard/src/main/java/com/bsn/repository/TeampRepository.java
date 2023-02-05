package com.bsn.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bsn.model.Team;

@Repository
public interface TeampRepository extends CrudRepository<Team, Integer> {
	
	Team findByTeamName(String name);
}
