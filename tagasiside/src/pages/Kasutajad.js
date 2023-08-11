import React, { useState } from 'react'
import kasutajadFail from '../Data/users.json'

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);

    const refresh = () => {
        uuendaKasutajad(kasutajadFail);
    }

    const usnLenght10plus = () => {
        const vastus = kasutajad.filter(element => element.username.length >= 10);
        uuendaKasutajad(vastus);
    }

    const FindIndexDel = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index, 1);
        uuendaKasutajad(kasutajad.slice())

    }

    const lucioIndex = () => {
        const index = kasutajad.findIndex(element => element.email === "Lucio_Hettinger@annie.ca")
        console.log(index);
    }
  
    const FindFirstNameC = () => {
        const found = kasutajad.find(user => user.name.substring(0,1) ==="C" );
        console.log(found);
    }

    const sortByLat = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat))
        uuendaKasutajad(kasutajad.slice())
    }

    const filterByLng = () => {
        const vastus = kasutajad.filter(user => user.address.geo.lng > 0)
        uuendaKasutajad(vastus);
    }

    const sumIds = () => {
        let sum = 0;
        kasutajad.forEach(user => sum = sum + user.id)
        console.log(sum)
    }

    const addToPhone = () => {
        const result = kasutajad.map(user => ({...user, phone: "000-" + user.phone}))
        uuendaKasutajad(result)
    }

    const replaceEmail = () => {
        const result = kasutajad.map(user => user.email);
        console.log(result);
    }

    const replaceCatchPhraseL = () => {
        const result = kasutajad.map(user => (
            {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}
        ))
        uuendaKasutajad(result)
    }

  return (
    <div>
        <div>Tabelis on praegu: {kasutajad.length} kasutajat</div>
        <button onClick={() => refresh()}>Nulli tabel</button>
        <button onClick={() => usnLenght10plus()}>Kasutajanimi on pikem kui 10 tähte</button>
        <button onClick={() => lucioIndex()}>Leia Lucio</button>
        <button onClick={() => FindFirstNameC()}>Leia C esimene täht</button>
        <button onClick={() => sortByLat()}>Sorteeri Lat</button>
        <button onClick={() => filterByLng()}>Filtreeri lng</button>
        <button onClick={() => sumIds()}>Liida ID-d</button>
        <button onClick={() => addToPhone()}>Lisa tel reg kood</button>
        <button onClick={() => replaceEmail()}>Asenda emailid</button>
        <button onClick={() => replaceCatchPhraseL()}>Asenda catchPhrase</button>

        <div>{kasutajad.map(kasutaja =>
            <div>
                <div>{kasutaja.id}</div>
                <div>{kasutaja.name}</div>
                <div>{kasutaja.username}</div>
                <div>{kasutaja.email}</div>
                <div>{kasutaja.address.street}</div>
                <div>{kasutaja.address.suite}</div>
                <div>{kasutaja.address.city}</div>
                <div>{kasutaja.address.zipcode}</div>
                <div>{kasutaja.address.geo.lat}</div>
                <div>{kasutaja.address.geo.lng}</div>
                <div>{kasutaja.phone}</div>
                <div>{kasutaja.website}</div>
                <div>{kasutaja.company.name}</div>
                <div>{kasutaja.company.catchPhrase}</div>
                <div>{kasutaja.company.bs}</div>
                <button onClick={() => FindIndexDel(kasutaja)}>Kustuta kasutaja</button>
                <br />
            </div>)} 
        </div>
    </div>)
}

export default Kasutajad