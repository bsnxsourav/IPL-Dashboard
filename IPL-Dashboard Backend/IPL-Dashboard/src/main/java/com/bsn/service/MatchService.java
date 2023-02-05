package com.bsn.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.bsn.model.Match;
import com.bsn.repository.MatchRepository;

@Service
public class MatchService {
	
	@Autowired
	private MatchRepository matchRepository;
	
	public Optional<Match> test(Long id) {
		return matchRepository.findById(id);
	}
		
//	public Map<Integer, List<Match>> getAllMatchesByTeamName(String name) {
//		Map<Integer, List<Match>> matchesByYear = new HashMap<>();
//		Consumer<Match> processMatch = new Consumer<Match>() {
//			@Override
//			public void accept(Match t) {
//				Integer year = t.getDate().getYear();
//				if (matchesByYear.containsKey(year)) {
//					matchesByYear.get(year).add(t);
//				} else {
//					matchesByYear.put(year, new ArrayList<>());
//					matchesByYear.get(year).add(t);
//				}
//			}
//		};
//		
//		matchRepository.getByTeam1OrTeam2(name, name).forEach(processMatch);
//		return matchesByYear;
//	}
	
	public List<Match> getLastFourMatches(String teamName) {
		return matchRepository.getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, 4));
	}
	
    public List<Match> getMatchesByTeamBetweenDates(String teamName, Integer year) {
    	LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
        return this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }
}
