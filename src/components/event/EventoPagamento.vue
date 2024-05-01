<template>
    <div>
        <h2>Anexar Pagamento</h2>
        <input type="file" @change="handleFileUpload" accept=".pdf">
        <button @click="uploadPDF">Anexar Pagamento</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { enviarPDF } from '../../services/comprovanteServices';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const file = ref(null);

        const handleFileUpload = (event) => {
            file.value = event.target.files[0];
        };

        const uploadPDF = async () => {
            if (!file.value) {
                alert('Selecione um arquivo PDF para anexar o pagamento.');
                return;
            }

            try {
                const eventId = router.currentRoute.value.params.id;
                await enviarPDF(eventId, file.value);
                alert('Pagamento anexado com sucesso!');
                file.value = null;
            } catch (error) {
                console.error('Erro ao anexar o pagamento:', error);
                alert('Erro ao anexar o pagamento. Por favor, tente novamente.');
            }
        };

        return { handleFileUpload, uploadPDF };
    }
}
</script>
