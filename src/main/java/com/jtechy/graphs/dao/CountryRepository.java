package com.jtechy.graphs.dao;


import com.jtechy.graphs.model.Country;
import org.springframework.data.repository.CrudRepository;

public interface CountryRepository extends CrudRepository<Country, Integer> {
}