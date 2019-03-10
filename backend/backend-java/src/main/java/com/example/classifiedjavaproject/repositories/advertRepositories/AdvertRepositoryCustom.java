package com.example.classifiedjavaproject.repositories.advertRepositories;

import com.example.classifiedjavaproject.models.Advert;
import com.example.classifiedjavaproject.projections.EmbedAdvert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = EmbedAdvert.class)
public interface AdvertRepositoryCustom extends JpaRepository<Advert, Long> {
}
