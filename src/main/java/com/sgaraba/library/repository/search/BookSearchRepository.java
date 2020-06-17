package com.sgaraba.library.repository.search;
import com.sgaraba.library.domain.Book;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Book} entity.
 */
public interface BookSearchRepository extends ElasticsearchRepository<Book, Long> {
}
