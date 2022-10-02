package com.book.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.book.app.entity.model.Book;




public interface IBookService {

	public List<Book> getAll();
	
	public Book get(long idbook);
	public void post(Book book);
	public void put(Book book, long idbook);
	public void delete(long idbook);
	}


