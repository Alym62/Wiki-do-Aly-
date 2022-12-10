import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api';
import { useState } from 'react';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
    alert('Repositorio não encontrado!! 😤')
  }

  return (
    <Container>
      <img src="https://github.com/digitalinnovationone/trilha-react-desafio-2/blob/master/src/assets/github.png?raw=true" width={72}></img>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} />)}
      <ItemRepo />
    </Container>
  )
}

export default App;
