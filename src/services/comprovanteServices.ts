import axios from "axios";

const urlAPI = import.meta.env.VITE_urlEventLocalHost;

export async function enviarPDF(eventId, pdfFile) {
    try {
        const formData = new FormData();
        formData.append("pdf", pdfFile);

        await axios.post(`${urlAPI}/api/comprovantespagamento/AnexarPDF/${eventId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("PDF enviado com sucesso para o evento com ID:", eventId);
    } catch (error) {
        console.error("Erro ao enviar o PDF:", error);
        throw new Error("Erro ao enviar o PDF: " + error);
    }
}
