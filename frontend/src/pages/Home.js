import './../styles/components/pages/Home.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores modi molestias vel, harum
                        expedita animi similique reprehenderit sint ea accusantium qui explicabo. Porro ullam eius quisquam
                        dolores possimus? Fuga.
                    </p>
                    <p>Animate a descubrir el maravilloso mundo verde, le hagamos un bien al planeta!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores modi molestias vel, harum
                        expedita animi similique reprehenderit sint ea accusantium qui explicabo. Porro ullam eius quisquam
                        dolores possimus? Fuga.</p>
                </div>
                <div className="testimonios right">
                    <h2>Nunca te olvides</h2>
                    <div className="testimonio">
                        <span className="cita">Plantar una semilla es GRATIS.</span>
                        <span className="autor">Animate a dar el primer paso :)</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;