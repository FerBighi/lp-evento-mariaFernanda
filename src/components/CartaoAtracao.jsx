function CartaoAtracao({ nome, estilo, descricao }) {
    return (
        <article className="rounded-2xl bg-white p-6 border border-rosa-fundo flex flex-col justify-between shadow-xs">
            <div>
                <span className="inline-block bg-rosa-fundo text-rosa-destaque text-xs font-bold px-2.5 py-1 rounded-md mb-3 uppercase tracking-wider">
                    {estilo}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{nome}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{descricao}</p>
            </div>
        </article>
    );
}

export default CartaoAtracao;