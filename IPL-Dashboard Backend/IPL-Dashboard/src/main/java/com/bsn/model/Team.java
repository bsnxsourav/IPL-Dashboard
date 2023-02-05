package com.bsn.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "ipl_teams")
public class Team {
	
	@Id
	private Integer id;
	private String teamName;
	private Integer totalMatches;
	private Integer totalWin;
	
	@Transient
	List<Match> lastFourMatches;
	
	public Team() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public Integer getTotalMatches() {
		return totalMatches;
	}

	public void setTotalMatches(Integer totalMatches) {
		this.totalMatches = totalMatches;
	}

	public Integer getTotalWin() {
		return totalWin;
	}

	public void setTotalWin(Integer totalWin) {
		this.totalWin = totalWin;
	}
	
	

	/**
	 * @return the lastFourMatches
	 */
	public List<Match> getLastFourMatches() {
		return lastFourMatches;
	}

	/**
	 * @param lastFourMatches the lastFourMatches to set
	 */
	public void setLastFourMatches(List<Match> lastFourMatches) {
		this.lastFourMatches = lastFourMatches;
	}

	@Override
	public String toString() {
		return "Team [id=" + id + ", teamName=" + teamName + ", totalMatches=" + totalMatches + ", totalWin=" + totalWin
				+ "]";
	}
}
