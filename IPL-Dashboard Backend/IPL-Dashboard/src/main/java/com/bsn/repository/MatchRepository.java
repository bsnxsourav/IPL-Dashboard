package com.bsn.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bsn.model.Match;

@Repository
public interface MatchRepository extends CrudRepository<Match, Long> {
	
	List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);
	List<Match> getByTeam1OrTeam2(String teamName1, String teamName2);
	
	@Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
    List<Match> getMatchesByTeamBetweenDates(
        @Param("teamName") String teamName, 
        @Param("dateStart") LocalDate dateStart, 
        @Param("dateEnd") LocalDate dateEnd
    );
	
//	@Query("SELECT m FROM Match m WHERE m.team1 = :teamName OR m.team2 = :teamName ORDER BY m.date DESC")
//	List<Match> findRecentFourMatches(@Param("teamName") String teamName, Pageable pageable);
}
