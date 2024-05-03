package com.jtechy.graphs;

import com.jtechy.graphs.model.Country;
import com.jtechy.graphs.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController
public class FrontController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/index")
    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);
        return "index";
    }

    @GetMapping("/default")
    public String getDefault(Model model) {

        return "default";
    }

    @GetMapping("/getCountries")
    public List<Country> getCountries() {
        return countryService.getCountries();
    }

    @GetMapping("/saveCountry")
    public void saveCountry(@RequestParam Integer id, @RequestParam String name) {
        Country country = new Country(id, name);
        countryService.saveCountry(country);
    }

}