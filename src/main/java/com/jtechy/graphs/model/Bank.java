package com.jtechy.graphs.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "bank")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Bank {

    @Id
    private int id;

    private String name;
}
