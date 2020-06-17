package com.sgaraba.library.repository.search;
import com.sgaraba.library.domain.Author;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Author} entity.
 */
public interface AuthorSearchRepository extends ElasticsearchRepository<Author, Long> {
}
