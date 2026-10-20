function Hero() {
    return (
        <section className="bg-linear-to-b from-roxo-fundo via-azul-fundo to-white text-slate-800 py-24 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <span className="bg-rosa-fundo text-rosa-destaque text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    13 e 14 de março de 2027 · das 16h às 23h
                </span>

                <h1 className="text-4xl sm:text-5xl font-black mt-6 mb-4 tracking-tight text-roxo-destaque">
                    Festival Som da Alta Paulista
                </h1>

                <p className="text-lg text-slate-600 font-medium mb-8 max-w-xl mx-auto">
                    Dois dias de música independente no coração do Oeste Paulista. Atividades no Parque das Águas — Osvaldo Cruz/SP.
                </p>

                <a
                    href="#inscricao"
                    className="flex items-center justify-center bg-roxo-destaque text-white font-bold px-8 py-3.5 rounded-xl hover:bg-opacity-95 transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer min-h-11 w-fit mx-auto"
                >
                    Garantir Meu Ingresso
                </a>
            </div>
        </section>
    );
}

export default Hero;