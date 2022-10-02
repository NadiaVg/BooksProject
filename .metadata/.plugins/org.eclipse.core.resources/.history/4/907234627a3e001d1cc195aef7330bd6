package com.book.app.entity.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.app.entity.dao.IBookDao;
import com.book.app.entity.model.Book;

@Service
public class BookService implements IBookService{
	@Autowired
	private IBookDao bookDao;

	@Override
	public List<Book> getAll() {
		return (List<Book>) bookDao.findAll();
	}

	@Override
	public Book get(long idbook) {
		
		return bookDao.findById(idbook).get();
		
	}

	@Override
	public void post(Book book) {
		bookDao.save(book);
		
	}

	@Override
	public void put(Book book, long idbook) {
		bookDao.findById(idbook).ifPresent((x)->{
			book.setIdbook(idbook);
			bookDao.save(book);
		});
		
	}

	@Override
	public void delete(long idbook) {
		bookDao.deleteById(idbook);
		
	}


	


}
