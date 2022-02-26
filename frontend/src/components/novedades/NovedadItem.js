
const NovedadItem = (props) => {

    const { title, subtitle, imagen, body } = props;

    return (

        <div className="novedades">

            <h1 src={title}>A VER SI APARECE{title}</h1>

            <h2>A VER SI SUB{subtitle}</h2>

            <img src={imagen} />

            <div dangerouslySetInnerHTML={{ __html: body }} />

            <hr />
        </div>
    );
}

export default NovedadItem;