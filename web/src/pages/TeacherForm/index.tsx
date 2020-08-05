import React from 'react';
import PageHeader from "../../components/PageHeader";
import './styles.css';
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Qua incrível que você quer dar aulas."
                        description="O primeiro passo é preencher esse formulário de inscrição."/>
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input label="Nome Completo" name="name"/>
                    <Input label="Avatar" name="avatar"/>
                    <Input label="Whatsapp" name="whatsapp"/>
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input label="Matéria" name="subject"/>
                    <Input label="Custo da sua hora por aula" name="cost"/>
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante <br/>
                        Preencha todos os dados!
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;
