import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [contactArr, setContactList] = useState([contacts.slice(0, 5)]);

  const randomContact = Math.floor(Math.random() * contacts.length);
  const newContact = [...contacts, contacts[randomContact]];

  const addRandomContact = () => {
    const newArr = [...contactArr];
    newArr.push(contactArr[Math.floor(Math.random() * contactArr.length) + 4]);
    setContactList(newArr);
  };

  const sortByAlphabet = () => {
    const sortArr = [...contactArr];
    setContactList(sortArr.sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  const sortByPopularity = () => {
    const sortArr = [...contactArr];
    setContactList(
      sortArr.sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
    );
  };

  return (
    <div className='App'>
      <button onClick={() => addRandomContact()}>Add random contact</button>
      <button onClick={() => sortByAlphabet("name")}>Sort by alphabet</button>
      <button onClick={() => sortByPopularity("popularity")}>
        Sort by popularity
      </button>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Picture</th>
            <th scope='col'>Name</th>
            <th scope='col'>Popularity</th>
            <th scope='col'>Oscar</th>
            <th scope='col'>Emmy</th>
          </tr>
        </thead>

        {contacts.map((contact) => {
          console.log(contact);
          return (
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width='50' />
                </td>
                <td>{contact.name} </td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? "🏆" : "no"}</td>
                <td>{contact.wonEmmy ? "🏆" : "no"}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
