import React, { useState } from 'react'

function Books() {
    const [books, refreshBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick","White Fang","Pooh","Harry Potter and the Sorcerer's Stone"]);

    const reset = () => {
        refreshBooks (["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick","White Fang","Pooh","Harry Potter and the Sorcerer's Stone"]);
    }

    const sortAZ = () => {
        books.sort((a, b) => a.localeCompare(b));
        refreshBooks(books.slice())
    }

    const sortZA = () => {
        books.sort((a, b) => b.localeCompare(a));
        refreshBooks(books.slice())
    }

    const sortLength = () => {
        books.sort((a, b) => a.length - b.length);
        refreshBooks(books.slice())
    }

    const sort2ndLetter = () => {
        books.sort((a, b) => a[1].localeCompare(b[1]));
        refreshBooks(books.slice())
    }

    const sortWordCount = () => {
        function getWordCount(str) {
            return str.split(" ").length;
          }
          books.sort((a, b) => getWordCount(b) - getWordCount(a));
        refreshBooks(books.slice())
    }

    const sort2ndLastLetter = () => {
        books.sort((a, b) => {
            const aSecondLastLetter = a.charAt(a.length - 2);
            const bSecondLastLetter = b.charAt(b.length - 2);
            return aSecondLastLetter.localeCompare(bSecondLastLetter);
          });
        refreshBooks(books.slice())
    }


    const filterTheStart = () => {
        const vastus = books.filter(oneBook => oneBook.startsWith("The"));
        refreshBooks(vastus);
    }

    const filterIncludesAnd = () => {
        const vastus = books.filter(oneBook => oneBook.includes("and"));
        refreshBooks(vastus);
    }

    const filter10LettersPlus = () => {
        const vastus = books.filter(oneBook => oneBook.length >= 10);
        refreshBooks(vastus);
    }

    const filter7LettersLess = () => {
        const vastus = books.filter(oneBook => oneBook.length <= 7);
        refreshBooks(vastus);
    }


    const filter3WordsPlus = () => {
        function getWordCount(str) {
            return str.split(" ").length;
        }
        const vastus = books.filter(book => getWordCount(book) >= 3);
        refreshBooks(vastus);
    }

    const filter2ndLastLetter = () => {
        function secLastLetter(book) {
            const secondLastLetter = book.charAt(book.length - 2);
            return secondLastLetter.toLowerCase() === 'c';
          }
          const vastus = books.filter(secLastLetter);
        refreshBooks(vastus);
    }
    
  return (
    <div>
        <button onClick={reset}>Reset</button>
        <button onClick={sortAZ}>Sorteeri A - Z</button>
        <button onClick={sortZA}>Sorteeri Z - A</button>
        <button onClick={sortLength}>Sorteeri pikkuse järgi</button>
        <button onClick={sort2ndLetter}>Sorteeri 2-se tähe järgi</button>
        <button onClick={sortWordCount}>Sorteeri sõnade arvu järgi</button>
        <button onClick={sort2ndLastLetter}>Sorteeri eelviimase tähe järgi</button>
        <br></br>
        <button onClick={filterTheStart}>Filtreeri The-ga algavad</button>
        <button onClick={filterIncludesAnd}>Filtreeri and-i sisaldavad</button>
        <button onClick={filter10LettersPlus}>Filtreeri vähemalt 10 tähelised</button>
        <button onClick={filter7LettersLess}>Filtreeri vähemad kui 7 tähelised</button>
        <button onClick={filter3WordsPlus}>Filtreeri rohkem kui 3 sõnalised</button>
        <button onClick={filter2ndLastLetter}>Filtreeri mille eelviimane täht C</button>


        {books.map (oneBook => <div>{oneBook}</div> )}


    </div>
  )
}

export default Books