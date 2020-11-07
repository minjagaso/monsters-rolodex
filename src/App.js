import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // Lexical binding scope using arrow keys can remove need for this
    }
    componentDidMount() {
        fetch('//jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }))
    }
    // handleChange(e) {
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        // equivalent to const monster = this.state.monsters
        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monsters, Inc. - { this.state.searchField} </h1>
                <SearchBox placeholder="Search monsters..." handleChange={ this.handleChange } />
                <CardList monsters={filteredMonsters}></CardList>
            </div>
          );
    }
}

export default App;
