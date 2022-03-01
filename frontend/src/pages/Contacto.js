import { useState } from 'react';
import axios from 'axios';
import './../styles/components/pages/Contacto.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg();
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }

    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario: </h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p className="primera">
                        <label>Nombre </label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>E-Mail </label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Telefono </label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Mensaje </label>
                        <textarea type="text" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                </form>

                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </div>
            <div className="columna datos">
                <h2>Mas contactos.</h2>
                <p>Tambien puede contactarnos por: </p>
                <ul>
                    <li>Telefono: 35155544419</li>
                    <li>Email: plantplus@gmail.com</li>
                    <li>Facebook: PlantPlus</li>
                    <li>Twitter: @Plant+</li>
                </ul>
            </div>
        </main>
    );
};

export default ContactoPage;