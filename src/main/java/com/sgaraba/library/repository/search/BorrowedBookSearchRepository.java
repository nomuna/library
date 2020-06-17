package com.sgaraba.library.repository.search;
import com.sgaraba.library.domain.BorrowedBook;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link BorrowedBook} entity.
 */
public interface BorrowedBookSearchRepository extends ElasticsearchRepository<BorrowedBook, Long> {
}
