package com.mycompany.myapp.domain;

import java.io.Serializable;
import javax.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A Trip.
 */
@Entity
@Table(name = "trip")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Trip implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "destination")
    private String destination;

    @Column(name = "min_travelers_number")
    private Integer minTravelersNumber;

    @Column(name = "max_travelers_number")
    private Integer maxTravelersNumber;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Trip id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDestination() {
        return this.destination;
    }

    public Trip destination(String destination) {
        this.setDestination(destination);
        return this;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Integer getMinTravelersNumber() {
        return this.minTravelersNumber;
    }

    public Trip minTravelersNumber(Integer minTravelersNumber) {
        this.setMinTravelersNumber(minTravelersNumber);
        return this;
    }

    public void setMinTravelersNumber(Integer minTravelersNumber) {
        this.minTravelersNumber = minTravelersNumber;
    }

    public Integer getMaxTravelersNumber() {
        return this.maxTravelersNumber;
    }

    public Trip maxTravelersNumber(Integer maxTravelersNumber) {
        this.setMaxTravelersNumber(maxTravelersNumber);
        return this;
    }

    public void setMaxTravelersNumber(Integer maxTravelersNumber) {
        this.maxTravelersNumber = maxTravelersNumber;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Trip)) {
            return false;
        }
        return id != null && id.equals(((Trip) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Trip{" +
            "id=" + getId() +
            ", destination='" + getDestination() + "'" +
            ", minTravelersNumber=" + getMinTravelersNumber() +
            ", maxTravelersNumber=" + getMaxTravelersNumber() +
            "}";
    }
}
