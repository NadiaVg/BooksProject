package com.book.app.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.book.app.entity.model.Book;

public interface IBookDao extends CrudRepository<Book, Long>{

	
}
