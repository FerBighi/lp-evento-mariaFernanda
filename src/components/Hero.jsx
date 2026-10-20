function Hero() {
    return (
        <section className="bg-primaria px-4 py-20 text-white">
            <h1 className="text-4xl font-extrabold">Feira do Livro de Osvaldo Cruz</h1>
            <p className="mt-4 mb-8">De 10 a 12 de setembro, na praça central.</p>

            <a
                href="#autores"
                className="inline-block bg-white text-blue-700 font-bold px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all shadow cursor-pointer"
            >
                Conhecer Convidados
            </a>
        </section>
    )
}

export default Hero