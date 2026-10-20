import { atracoes } from '../data/evento';
import CartaoAtracao from './CartaoAtracao';

function Atracoes() {
    return (
        <section id="atracoes" className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Line-up Completo</h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {atracoes.map((atracao) => (
                    <CartaoAtracao
                        key={atracao.nome}
                        nome={atracao.nome}
                        estilo={atracao.estilo}
                        descricao={atracao.descricao}
                    />
                ))}
            </div>
        </section>
    );
}

export default Atracoes;