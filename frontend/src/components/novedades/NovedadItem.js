
const NovedadItem = (props) => {

    const { title, subtitle, imagen, body } = props;

    return (

        <div className="novedades">
            <ul>
                <li >
                    <h1>{title}.</h1>

                    <h2>{subtitle}.</h2>

                    <img src={imagen} className ="imagen" />

                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </li>
            </ul>

            <hr />
        </div>
    );
}

export default NovedadItem;