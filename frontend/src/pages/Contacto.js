import './../styles/components/pages/Contacto.css'

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario: </h2>
                <form action="" method="" className="formulario">
                    <p className="primera">
                        <label>Nombre </label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>E-Mail </label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label>Telefono </label>
                        <input type="text" name="telefono" />
                    </p>
                    <p>
                        <label>Comentario </label>
                        <input type="text" name="comentario" />
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vias de contacto.</h2>
                <p>Tambien puede contactarse utilizando los siguientes medios: </p>
                <ul>
                    <li>Telefono: 1234314213</li>
                    <li>Email: mail@mail.com</li>
                    <li>Facebook: un facebook</li>
                    <li>Twitter: un twitter</li>
                </ul>
            </div>
        </main>
    );
};

export default ContactoPage;