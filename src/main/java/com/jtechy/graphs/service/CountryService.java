package com.jtechy.graphs.service;

import com.jtechy.graphs.dao.CountryRepository;
import com.jtechy.graphs.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getCountries() {
        List<Country> countryList = new ArrayList<>();
        countryRepository.findAll().forEach(e -> countryList.add(e));
        return countryList;
    }

    public void saveCountry(Country country) {
        countryRepository.save(country);
    }

}
