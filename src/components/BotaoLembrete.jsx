import { useState } from "react";
import { evento } from "../data/evento";

function BotaoLembrete() {
    const [mensagem, setMensagem] = useState("");

    async function ativarLembrete() {
        // 1. Verifica se o navegador suporta Notification
        if (!("Notification" in window)) {
            setMensagem("Este navegador não aceita notificações.");
            return;
        }

        // 2. Pede permissão ao usuário
        const permissao = await Notification.requestPermission();

        // 3. Se não foi permitida, avisa e para
        if (permissao !== "granted") {
            setMensagem("Você não permitiu as notificações.");
            return;
        }

        // 4. Espera o Service Worker ficar pronto
        const registro = await navigator.serviceWorker.ready;

        // 5. Mostra a notificação pelo Service Worker
        registro.showNotification(evento.nome, {
            body: `Não esqueça: ${evento.data} no ${evento.local}!`,
            icon: "/icone-192.png",
        });

        // 6. Mostra a mensagem de confirmação na tela
        setMensagem("Lembrete ativado!");
    }

    return (
        <div className="mt-4">
            <button
                type="button"
                onClick={ativarLembrete}
                className="flex items-center justify-center bg-white text-roxo-destaque border-2 border-roxo-destaque font-bold px-6 py-3 rounded-xl hover:bg-roxo-fundo transition-all shadow-sm cursor-pointer min-h-11 w-fit mx-auto"
            >
                Me lembre do evento
            </button>
            {mensagem && (
                <p role="status" className="mt-2 text-sm font-semibold text-roxo-destaque">
                    {mensagem}
                </p>
            )}
        </div>
    );
}

export default BotaoLembrete;