import { autores } from '../data/evento';
import CartaoAutor from './CartaoAutor';

function Autores() {
    return (
        // ATUALIZADO: id="autores" adicionado para a âncora funcionar
        <section id="autores" className="py-12 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
                Destaques do Evento
            </h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {autores.map((autor) => (
                    <CartaoAutor
                        key={autor.nome}
                        nome={autor.nome}
                        genero={autor.genero}
                    />
                ))}
            </div>
        </section>
    );
}

export default Autores;