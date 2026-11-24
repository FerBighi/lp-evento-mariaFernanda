import { useEffect, useRef } from "react";

const dados = [
    { rotulo: "Pop", valor: 45 },
    { rotulo: "K-pop", valor: 35 },
    { rotulo: "Pop-Rock", valor: 20 },
];

function Grafico() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const maior = Math.max(...dados.map((d) => d.valor));

        dados.forEach((item, i) => {
            const largura = (item.valor / maior) * 220;
            const y = 20 + i * 50;

            // 1. Cor da barra (roxo destaque do festival)
            ctx.fillStyle = "#6b21a8";

            // 2. Desenha a barra começando em x = 110
            ctx.fillRect(110, y, largura, 30);

            // 3. Cor escura para os textos e rótulo em x = 10
            ctx.fillStyle = "#1e293b";
            ctx.font = "bold 14px sans-serif";
            ctx.fillText(item.rotulo, 10, y + 20);

            // 4. Valor logo depois do fim da barra
            ctx.fillText(`${item.valor} mil`, 110 + largura + 10, y + 20);
        });
    }, []);

    return (
        <section id="grafico" className="py-16 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Público Esperado por Estilo
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-base leading-relaxed">
                Confira a distribuição estimada dos 100 mil fãs esperados no Allianz Parque entre os estilos musicais do festival.
            </p>

            <div className="p-6 bg-roxo-fundo rounded-2xl border border-white/50 shadow-xs flex justify-center">
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={170}
                    role="img"
                    aria-label="Gráfico de barras mostrando o público esperado por estilo musical: Pop com 45 mil fãs, K-pop com 35 mil fãs e Pop-Rock com 20 mil fãs."
                    className="max-w-full"
                />
            </div>
        </section>
    );
}

export default Grafico;