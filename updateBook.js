init.view.updateBook = {
    setupUI: function () {
      const formElement = document.forms['Book'];
      const saveBtn = formElement.commit;
      const selectBookElement = formElement.selectBook;
  
      const books = Book.loadAll();
  
      const keys = Object.keys(books);
  
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
  
        const book = books[key];
  
        const optionElement = document.createElement('option');
        optionElement.text = book.title;
        optionElement.value = book.isbn;
        selectBookElement.add(optionElement, null);
      }
  
      selectBookElement.addEventListener('change', function () {
        const key = selectBookElement.value;
  
        if (key) {
          const book = books[key];
          formElement.isbn.value = book.isbn;
          formElement.title.value = book.title;
          formElement.year.value = book.year;
          formElement.Author.value = book.Author;
        } else {
          formElement.reset();
        }
      });
  
      saveBtn.addEventListener('click', init.view.updateBook.handleUpdateButtonClick);
    },
  
    handleUpdateButtonClick: function () {
      const formElement = document.forms['Book'];
  
      const book = {
        title: formElement.title.value,
        year: formElement.year.value,
             };
  
      Book.update(formElement.isbn.value, book);
      formElement.reset();
    },
  };