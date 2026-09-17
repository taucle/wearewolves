import { useState } from 'react';
import { Button } from '@workspace/ui';
import { CarteGame } from '@workspace/mauditmotdit';

export function App() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div style={{ padding: 20 }}>
      <header>
        <h1>Mon Portail de Jeux</h1>
      </header>
      
      {!activeGame ? (
        <main>
          <h2>Catalogue</h2>
          <Button onClick={() => setActiveGame('cartes')}>Jouer aux Cartes</Button>
        </main>
      ) : (
        <main>
          <Button onClick={() => setActiveGame(null)}>← Retour Accueil</Button>
          <hr />
          {activeGame === 'cartes' && <CarteGame />}
        </main>
      )}
    </div>
  );
}
export default App;